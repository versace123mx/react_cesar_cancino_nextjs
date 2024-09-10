import Frontend from "@/componentes/Frontend";
import styles from './../styles/ejemplo.module.css'
export default function Home() {
  return (
    <>
      <Frontend title={'Culoncita'}>
        <h1 className={styles.ejemplo_style_module}>Hola mundo desde JS</h1>
      </Frontend>
    </>
  );
}
