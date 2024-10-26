import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}
