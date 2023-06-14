import React from 'react'
import Image from 'next/image'
import Detail from '../components/Detail'
import Button from '../components/Button'
import styles from '../styles/Comics.module.css'

type Comic = {
    id: string,
    title: string,
    thumbnail?: {
        path: string,
        extension: string
    },
    issueNumber: string,
    publishDate?: string,
    creators: {
        available: number,
        items: { name: string }[],
    }
}

export default function Comic({data}) {
    return (
        <div className={styles.comic}>
            <div className={styles.imageWrapper}>
                <Image 
                    className={styles.img}
                    src={`${data.thumbnail?.path}.${data.thumbnail?.extension}`}
                    alt={data.title}
                    width={183}
                    height={276}
                />

                <Button 
                    data={data}
                />
            </div>

            <div className={styles.detail}>
                <div className={styles.detailInner}>
                    <h3 className={styles.title}>{data.title}</h3>

                    <Detail 
                        issueNumber={data.issueNumber}
                        creators={data.creators}
                    />
                </div>
            </div>
        </div>
    )
}