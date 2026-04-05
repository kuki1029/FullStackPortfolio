import { useState } from 'react'
import type { ContributionData } from './commitTypes'
import { normalizeCount, getBlackbodyColor, formatDate } from './commitUtils'

interface Props {
  data: ContributionData
}

interface Tooltip {
  date: string
  count: number
  x: number
  y: number
}

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

const getMonthLabels = (
  weeks: ContributionData['weeks']
): { label: string; colIndex: number }[] => {
  const labels: { label: string; colIndex: number }[] = []
  let lastMonth = ''

  for (let i = 0; i < weeks.length; i++) {
    const firstDay = weeks[i].days[0]
    if (!firstDay) continue

    const month = new Date(firstDay.date + 'T00:00:00').toLocaleDateString(
      'en-US',
      { month: 'short' }
    )

    if (month !== lastMonth) {
      labels.push({ label: month, colIndex: i })
      lastMonth = month
    }
  }

  return labels
}

export const CommitGrid = ({ data }: Props) => {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  const flatDays = data.weeks.flatMap((w) => w.days)

  // Pad the first week so Sunday starts at row 0
  const firstDayOfWeek = new Date(flatDays[0]?.date + 'T00:00:00').getDay()
  const paddedDays = [
    ...Array.from({ length: firstDayOfWeek }, () => null),
    ...flatDays
  ]

  // Re-split into columns of 7
  const columns: (typeof paddedDays)[] = []
  for (let i = 0; i < paddedDays.length; i += 7) {
    columns.push(paddedDays.slice(i, i + 7))
  }

  const monthLabels = getMonthLabels(data.weeks)
  const cellSize = 12
  const gap = 3
  const step = cellSize + gap
  const labelWidth = 32

  const handleMouseEnter = (
    day: { date: string; count: number },
    e: React.MouseEvent
  ) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setTooltip({
      date: day.date,
      count: day.count,
      x: rect.left + rect.width / 2,
      y: rect.top
    })
  }

  return (
    <div className="relative">
      <div className="overflow-x-auto pb-2">
        {/* Month labels */}
        <div className="flex" style={{ paddingLeft: labelWidth }}>
          {monthLabels.map(({ label, colIndex }) => (
            <span
              key={`${label}-${colIndex}`}
              className="font-geistmono text-[10px] text-[#D0D0D0] opacity-50"
              style={{
                position: 'absolute',
                left: labelWidth + colIndex * step
              }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-[3px]">
          {/* Day labels */}
          <div
            className="flex shrink-0 flex-col gap-[3px]"
            style={{ width: labelWidth }}
          >
            {DAY_LABELS.map((label, i) => (
              <span
                key={i}
                className="flex items-center font-geistmono text-[10px] text-[#D0D0D0] opacity-50"
                style={{ height: cellSize }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Grid columns */}
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-[3px]">
              {col.map((day, rowIdx) => {
                if (!day) {
                  return (
                    <div
                      key={rowIdx}
                      style={{ width: cellSize, height: cellSize }}
                    />
                  )
                }

                const intensity = normalizeCount(day.count, data.maxCount)
                const bgColor = getBlackbodyColor(intensity)

                return (
                  <div
                    key={rowIdx}
                    className="cursor-default rounded-sm"
                    style={{
                      width: cellSize,
                      height: cellSize,
                      backgroundColor: bgColor
                    }}
                    onMouseEnter={(e) => handleMouseEnter(day, e)}
                    onMouseLeave={() => setTooltip(null)}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-3 flex items-center justify-end gap-[5px] font-geistmono text-[10px] text-[#D0D0D0] opacity-50">
          <span className="mr-1">Less</span>
          {[0, 0.2, 0.4, 0.7, 1].map((intensity) => (
            <div
              key={intensity}
              className="rounded-sm"
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor:
                  intensity === 0 ? 'transparent' : getBlackbodyColor(intensity),
                border:
                  intensity === 0 ? '1px solid rgba(208, 208, 208, 0.2)' : 'none'
              }}
            />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-md bg-[#1E1E1E] px-3 py-2 font-geistmono text-xs font-medium text-white shadow-lg"
          style={{ left: tooltip.x, top: tooltip.y - 8 }}
        >
          {tooltip.count === 0
            ? `No contributions on ${formatDate(tooltip.date)}.`
            : `${tooltip.count} contribution${tooltip.count === 1 ? '' : 's'} on ${formatDate(tooltip.date)}.`}
        </div>
      )}

      {/* Right fade for mobile scroll hint */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#171717] to-transparent sm:hidden" />
    </div>
  )
}
