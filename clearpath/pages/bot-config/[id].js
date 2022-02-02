import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import data from "../../component_info/config_options";
import menu from "../../components/drop-menu";

export default function ConfigeratorInterface() {
    const router = useRouter()
    const {botName} = router.query
    console.log(router.query)
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Pick your <a href="#">components</a>
      </h1>
      <div className="menu">{data.map(menu)}</div>
    </main>
  );
}
