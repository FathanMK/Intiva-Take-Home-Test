"use client"

import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { useSidebar } from "../ui/sidebar"

export default function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()
  return (
    <Button size="icon" variant="outline" onClick={toggleSidebar}>
      <Menu />
    </Button>
  )
}