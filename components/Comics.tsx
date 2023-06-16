import React, { useState } from 'react'
import useSWR from 'swr'
import { useRouter } from "next/router";
import Comic from '../components/Comic'
import { Pagination } from '../components/Pagination';

const fetcher = (url) => fetch(url).then((res) => res.json())

export const Comics = () => {
    const { asPath } = useRouter();
    const { data, error, isLoading } = useSWR(`/api/getComics${asPath}`, fetcher)

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    const { count, limit, offset, results, total } = data;

    return (
        <section className="comics-wrapper">
            { results.length > 0 ?
                <ul style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(183px, 1fr))',
                    justifyContent: 'center',
                    gap: '25px'
                }}>
                    { results.map((comic) => (
                        <Comic 
                            key={comic.id} 
                            data={comic} 
                        /> 
                    )) }
                </ul>
                :
                <p>There are no results that match the selected filter</p>
            }

            <Pagination 
                count={count}
                limit={limit}
                offset={offset}
                total={total}
            />
        </section>
    )
}
