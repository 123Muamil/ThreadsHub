import React from 'react'
import Head from 'next/head'
import { ChooseUs, Footer, Navbar } from '../components'
import Service from './Service'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>ThreadsHub: Your Ultimate Clothing E-commerce Destination</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>{children}</main>

      <footer>
        <ChooseUs />
<Service/>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
