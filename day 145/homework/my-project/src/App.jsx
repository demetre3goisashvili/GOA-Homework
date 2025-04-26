import { useState } from 'react'
import './App.css'
import About from './components/about'
import Skills from './components/skills'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-amber-100 h-max text-center'>
      <nav className='bg-amber-100  flex justify-center items-center gap-5 border h-15 shadow-md fixed w-full'>
        <a className=' text-2xl font-sans hover:text-blue-300 duration-200' href="#">Home</a>
        <a className=' text-2xl font-sans hover:text-blue-300 duration-200' href="#">About</a>
        <a className=' text-2xl font-sans hover:text-blue-300 duration-200' href="#contact">Contact</a>
        <a className=' text-2xl font-sans hover:text-blue-300 duration-200' href="#">FAQ</a>
      </nav>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
    </>
  )
}

export default App
