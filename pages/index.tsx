// TO DO
// - DropdownFilter component is already being imported
// Add DropdownFilter components in for both character and creator key/values

import React, { useState } from 'react'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'
import Comic from '../components/Comic'
import { DropdownFilter } from '../components/DropdownFilter';
import { JetBrains_Mono } from 'next/font/google'
import { useRouter } from "next/router";

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { asPath } = useRouter();
  const { data, error, isLoading } = useSWR(`/api/getComics${asPath}`, fetcher)

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
