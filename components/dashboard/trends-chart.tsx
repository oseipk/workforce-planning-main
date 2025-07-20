"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts"
import { trendsData } from "@/lib/mock-data"

export function TrendsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={trendsData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="year"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#8884d8" // Changed from near-black to soft purple
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
          }}
        />
        <Legend />
        {/* Updated to more vibrant, readable colors */}
        <Bar dataKey="Engineering" stackId="a" fill="#4f46e5" radius={[0, 0, 0, 0]} /> {/* Indigo */}
        <Bar dataKey="Sales" stackId="a" fill="#10b981" /> {/* Emerald Green */}
        <Bar dataKey="Marketing" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} /> {/* Amber */}
      </BarChart>
    </ResponsiveContainer>
  )
}
