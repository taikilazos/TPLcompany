'use client'

import { useEffect, useState } from 'react'

const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Amsterdam',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
})

export default function AmsterdamTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () => setTime(format.format(new Date()))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <p className={className}>
      Amsterdam <span>{time ?? '--:--:--'}</span>
    </p>
  )
}
