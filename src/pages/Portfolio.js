
//My Components
import ProjectCard from '../components/ProjectCard';

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

    function handleButtonClick(path){
        history.push(path);
    }

    return(
        <div className="portfolio-page">
            <Container>
                <Row className="text-center">
                    <div className="text-center">
                        <h2 className="pt-lg-5 pt-3 fw-bold">Portfolio</h2>
                        <p className="portfolio-description">Welcome to my portfolio!  Here you will find a collection of my projects both professional and hobby.  Feel free to take a look around!</p>
                        <Button onClick={() => handleButtonClick("contact")} className="fw-bold mt-3 mb-3 ps-3 pe-3">
                            <i className="fas fa-paper-plane me-2" aria-hidden="true"></i>
                            <span>Hire Me</span>
                        </Button>
                    </div>
                </Row>
            </Container>
            <hr className="break"></hr>
            <Container>
                <Row className="mt-5">
                    <div className="col-md-6">
                        <ProjectCard 
                            projectName="TweetryDish"
                            projectDescription="Vote to modify a daily quote to your liking.  The quote is automatically tweeted each day with the highest voted words!"
                            imagePath="https://user-images.githubusercontent.com/33850990/88748945-e2569700-d117-11ea-8278-4c2492034b2a.gif"
                        />
                    </div>
                    <div className="col-md-6">
                        <ProjectCard 
                            projectName="ChatCode"
                            projectDescription="Chat with your friends, but be sure to decode the messages before they disappear forever!"
                            imagePath="https://user-images.githubusercontent.com/33850990/88751848-1f258c80-d11e-11ea-8e2d-0ee1dc42bed7.gif"
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;