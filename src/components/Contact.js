import React , {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import coffee from '../images/coffee_cups.png'

function Contact(){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [message, setMessage]= useState("")

    // function handleEmail(){
    //     Email.send({
    //         Host : "smtp.gmail.com",
    //         Username : {email},
    //         Password : "password",
    //         To : "ambarpg80@gmail.com",
    //         From : {email},
    //         Subject : "New Contact Inquiry Form- AmbarInDev",
    //         Body : {message}
    //     }).then(
    //       message => alert(message)
    //     )
    //     .then((message,error) => message ? alert("Message sent successfully") : alert(error))
    //     // .then(data=>data)
    // }
// 
    return(
    <Container>
        <Row id="form-row">
            <Col>
                <form  action="smtp.gmail.com" method="post" enctype="text/plain" >
                    <p> Reach out by filling out the contact form below if you’d like to collaborate or let me know how I can help. I love a good espresso…</p>
                    <label >Name</label>
                        <input type="text" id="name" placeholder="Name (required)" value={(e)=>setName(e.target.value)} required autoFocus/>
                    <label>Email address</label>
                        <input type="email" id="email" placeholder="Email (required)"  value={(e)=>setEmail(e.target.value)} required/>
                    {/* <label>Subject</label>
                        <input type="text" id="subject" placeholder="Subject" /> */}
                    <label>Message</label>
                        <textarea as="textarea" id="message" type="text" rows={8} value={(e)=>setMessage(e.target.value)} required></textarea>
                </form>
                  <button id="form-button1" type='submit' value="Send" formaction="mailto:ambarpg80@gmail.com" formmethod="post" >Send</button>
                  <button id="form-button2" type="reset" value="Reset" >Reset</button>
            </Col>
            <Col>
                <img id="coffee-img" src={coffee} alt="cups of coffee"/>  
            </Col>
        </Row>
    </Container>
    )
}
export default Contact;