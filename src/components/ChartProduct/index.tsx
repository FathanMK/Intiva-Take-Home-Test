"use client"

import type { IUsers } from "@/types"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { BE_URL } from "@/constants"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Loading from "../Loading"
import capitalize from "@/lib/capitalize"

export default function ChartProduct() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<IUsers[]> => {
      const response = await fetch(
        `${BE_URL}/users`,
        {
          method: "GET"
        }
      )
      const { data } = await response.json()
      return data
    }
  })

  const chartConfig = {
    count_transactions: {
      label: "Transactions",
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
                <BarChart data={data}>
                  <CartesianGrid vertical={false} />
                  <YAxis dataKey="count_transactions" interval="preserveStartEnd" />
                  <XAxis dataKey="username" tickFormatter={(value) => capitalize(value)} interval="preserveStartEnd" />
                  <ChartTooltip content={<ChartTooltipContent labelFormatter={(value) => capitalize(value)} nameKey="count_transactions" />} />
                  <Bar dataKey="count_transactions" fill="var(--color-count_transactions)" radius={[38, 38, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </ResponsiveContainer>
          }
        </CardContent>
      </Card>
    </article>
  )
}