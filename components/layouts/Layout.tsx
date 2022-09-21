
import React, { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props{
    title?: string;
    children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children, title }: Props) => {
    
  return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Camilo Hernandez"/>
                <meta name="description" content="Informacion del pokemon XXXX"/>
                <meta name="keywords" content="XXXX, pokemon, pokedex"/>
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
