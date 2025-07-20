"use client"

import { useMemo } from "react"
import { generateDemandForecast, generateSupplyForecast, getForecastYears } from "@/lib/statistical-models"
import { internalSupplyData } from "@/lib/mock-data"
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const scenarios = {
  baseline: { revenue: 5, customers: 10, production: 8 },
  growth: { revenue: 15, customers: 20, production: 12 },
  recession: { revenue: -2, customers: 2, production: -5 },
}

type BaseSupplyDemandChartProps = {
  activeScenario: string
}

export function BaseSupplyDemandChart({ activeScenario }: BaseSupplyDemandChartProps) {
  const forecastYears = useMemo(() => getForecastYears(), [])

  const chartData = useMemo(() => {
    const baselineDemand = generateDemandForecast(scenarios.baseline)
    const scenarioDemand = generateDemandForecast(scenarios[activeScenario as keyof typeof scenarios])
    const supply = generateSupplyForecast(
      internalSupplyData.attritionRate,
      internalSupplyData.retirementEligibility,
      internalSupplyData.internalMobility,
    )

    return forecastYears.map((year, i) => ({
      year: year,
      "Baseline Demand": baselineDemand[i],
      "Scenario Demand": scenarioDemand[i],
      "Projected Supply": supply[i],
    }))
  }, [activeScenario, forecastYears])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Baseline vs. Supply vs. Scenario Demand</CardTitle>
        <CardDescription>
          Comparing your projected supply against baseline and scenario demand forecasts, which vary based on business driver changes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(val) => `${Math.round(val / 1000)}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
            />
            <Legend />
            {/* Distinct Colors for Each Line */}
            <Line
              type="monotone"
              dataKey="Projected Supply"
              stroke="#1f77b4" // blue
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Baseline Demand"
              stroke="#ff7f0e" // orange
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Scenario Demand"
              stroke="#2ca02c" // green
              strokeWidth={3}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
