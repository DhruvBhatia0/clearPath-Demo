import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from "../component_info/config_options"
import menu from "../components/drop-menu"

function createMenu(component){
  console.log(component.label);
  return(
    <menu
    key = {component.id}
    label = {component.label}>
    </menu>
  );
  
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pick your <a href="#">components</a>
        </h1>
      <div className='menu'>
        {data.map(menu)}
      </div>
        
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://clearpathrobotics.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FOOTER CONTENT GOES HERE
          
        </a>
      </footer>
    </div>
  )
}
