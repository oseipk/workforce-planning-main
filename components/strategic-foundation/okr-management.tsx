"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"

type KeyResult = {
  id: string
  title: string
  progress: number
}

type Objective = {
  id: string
  title: string
  owner: string
  year: string
  scenarioImpact?: number // For scenario planning
  keyResults: KeyResult[]
}

const initialOkrData: Objective[] = [
  {
    id: "O1",
    title: "Increase Market Share in Emerging Markets by 15%",
    owner: "Sales Leadership",
    year: "2024",
    scenarioImpact: 12,
    keyResults: [
      { id: "KR1.1", title: "Achieve $50M in new bookings from APAC", progress: 75 },
      { id: "KR1.2", title: "Increase lead conversion rate in LATAM to 20%", progress: 40 },
      { id: "KR1.3", title: "Establish 10 new strategic partnerships", progress: 90 },
    ],
  },
  {
    id: "O2",
    title: "Launch 3 New Enterprise Products",
    owner: "Product & Engineering",
    year: "2024",
    scenarioImpact: 8,
    keyResults: [
      { id: "KR2.1", title: "Finalize 'Project Phoenix' feature set", progress: 100 },
      { id: "KR2.2", title: "Complete beta testing for 'Project Titan'", progress: 60 },
      { id: "KR2.3", title: "Secure 20 early adopters for 'Project Nova'", progress: 30 },
    ],
  },
]

export function OkrManagement() {
  const [okrData, setOkrData] = useState<Objective[]>(initialOkrData)
  const [showDialog, setShowDialog] = useState(false)
  const [newObjective, setNewObjective] = useState({
    title: "",
    owner: "",
    year: "",
    scenarioImpact: "",
  })

  const handleAddObjective = () => {
    const newOkr: Objective = {
      id: `O${okrData.length + 1}`,
      title: newObjective.title,
      owner: newObjective.owner,
      year: newObjective.year,
      scenarioImpact: Number(newObjective.scenarioImpact),
      keyResults: [],
    }

    setOkrData([newOkr, ...okrData])
    setNewObjective({ title: "", owner: "", year: "", scenarioImpact: "" })
    setShowDialog(false)

    // TODO: Save new objective + scenario impact to Azure Blob for storage later
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>
              OKRs and Scenario Builder: Forecast Impact of Strategic Drivers
            </CardTitle>
            <CardDescription>
              Define and simulate objectives and key results. Use scenario impact to explore workforce forecast changes.
            </CardDescription>
          </div>
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                <DialogTitle>Add Objective</DialogTitle> 
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader></DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Objective Title</Label>
                  <Input
                    id="title"
                    value={newObjective.title}
                    onChange={(e) =>
                      setNewObjective({ ...newObjective, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="owner">Owner</Label>
                  <Input
                    id="owner"
                    value={newObjective.owner}
                    onChange={(e) =>
                      setNewObjective({ ...newObjective, owner: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    value={newObjective.year}
                    onChange={(e) =>
                      setNewObjective({ ...newObjective, year: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="scenarioImpact">Forecast Impact (%)</Label>
                  <Input
                    id="scenarioImpact"
                    type="number"
                    value={newObjective.scenarioImpact}
                    onChange={(e) =>
                      setNewObjective({ ...newObjective, scenarioImpact: e.target.value })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddObjective}>Save Objective</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {okrData.map((objective) => (
          <Collapsible key={objective.id} defaultOpen className="rounded-lg border px-4 py-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{objective.title}</h3>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ChevronDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <p className="text-sm text-muted-foreground">
              Owner: {objective.owner} | Year: {objective.year}
              {objective.scenarioImpact !== undefined && (
                <> | Forecast Impact: {objective.scenarioImpact}%</>
              )}
            </p>
            <CollapsibleContent className="space-y-4 mt-4">
              {objective.keyResults.map((kr) => (
                <div key={kr.id}>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium">{kr.title}</p>
                    <p className="text-sm text-muted-foreground">{kr.progress}%</p>
                  </div>
                  <Progress value={kr.progress} />
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  )
}
