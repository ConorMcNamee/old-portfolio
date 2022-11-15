import Head from 'next/head'

import Home from '../components/Index/Home'
import About from '../components/Index/About'
import Skills from '../components/Index/Skills'

import Sidebar from "../components/Layout/Sidebar"
import { useEffect, useRef } from 'react'
import Logos from '../components/Layout/Logos'

export default function Index() {

    const ref = useRef();

    return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Full Stack Developer</title>
      </Head>

      <Sidebar />
      <section className='flex flex-col'>
        <Home />
        <About />
        <Skills />
        <Logos />
      </section>
    </div>
  )
}
