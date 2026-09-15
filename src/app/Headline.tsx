'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

// The extrude points away from the pointer, as if the cursor were the light.
export default function Headline() {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    const query = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    if (!el || !window.matchMedia(query).matches) return

    let x = 1, y = 1, tx = 1, ty = 1, frame = 0

    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.setProperty('--ex', x.toFixed(3))
      el.style.setProperty('--ey', y.toFixed(3))
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.002 ? requestAnimationFrame(tick) : 0
    }

    const aim = (nx: number, ny: number) => {
      tx = nx
      ty = ny
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const angle = Math.atan2(r.top + r.height / 2 - e.clientY, r.left + r.width / 2 - e.clientX)
      aim(Math.cos(angle) * Math.SQRT2, Math.sin(angle) * Math.SQRT2)
    }
    const onLeave = () => aim(1, 1)

    window.addEventListener('pointermove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <h1 ref={ref} className={styles.title}>
      <span className={styles.line}><span>AI &amp; ML</span></span>
      <span className={styles.line}><span>engineering</span></span>
    </h1>
  )
}
