import React from 'react';
import Home from './components/home'; // აქ export ვუშვები Home ფუნქხიას
import About from './components/about' // აქ export ვუშვები About ფუნქხიას
import Contact from './components/contact' // აქ export ვუშვები Contact ფუნქხიას

function App() {
  return (
    <div className='text-center'> 
      <Home /> {/*აქ ვიძახებთ Home ფუნქციას*/}
      <About /> {/*აქ ვიძახებთ About ფუნქციას*/}
      <Contact /> {/*აქ ვიძახებთ Contact ფუნქციას*/}
    </div>

  );
}

export default App;