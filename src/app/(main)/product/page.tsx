import ChartProduct from "@/components/ChartProduct";
import ClipboardIcon from "@/components/icons/Clipboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductPage() {
  return (
    <section className="flex flex-1 flex-col gap-6 overflow-hidden">
      <h1 className="font-semibold text-[28px] leading-[34px]">Product</h1>
      <article>
        <Card className="w-[300px] rounded-none border-[#E5E5E5]">
          <CardHeader className="py-5">
            <CardTitle className="text-lg">Total Item</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="bg-[#F1F5FD] rounded-full">
                <ClipboardIcon className="!w-4 !h-5 fill-[#4D81E7]" />
              </Button>
              <span className="font-semibold text-2xl">142</span>
            </div>
          </CardContent>
        </Card>
      </article>
      <ChartProduct />
    </section>
  )
}