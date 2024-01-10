import React from 'react';
import header from '../images/code_header_pic.png'
import profile from '../images/profile_pic_trimmed.png'
import aboutCollage from '../images/about_me_collage.png'
function Home(){
    return(
    <div>
        <header className="App-header">
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
      <section className="container">
        <div id="about">
            <h2> A little about me…</h2>
            <p id="bitAbout">
                Born in the Dominican Republic and raised in New York City. I consider myself a “Jane of all trades” with many labels like, veteran, mom, homework asistant, former dancer/performer/stage manager, cook, organizer and sustainer home electronics when possible. I like good food, espresso coffee, and just about every kind of art medium imaginable from going to museums and art walks, live music to cooking/baking, and all things animated, sketching/drawing/painting.
                <br/><a href="/about">Read more...</a>
            </p>
            <img id="meCollage" src={aboutCollage}/>
        </div>
      </section>

      
    </div>
    
    )
}
export default Home;