import { useState } from 'react'

import {Header} from './components/Header'
import {Hero} from './components/Hero'

function App() {

  return (
    <>
      <div className="flex flex-col gap-32 h-full w-screen bg-primary">
        <Header/>
        <Hero/>
      </div>
    </>
  )
}

export default App
