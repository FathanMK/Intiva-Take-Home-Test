"use client"

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ISidebarLinkProps {
  id: string
  children: ReactNode
  href?: Url
}

export default function SidebarLink({ id, children, href = "/" }: ISidebarLinkProps) {
  const pathname = usePathname()

  return (
    <Link href={href} className={`flex items-center gap-4 hover:bg-white/15 hover:opacity-100 py-3 px-4 transition-default ${pathname.includes(id) ? "bg-white/15 font-bold opacity-100" : "opacity-70"}`}>
      {children}
    </Link>
  )
}