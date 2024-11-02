import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-full justify-center items-center">
      <Loader2 className="w-14 h-14 animate-spin text-sidebar-gradient-light-blue" />
    </div>
  )
}