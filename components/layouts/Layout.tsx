import { FC } from 'react'
import Head from 'next/head'
import {Navbar} from '../ui/Navbar';

interface Props {
    title?: string;
}

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
    <Head>
        <title>{ title || 'Pokemon APP'}</title>
        <meta name='author' content='Adrian Siñiga'/>
        <meta name='description' content='información del pokemon'/>
        <meta name='keywords' content='pokem, pokedex'/>
    </Head>

    <Navbar />
    <main style={{
      padding: '0px 20px'
    }}>
        {children}
    </main>
    </>
  )
}

