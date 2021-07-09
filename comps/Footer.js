import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { footer } from '../styles/globals';





export default function Footer () {


  return (
    <footer style={footer.footer}>
      <div style={footer.halfFlex}>
        <Link href="/">
          <a className={styles.links} style={footer.inlineA}>Home</a>
        </Link>
        <Link href="/building">
          <a className={styles.links} style={{...footer.inlineA, marginRight: 'auto'}}>Buildings</a>
        </Link>
      </div>

      <div style={{display: 'flex'}}>
        <h1 style={{...footer.inlineA, marginLeft: 'auto', color: 'black', fontSize: '1.4rem', textAlign: 'right'}}>Building App</h1>
      </div>
    </footer>
  )
}
