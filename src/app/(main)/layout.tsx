import SidebarMain from "@/components/SidebarMain";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <main className="p-5 flex h-screen w-screen overflow-hidden">
        <SidebarMain />
        {children}
      </main>
    </SidebarProvider>
  )
}