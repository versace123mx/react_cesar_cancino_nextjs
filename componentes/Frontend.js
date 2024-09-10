import Head from "next/head"

const Frontend = ({ children, title = '' }) => {
    return (
        <>
            <Head>
                <title>{`Clasificados Next - ${title}`}</title>
            </Head>
            {children}
        </>
    )
}

export default Frontend
