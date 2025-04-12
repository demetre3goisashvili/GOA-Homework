import React from 'react';

function Contact() {
  const handleClick = () => { //ეს არის ფუნქცია რომელიც აკეთებს console.log('')
    console.log("Contact");
  };

  return (
    <>
      <h1 className=' text-fuchsia-500 text-6xl font-sans mt-10'>This is the Contact page.</h1> {/*ეს არის ჩემი h1 რომელიც არის გასტილული Tailwind-ის საშუალებით*/}
      <button  className='bg-fuchsia-500 w-50 h-15 font-extrabold cursor-pointer hover:scale-105 hover:bg-purple-700 transition duration-300' onClick={handleClick}>Click Me</button> {/*ეს არის ღილაკი რომელზეც მაქვს გამოყენებული onClick={აქ არის ფუნქცია Clicked, ანუ დაჭერისას ხდება ამ ფუნქციის გამოძახება}*/}
    </>
  );
}

export default Contact; // ამის მეშვეობთ export ვუშვებით ამ ფუნქციას რათა შევძლოდ მისი გამოყენება სხვა ფაილებში მაგ: App.jsx
