// Client-side models for forecasting

const BASE_HEADCOUNT = 10234
const CURRENT_YEAR = new Date().getFullYear()

// Elasticity values: how much headcount changes for a 1% change in a driver
const ELASTICITY = {
  revenue: 1.2,
  customers: 0.8,
  production: 0.5,
}

/**
 * Calculates the forecasted headcount based on driver adjustments.
 * @param baseline - The baseline value for the driver (e.g., 10% growth).
 * @param scenario - The scenario value for the driver (e.g., 15% growth).
 * @param elasticity - The elasticity factor for this driver.
 * @returns The percentage change in headcount.
 */
function calculateImpact(baseline: number, scenario: number, elasticity: number): number {
  const driverChange = (scenario - baseline) / baseline
  return driverChange * elasticity
}

/**
 * Generates a 5-year demand forecast based on a scenario.
 * @param scenario - An object with revenue, customers, and production values.
 * @returns An array of forecasted headcount for the next 5 years.
 */
export function generateDemandForecast(scenario: { revenue: number; customers: number; production: number }): number[] {
  const baseline = { revenue: 5, customers: 10, production: 8 } // Baseline % growth

  const revenueImpact = calculateImpact(baseline.revenue, scenario.revenue, ELASTICITY.revenue)
  const customerImpact = calculateImpact(baseline.customers, scenario.customers, ELASTICITY.customers)
  const productionImpact = calculateImpact(baseline.production, scenario.production, ELASTICITY.production)

  const totalImpact = revenueImpact + customerImpact + productionImpact
  const annualGrowthRate = 1 + totalImpact

  const forecast = []
  let currentHeadcount = BASE_HEADCOUNT
  for (let i = 0; i < 5; i++) {
    currentHeadcount *= annualGrowthRate
    forecast.push(Math.round(currentHeadcount))
  }
  return forecast
}

/**
 * Generates a 5-year internal supply forecast.
 * @param attrition - Annual attrition rate (%).
 * @param retirement - Annual retirement rate (%).
 * @param mobility - Annual internal mobility rate (%).
 * @returns An array of projected internal supply for the next 5 years.
 */
export function generateSupplyForecast(attrition: number, retirement: number, mobility: number): number[] {
  const netLossRate = 1 - (attrition / 100 + retirement / 100 - mobility / 100)
  const forecast = []
  let currentSupply = BASE_HEADCOUNT
  for (let i = 0; i < 5; i++) {
    currentSupply *= netLossRate
    forecast.push(Math.round(currentSupply))
  }
  return forecast
}

/**
 * Generates year labels for the next 5 years.
 * @returns An array of year strings.
 */
export function getForecastYears(): string[] {
  const years = []
  for (let i = 1; i <= 5; i++) {
    years.push((CURRENT_YEAR + i).toString())
  }
  return years
}
