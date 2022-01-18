import Link from 'next/link'
import styles from '../styles/NotFound.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        },3000)
    }, [])

    return (
        <>
            <Head>
                <title>Ninja List | Not Found</title>
            </Head>
            <div className={styles.notFound}>
                <h1>Ooooops...</h1>
                <h2>That page cannot be found</h2>
                <p>Go Back to the <Link href="/"><a className={styles.underline}>Homepage</a></Link></p>
            </div>
        </>
    );
}
export default NotFound;