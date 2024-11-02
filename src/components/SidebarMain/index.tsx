"use client"

import Image from "next/image"
import Link from "next/link"

import SidebarLink from "../SidebarLink"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import OrderListIcon from "../icons/OrderList"
import ProductBoxIcon from "../icons/ProductBox"

export default function SidebarMain() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="p-4 items-center">
        <Link href="/">
          <Image src="logo.svg" width={160} height={34} alt="eaternal logo" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-4 my-10">
        <SidebarLink id="transaction" href="/transaction">
          <OrderListIcon className="w-5 h-5 fill-sidebar-foreground" />
          <span>Transaction</span>
        </SidebarLink>
        <SidebarLink id="product" href="/product">
          <ProductBoxIcon className="w-5 h-5 fill-sidebar-foreground" />
          <span>Product</span>
        </SidebarLink>
      </SidebarContent>
    </Sidebar>
  )
}