import { useState } from 'react'
import './App.css'
import Minusplus from './components/minusplus'
import Add from './components/add'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Minusplus />
    <Add />
    </>
  )
}

export default App
