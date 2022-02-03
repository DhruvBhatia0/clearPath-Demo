import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function BotConfigList(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bot options to configure
        </h1>
        <br/>
        <ul>
          <li>
            <button><Link href="/bot-config/bot1" >Bot 1</Link></button>
          </li>
          <br/>
          <li>
            <button><Link href="/bot-config/bot2">Bot 2</Link></button>
          </li>
        </ul>
        <h3>If you want to add another bot, add the necessary json, and then modify the url you get when clicking one of these buttons to read .../bot3</h3>
        </main>
    </div>
  )
  }
   