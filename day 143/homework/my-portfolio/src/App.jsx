import { useState } from 'react'
import './App.css'
import Minusplus from './components/minusplus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Minusplus />
    </>
  )
}

export default App
