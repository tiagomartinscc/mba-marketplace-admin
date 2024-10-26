import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-xl font-bold text-grayscale-500">
            Últimos 30 dias
          </h1>
          <p className="text-sm text-gray-300">
            Confira as estatísticas da sua loja no último mês
          </p>
        </div>
      </div>
    </>
  )
}
