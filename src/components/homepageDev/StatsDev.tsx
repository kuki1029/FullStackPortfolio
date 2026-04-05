import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BIRTHDAY = new Date('2002-05-15T00:00:00')

const calculateDaysOnEarth = (): number => {
  const now = new Date()
  const diff = now.getTime() - BIRTHDAY.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

interface Stat {
  label: string
  value: string | number | null
  loading?: boolean
}

const staticStats: Stat[] = [
  { label: 'countries explored', value: 7 },
  { label: 'bugs created', value: '∞' },
  { label: 'coffees drank', value: '2,000+' }
]

export const StatsDev = () => {
  const [daysOnEarth, setDaysOnEarth] = useState(calculateDaysOnEarth)
  const [contributions, setContributions] = useState<number | null>(null)

  // Live tick for days on earth
  useEffect(() => {
    const timer = setInterval(() => {
      setDaysOnEarth(calculateDaysOnEarth())
    }, 60_000)
    return () => clearInterval(timer)
  }, [])

  // Fetch contributions count
  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/kuki1029')
      .then((r) => r.json())
      .then((data) => {
        const total = Object.values(data.total as Record<string, number>).reduce(
          (sum: number, n: number) => sum + n,
          0
        )
        setContributions(total)
      })
      .catch(() => setContributions(1948))
  }, [])

  const stats: Stat[] = [
    {
      label: 'contributions',
      value: contributions?.toLocaleString() ?? null,
      loading: contributions === null
    },
    { label: 'days on earth', value: daysOnEarth.toLocaleString() },
    ...staticStats
  ]

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          {stat.loading ? (
            <div className="h-8 w-20 animate-pulse rounded bg-[#2E2E2E]" />
          ) : (
            <p className="font-geistmono text-2xl font-bold text-white">
              {stat.value}
            </p>
          )}
          <p className="font-geistmono text-xs text-[#D0D0D0] opacity-50">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
