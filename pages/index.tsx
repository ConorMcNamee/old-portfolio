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
        <meta charSet='utf-8'/>
        <meta name='description' content='Experienced Freelance Full Stack Developer from Belfast UK.  ' />
        <meta name='viewport' content='width=device-width' />
      </Head>

      <Sidebar />
      <section className=''>
        <Home />
        <About />
        <Skills />
        <Logos />
      </section>
    </div>
  )
}
