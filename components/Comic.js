import Image from 'next/image'
import Detail from '@/components/Detail'
import styles from '@/styles/Comics.module.css'

export default function Comic({ comic }) {
    return (
        <div className={styles.comic}>
            <Image 
                src={comic.thumbnail}
                alt={comic.title}
                width={400}
                height={600}
            />

            <div className={styles.detail}>
                <div className={styles.detailInner}>
                    <h3 className={styles.title}>{comic.title}</h3>

                    <Detail 
                        issue={comic.issueNumber}
                        publishDate={comic.publishDate}
                        creators={comic.creators}
                    />
                </div>
            </div>
        </div>
    )
}