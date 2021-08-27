
import placeholder from '../assets/placeholder.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Intro () {
    return(
        <Container className="intro">
            <Row className="pt-5 pb-5">
                <div className="col-lg-7">
                    <h1 className="fw-bold mb-1">Doug Leedke</h1>
                    <div className="job-title fw-light mb-3">Software Developer</div>
                    <p className="mb-4">
                        I'm a software engineer focused on front and backend development for web applications. 
                        Please have a look at my <a href="#">portfolio</a>, and feel free to check out my <a href="#">resume</a> as well!
                        If you'd like to reach out to me, send me a message <a href="#">here</a>!
                    </p>
                    <Button className="me-3 fw-bold ps-3 pe-3">
                        <i class="fa fa-arrow-circle-o-right me-2" aria-hidden="true"></i>
                        <span className="d-none d-md-inline">View </span>Portfolio
                    </Button>
                    <Button variant="secondary" className="fw-bold ps-3 pe-3">
                        <i className="fa fa-file-text-o me-2" aria-hidden="true"></i>
                        <span className="d-none d-md-inline">View </span> Resume
                    </Button>
                </div>
                <div className="col-lg-5 mt-lg-0 mt-4">
                    <Image fluid src={ placeholder } className="intro-picture img-fluid" alt="Picture of Doug" />
                </div>
            </Row>
        </Container>
    );
}

export default Intro;