import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import header from '../images/code_header_pic.png'
import profile from '../images/profile_pic_trimmed.png'
function App() {
  return (
    <div className="App">
      <header className="App-header"><NavBar />
        <div className="container"  >
          <div > 
            <img src={profile} id="profile-pic"/>  
          </div>
          <div id="header-text" >
              <h1>Hi, my name is Ambar</h1>
              <h2>Full Stack Developer</h2>
              <h4>I work in Javascript, React, Ruby, Ruby on Rails </h4>
        </div>
        <img src={header} id="header-image"/> 
      </div>
      </header>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes> 
    
    </div>
  );
}

export default App;
