import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import data from "../../component_info/config_options";
import menu from "../../components/drop-menu";
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function ConfigeratorInterface() {
    const {query} = useRouter()

    // I'm leaving the use effect function in here but it really isnt useful, I just used it for debugging
    useEffect(() => {
      console.log(query.id)
      console.log(data[query.id])
    },
    //query.id was the parameter that useEffect watched, everytime it updated, the function ran
    [query.id]);

  return (

    <main className={styles.main}>
    {/* I thought of using useState here but ended up using some conditional rendering
    WHY IS THIS TYPE OF RENDERING NEEDED?
    Next allows us to access the [id] componenet from the url which I hoped to use to access the correct element within data using [id]
    the issue is that next only performs computations during the hydration phase, and so the code would throw an error when it was first run because the [id]
    was still null at this stage */}
      {(query != null && query.id) ?
      <div>
        <h1 className={styles.title}>
        Pick your components for <a href="#">{query.id}</a>
      </h1>
      <div className="menu">{data[query.id].map(menu)}</div>
      <br/>
      <h4>the components link doesnt actually lead you anywhere, I just thought the colour blue looks nice</h4>
      <br/>
      <button><Link href="/">Go back</Link></button>
      
      </div>
      : <p>WHYYYYYYYYYY DID THIS NOT WORK</p>}
      
    </main>
  );
}

