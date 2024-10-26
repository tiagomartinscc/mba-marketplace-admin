import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/input-password'

import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { ArrowRight } from '../../components/icons/arrow-right'

const signInForm = z.object({
  email: z.string().email(),
  senha: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParms] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParms.get('email') ?? '',
    },
  })

  async function handleSignIn(data: SignInForm) {
    console.log(data)
  }

  return (
    <>
      <Helmet title="Login" />
      <h1 className="title-md text-grayscale-500">Acesse sua conta</h1>
      <p className="body-sm">Informe seu e-mail e senha para entrar</p>
      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-12">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            errorMessage=""
            placeholder="Seu e-mail cadastrado"
            {...register('email')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Senha</Label>
          <InputPassword
            id="senha"
            errorMessage=""
            placeholder=""
            {...register('senha')}
          />
        </div>
        <Button
          disabled={isSubmitting}
          className="w-full flex justify-between"
          type="submit"
        >
          Acessar painel
          <ArrowRight className="h-6 w-6" />
        </Button>
      </form>
      <div className="mt-32">
        <p className="mb-5">Ainda não tem uma conta?</p>
        <Button
          variant="outline"
          className="w-full justify-between"
        >
          <>
            <Link to="/sign-up">Cadastrar</Link>
            <ArrowRight className="h-6 w-6" />
          </>
        </Button>
      </div>
    </>
  )
}
