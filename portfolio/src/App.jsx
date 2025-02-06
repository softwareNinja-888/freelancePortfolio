import { useState } from 'react'

import {Header} from './components/Header'
import {Hero} from './components/Hero'
// import { HeaderDraft } from './components/draft/HeaderDraft'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Services } from './components/Services'

function App() {

  return (
    <>
      <div className="flex flex-col gap-0 h-full w-screen bg-white">
        <Header/>
        <Hero/>
        <About/>
        <Contact/>
        <Services/>
        <Projects/>

      </div>
    </>
  )
}

export default App
