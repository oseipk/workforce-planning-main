"use client"

import { useMemo } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { useWorkforce } from "./workforce-context"
import { generateSupplyForecast } from "@/lib/statistical-models"

export function InternalSupply() {
  const {
    attritionRate,
    retirementEligibility,
    internalMobility,
    setAttritionRate,
    setRetirementEligibility,
    setInternalMobility,
  } = useWorkforce()

  const supplyForecast = useMemo(
    () => generateSupplyForecast(attritionRate, retirementEligibility, internalMobility),
    [attritionRate, retirementEligibility, internalMobility]
  )

  const chartData = useMemo(() => {
    const nextYear = new Date().getFullYear() + 1
    return Array.from({ length: 5 }, (_, i) => ({
      year: `${nextYear + i}`,
      Supply: supplyForecast[i],
    }))
  }, [supplyForecast])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Internal Supply Forecast</CardTitle>
        <CardDescription>Projected talent availability over the next 5 years (excluding current year).</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <Label>Annual Attrition Rate: {(attritionRate * 100).toFixed(1)}%</Label>
            <Slider
              min={0}
              max={0.3}
              step={0.005}
              value={[attritionRate]}
              onValueChange={([v]) => setAttritionRate(v)}
            />
          </div>
          <div>
            <Label>Retirement Eligibility (1Y): {(retirementEligibility * 100).toFixed(1)}%</Label>
            <Slider
              min={0}
              max={0.2}
              step={0.005}
              value={[retirementEligibility]}
              onValueChange={([v]) => setRetirementEligibility(v)}
            />
          </div>
          <div>
            <Label>Internal Mobility Rate: {(internalMobility * 100).toFixed(1)}%</Label>
            <Slider
              min={0}
              max={0.3}
              step={0.005}
              value={[internalMobility]}
              onValueChange={([v]) => setInternalMobility(v)}
            />
          </div>
        </div>
        <div className="mt-6">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" fontSize={12} />
              <YAxis
                domain={["dataMin - 500", "dataMax + 500"]}
                tickFormatter={(val) => `${Math.round(val / 1000)}k`}
                fontSize={12}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Supply" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
