import { useState } from 'react'

import {Header} from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col gap-32 h-full w-screen bg-black">
        <Header/>
{/*        <Hero/>
        <Showcase/>*/}
      </div>
    </>
  )
}

export default App
