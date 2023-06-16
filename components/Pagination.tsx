import React from 'react'
import styles from '../styles/Comics.module.css'
import { useRouter } from "next/router";

export const Pagination = ({ count, limit, offset, total }) => {
    const router = useRouter();
    const first = offset + 1;
    const last = offset + count;
    const paginationCount = `${first} - ${last} of ${total}`;
    const prevDisabled = offset - limit < 0 ? styles.disabled : '';
    const nextDisabled = offset + limit > total ? styles.disabled : '';

    return (
        <section className={styles.paginationWrapper}>
            <button 
                className={`${styles.button} ${styles.prev} ${prevDisabled}`}
                onClick={(e) => {
                    if (offset - limit < 0) { return; }
                    router.query.offset = (offset - limit).toString();
                    router.push({ pathname: '/', query : router.query });
                }}
            >
                <i className={`${styles.icon} fas fa-angle-left`}></i>
            </button>

            <span className={styles.span}>{paginationCount}</span>

            <button 
                className={`${styles.button} ${styles.next} ${nextDisabled}`}
                onClick={(e) => {
                    if (offset + limit > total) { return }
                    router.query.offset = (offset + limit).toString();
                    router.push({ pathname: '/', query : router.query });
                }}
            >
                <i className={`${styles.icon} fas fa-angle-right`}></i>
            </button>
        </section>
    )
}
