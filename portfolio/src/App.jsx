import { useState } from 'react'

import {Header} from './components/Header'
import {Hero} from './components/Hero'
// import { HeaderDraft } from './components/draft/HeaderDraft'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
      <div className="flex flex-col gap-0 h-full w-screen bg-white">
        <Header/>
        <Hero/>
        <About/>
        <Contact/>
        <Projects/>
      </div>
    </>
  )
}

export default App
