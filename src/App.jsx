import { useState } from 'react'

import ApaItuOMB from './components/apa-itu-omb/ApaItuOMB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApaItuOMB />
    </>
  )
}

export default App
