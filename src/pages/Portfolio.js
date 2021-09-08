//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';


//React-Router-Dom
import { useHistory } from "react-router-dom";

function Portfolio(){

    //These lines are to allow the buttons to navigate using react-router,
    //cleaner than using CSS and href in the button which reloads page
    const history = useHistory();

    function handleClick(path){
        history.push(path);
    }

    return(
        <div className="portfolio-page">
            <Container>
                <Row>
                    <div className="text-center">
                        <h2 className="pt-lg-5 pt-3 fw-bold">Portfolio</h2>
                        <p className="portfolio-description">Welcome to my portfolio!  Here you will find a collection of my projects both professional and hobby.  Feel free to take a look around!</p>
                        <Button onClick={() => handleClick("contact")} className="fw-bold mt-3 mb-3 ps-3 pe-3">
                            <i className="fas fa-paper-plane me-2" aria-hidden="true"></i>
                            <span>Hire Me</span>
                        </Button>
                    </div>
                </Row>
            </Container>
            <hr className="break"></hr>
        </div>
    );
}

export default Portfolio;