import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='text-center'>
        <h1 id='contact' className=' text-4xl font-extrabold'>Contact Us</h1><br></br>
        <input className='border h-13 w-65 pl-3' type="text" id='name' placeholder='Name'/><br></br><br></br>
        <input  className='border h-13 w-65 pl-3'  type="email" id='email' placeholder='Email' /><br></br><br></br>
        <input className='border h-23 w-65 pl-1 pb-15'  type="text"  placeholder='Your message...'/><br></br><br></br>
        <button className='border h-13 w-65 bg-amber-500 cursor-pointer hover:h-14 hover:w-66 hover:bg-amber-600 duration-200' >Send Message</button>
      </div>
    </div>
  )
}

export default Contact
