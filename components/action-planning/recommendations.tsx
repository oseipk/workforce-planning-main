import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recommendations = [
  {
    gap: "AI/ML Engineer (-12)",
    strategies: [
      { name: "Buy", weight: 60, details: "Hire 7 senior engineers", timeframe: "Y1-Y2" },
      { name: "Build", weight: 30, details: "Upskill 4 software engineers", timeframe: "Y1" },
      { name: "Borrow", weight: 10, details: "Engage 1-2 contractors", timeframe: "Y1" },
    ],
  },
  {
    gap: "Data Scientist (-8)",
    strategies: [
      { name: "Build", weight: 70, details: "Train 6 data analysts", timeframe: "Y1-Y2" },
      { name: "Buy", weight: 30, details: "Hire 2 specialists", timeframe: "Y1" },
    ],
  },
]

export function Recommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gap Closure Recommendations</CardTitle>
        <CardDescription>Rule-based suggestions using the 5Bs framework.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.gap} className="p-4 border rounded-lg">
            <h4 className="font-semibold">{rec.gap}</h4>
            <div className="mt-2 space-y-2">
              {rec.strategies.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{s.name}</Badge>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-muted-foreground">{s.timeframe}</span>
                      <span className="font-medium">{s.weight}%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-1">{s.details}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
