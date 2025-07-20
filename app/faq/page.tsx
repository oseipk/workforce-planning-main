import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    q: "What is Strategic Workforce Planning (SWP)?",
    a: "SWP is a business process for ensuring an organization has the right people with the right skills in the right roles at the right time to achieve its strategic objectives. This application helps automate and enhance that process by connecting business strategy to workforce decisions.",
  },
  {
    q: "How is the 'Demand Forecast' calculated?",
    a: "The demand forecast uses a statistical method called elasticity modeling. It analyzes the historical relationship between your key business drivers (like Revenue or Customer Growth) and your headcount. For example, if a 1% increase in revenue has historically led to a 1.2% increase in headcount, the model uses this 'elasticity' of 1.2 to project future workforce needs based on the business driver targets you set in the Scenario Planner.",
  },
  {
    q: "Where does the 'Internal Supply' data come from?",
    a: "Internal supply data is projected based on data from your HRIS. The forecast starts with your current headcount and then models changes over time by accounting for three key factors: 1) historical attrition rates (employees leaving), 2) retirement eligibility data, and 3) internal mobility rates (employees changing roles within the company).",
  },
  {
    q: "How is the 'Workforce Gap' calculated?",
    a: "The gap is the mathematical difference between the projected 'Demand' and the projected 'Internal Supply' for a given time period. A negative gap (a deficit) means you are forecasted to need more employees than you will have. A positive gap (a surplus) means you are forecasted to have more employees than you need.",
  },
  {
    q: "How do the global filters for Department, Country, etc., work?",
    a: "The global filters allow you to drill down into your data. When you select a filter (e.g., 'Engineering' department), all the data on the current page—including KPIs, charts, and tables—is recalculated to show you the specific numbers for only that selection. This allows for granular analysis of specific parts of your organization.",
  },
  {
    q: "What are the '5 Bs' in the Recommendations module?",
    a: "The '5 Bs' is a strategic framework for closing workforce gaps. The application uses a rule-based system to suggest a mix of these strategies: Buy (hire externally), Build (develop internal talent), Borrow (use contractors/gigs), Bot (automate tasks), and Bridge (redeploy employees internally from areas with a surplus).",
  },
  {
    q: "Where do the 'Cost of Hiring' and 'Cost of Vacancy' numbers come from?",
    a: "These are financial assumptions used to model the cost of workforce gaps. Initially, they are based on industry benchmarks. These figures are intended to be configurable in the Settings module, allowing you to input your organization's specific costs for higher accuracy.",
  },
  {
    q: "How often is the data from my HRIS or other systems refreshed?",
    a: "The application is designed to sync with your connected data sources (like Snowflake or your HRIS) on a nightly basis. You can also trigger a manual data refresh at any time using the 'Refresh' button in the header to get the most up-to-the-minute data.",
  },
]

export default function FaqPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Understand the methodology and calculations behind your workforce plan.</p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left text-lg">{item.q}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
