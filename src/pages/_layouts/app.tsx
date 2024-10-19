import { Outlet } from 'react-router-dom'

export function AppLayout () {
  return (
    <div>
      Cabeçalho app
      <Outlet />
    </div>
  )
}