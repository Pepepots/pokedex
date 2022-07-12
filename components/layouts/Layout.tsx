import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

type Props = {
    children: React.ReactNode;
    title?: string;
}

const origin = ( typeof window === 'undefined') ? '' : window.location.origin

const Layout:FC<Props> = ({children, title}) => {

    
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Jose Garcia"/>
                <meta name="description" content={`Informacion sobre ${ title }`}/>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

                <meta property='og:title' content={`Informacion sobre ${ title }`} />
                <meta property='og:description' content={`Esta es la pagina sobre ${ title }`} />
                <meta property='og:image' content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main>
                {children}
            </main>

        </>
    )
}

export default Layout