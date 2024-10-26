import { Helmet } from 'react-helmet-async'
import { ProductsSoldAmountCard } from './ProductsSoldAmountCard'
import { ProductsAvailableAmountCard } from './ProductsAvailableAmountCard'
import { ViewsAmountCard } from './ViewsAmountCard'
import { ViewsByDayChart } from './ViewsByDayChart'

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
        <div className="grid max-h-[360px] w-[1300px] grid-cols-5 space-x-4">
          <div className="col-span-1 grid-rows-3 space-y-4">
            <ProductsSoldAmountCard />
            <ProductsAvailableAmountCard />
            <ViewsAmountCard />
          </div>
          <div className="col-span-4 h-full w-full">
            <ViewsByDayChart />
          </div>
        </div>
      </div>
    </>
  )
}
