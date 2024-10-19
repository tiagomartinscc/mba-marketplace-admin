import { Outlet } from 'react-router-dom'

export function AuthLayout () {
  return (
    <div>
      Cabeçalho Auth
      <Outlet />
    </div>
  )
}