import { useEffect, useState } from 'react'

function getParts(target) {
  const diff = Math.max(0, target.getTime() - Date.now())
  const total = Math.floor(diff / 1000)
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    complete: total === 0,
  }
}

export function useCountdown(isoDate) {
  const [parts, setParts] = useState(() => getParts(new Date(isoDate)))

  useEffect(() => {
    const target = new Date(isoDate)
    const tick = () => setParts(getParts(target))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [isoDate])

  return parts
}
