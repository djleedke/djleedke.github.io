
//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact(){
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
                <Form className="col-lg-8 mx-lg-auto">
                    <h3 className="fw-bold text-center mt-4">Get In Touch</h3>
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