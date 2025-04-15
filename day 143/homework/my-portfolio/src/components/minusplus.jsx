import React, { useState } from 'react';

const Minusplus = () => {
    const [count, setCount] = useState(0)
    function increase(){
        setCount(count + 1)
        setCount(count + 1)
    }
    function decrease(){
        setCount(count - 1)
    }
  return (
    <div className=' flex justify-center'>
      <button className='w-20 h-20 bg-cyan-400 rounded-4xl' onClick={decrease}>-</button>
      <p className=' text-7xl'>{count}</p>
      <button className='w-20 h-20 bg-cyan-400 rounded-4xl' onClick={increase}>+</button>
    </div>
  )
}

export default Minusplus
