import React from 'react'
import meImage from '../photos/me.jpg';
import css from '../photos/css.png';
import html from '../photos/html.png';
import javascript from '../photos/javascript.png';
import python from '../photos/python.png';
import tailwind from '../photos/tailwind.png';
import react from '../photos/react.png';

const About = () => {
  return (
    <div className="text-center pt-20">
      <h1 className=' text-3xl font-extrabold'>About me</h1>
      <div className="flex justify-around items-center">
        <img className="w-96 h-96 object-cover rounded-full" src={meImage} alt="Me" />
        <div className='grid grid-cols-3 gap-10'>
          <div>
          <label className="text-3xl" htmlFor="py">Python</label>
          <img id="py" className="h-24 w-24 hover:h-26 hover:w-26 duration-200" src={python} alt="Python" />
          </div>
          <div>
          <label className="text-3xl" htmlFor="htm">HTML</label>
          <img id="htm" className="h-24 w-24 hover:h-26 hover:w-26 duration-200" src={html} alt="HTML" />
          </div>

          <div>
          <label className="text-3xl" htmlFor="#css">CSS</label>
          <img id="css" className="h-24 w-20 hover:h-26 hover:w-24 duration-200" src={css} alt="CSS" />
          </div>

          <div>
          <label className="text-3xl" htmlFor="#js">JavaScript</label>
          <img id="js" className="h-24 w-24 hover:h-26 hover:w-26 duration-200" src={javascript} alt="JavaScript" />
          </div>

          <div>
          <label className="text-3xl" htmlFor="#tail">Tailwind</label>
          <img id="tail" className="h-24 w-24 hover:h-26 hover:w-26 duration-200" src={tailwind} alt="Tailwind" />
          </div>

          <div>
          <label className="text-3xl" htmlFor="#react">React</label>
          <img id="react" className="h-24 w-24 hover:h-26 hover:w-26 duration-200" src={react} alt="React" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About
