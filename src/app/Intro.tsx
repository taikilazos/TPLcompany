'use client'

import { useEffect, useRef, useState } from 'react'
import Mark from './Mark'
import styles from './page.module.css'

const HANDOFF = 2100 // ms: the mark is assembled and extruded
const FLIGHT = 750 // ms: matches the .intro transitions

// Builds the mark full screen, then flies it into the nav mark's spot.
// While this is mounted, the page's own animations wait (see .intro ~ .page).
export default function Intro() {
  const ref = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      return
    }

    let finish = 0
    const handoff = window.setTimeout(() => {
      const root = ref.current
      const mark = root?.querySelector('svg')
      const target = document.querySelector('[data-nav-mark]')
      if (!root || !mark || !target) return setDone(true)

      const from = mark.getBoundingClientRect()
      const to = target.getBoundingClientRect()
      mark.style.transform =
        `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${to.width / from.width})`
      root.dataset.leaving = ''
      finish = window.setTimeout(() => setDone(true), FLIGHT)
    }, HANDOFF)

    return () => {
      clearTimeout(handoff)
      clearTimeout(finish)
    }
  }, [])

  if (done) return null

  return (
    <div ref={ref} className={styles.intro} data-intro="" aria-hidden="true">
      <Mark prefix="intro" className={styles.introMark} />
      <p className={styles.introCaption}>
        <span>T</span>
        <span>P</span>
        <span>L</span>
        <span>Company</span>
      </p>
    </div>
  )
}
