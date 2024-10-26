import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/input-password'

import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { ArrowRight } from '../../components/icons/arrow-right'
import { InputUpload } from '@/components/input-upload'
import { useState } from 'react'
import { signUp } from '@/api/sign-up'
import { uploadAttachment } from '@/api/upload-attachment'

const signUpSchema = z.object({
  name: z.string().min(5),
  phone: z.string().min(6).max(15),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string().min(6),
}).refine(
  ({ password, passwordConfirmation }) => password === passwordConfirmation, {
    message: "Password doesn't match",
    path: ['passwordConfirmation'],
  })

type SignUpFormType = z.infer<typeof signUpSchema>

export function SignUp() {
  const [userImage, setUserImage] = useState<File | null>(null)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync: uploadAttachmentFn } = useMutation({
    mutationFn: uploadAttachment,
  })
  const { mutateAsync: signUpFn } = useMutation({
    mutationFn: signUp,
    onSuccess: () => navigate('/sign-in'),
  })

  async function handleSignUp(data: SignUpFormType) {
    const { name, phone, email, password, passwordConfirmation } = data
    let avatarId = null
    if (userImage) {
      const uploadedAvatar = (await uploadAttachmentFn(userImage)).data
      avatarId = uploadedAvatar.attachments[0].id
    }
    await signUpFn({
      name,
      phone,
      email,
      password,
      passwordConfirmation,
      avatarId,
    })
  }

  console.log('errors', errors)

  return (
    <>
      <Helmet title="Cadastro" />
      <h1 className="title-md text-grayscale-500">Crie sua conta</h1>
      <p className="body-sm">Informe os seus dados pessoais e de acesso</p>

      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
        <h3 className="title-sm pt-10">Perfil</h3>
        <div className="space-y-5">
          <div className="space-y-4">
            <InputUpload onFileChange={(file) => setUserImage(file)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              errorMessage={errors?.name?.message}
              placeholder="Seu nome completo"
              {...register('name')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              errorMessage={errors?.phone?.message}
              placeholder="(00) 00000-0000"
              {...register('phone')}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            errorMessage={errors?.email?.message}
            placeholder="Seu e-mail de acesso"
            {...register('email')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <InputPassword
            id="password"
            errorMessage={errors?.password?.message}
            placeholder="Senha de acesso"
            {...register('password')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="passwordConfirmation">Confirmar senha</Label>
          <InputPassword
            id="passwordConfirmation"
            errorMessage={errors?.passwordConfirmation?.message}
            placeholder="Confirme a senha"
            {...register('passwordConfirmation')}
          />
        </div>
        <Button
          disabled={isSubmitting}
          className="w-full flex justify-between"
          type="submit"
        >
          Cadastrar
          <ArrowRight className="h-6 w-6" />
        </Button>
      </form>
      <div className="mt-32">
        <p className="mb-5">Já tem uma conta?</p>
        <Button
          variant="outline"
          className="w-full justify-between"
        >
          <>
            <Link to="/sign-up">Acessar</Link>
            <ArrowRight className="h-6 w-6" />
          </>
        </Button>
      </div>
    </>
  )
}
