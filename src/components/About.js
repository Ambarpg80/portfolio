import React from 'react';
import timesquare from "../images/Times_Square.jpg"
import tarmac from "../images/Tarmac_in_uniform.png"
import orlando from "../images/Orlando_Skyline.jpg"
import dobetter from "../images/Better_today_quote.jpg"


function About(){


    return(
    <div>
       <section  className="container">
        <div id="about-page"> 
            <h2> Getting to know me better...</h2>
            <div className="row">
                <div className="column">
                    <p id="bio1" >
                        Born in the Dominican Republic and raised in New York City. I consider myself a “Jane of trades” with many labels like, veteran, mom, homework assistant, former dancer/performer/stage manager, cook, organizer and sustainer home electronics when possible. I like good food, espresso coffee, and just about every kind of art medium imaginable from going to museums and art walks, live music to cooking/baking, and all things animated, sketching/drawing/painting.
                    </p>
                </div>
               
                    <div className="column">
                        <img  id="about-image1" src={timesquare} alt="Times Square, NYC"/>
                    </div>
            </div> 
            <div className="row">
                <div className="column">
                    <p id="bio2" >
                        I joined the Army Reserves where I studied nutrition & food service and completed eight years of service after a tour in Iraq.During my time as a reservist, I earned a Bachelors Degree for a double major in Dance and Theater from Hunter College. I had the privilege of performing for choreographers like Keely Garfield & Heidi Latsky and directors Yuto Kurosaka & Feliziano Flores.  I also worked as a Stage Manager for productions at the Fringe Festival, I.R.T. Theater and the Kaye Playhouse in New York City.
                    </p>
                </div>
                <div className="column">
                    <img  id="about-image2" src={tarmac} alt="myself in military uniform on airport tarmac"/>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <p id="bio3" >
                        I relocated to Florida where I was called by a recruiter named “Destiny” to try something new and study IT through a veteran vocational program from New Horizons. Soon after completing the program I started working as Production Support Specialist for a telehealth company and found a connection and appreciation for the software development process. I attempted to teach myself to code and realized that I needed structure, but the pandemic put things on hold. Instead, I took an opportunity to work as an IT Support Analyst, which aligned with the training I’d done with New Horizons. After almost 2 years in the position, I realized that it was not the career I wanted to continue. Soon after I found myself at Flatiron School where I would again make a life pivot, this time towards software development.
                    </p>
                </div>
                <div className="column">
                    <img  id="about-image3" src={orlando} alt="Orlando skyline"/>
                </div>
            </div>
            <div className="row">
                <div  className="column" >
                    <h3>What I Value</h3>
                    <div>
                        <p className="values">
                            What started as a fateful phone call in 2017, has since grown into a thriving career path, thanks to hard work, dedication, and unwavering support of my family and friends.
                        </p>
                        <p className="values">
                            I value time with my family, honesty, kindness, the ability to have personal & professional growth and respect for my time and effort. I also appreciate communication, strong work ethic and collaboration without competition.
                        </p>
                    </div>
                    <div className="column">
                        <img  id="quote-img" src={dobetter} alt="Orlando skyline"/>
                    </div>
                </div>
            </div>    
        </div>
      </section>

    </div>
    )
}
export default About;