import { Outlet } from 'react-router-dom'
import { Logo } from '../../components/icons/logo'

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2
     bg-base-background"
    >
      <div className="flex flex-col">
        <Logo />
        <img src="/about.svg" alt="" className="w-[47rem]" />
      </div>
      <div className="m-6 bg-base-white rounded-xg py-16 px-14">
        <Outlet />
      </div>
    </div>
  )
}
