import styles from './page.module.css'
import Headline from './Headline'
import AmsterdamTime from './AmsterdamTime'
import Intro from './Intro'
import Mark from './Mark'

const tape = ['Retrieval-augmented generation', 'Natural language processing', 'LLM systems', 'Amsterdam']

// Without JavaScript the intro never hands off, so skip it entirely
const noScript = '<style>[data-intro]{display:none!important}[data-intro]~* *,[data-intro]~* *::after{animation-play-state:running!important}[data-nav-mark]{opacity:1!important}</style>'

export default function Home() {
  return (
    <>
      <noscript dangerouslySetInnerHTML={{ __html: noScript }} />
      <Intro />
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <Mark prefix="nav" className={styles.navMark} data-nav-mark="" />
            <span className={styles.wordmark}>
              <span className={styles.lt}>T</span>
              <span className={styles.lp}>P</span>
              <span className={styles.ll}>L</span> Company
            </span>
          </div>
          <AmsterdamTime className={styles.clock} />
        </header>

        <main className={styles.main}>
          <Headline />

          <div className={styles.detail}>
            <p className={styles.lede}>
              A one-person practice in Amsterdam. The work is retrieval-augmented
              generation, natural language processing, and systems built around
              large language models.
            </p>

            <dl className={styles.facts}>
              <div>
                <dt>Form</dt>
                <dd>Eenmanszaak (sole proprietorship)</dd>
              </div>
              <div>
                <dt>Registered</dt>
                <dd>September 2024</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Dormant, registration kept active</dd>
              </div>
            </dl>
          </div>
        </main>

        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.track}>
            {[...tape, ...tape].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        <footer className={styles.footer}>
          <span>TPL Company, Amsterdam</span>
          <span>KvK: 98986244</span>
        </footer>
      </div>
    </>
  )
}
