import { useState } from 'react'

import {Header} from './components/Header'
import {Hero} from './components/Hero'
// import { HeaderDraft } from './components/draft/HeaderDraft'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
import { ScrollToTop } from "./components/helper/ScrollToTop"

import { Analytics } from '@vercel/analytics/react';



function App() {

  return (
    <>
      <div className="flex flex-col gap-0 h-full max-w-screen bg-white overflow-x-hidden">
        <Analytics />
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Footer/>
        <ScrollToTop/>
      </div>
    </>
  )
}

export default App
