import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center'>
      <div className='text-center h-150 w-150 bg-orange-200 rounded-3xl mt-30 pt-20'>
        <form action="">
            <label className=' font-sans text-4xl' htmlFor="#contact-email">Email</label><br></br><br></br>
            <input className='h-13 w-40 border text-2xl pl-4' type="email" id="contact-email" placeholder='Email'/><br></br><br></br>
            <label className='font-sans text-4xl' htmlFor="#contact-pass">Message</label><br></br><br></br>
            <input className='h-13 w-40 border text-2xl pl-4' type="text" id="contact-pass" placeholder='Message'/><br></br><br></br>
            <button className='b bg-amber-600 h-13 w-40 hover:h-15 hover:w-42 hover:bg-amber-400 duration-200'>Send</button>
            
        </form>

      </div>
    </div>
  )
}

export default Contact
