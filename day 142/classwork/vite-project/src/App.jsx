import { useState } from 'react'
import './App.css'
import Div1 from './components/Div1'
import Div2 from './components/Div2'
import Div3 from './components/Div3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Div1 />
    <Div2 />
    <Div3 />
    </>
  )
}

export default App
