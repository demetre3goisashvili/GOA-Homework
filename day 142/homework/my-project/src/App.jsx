import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="bg-orange-100 h-screen">
        <nav className="flex justify-center gap-6 py-4 bg-orange-200 shadow-md">
          <Link className="text-lg hover:text-orange-600 transition duration-300" to="/">Home</Link>
          <Link className="text-lg hover:text-orange-600 transition duration-300" to="/about">About</Link>
          <Link className="text-lg hover:text-orange-600 transition duration-300" to="/contact">Contact</Link>
          <Link className="text-lg hover:text-orange-600 transition duration-300" to="/signin">Sign In</Link>
          <Link className="text-lg hover:text-orange-600 transition duration-300" to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
