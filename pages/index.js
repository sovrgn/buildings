import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { home, footer } from '../styles/globals';


import { useEffect, useState } from 'react';

import Footer from '../comps/Footer';



export default function Home() {


  useEffect(() => {

    document.querySelector('html').style.height = '100%';


  })

  return (
    <div style={home.container}>
      <Head>
        <title>App / Home</title>
        <meta name="description" content="Home page of the Building App." />
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main style={home.main}>
        <section style={home.title}>
          <h2>
            <Link href='/building'>
              <a className={styles.links} style={{...footer.inlineA, justifyContent: 'center'}}>Buildings</a>
            </Link>
          </h2>
          <p style={home.par}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
