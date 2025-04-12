import React from 'react';

function About() {
  const handleClick = () => { //ეს არის ფუნქცია რომელიც აკეთებს console.log('')
    console.log("About");
  };

  return (
    <>
      <h1 className='text-amber-500 text-6xl font-sans mt-10'>This is the About page.</h1> {/*ეს არის ჩემი h1 რომელიც არის გასტილული Tailwind-ის საშუალებით*/}
      <button  className='bg-amber-400 w-50 h-15 font-extrabold cursor-pointer hover:scale-105 hover:bg-red-400 transition duration-300' onClick={handleClick}>Click Me</button> {/*ეს არის ღილაკი რომელზეც მაქვს გამოყენებული onClick={აქ არის ფუნქცია Clicked, ანუ დაჭერისას ხდება ამ ფუნქციის გამოძახება}*/}
    </>
  );
}

export default About; // ამის მეშვეობთ export ვუშვებით ამ ფუნქციას რათა შევძლოდ მისი გამოყენება სხვა ფაილებში მაგ: App.jsx