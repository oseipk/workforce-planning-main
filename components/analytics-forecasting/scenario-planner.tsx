"use client"

import { useState, useMemo } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts"
import { generateDemandForecast, getForecastYears } from "@/lib/statistical-models"

const baselineScenario = { revenue: 5, customers: 10, production: 8 }

export function ScenarioPlanner() {
  const [scenario, setScenario] = useState(baselineScenario)

  const demandForecast = useMemo(() => generateDemandForecast(scenario), [scenario])
  const forecastYears = useMemo(() => getForecastYears(), [])

  const chartData = useMemo(() => {
    return forecastYears.map((year, i) => ({
      year,
      demand: demandForecast[i],
      confidenceLow: demandForecast[i] * 0.95,
      confidenceHigh: demandForecast[i] * 1.05,
    }))
  }, [forecastYears, demandForecast])

  const handleSliderChange = (key: keyof typeof scenario, value: number[]) => {
    setScenario(prev => ({ ...prev, [key]: value[0] }))
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Scenario Controls */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Scenario Builder</CardTitle>
          <CardDescription>
            Adjust business driver forecasts to model different scenarios.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {[
            { label: "Revenue Growth (%)", id: "revenue", min: -5, max: 20 },
            { label: "Customer Growth (%)", id: "customers", min: 0, max: 25 },
            { label: "Production Growth (%)", id: "production", min: -10, max: 15 },
          ].map(({ label, id, min, max }) => (
            <div key={id}>
              <div className="flex justify-between mb-2">
                <Label htmlFor={id}>{label}</Label>
                <span className="font-semibold">{scenario[id as keyof typeof scenario]}%</span>
              </div>
              <Slider
                id={id}
                min={min}
                max={max}
                step={1}
                value={[scenario[id as keyof typeof scenario]]}
                onValueChange={(val) => handleSliderChange(id as keyof typeof scenario, val)}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Forecast Chart */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>5-Year Demand Forecast</CardTitle>
          <CardDescription>
            Projected demand based on the selected scenario.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis
                domain={['dataMin - 500', 'dataMax + 500']}
                tickFormatter={(val) => `${Math.round(val / 1000)}k`}
              />
              <Tooltip formatter={(val: number) => Math.round(val).toLocaleString()} />
              {/* Confidence Area */}
              <Area
                type="monotone"
                dataKey="confidenceHigh"
                stroke="none"
                fill="#93c5fd"
                fillOpacity={0.3}
                dot={false}
                activeDot={false}
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="confidenceLow"
                stroke="none"
                fill="#93c5fd"
                fillOpacity={0.3}
                dot={false}
                activeDot={false}
                isAnimationActive={false}
              />
              {/* Demand Line */}
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
