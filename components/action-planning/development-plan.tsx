import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const developmentPlanData = [
  {
    program: "Data Analyst to Data Scientist Upskilling",
    targetAudience: "Data Analysts",
    q1: 5,
    q2: 5,
    q3: 5,
    q4: 5,
    total: 20,
  },
  {
    program: "Software Engineer to AI/ML Engineer Path",
    targetAudience: "Senior SWEs",
    q1: 1,
    q2: 1,
    q3: 1,
    q4: 1,
    total: 4,
  },
]

export function DevelopmentPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>12-Month Development Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead>
              <TableHead>Q1 Trainees</TableHead>
              <TableHead>Q2 Trainees</TableHead>
              <TableHead>Q3 Trainees</TableHead>
              <TableHead>Q4 Trainees</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {developmentPlanData.map((row) => (
              <TableRow key={row.program}>
                <TableCell className="font-medium">{row.program}</TableCell>
                <TableCell>{row.q1}</TableCell>
                <TableCell>{row.q2}</TableCell>
                <TableCell>{row.q3}</TableCell>
                <TableCell>{row.q4}</TableCell>
                <TableCell className="font-bold">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
