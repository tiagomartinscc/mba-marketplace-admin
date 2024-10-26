import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-background">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}
