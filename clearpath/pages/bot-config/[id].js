import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import data from "../../component_info/config_options";
import menu from "../../components/drop-menu";
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function ConfigeratorInterface() {
    const {query} = useRouter()
    // const {botName} = router.query
    var [botName, botNameUpdate] = useState(null)
    // while (true){
    //   if (router.query){

    //     botNameUpdate(router.query)
    //     break
    //   }
      
    // }

    useEffect(() => {
      // Update the document title using the browser API
      console.log(query.id)
      console.log(data[query.id])
    },
    [query.id]);

    console.log(query)
    // console.log(window.location.href)
  return (

    <main className={styles.main}>
      {(query != null && query.id) ?
      <div>
        <h1 className={styles.title}>
        Pick your <a href="#">components</a>
      </h1>
      <div className="menu">{data[query.id].map(menu)}</div>
      <br/>
      <h4>the components link doesnt actually lead you anywhere, I just thought the colour blue looks nice</h4>
      <br/>
      <button><Link href="/">Go back</Link></button>
      <button onClick={() => 
        console.log(query.id)
      }>Click me</button>
      </div>
      : <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>}
      
    </main>
  );
}

