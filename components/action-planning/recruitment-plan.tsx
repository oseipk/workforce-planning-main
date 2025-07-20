import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recruitmentPlanData = [
  { role: "AI/ML Engineer", q1: 3, q2: 4, q3: 3, q4: 2, total: 12 },
  { role: "Data Scientist", q1: 2, q2: 2, q3: 2, q4: 2, total: 8 },
  { role: "Cybersecurity Analyst", q1: 1, q2: 2, q3: 1, q4: 1, total: 5 },
]

export function RecruitmentPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>12-Month Recruitment Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Critical Role</TableHead>
              <TableHead>Q1 Hires</TableHead>
              <TableHead>Q2 Hires</TableHead>
              <TableHead>Q3 Hires</TableHead>
              <TableHead>Q4 Hires</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recruitmentPlanData.map((row) => (
              <TableRow key={row.role}>
                <TableCell className="font-medium">{row.role}</TableCell>
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
