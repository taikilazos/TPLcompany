import type { ComponentProps, CSSProperties } from 'react'
import styles from './page.module.css'

// Geometry and transforms copied from public/tpl-mark.svg, split into its
// strokes so each can move on its own. The stem is shared by all three letters:
//   stem + bar = T, stem + bowl = P, stem + foot = L
const PIECES = [
  { key: 'st', shape: <rect x="44" y="14" width="12" height="92" /> },
  { key: 'tb', shape: <rect x="14" y="14" width="84" height="12" /> },
  { key: 'bw', shape: <path fillRule="evenodd" d="M56 14 H66 A22 22 0 0 1 66 58 H56 Z M56 26 H66 A10 10 0 0 1 66 46 H56 Z" /> },
  { key: 'lf', shape: <rect x="44" y="94" width="56" height="12" /> },
]

// 36 extrude layers, back to front, each 0.34 units deeper (see .layer)
const LAYERS = Array.from({ length: 36 }, (_, i) => 36 - i)

type Props = ComponentProps<'svg'> & { prefix: string }

export default function Mark({ prefix, className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 140 140"
      aria-hidden="true"
      className={[styles.mark, className].filter(Boolean).join(' ')}
      {...props}
    >
      <defs>
        {PIECES.map((p) => (
          <g key={p.key} id={`${prefix}-${p.key}`}>{p.shape}</g>
        ))}
      </defs>
      <g transform="translate(70,70) scale(0.78) translate(-70,-70)">
        <g transform="translate(10.7,0.7) scale(1.05)">
          <g transform="skewX(-12)">
            <g fill="#587700">
              {PIECES.map((p) => (
                <g key={p.key} className={styles[p.key]}>
                  {LAYERS.map((i) => (
                    <use
                      key={i}
                      href={`#${prefix}-${p.key}`}
                      className={styles.layer}
                      style={{ '--i': i } as CSSProperties}
                    />
                  ))}
                </g>
              ))}
            </g>
            <g fill="#AEEA00">
              {PIECES.map((p) => (
                <use key={p.key} href={`#${prefix}-${p.key}`} className={styles[p.key]} />
              ))}
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
