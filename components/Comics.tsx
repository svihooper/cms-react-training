import React from 'react'
import useSWR from 'swr'
import { useRouter } from "next/router";
import Comic from '../components/Comic'

const fetcher = (url) => fetch(url).then((res) => res.json())


export const Comics = () => {
    const { asPath } = useRouter();
    const { data, error, isLoading } = useSWR(`/api/getComics${asPath}`, fetcher)

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null
  
    const comics = data.data.data.results;
    console.log("🚀 ~ file: Comics.tsx:18 ~ Comics ~ comics:", comics);


    return (
        <section className="comics-wrapper">
            { comics.length > 0 ?
                <ul style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(183px, 1fr))',
                    justifyContent: 'center',
                    gap: '25px'
                }}>
                    { comics.map((comic) => (
                        <Comic key={comic.id} data={comic} /> 
                    )) }
                </ul>
                :
                <p>There are no results that match the selected filter</p>
            }
        </section>
    )
}
