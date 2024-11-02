"use client"

import type { IBrands } from "@/types"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { BE_URL } from "@/constants"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Loading from "../Loading"

export default function ChartTransaction() {
  const { data, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async (): Promise<IBrands[]> => {
      const response = await fetch(
        `${BE_URL}/brands`,
        {
          method: "GET"
        }
      )
      const { data } = await response.json()
      return data
    }
  })

  const chartConfig = {
    count_sold: {
      label: "Sold",
      color: "#2563eb",
    }
  } satisfies ChartConfig

  return (
    <article className="flex flex-1 overflow-hidden">
      <Card className="flex-1 rounded-none border-[#E5E5E5] flex flex-col">
        <CardHeader className="py-5">
          <CardTitle className="text-lg">Sales Order</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          {isLoading
            ? <Loading />
            : <ResponsiveContainer>
              <ChartContainer config={chartConfig}>
                <LineChart data={data}>
                  <CartesianGrid vertical={false} />
                  <YAxis dataKey="count_sold" interval="preserveStartEnd" />
                  <XAxis dataKey="name" interval="preserveStartEnd" />
                  <ChartTooltip content={<ChartTooltipContent nameKey="count_sold" />} />
                  <Line dataKey="count_sold" />
                </LineChart>
              </ChartContainer>
            </ResponsiveContainer>
          }
        </CardContent>
      </Card>
    </article>
  )
}