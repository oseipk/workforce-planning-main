// components/supply-gap-analysis/workforce-context.tsx
"use client"

import { createContext, useContext, useState, useMemo } from "react"
import { generateSupplyForecast } from "@/lib/statistical-models" // adjust path if needed

type WorkforceState = {
  attritionRate: number
  retirementEligibility: number
  internalMobility: number
  setAttritionRate: (value: number) => void
  setRetirementEligibility: (value: number) => void
  setInternalMobility: (value: number) => void
  supplyForecast: number[]  // this is the key addition
}

const WorkforceContext = createContext<WorkforceState | undefined>(undefined)

export const WorkforceProvider = ({ children }: { children: React.ReactNode }) => {
  const [attritionRate, setAttritionRate] = useState(0.085)
  const [retirementEligibility, setRetirementEligibility] = useState(0.042)
  const [internalMobility, setInternalMobility] = useState(0.121)

  // Calculate supply forecast when inputs change
  const supplyForecast = useMemo(() => {
    return generateSupplyForecast(attritionRate, retirementEligibility, internalMobility)
  }, [attritionRate, retirementEligibility, internalMobility])

  return (
    <WorkforceContext.Provider
      value={{
        attritionRate,
        retirementEligibility,
        internalMobility,
        setAttritionRate,
        setRetirementEligibility,
        setInternalMobility,
        supplyForecast
      }}
    >
      {children}
    </WorkforceContext.Provider>
  )
}

export const useWorkforce = () => {
  const context = useContext(WorkforceContext)
  if (!context) throw new Error("useWorkforce must be used within WorkforceProvider")
  return context
}
