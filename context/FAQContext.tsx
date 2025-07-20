"use client"

import React, { createContext, useContext } from "react"

type FAQItem = {
  q: string
  a: string
}

const faqItems: FAQItem[] = [
  {
    q: "What is Strategic Workforce Planning (SWP)?",
    a: "SWP is a business process for ensuring an organization has the right people with the right skills in the right roles at the right time to achieve its strategic objectives. This application helps automate and enhance that process by connecting business strategy to workforce decisions.",
  },
  {
    q: "How is the 'Demand Forecast' calculated?",
    a: "The demand forecast uses a statistical method called elasticity modeling...",
  },
  {
    q: "Where does the 'Internal Supply' data come from?",
    a: "Internal supply data is projected based on data from your HRIS...",
  },
  {
    q: "How is the 'Workforce Gap' calculated?",
    a: "The gap is the mathematical difference between the projected 'Demand' and the projected 'Internal Supply'...",
  },
  {
    q: "How do the global filters for Department, Country, etc., work?",
    a: "The global filters allow you to drill down into your data...",
  },
  {
    q: "What are the '5 Bs' in the Recommendations module?",
    a: "The '5 Bs' is a strategic framework for closing workforce gaps...",
  },
  {
    q: "Where do the 'Cost of Hiring' and 'Cost of Vacancy' numbers come from?",
    a: "These are financial assumptions used to model the cost of workforce gaps...",
  },
  {
    q: "How often is the data from my HRIS or other systems refreshed?",
    a: "The application is designed to sync with your connected data sources on a nightly basis...",
  },
]

const FAQContext = createContext<FAQItem[]>(faqItems)

export const useFAQ = () => useContext(FAQContext)

export const FAQProvider = ({ children }: { children: React.ReactNode }) => {
  return <FAQContext.Provider value={faqItems}>{children}</FAQContext.Provider>
}
