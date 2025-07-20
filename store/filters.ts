import { create } from "zustand"

type FilterState = {
  market: string
  func: string
  country: string
  zone: string
  role: string
  setFilter: (filter: keyof Omit<FilterState, "setFilter">, value: string) => void
}

export const useFilterStore = create<FilterState>((set) => ({
  market: "all",
  func: "all",
  country: "all",
  zone: "all",
  role: "all",
  setFilter: (filter, value) => set(() => ({ [filter]: value })),
}))
