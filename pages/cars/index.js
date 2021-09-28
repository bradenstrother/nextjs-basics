import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function CarsList(props) {

  const router = useRouter()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Cars list
        </h1>

        <ul>
          <li>
            <Link href="/cars/tesla"><a>Tesla</a></Link>
          </li>
          <li>
            <Link href="/cars/ford"><a>Ford</a></Link>
          </li>
          <li>
            <Link href="/cars/lambo"><a>Lambo</a></Link>
          </li>
        </ul>
        <button onClick={() => router.back()}>Go Back</button>
        </main>
    </div>
  )
  }
    
