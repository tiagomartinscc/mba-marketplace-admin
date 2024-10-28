import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
}
  from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searchForm = z.object({
  email: z.string().email(),
  senha: z.string(),
})

type SearchForm = z.infer<typeof searchForm>

export function Products() {
  const {
    register,
    handleFilter,
    formState: { isSubmitting },
  } = useForm<SearchForm>()

  return (
    <>
      <Helmet title="Produtos" />
      <div className="self-start">
        <h3 className="title-md text-grayscale-500">Seus produtos</h3>
        <p className="body-sm text-grayscale-300">
          Acesse gerencie a sua lista de produtos à venda
        </p>
      </div>

      <div>
        <aside>
          <Card>
            <CardHeader>
              <CardTitle className="text-grayscale-300">Filtrar</CardTitle>
            </CardHeader>
          </Card>
        </aside>
        <div>
          <form>
            <Card>
              <CardHeader>
                <img src="" />
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </>
  )
}
