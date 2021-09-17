
//My Components
import ProjectCard from './ProjectCard';

//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//React-Router
import { useHistory } from "react-router-dom";

function Projects () {

    //These lines are to allow the buttons to navigate using react-router,
    //cleaner than using CSS and href in the button which reloads page
    const history = useHistory();

    function handleButtonClick(path){
        history.push(path);
    }

    return(
        <Container className="featured-projects mt-3">
            <Row className="ps-3">
                <h2 className="section-title fw-bold mt-4 mb-3">Featured Projects</h2>
            </Row>
            <Row className="pt-2">
                <div className="col-md-6">
                    <ProjectCard 
                        overlay={false}
                        projectName="TweetryDish"
                        projectUrl="https://tweetry-dish-app.herokuapp.com/"
                        projectDescription="Vote to modify a daily quote to your liking.  The quote is automatically tweeted each day with the highest voted words!"
                        imagePath="https://user-images.githubusercontent.com/33850990/88748945-e2569700-d117-11ea-8278-4c2492034b2a.gif"
                    />
                </div>
                <div className="col-md-6">
                    <ProjectCard
                        overlay={false}
                        projectName="ChatCode"
                        projectUrl="https://chat-code-app.herokuapp.com/"
                        projectDescription="Chat with your friends, but be sure to decode the messages before they disappear forever!"
                        imagePath="https://user-images.githubusercontent.com/33850990/88751848-1f258c80-d11e-11ea-8e2d-0ee1dc42bed7.gif"
                    />
                </div>
                <div className="col-md-6">
                    <ProjectCard 
                        overlay={false}
                        projectName="PingPi"
                        projectUrl="https://github.com/djleedke/ping-pi-app"
                        projectDescription="An application that allows you to schedule pings to websites of your choosing via a web interface."
                        imagePath="https://user-images.githubusercontent.com/33850990/95130173-caa41c00-0721-11eb-832d-cab79e4f5128.gif"
                    />
                </div>
            </Row>
            <Row>
                <div className="text-center mb-5">
                    <Button onClick={() => handleButtonClick("portfolio")} className="fw-bold ps-3 pe-3">
                        <i className="fa fa-arrow-circle-o-right me-2" aria-hidden="true"></i>
                        <span>View Portfolio</span>
                    </Button>
                </div>
            </Row>
        </Container>
    );
}

export default Projects;