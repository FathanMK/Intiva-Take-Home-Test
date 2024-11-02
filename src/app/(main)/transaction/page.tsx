import ChartTransaction from "@/components/ChartTransaction";
import TotalRevenueIcon from "@/components/icons/TotalRevenue";
import SidebarTrigger from "@/components/SidebarTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import formatToIDR from "@/lib/formatToIDR";

export default function TransactionsPage() {
  return (
    <section className="flex flex-1 flex-col gap-6 overflow-hidden">
      <SidebarTrigger />
      <h1 className="font-semibold text-[28px] leading-[34px]">Transaction</h1>
      <article>
        <Card className="w-[300px] rounded-none border-[#E5E5E5]">
          <CardHeader className="py-5">
            <CardTitle className="text-lg">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="bg-[#F1F5FD] rounded-full">
                <TotalRevenueIcon className="w-10 h-10 fill-[#4D81E7]" />
              </Button>
              <span className="font-semibold text-2xl">{formatToIDR(897876000)}</span>
            </div>
          </CardContent>
        </Card>
      </article>
      <ChartTransaction />
    </section>
  )
}