
//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

//React-Router
import NavLink from 'react-router-dom/NavLink';

function Projects () {
    return(
        <Container className="featured-projects mt-3">
            <Row className="ps-3">
                <h2 className="section-title fw-bold mt-4 mb-3">Featured Projects</h2>
            </Row>
            <Row className="pt-2">
                <div className="col-md-6">
                    <Card className="project-card mb-5">
                        <Row className="g-0">
                            <div className="project-img col-12 col-xl-7 position-relative">
                                <div className="project-img-overlay">
                                    <Button variant="secondary"><i className="fas fa-eye me-1"></i> View Case Study</Button>
                                </div>
                                <Image fluid src="https://user-images.githubusercontent.com/33850990/88748945-e2569700-d117-11ea-8278-4c2492034b2a.gif" alt="TweetryDish"></Image>
                            </div>
                            <div className="col-12 col-xl-5">
                                <div className="card-body">
                                    <NavLink to="/">TweetryDish</NavLink>
                                    <p className="mt-2 project-description">
                                        Vote to modify a daily quote to your liking.  The quote is automatically tweeted each day
                                        with the highest voted words!
                                    </p>
                                </div>
                            </div>
                        </Row>                        
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card className="project-card mb-5">
                        <Row className="g-0">
                            <div className="project-img col-12 col-xl-7 position-relative">
                                <div className="project-img-overlay">
                                    <Button variant="secondary"><i className="fas fa-eye me-1"></i> View Case Study</Button>
                                </div>
                                <Image fluid src="https://user-images.githubusercontent.com/33850990/88751848-1f258c80-d11e-11ea-8e2d-0ee1dc42bed7.gif" alt="ChatCode"></Image>
                            </div>
                            <div className="col-12 col-xl-5">
                                <div className="card-body">
                                <NavLink to="/">ChatCode</NavLink>
                                    <p className="mt-2 project-description">
                                        Chat with your friends, but be sure to decode the messages before they disappear forever!
                                    </p>
                                </div>
                            </div>
                        </Row>                        
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default Projects;