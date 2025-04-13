import React from 'react';

const About = () => {

  const Clicked = () => {
    console.log("I am a 6.5ft feminist");
  };

  return (
    <div className='text-center'>
      <p className=''>
        Hello my name is Demetre Goisashvili, I am a Web-Developer / 6.5ft, Nonchalant<br />
        Depressed, Mogger, Smart and a feminist, wait. did i mention<br />
        that im a feminist? Lorem ipsum, dolor sit amet<br />
        consectetur adipisicing elit. Eos maiores quae<br />
        totam exercitationem illo ea minima nam animi similique cum fugit maxime tenetur.
      </p>
      <button onClick={Clicked} className='b bg-amber-600 h-13 w-40 hover:h-15 hover:w-42 hover:bg-amber-400 duration-200'>Learn More</button>
    </div>
  );
};

export default About;