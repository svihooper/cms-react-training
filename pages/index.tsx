import React from 'react'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'
import Comic from '../components/Comic'
import { JetBrains_Mono } from 'next/font/google'
const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(`/api/getComics`, fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  const comics = data.data.data.results;

  return (
    <>
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
          { comics.map((comic) => (
            <Comic key={comic.id} data={comic} /> 
          )) }
        </ul>
      </main>
    </>
  )
}
