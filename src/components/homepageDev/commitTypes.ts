export interface ContributionDay {
  date: string
  count: number
}

export interface ContributionWeek {
  days: ContributionDay[]
}

export interface ContributionData {
  weeks: ContributionWeek[]
  maxCount: number
  totalContributions: number
}
