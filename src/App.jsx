import { useState } from 'react'

import Header from './components/header/Header'
import ApaItuOMB from './components/apa-itu-omb/ApaItuOMB'
import Youtube from './components/youtube/Youtube'
import Oprec from './components/oprec/Oprec'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ApaItuOMB />
      <Youtube />
      <Oprec />
      <Footer />
    </>
  )
}

export default App
