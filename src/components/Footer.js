import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
    
        <Container >
          <footer>
            <h2> Let's make something together</h2>
            <a href="mailto:ambarpg80@gmail.com"><button> Reach Out</button></a>
        
            <Row >
              <Col>
                <a href="https://github.com/Ambarpg80" ><i className="fa-brands fa-square-github"></i></a> 
              </Col>
              <Col>
                <a href="https://www.linkedin.com/in/ambar-in-dev/" ><i className="fa-brands fa-linkedin"></i></a>
              </Col>
            </Row>
        </footer>
      </Container>
    )
}
export default Footer;