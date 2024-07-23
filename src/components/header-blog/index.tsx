'use client'

import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function HeaderBlog() {
  const pathname = usePathname()

  const parts = pathname.split('/')

  const pageName = parts[parts.length - 1]

  return (
    <header className="fixed left-0 z-20 flex w-full flex-col items-center gap-8 border-b border-white/50 bg-background px-4 py-4">
      <h1 className="style_title_1 text-emerald-500">{pageName}</h1>

      <nav className="section_limiter flex justify-between">
        <Link href="/" className="no-underline">
          Portfólio
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center hover:scale-105">
            <p>Outros Blogs</p> <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-cyan-100">
            <DropdownMenuLabel>Temas</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ul>
              <li>
                <DropdownMenuItem>Progromação</DropdownMenuItem>
              </li>
              <li>
                <DropdownMenuItem>Livros</DropdownMenuItem>
              </li>
              <li>
                <DropdownMenuItem>Filmes e series</DropdownMenuItem>
              </li>
              <li>
                <DropdownMenuItem>Astronomia / Astrologia</DropdownMenuItem>
              </li>
              <li>
                <DropdownMenuItem>Ufologia</DropdownMenuItem>
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  )
}