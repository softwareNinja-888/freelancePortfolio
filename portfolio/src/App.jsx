import { useState } from 'react'

import {Header} from './components/Header'
import {Hero} from './components/Hero'
// import { HeaderDraft } from './components/draft/HeaderDraft'
import { About } from './components/About'

function App() {

  return (
    <>
      <div className="flex flex-col gap-0 h-full w-screen bg-white">
        <Header/>
        <Hero/>
        <About/>
      </div>
    </>
  )
}

export default App
