import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { ContributionData } from './commitTypes'
import { fetchContributions } from './commitUtils'
import { CommitGrid } from './CommitGrid'

export const CommitsDev = () => {
  const [data, setData] = useState<ContributionData | null>(null)

  useEffect(() => {
    fetchContributions().then(setData)
  }, [])

  return (
    <motion.div
      id="commits"
      className="pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="pb-8 font-hand text-4xl text-[#EA9A4F]">Commits</p>

      {data && (
        <p className="pb-4 font-geistmono text-sm text-[#D0D0D0] opacity-50">
          {data.totalContributions.toLocaleString()} contributions in the last
          year
        </p>
      )}

      {!data && (
        <p className="font-geistmono text-sm text-[#D0D0D0] opacity-50">
          loading contributions...
        </p>
      )}

      {data && <CommitGrid data={data} />}
    </motion.div>
  )
}
