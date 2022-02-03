import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This implementation is just a proof of concept
        </h1>
        <br></br>
        <h1 className={styles.title}>
          <Link href="/bot-config">Click here</Link>
        </h1>
        </main>
    </div>
  )
}
