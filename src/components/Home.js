import React from 'react';
import header from '../images/code_header_pic.png'
import profile from '../images/profile_pic_trimmed.png'
import aboutCollage from '../images/about_me_collage.png'
// import litquest from '../images/LitQuest_Screenshot.png'
// import joblancer from  '../images/JobLancer_homepage.png'
// import rentaride from '../images/Rent_A_Ride.png'
function Home(){
    return(
    <div >
        <header className="App-header">
            <section className="container"  >
                <div > 
                    <img src={profile} id="profile-pic"/>  
                </div>
                <div id="header-text" >
                    <h1>Hi, my name is Ambar</h1>
                    <h2>Full Stack Developer</h2>
                    <h4>I work in Javascript, React, Ruby, Ruby on Rails </h4>
                </div>
                <img src={header} id="header-image"/> 
            </section>
      </header>
      <section  className="container">
        <div id="about"> 
        <h2> A little about me…</h2>
        <div className="column">
           <p id="bitAbout" >
                Born in the Dominican Republic and raised in New York City. I consider myself a “Jane of all trades” with many labels like, veteran, mom, homework asistant, former dancer/performer/stage manager, cook, organizer and sustainer home electronics when possible. I like good food, espresso coffee, and just about every kind of art medium imaginable from going to museums and art walks, live music to cooking/baking, and all things animated, sketching/drawing/painting.
                <a href="/about">Read more...</a>
            </p>
        </div>
        <div className="column">
            <img  id="meCollage" src={aboutCollage}/>
            </div>
        </div>
      </section>
      
      <section className="container">
        <div id="projects" >
            <h2> Projects </h2>
            <div  id="project1" className="column">
                <iframe id="project-image1" src="https://youtube.com/embed/JWljb31Qi0A" title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                {/* <img id="project-image1" src={litquest}/> */}
                <p>LitQuest is an application with the intent to make children better readers by allowing them to keep a book log of the books they read via summaries. It also allows parents to read the summaries and engage their children in discussion.</p>
            </div>
            <div  id="project2" className="column">
                <iframe id="project-image2" src="https://youtube.com/embed/fjyCoFFDt0k" title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                <p>JobLancer is an job search application for users to read & filter job posts, create, update and withdraw job applications .</p>
            </div>
            <div  id="project3" className="column">
                <iframe id="project-image3" src="https://youtube.com/embed/6rB0yk_Xpxg"title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                <p> Rent a Ride is an application for customer service agents to read, create, update and remove reservations as well inventory.</p>
            </div>
            <a href="/Demos" id="demos-link"> See all Demos</a>
        </div>
      </section>

      <section className="container" >
        <div id="blogs" row>
            <h2> Blogs </h2>
            <div  id="blog1" className="column">
                <a href="https://ambarindev.wordpress.com/2023/11/08/setting-up-delegated-types/"> <h3>Setting up Delegated Types</h3>
                    <h5>November 8, 2023</h5>
               </a>
            </div>
            <div  id="blog2" className="column">
              <a href="https://ambarindev.wordpress.com/2023/09/12/rendering-json-and-serialization/"> 
                <h3>Rendering JSON and Serialization</h3>
                <h5>September 12, 2023</h5>
                </a>
            </div>
            <div  id="blog3" className="column">
                 <a href="https://ambarindev.wordpress.com/2023/05/24/using-pluralization-and-singularization-in-active-record/">
                    <h3>Using Pluralization and Singularization in Active Record</h3>
                    <p> May 24, 2023</p>
               </a>
            </div>
        </div>
      </section>
      
    </div>
    
    )
}
export default Home;