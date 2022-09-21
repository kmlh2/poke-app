
import React, { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props{
    title?: string;
    children: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }: Props) => {
    
  return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Camilo Hernandez"/>
                <meta name="description" content="Informacion del pokemon XXXX"/>
                <meta name="keywords" content="XXXX, pokemon, pokedex"/>

                <meta property="og:title" content={`Información sobre ${ title }`} />
                <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <Navbar/>
              
            <main style={{
                padding: '0px 20px',
            }}>
                { children }
            </main>
        </>
    )
}
