import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img src="/tpl-mark.svg" alt="" className={styles.mark} width={40} height={40} />
        <span className={styles.wordmark}>TPL Company</span>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AI &amp; ML<br />engineering
        </h1>

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

      <footer className={styles.footer}>
        <span>TPL Company, Amsterdam</span>
        <span>KvK: 98986244</span>
      </footer>
    </div>
  )
}
