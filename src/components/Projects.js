
import project from '../assets/project1.png';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

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
                            <div className="col-12 col-xl-5">
                                <Image fluid src={ project } alt="Project 1"></Image>
                            </div>
                            <div className="col-12 col-xl-7">
                                <div className="card-body">
                                    This is project #1
                                </div>
                            </div>
                        </Row>                        
                    </Card>
                </div>
                <div className="col-md-6">
                <Card className="project-card mb-5">
                        <Row className="g-0">
                            <div className="col-12 col-xl-5">
                                <Image fluid src={ project } alt="Project 1"></Image>
                            </div>
                            <div className="col-12 col-xl-7">
                                <div className="card-body">
                                    This is project #2
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