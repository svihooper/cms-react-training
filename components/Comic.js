import Image from 'next/image'
import Detail from '@/components/Detail'
import Button from '@/components/Button'
import moment from 'moment/moment'
import styles from '@/styles/Comics.module.css'

export default function Comic({ data : { thumbnail, title, issueNumber, creators } }) {
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