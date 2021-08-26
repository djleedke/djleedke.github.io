
import placeholder from '../assets/placeholder.png';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';

function Main(){
    return(
        <div className="main min-vh-100">
            <Container fluid>
                <Row className="about-me p-lg-5 p-3">
                    <div className="col-lg-7 col-md-7">
                        <h1 className="fw-bold">Doug Leedke</h1>
                        <h4 className="fw-light mb-2">Software Engineer</h4>
                        <p>I'm a software engineer focused on front and backend development for web applications. Please have a look at my <a href="#">portfolio</a>, and feel free to check out my <a href="#">resume</a> as well!</p>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <Image fluid src={ placeholder } className="img-fluid" alt="Picture of Doug" />
                    </div>
                </Row>
            </Container>
        </div>        
    );
}

export default Main