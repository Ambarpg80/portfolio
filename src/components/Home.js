import React from 'react';
import header from '../images/code_header_pic.png'
import profile from '../images/profile_pic_trimmed.png'
import aboutCollage from '../images/about_me_collage.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


function Home(){
    
    return(
    <div >
        <Container className="App-header">
            <Row id="header">
                <Col   > 
                    <Image src={profile} id="profile-pic" alt="profile" roundedCircle fluid/>  
                </Col>
                <Col id="header-text" sm={2} md={2} lg={5} >
                    <h1>Hi, my name is Ambar</h1>
                    <h2>Full Stack Developer</h2>
                    <h4>I work in Javascript, React, Ruby, Ruby on Rails </h4>
                </Col>
             </Row> 
        </Container>
        <Image src={header} id="header-image" alt="blurred code background" fluid/> 
      
      <Container >
        <Row id="about">
            <h2> A little about me…</h2>
            <Col sm={3} md={3} lg={5}>
            <p id="bitAbout" className="lh-lg text-md-start" >
                Born in the Dominican Republic and raised in New York City. I consider myself a “Jane of all trades” with many labels like, veteran, mom, homework asistant, former dancer/performer/stage manager, cook, organizer and sustainer home electronics when possible. I like good food, espresso coffee, and just about every kind of art medium imaginable from going to museums and art walks, live music to cooking/baking, and all things animated, sketching/drawing/painting.
                    <br/><Link to="/about"  id="moreAbout">Read more...</Link>
                </p>
                </Col>
            <Col md={2}></Col>
            <Col md={4}> 
                <img   src={aboutCollage} id="meCollage"  alt="favorite activities collage"/> 
            </Col>
        </Row>
      </Container>
     
      
      <Container>
        <Row id="projects">
            <h2> Projects </h2>

            <Col  xl={4} lg={6} md={3}id="project1" >
                <iframe id="project-image1" src="https://youtube.com/embed/JWljb31Qi0A" title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                {/* <img id="project-image1" src={litquest}/> */}
                <p>LitQuest is an application with the intent to make children better readers by allowing them to keep a book log of the books they read via summaries. It also allows parents to read the summaries and engage their children in discussion.</p>
            </Col>
            <Col xl={4} lg={6} md={3} id="project2" >
                <iframe id="project-image2" src="https://youtube.com/embed/fjyCoFFDt0k" title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                <p>JobLancer is an job search application for users to read & filter job posts, create, update and withdraw job applications .</p>
            </Col>
            {/* <Col xl={4} lg={6} md={3} id="project3" >
                <iframe id="project-image3" src="https://youtube.com/embed/6rB0yk_Xpxg"title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                <p> Rent a Ride is an application for customer service agents to read, create, update and remove reservations as well inventory.</p>
            </Col> */}
            <Link to="/demos" id="demos-link"> See all Demos</Link>
        </Row>
      </Container>

      <Container >
        <Row id="blogs" >
            <h2> Blogs </h2>
            <Col  md={3} id="blog1" >
                <a href="https://ambarindev.wordpress.com/2023/11/08/setting-up-delegated-types/"> <h3>Setting up Delegated Types</h3>
                    <p>November 8, 2023</p>
               </a>
            </Col>
            <Col md={3} id="blog2" >
              <a href="https://ambarindev.wordpress.com/2023/09/12/rendering-json-and-serialization/"> 
                <h3>Rendering JSON and Serialization</h3>
                <p>September 12, 2023</p>
                </a>
            </Col>
            <Col md={3} id="blog3" >
                 <a href="https://ambarindev.wordpress.com/2023/05/24/using-pluralization-and-singularization-in-active-record/">
                    <h3>Using Pluralization and Singularization in Active Record</h3>
                    <p> May 24, 2023</p>
               </a>
            </Col>
            <a href="https://ambarindev.wordpress.com/" id="blogs-link"> See all Blogs</a>
        </Row>
      </Container>

    </div>
    
    )
}
export default Home;