import Head from 'next/head';

import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Table from '../comps/Table';

import { home, building } from '../styles/globals'


export default function Building () {

  return (
    <>
      <div style={home.container}>
        <Head>
          <title>App / Buildings</title>
          <meta name="description" content="Building information regarding different properties." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>

        <main style={building.main}>
          <Table />
        </main>

        <Footer/>
      </div>
    </>
  )
}
