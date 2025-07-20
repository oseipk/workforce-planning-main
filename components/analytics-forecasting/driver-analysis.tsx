import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { driverAnalysisData } from "@/lib/mock-data"

export function DriverAnalysis() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Correlation Matrix</CardTitle>
          <CardDescription>Strength of relationship between drivers and headcount.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>vs. Headcount</TableHead>
                <TableHead>vs. Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {driverAnalysisData.correlation.map((row) => (
                <TableRow key={row.driver}>
                  <TableCell className="font-medium">{row.driver}</TableCell>
                  <TableCell>{row.headcount}</TableCell>
                  <TableCell>{row.revenueGrowth}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Elasticity Modeling</CardTitle>
          <CardDescription>Impact of driver changes on workforce demand.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {driverAnalysisData.elasticity.map((item) => (
            <div key={item.driver} className="p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.driver}</p>
                <p className="text-xl font-bold text-primary">{item.value}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
