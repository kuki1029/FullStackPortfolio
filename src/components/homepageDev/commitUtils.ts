import type { ContributionData, ContributionDay, ContributionWeek } from './commitTypes'
import fallback from './fallbackContributions.json'

interface RawContribution {
  date: string
  count: number
  level: number
}

interface RawResponse {
  total: Record<string, number>
  contributions: RawContribution[]
}

// --- Data fetching ---

const getLast52Weeks = (contributions: RawContribution[]): RawContribution[] => {
  const today = new Date()
  const oneYearAgo = new Date(today)
  oneYearAgo.setDate(oneYearAgo.getDate() - 364)

  const startStr = oneYearAgo.toISOString().split('T')[0]
  const endStr = today.toISOString().split('T')[0]

  return contributions.filter((c) => c.date >= startStr && c.date <= endStr)
}

const groupIntoWeeks = (days: RawContribution[]): ContributionWeek[] => {
  const weeks: ContributionWeek[] = []
  let currentWeek: ContributionDay[] = []

  for (const day of days) {
    const weekday = new Date(day.date + 'T00:00:00').getDay()

    if (weekday === 0 && currentWeek.length > 0) {
      weeks.push({ days: currentWeek })
      currentWeek = []
    }

    currentWeek.push({ date: day.date, count: day.count })
  }

  if (currentWeek.length > 0) {
    weeks.push({ days: currentWeek })
  }

  return weeks
}

const parseResponse = (raw: RawResponse): ContributionData => {
  const recent = getLast52Weeks(raw.contributions)
  const weeks = groupIntoWeeks(recent)
  const maxCount = recent.reduce((max, c) => Math.max(max, c.count), 0)
  const totalContributions = recent.reduce((sum, c) => sum + c.count, 0)

  return { weeks, maxCount, totalContributions }
}

const fetchYear = async (year: number): Promise<RawContribution[]> => {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/kuki1029?y=${year}`
  )
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data: RawResponse = await res.json()
  return data.contributions
}

export const fetchContributions = async (): Promise<ContributionData> => {
  try {
    const currentYear = new Date().getFullYear()
    const [prevYear, currYear] = await Promise.all([
      fetchYear(currentYear - 1),
      fetchYear(currentYear)
    ])
    const merged: RawResponse = {
      total: {},
      contributions: [...prevYear, ...currYear]
    }
    return parseResponse(merged)
  } catch {
    return parseResponse(fallback as RawResponse)
  }
}

// --- Blackbody color ramp ---

interface ColorStop {
  t: number
  r: number
  g: number
  b: number
}

const BLACKBODY_STOPS: ColorStop[] = [
  { t: 0.0, r: 50, g: 50, b: 50 },
  { t: 0.15, r: 74, g: 26, b: 10 },
  { t: 0.35, r: 139, g: 37, b: 0 },
  { t: 0.55, r: 204, g: 85, b: 0 },
  { t: 0.7, r: 234, g: 154, b: 79 },
  { t: 0.85, r: 245, g: 200, b: 130 },
  { t: 1.0, r: 255, g: 250, b: 240 }
]

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t

export const getBlackbodyColor = (intensity: number): string => {
  const t = Math.max(0, Math.min(1, intensity))

  if (t === 0) return 'transparent'

  for (let i = 0; i < BLACKBODY_STOPS.length - 1; i++) {
    const curr = BLACKBODY_STOPS[i]
    const next = BLACKBODY_STOPS[i + 1]

    if (t >= curr.t && t <= next.t) {
      const local = (t - curr.t) / (next.t - curr.t)
      const r = Math.round(lerp(curr.r, next.r, local))
      const g = Math.round(lerp(curr.g, next.g, local))
      const b = Math.round(lerp(curr.b, next.b, local))
      return `rgb(${r}, ${g}, ${b})`
    }
  }

  return 'rgb(255, 250, 240)'
}

// --- Character mapping ---

export const getCommitCharacter = (intensity: number): string => {
  if (intensity === 0) return '·'
  if (intensity < 0.2) return '·'
  if (intensity < 0.4) return '+'
  if (intensity < 0.7) return '#'
  return '█'
}

// --- Normalization ---

export const normalizeCount = (count: number, max: number): number => {
  if (max === 0 || count === 0) return 0
  return Math.pow(count / max, 0.7)
}

// --- Seeded random for constellation jitter ---

export const seededRandom = (seed: string): number => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return (Math.abs(hash) % 1000) / 1000
}

// --- Date formatting ---

const getOrdinal = (day: number): string => {
  if (day > 3 && day < 21) return 'th'
  switch (day % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T00:00:00')
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const day = date.getDate()
  return `${month} ${day}${getOrdinal(day)}`
}
