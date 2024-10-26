import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ChartHistogram } from './icons/chart-histogram'
import { Logo } from './icons/logo'
import { Package } from './icons/package'
import { Button } from './ui/button'
import { PlusSign } from './icons/plus-sign'
import { AccountMenu } from './AccountMenu'
import { cn } from '@/lib/utils'

export function Header() {
  const navigator = useNavigate()
  const location = useLocation()
  const isDashboard = location.pathname === '/'

  return (
    <header className={cn('flex py-5 pl-5 justify-between items-center',
      ' border-b-1 border-base-shape',
    )}
    >
      <Logo text={false} min />
      <nav className="flex items-center space-x-4">
        <Button
          variant={isDashboard
            ? 'secondary'
            : 'ghost'}
          asChild
        >
          <Link to="/">
            <ChartHistogram />
            Dashboard
          </Link>
        </Button>
        <Button
          variant={isDashboard
            ? 'ghost'
            : 'secondary'}
          asChild
        >
          <Link to="/products">
            <Package />
            Produtos
          </Link>
        </Button>
      </nav>

      <div className="flex h-full items-center space-x-8">
        <Button
          className="gap-2 px-4 py-3 text-white"
          variant="default"
          onClick={() => {
            navigator('/products/new')
          }}
        >
          <PlusSign />
          Novo produto
        </Button>

        <AccountMenu />
      </div>
    </header>
  )
}
