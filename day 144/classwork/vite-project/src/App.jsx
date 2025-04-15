import { useState } from 'react'
import './App.css'

function App() {
  const [liked, setLike] = useState(false)
  function change(){
    setLike(text)
  }

  return (
    <>
    <div>
      <button value={smth} onClick={change}>{liked ? 'liked' : 'like'}</button>
    </div>
    </>
  )
}

export default App
