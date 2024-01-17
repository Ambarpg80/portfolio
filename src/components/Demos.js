import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Demos(){
    return(
    <div>
        <Container>
            <Row id="projects">
                <h2> Projects </h2>
                <Col  xl={4} lg={6} md={3}id="project1" >
                    <iframe id="project-image1" src="https://youtube.com/embed/JWljb31Qi0A" title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                    {/* <img id="project-image1" src={litquest}/> */}
                    <p>LitQuest is an application with the intent to make children better readers by allowing them to keep a book log of the books they read via summaries. It also allows parents to read the summaries and engage their children in discussion. Capstone Project.</p>
                </Col>
                <Col xl={4} lg={6} md={3} id="project2" >
                    <iframe id="project-image2" src="https://youtube.com/embed/fjyCoFFDt0k" title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                    <p>JobLancer is an job search application for users to read & filter job posts, create, update and withdraw job applications. It was meant to showcase what we'd learned using Ruby on Rails framework during the 4th phase of the Flatiron school curriculum.</p>
                </Col>
                <Col xl={4} lg={6} md={3} id="project3" >
                    <iframe id="project-image3" src="https://youtube.com/embed/6rB0yk_Xpxg" title="LitQuest Demo" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                    <p> Rent a Ride is an application for customer service agents to read, create, update and remove reservations as well inventory. It was meant to showcase what we'd learned about object oriented programming using Ruby and Sinatra framework during the 3rd phase of the Flatiron school curriculum.</p>
                </Col>
                <Col xl={4} lg={6} md={3} id="project4" >
                    <iframe id="project-image4" src="https://youtube.com/embed/AIMN99lmIHo" title="Harry Potter Trivia" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                    <p> Wizdom Project is a Harry Potter Trivia application that I created for the 2nd phase of the Flatiron school curriculum. It was meant to showcase what we'd learned abouit the React library.  </p>
                </Col>
                <Col xl={4} lg={6} md={3} id="project5" >
                    <iframe id="project-image5" src="https://youtube.com/embed/bhNpbwWgHhc" title="It's a Wrap" loading="lazy" frameborder="0" referrerPolicy="origin" ></iframe>
                    <p> It's a Wrap is a website created for the first phase of the Flatiron school curriculum. It's meant to serve as a website for a gift wrapping service. It was created using HTML, CSS and Javascript with some JQuery.</p>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
export default Demos;