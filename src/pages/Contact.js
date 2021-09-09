
//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact(){
    return(
        <div className="contact-page">
            <Container>
                <Row className="mb-5">
                    <div className="text-center">
                        <h2 className="pt-lg-5 pt-3 fw-bold">Contact</h2>
                        <p className="portfolio-description">Want to say hello?  Fill out the contact form below!</p>
                    </div>
                </Row>
            </Container>
            <hr className="break"></hr>
            <Container>
                <Form className="col-lg-8 mx-lg-auto">
                    <h3 className="fw-bold text-center mt-5">Get In Touch</h3>
                    <Form.Group className="mt-1">
                        <Row>
                            <div className="col-md-6 col-12 mt-3">
                                <Form.Control type="text" placeholder="Name" required/>
                            </div>
                            <div className="col-md-6 col-12 mt-3">
                                <Form.Control type="email" placeholder="Email" required/>
                            </div>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Control as="textarea" placeholder="Enter your message" rows={10} required/>
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