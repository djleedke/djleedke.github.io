
//Assets
import profilePic from '../assets/me.png';

//React-Bootstrap
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

//React-Router
import { NavLink } from 'react-router-dom';

function Resume(){
    return(
        <div className="resume-page">
            <Container>
                <Row>
                    <div className="text-center">
                        <h2 className="pt-lg-5 pt-3 pb-3 fw-bold">Resume</h2>
                    </div>
                </Row>
            </Container>
            <hr className="break"></hr>
            <Container className="px-xl-5 px-2 resume-container">
                    <div className="resume-wrapper p-5 mt-5 mb-5">
                        <Row className="resume-header">
                            <div className="col-lg-9 col-md-8 col-12">
                                <h2 className="resume-name mb-0">DOUG LEEDKE</h2>
                                <div className="resume-tagline">Software Developer</div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 mt-lg-1 mt-3 mb-1">
                                <div className="resume-link"><i class="fas fa-envelope me-2"></i>djleedke@gmail.com</div>
                                <div className="resume-link mt-2"><i class="fas fa-globe me-2"></i>djleedke.github.io</div>
                                <div className="resume-link mt-2"><i class="fas fa-map-marker-alt me-2"></i>Minneapolis, MN</div>
                            </div>
                        </Row>
                        <hr className="break"></hr>
                        <Row className="resume-bio mt-4 mb-4">
                            <div className="col-xl-2 col-12 text-center">
                                <Image roundedCircle src={profilePic} alt="Profile picture for Doug Leedke" />
                            </div>
                            <div className="col-xl-10 col-12 mt-xl-0 ms-xl-0 mt-4">
                                <p className="resume-bio-description">
                                    Hi everyone! My name is Doug and I am a full-stack Software Developer focused primarily on front & backend web development.
                                    I am currently working on my CS degree in Oregon State University's online post-baccalaureate
                                    program.  Below you will find my work experience as well as some of the personal projects that I 
                                    have put together so far.  Feel free to <NavLink to="/contact">reach out</NavLink> to me if you have any questions!  
                                </p>
                            </div>
                        </Row>
                        <hr className="break"></hr>
                        <div>

                        </div>
                    </div>
            </Container>
        </div>
    );
}

export default Resume;