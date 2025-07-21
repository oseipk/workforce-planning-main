// Centralized mock data for the entire application

export const kpiData = {
  totalWorkforce: { title: "Total Workforce", metric: "276,514", change: "+2.5%", changeType: "positive" },
  hiringNeeds: { title: "Hiring Needs (1Y)", metric: "1103", change: "+15.2%", changeType: "positive" },
  budget: { title: "Budget Allocation", metric: "$125.4M", change: "-1.8%", changeType: "negative" },
  gaps: { title: "Critical Role Gaps", metric: "408", change: "+3", changeType: "negative" },
}

export const trendsData = [
  { year: "2021", Engineering: 2200, Sales: 1400, Marketing: 800 },
  { year: "2022", Engineering: 2500, Sales: 1600, Marketing: 900 },
  { year: "2023", Engineering: 2800, Sales: 1800, Marketing: 1000 },
  { year: "2024", Engineering: 3100, Sales: 2000, Marketing: 1100 },
  { year: "2025*", Engineering: 3400, Sales: 2200, Marketing: 1200 },
]

export const alertsData = [
  { role: "AI/ML Engineer", department: "Engineering", risk: "High", gap: -12 },
  { role: "Data Scientist", department: "Analytics", risk: "High", gap: -8 },
  { role: "Cybersecurity Analyst", department: "IT", risk: "Medium", gap: -5 },
]

export const okrData = [
  {
    id: "O1",
    title: "Increase Market Share in Emerging Markets by 15%",
    owner: "Sales Leadership",
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
    keyResults: [
      { id: "KR2.1", title: "Finalize 'Project Phoenix' feature set", progress: 100 },
      { id: "KR2.2", title: "Complete beta testing for 'Project Titan'", progress: 60 },
      { id: "KR2.3", title: "Secure 20 early adopters for 'Project Nova'", progress: 30 },
    ],
  },
]

export const businessDriversData = [
  { name: "Revenue Growth (%)", source: "Finance API", frequency: "Quarterly", status: "Active" },
  { name: "Customer Acquisition", source: "CRM", frequency: "Monthly", status: "Active" },
  { name: "Production Units", source: "ERP", frequency: "Weekly", status: "Active" },
  { name: "Market Expansion (New Countries)", source: "Manual Upload", frequency: "Annually", status: "Paused" },
]

export const environmentalScanData = [
  {
    title: "National Unemployment Rate",
    value: "3.9%",
    trend: "down",
    data: [{ v: 4.2 }, { v: 4.1 }, { v: 4.0 }, { v: 3.9 }],
  },
  {
    title: "Tech Wage Inflation (YoY)",
    value: "5.2%",
    trend: "up",
    data: [{ v: 4.5 }, { v: 4.8 }, { v: 5.0 }, { v: 5.2 }],
  },
  {
    title: "Competitor Hiring Velocity",
    value: "18% Up",
    trend: "up",
    data: [{ v: 12 }, { v: 15 }, { v: 16 }, { v: 18 }],
  },
  {
    title: "AI Skill Availability Index",
    value: "78/100",
    trend: "up",
    data: [{ v: 65 }, { v: 70 }, { v: 75 }, { v: 78 }],
  },
]

export const driverAnalysisData = {
  correlation: [
    { driver: "Revenue Growth", headcount: 0.85, customerAcquisition: 0.7, productionUnits: 0.4 },
    { driver: "Customer Acquisition", headcount: 0.78, revenueGrowth: 0.7, productionUnits: 0.3 },
    { driver: "Production Units", headcount: 0.55, revenueGrowth: 0.4, customerAcquisition: 0.3 },
  ],
  elasticity: [
    {
      driver: "Revenue Growth",
      value: 1.2,
      description: "A 1% increase in revenue growth predicts a 1.2% increase in headcount.",
    },
    {
      driver: "Customer Acquisition",
      value: 0.8,
      description: "A 1% increase in new customers predicts a 0.8% increase in headcount.",
    },
  ],
}

export const internalSupplyData = {
  total: 276514,
  attritionRate: 8.5, // percent
  retirementEligibility: 4.2, // percent
  internalMobility: 12.1, // percent
}

export const actionPlansData = [
  {
    id: "AP-001",
    title: "Hire 12 AI/ML Engineers",
    strategy: "Buy",
    status: "In Progress",
    owner: "T. Stark",
    progress: 45,
  },
  {
    id: "AP-002",
    title: "Upskill 20 Analysts to Data Scientists",
    strategy: "Build",
    status: "On Track",
    owner: "B. Banner",
    progress: 60,
  },
  {
    id: "AP-003",
    title: "Engage 5 Contract Cybersecurity Analysts",
    strategy: "Borrow",
    status: "Not Started",
    owner: "N. Romanoff",
    progress: 0,
  },
  {
    id: "AP-004",
    title: "Automate Tier 1 Support Tickets",
    strategy: "Bot",
    status: "Completed",
    owner: "P. Parker",
    progress: 100,
  },
]

export const dataSourcesData = [
  { id: 1, name: "Snowflake HR Prod", type: "Snowflake", status: "Connected", lastSync: "2 hours ago" },
  { id: 2, name: "Greenhouse", type: "ATS", status: "Connected", lastSync: "30 minutes ago" },
  { id: 3, name: "Finance Oracle DB", type: "Oracle", status: "Error", lastSync: "3 days ago" },
]

export const usersData = [
  { id: 1, name: "Kwadwo Osei", email: "", role: "Admin" },
  { id: 2, name: "Alex Browne", email: "", role: "Planner" },
  { id: 3, name: "Thomas Nowe", email: "", role: "Viewer" },
]

export const filterOptions = {
    functions: [
    { value: "all", label: "All Functions" },
    { value: "product-management", label: "Product Management" },
    { value: "software-dev", label: "Software Development" },
    { value: "data-analytics", label: "Data & Analytics" },
    { value: "sales-ops", label: "Sales Operations" },
  ],
  markets: [
    { value: "all", label: "All Markets" },
    { value: "cwar", label: "CWAR" },
    { value: "esar", label: "ESAR" },
    { value: "oceania", label: "Oceania" },
    { value: "seeurope", label: "South & Eastern Europe" },
    { value: "austria", label: "Austria" },
  ],
  countries: [
    { value: "all", label: "All Countries" },
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "nigeria", label: "Nigeria" },
    { value: "south Africa", label: "South Africa" },
  ],
  zones: [
    { value: "all", label: "All Zones" },
    { value: "na", label: "AMERICA" },
    { value: "aoa", label: "AOA" },
    { value: "europe", label: "EUROPE" },
  ],
  roles: [
    { value: "all", label: "All Roles" },
    { value: "ai-ml-engineer", label: "AI/ML Engineer" },
    { value: "data-scientist", label: "Data Scientist" },
    { value: "product-manager", label: "Product Manager" },
    { value: "account-executive", label: "Account Executive" },
  ],
}
