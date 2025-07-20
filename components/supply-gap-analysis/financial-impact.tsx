import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"

const financialData = [
  {
    title: "Cost of Hiring (per role)",
    value: "$25,000",
    description: "Average cost to source, interview, and onboard a new employee.",
    icon: <TrendingUp className="h-6 w-6 text-swp-red" />,
  },
  {
    title: "Cost of Vacancy (per month)",
    value: "$8,500",
    description: "Estimated lost productivity and revenue for each month a critical role is unfilled.",
    icon: <TrendingUp className="h-6 w-6 text-swp-red" />,
  },
  {
    title: "Training & Development Cost",
    value: "$5,000",
    description: "Average cost to upskill an existing employee for a new role.",
    icon: <TrendingUp className="h-6 w-6 text-swp-orange" />,
  },
  {
    title: "Value of Automation (per role)",
    value: "$60,000",
    description: "Annual savings from automating tasks previously done by one employee.",
    icon: <TrendingDown className="h-6 w-6 text-swp-green" />,
  },
]

export function FinancialImpact() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {financialData.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
