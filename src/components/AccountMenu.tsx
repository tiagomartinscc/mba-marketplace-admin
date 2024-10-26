/* eslint-disable @stylistic/max-len */
import { Logout } from './icons/logout'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none" asChild>
        <Button
          variant="ghost"
          className="flex justify-center align-middle gap-3"
        >
          <img
            src="https://github.com/tiagomartinscc.png"
            alt="profile-image"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-body-sm w-20 text-pretty">Tiago Martins</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mr-6 mt-2 w-40 rounded-md bg-white p-4"
      >
        <DropdownMenuLabel className="flex gap-3">
          <img
            src="https://github.com/tiagomartinscc.png"
            alt="profile-image"
            className="w-12 h-12 rounded-full"
          />
          <span className="line-clamp-2 flex-1 text-pretty text-sm text-gray-300">
            Tiago Martins
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 h-[1px] bg-shape" />
        <DropdownMenuItem
          asChild
        >
          <button
            className="flex w-full items-center justify-center gap-2 bg-transparent p-2 text-sm font-medium text-orange-base outline-none transition-colors duration-300 hover:text-orange-dark"
            type="button"
          >
            <span className="">Logout</span>
            <Logout className="ml-auto h-5 w-5" />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
