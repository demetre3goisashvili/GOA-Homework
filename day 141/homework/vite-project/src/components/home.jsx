import React from 'react';

function Home() {
  const Clicked = () => {   //ეს არის ფუნქცია რომელიც აკეთებს console.log('')
    console.log("Home");
  };

  return (
    <>
    <div>
    <h1 className='text-emerald-400 text-6xl font-sans'>This is the Home page.</h1> {/*ეს არის ჩემი h1 რომელიც არის გასტილული Tailwind-ის საშუალებით*/}
    <button className='bg-emerald-400 w-50 h-15 font-extrabold cursor-pointer hover:scale-105 hover:bg-cyan-900 transition duration-300' onClick={Clicked}>Click Me</button> {/*ეს არის ღილაკი რომელზეც მაქვს გამოყენებული onClick={აქ არის ფუნქცია Clicked, ანუ დაჭერისას ხდება ამ ფუნქციის გამოძახება}*/}
    </div>
    </>
  );
}

export default Home; // ამის მეშვეობთ export ვუშვებით ამ ფუნქციას რათა შევძლოდ მისი გამოყენება სხვა ფაილებში მაგ: App.jsx
