import Head from 'next/head'
import useSWR from 'swr'
import styles from '@/styles/Home.module.css'
import Comic from '@/components/Comic.js'
import { JetBrains_Mono } from 'next/font/google'
const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })
const COMIC_URL = "https://gateway.marvel.com:443/v1/public/comics"
const API_KEY = "0c764b563c22abe496ef7f5fa513ed08";
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error, isLoading } = useSWR(`/api/comics`, fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <main className={`${styles.main} ${jetbrains_mono.className}`}>
        <div className={styles.header}>
          <h1>React Exercise 1 - Comic Grid</h1>
        </div>

        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          justifyContent: 'center',
          gap: '25px'
        }}>
          {data.map((comic) => (
            <Comic key={comic.id} comic={comic} /> 
          ))}
        </ul>
      </main>
    </>
  )
}
