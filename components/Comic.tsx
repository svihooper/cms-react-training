import React from 'react'
import Image from 'next/image'
import Detail from '../components/Detail'
import Button from '../components/Button'
import styles from '../styles/Comics.module.css'

type Comic = {
    data: {
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
}

export default function Comic({ 
    data : { title, thumbnail, issueNumber, publishDate, creators } 
}: Comic) {
    return (
        <div className={styles.comic}>
            { thumbnail &&
                <Image 
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={title}
                    width={400}
                    height={600}
                />
            }

            <div className={styles.detail}>
                <Button />
                <div className={styles.detailInner}>
                    <h3 className={styles.title}>{title}</h3>

                    <Detail 
                        issueNumber={issueNumber}
                        creators={creators}
                    />
                </div>
            </div>
        </div>
    )
}