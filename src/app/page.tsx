import Image from 'next/image'
import styles from './page.module.css'
import NameForm from './components/nameForm'

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NameForm />
    </main>
  </>
  )
}
