import React from 'react'

const Skills = () => {
    return (
      <div className='flex justify-center mt-20'>
        <div className='bg-amber-500 p-6 w-[700px] rounded-xl shadow-lg'>
          <div className='flex flex-col gap-4'>
          <div className='border h-10 w-[650px] flex flex-col transition-shadow duration-200 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]'>
                <p className='z-10 mt-2'>Python</p>
                <div className='h-10 w-[550px] bg-blue-300 absolute flex justify-center items-center border'></div>
            </div>
            <div className='border h-10 w-[650px] flex flex-col transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]'>
                <p className='z-10 mt-2'>HTML</p>
                <div className='h-10 w-[650px] bg-blue-300 absolute flex justify-center items-center border'></div>
            </div>
            <div className='border h-10 w-[650px] flex flex-col transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]'>                <p className='z-10 mt-2'>CSS</p>
                <div className='h-10 w-[600px] bg-blue-300 absolute flex justify-center items-center border'></div>
            </div>
            <div className='border h-10 w-[650px] flex flex-col transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]'>                <p className='z-10 mt-2'>JavaScript</p>
                <div className='h-10 w-[500px] bg-blue-300 absolute flex justify-center items-center border'></div>
            </div>
            <div className='border h-10 w-[650px] flex flex-col transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]'>                <p className='z-10 mt-2'>Tailwind</p>
                <div className='h-10 w-[450px] bg-blue-300 absolute flex justify-center items-center border'></div>
            </div>
            <div className='border h-10 w-[650px] flex flex-col transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]'>                <p className='z-10 mt-2'>React</p>
                <div className='h-10 w-[200px] bg-blue-300 absolute flex justify-center items-center border'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Skills
