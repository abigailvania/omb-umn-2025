import { useState } from 'react'

import ApaItuOMB from './components/apa-itu-omb/ApaItuOMB'
import Youtube from './components/youtube/Youtube'
import Oprec from './components/oprec/Oprec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApaItuOMB />
      <Youtube />
      <Oprec />
    </>
  )
}

export default App
