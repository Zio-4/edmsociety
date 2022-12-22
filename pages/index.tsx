import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Filters from '../components/filters'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Filters />
    </>
  )
}
