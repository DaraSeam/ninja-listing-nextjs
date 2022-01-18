import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

// create function to fetch data use getStaticProps
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninja Listing</title>
            </Head>
            <div>
                <h1>Ninjas Listing</h1>
                {ninjas.map(ninja => (
                    <Link href={"/ninjas/" +ninja.id} className="list" key={ninja.id}>
                        <a className={styles.single}>
                            <h2>{ninja.name}</h2>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}
 
export default Ninjas;