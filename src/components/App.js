import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Demos from './Demos';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav > <NavBar /> </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="demos" element={<Demos/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="contact_me" element={<Contact/>}/>
        </Routes> 
    
    </div>
  );
}

export default App;
