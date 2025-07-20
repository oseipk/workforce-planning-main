import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const comparisonData = [
  { scenario: "Baseline", hiringNeed: 512, budget: "$125.4M" },
  { scenario: "Aggressive Growth", hiringNeed: 850, budget: "$150.2M" },
  { scenario: "Recession", hiringNeed: 120, budget: "$98.7M" },
]

export function ScenarioComparison() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Scenario Comparison</CardTitle>
        <CardDescription>Quick comparison of workforce implications across scenarios.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Scenario</TableHead>
              <TableHead>Hiring Need (1Y)</TableHead>
              <TableHead>Budget Impact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row) => (
              <TableRow key={row.scenario}>
                <TableCell className="font-medium">{row.scenario}</TableCell>
                <TableCell>{row.hiringNeed}</TableCell>
                <TableCell>{row.budget}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
