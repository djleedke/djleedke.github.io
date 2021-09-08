//Assets
import placeholder from '../assets/placeholder.png';

//React-Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

//React-Router
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Intro () {

    //These lines are to allow the buttons to navigate using react-router,
    //cleaner than using CSS and href in the button which reloads page
    const history = useHistory();

    function handleButtonClick(path){
        history.push(path);
    }

    return(
        <Container className="intro">
            <Row className="pt-md-5 pt-2 pb-4">
                <div className="col-lg-7">
                    <h1 className="fw-bold mb-1">Doug Leedke</h1>
                    <div className="job-title fw-light mb-3">Software Developer</div>
                    <p className="mb-4">
                        I'm a software engineer focused on front and backend development for web applications. 
                        Please have a look at my <NavLink to="/portfolio">portfolio</NavLink>, and feel free to check out my <NavLink to="/resume">resume</NavLink> as well!
                        If you'd like to reach out to me, send me a message <NavLink to="/contact">here</NavLink>!
                    </p>
                    <Button onClick={() => handleButtonClick("portfolio")} className="me-3 fw-bold ps-3 pe-3">
                        <i className="fa fa-arrow-circle-o-right me-2" aria-hidden="true"></i>
                        <span className="d-none d-md-inline">View </span>Portfolio
                    </Button>
                    <Button onClick={() => handleButtonClick("resume")} variant="secondary" className="fw-bold ps-3 pe-3">
                        <i className="fa fa-file-text-o me-2" aria-hidden="true"></i>
                        <span className="d-none d-md-inline">View </span> Resume
                    </Button>
                </div>
                <div className="col-lg-5 mt-lg-0 mt-4">
                    <Image fluid src={ placeholder } className="intro-picture" alt="Picture of Doug" />
                </div>
            </Row>
        </Container>
    );
}

export default Intro;