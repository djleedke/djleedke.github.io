
import placeholder from '../assets/placeholder.png';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';

function Main(){
    return(
        <div className="min-vh-100">
            <Container className="about-me">
                <Row className="pt-5 pb-5">
                    <div className="col-lg-7">
                        <h1 className="fw-bold">Doug Leedke</h1>
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
                        <Image fluid src={ placeholder } className="about-me-picture img-fluid" alt="Picture of Doug" />
                    </div>
                </Row>
            </Container>
            <hr class="break"></hr>
            <Container className="overview mt-3">
                <Row className="ps-3">
                    <h2 className="section-title fw-bold mt-4 mb-3">What I do</h2>
                    <p className="p-0">
                        I am always working on improving my coding chops in many different frameworks and languages.  Here are a few that I am most comfortable with:
                    </p>
                </Row>
                <Row className="ps-3 mt-3">
                    <div className="overview-item col-lg-3 col-6">
                        <div className="overview-icons">
                            <i class="fab fa-html5 pe-2"></i>
                            <i class="fab fa-css3-alt pe-2"></i>
                            <i class="fab fa-js-square pe-2"></i>
                        </div>
                        <div className="overview-item-title">
                            HTML, CSS, & Javascript
                        </div>
                        <div className="overview-item-content">
                            I have a strong understanding of HTML, CSS, and Javascript.  The building blocks
                            of web development.
                        </div>
                    </div>
                    <div className="overview-item col-lg-3 col-6">
                        <div className="overview-icons">
                            <i class="fab fa-react"></i>
                        </div>
                        <div className="overview-item-title">
                            React
                        </div>
                        <div className="overview-item-content">
                            The magic behind this site!  I have several React projects up and running check them out <a href="#">here</a>.
                            Django & React are my preferred web development stack (at the moment).
                        </div>
                    </div>
                    <div className="overview-item col-lg-3 col-6">
                        <div className="overview-icons">
                            <i class="fab fa-python"></i>
                        </div>
                        <div className="overview-item-title">
                            Python & Django
                        </div>
                        <div className="overview-item-content">
                            Currently focused on mastering the ins and outs of Python.  Django is my backend of choice but I'm always
                            up for learning something new!
                        </div>
                    </div>
                    <div className="overview-item col-lg-3 col-6">
                        <div className="overview-icons">
                            <i class="fas fa-chalkboard"></i>
                        </div>
                        <div className="overview-item-title">
                            ...and beyond!
                        </div>
                        <div className="overview-item-content">
                            I am always eager to learn more!  Other frameworks & languages that I have exposure to include: 
                            Bootstrap, C#, Flask, Java, jQuery, PHP, and SQL.
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <hr class="mt-3"></hr>
            </Container>
            <Container className="featured-projects mt-3">
                <Row className="ps-3">
                    <h2 className="section-title fw-bold mt-4 mb-3">Featured Projects</h2>
                    <p className="p-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at arcu quis sem vehicula porttitor
                        a sit amet nulla. Vestibulum vestibulum ligula at risus accumsan, sit amet consequat urna auctor.
                    </p>
                </Row>
            </Container>
        </div>        
    );
}

export default Main