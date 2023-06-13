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
                <div className={styles.imageWrapper}>
                    <Image 
                        className={styles.img}
                        src={`${thumbnail.path}.${thumbnail.extension}`}
                        alt={title}
                        width={183}
                        height={276}
                    />

                    <Button />
                </div>
            }

            <div className={styles.detail}>
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