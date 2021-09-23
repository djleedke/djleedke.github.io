
//EmailJS
import emailjs from 'emailjs-com';

//Keys
import Keys from '../components/Keys';

//React
import { useState } from 'react';

//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact(){

    //Form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //Success message
    const [successMessage, setSuccessMessage] = useState("Get In Touch");

    emailjs.init(Keys.userId);

    //On form submit email message is sent via emailJS
    const handleSubmit = (event) => {
        
        var params = {
            from_name : name,
            email : email,
            message : message
        }

        emailjs.send(Keys.service_id, Keys.template_id, params)
            .then((response) => {
                console.log('emailJS: SUCCESS', response.status, response.text);
                setName("");
                setEmail("");
                setMessage("");
                setSuccessMessage("Message Sent!");
            }, (error) => {
                console.log('emailJS: FAILED', error);
                setSuccessMessage("Message Sent!");
            });
        
        event.preventDefault();
    }

    return(
        <div className="contact-page">
            <Container>
                <Row className="mb-lg-4 mb-3">
                    <div className="text-center">
                        <h2 className="pt-lg-5 pt-3 fw-bold">Contact</h2>
                        <p className="portfolio-description">Want to say hello?  Fill out the contact form below!</p>
                        <div className="mt-3">Need more info? Find me on these sites also: </div>
                        <div className="mt-3">
                            <a className="ms-2 me-2" href="https://github.com/djleedke" target="_blank" rel="noreferrer"><i class="fab fa-github-alt fs-4"></i></a>
                            <a className="ms-2 me-2" href="https://www.linkedin.com/in/djleedke/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in fs-4"></i></a>
                        </div>
                    </div>
                </Row>
            </Container>
            <hr className="break"></hr>
            <Container>
                <Form className="col-lg-8 mx-lg-auto" onSubmit={ e => {handleSubmit(e)}}>
                    <h3 className="fw-bold text-center mt-4">{successMessage}</h3>
                    <Form.Group className="mt-1">
                        <Row>
                            <div className="col-md-6 col-12 mt-3">
                                <Form.Control name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
                            </div>
                            <div className="col-md-6 col-12 mt-3">
                                <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                            </div>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Control as="textarea" placeholder="Enter your message" rows={10} value={message} onChange={e => setMessage(e.target.value)} required/>
                    </Form.Group>
                    <Button type="submit" className="fw-bold mt-4" variant="primary">
                        Send Now
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Contact;