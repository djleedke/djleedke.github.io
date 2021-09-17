
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
                        <h2 className="pt-lg-5 pt-3 pb-lg-2 pb-0 fw-bold">Resume</h2>
                    </div>
                </Row>
            </Container>
            <hr className="break"></hr>
            <Container className="px-xl-5 px-2 resume-container">
                    <div className="resume-wrapper p-5 mt-lg-5 mt-4 mb-5">
                        <Row className="resume-header">
                            <div className="col-lg-9 col-md-8 col-12 ps-md-3 ps-0">
                                <h2 className="resume-name mb-0">DOUG LEEDKE</h2>
                                <div className="resume-tagline">Software Developer</div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 mt-lg-1 mt-3 mb-1 ps-1">
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
                                <p className="resume-bio-description mb-0">
                                    Hi everyone! My name is Doug and I am a full-stack Software Developer focused primarily on front & backend web development.
                                    I am currently working on my CS degree in Oregon State University's online post-baccalaureate
                                    program.  Below you will find my work experience as well as some of the personal projects that I 
                                    have put together so far.  Feel free to <NavLink to="/contact">reach out</NavLink> to me if you have any questions!  
                                </p>
                            </div>
                        </Row>
                        <hr className="break"></hr>
                        <Row className="resume-body mt-4">
                            <div className="col-lg-9 pe-lg-5">
                                <div className="resume-education-section mb-4">
                                    <h5 className="resume-section-title">EDUCATION</h5>
                                    <div className="resume-entry">
                                        <Row className="mt-3">
                                            <div className="col-lg-8">
                                                <h6 className="resume-entry-title fw-bold">Oregon State University</h6>
                                            </div>
                                            <div className="resume-entry-meta col-lg-4 text-lg-end">
                                                Fall 2021 - Present
                                            </div>
                                        </Row>
                                        <div className="resume-entry-body mt-lg-0 mt-2">
                                            <p className="resume-entry-body mt-lg-0 mt-2">
                                                B.S. Computer Science
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="resume-project-section mb-4">
                                    <h5 className="resume-section-title">PROJECTS</h5>
                                    <div className="resume-entry">
                                        <Row className="mt-3">
                                            <div className="col-lg-8">
                                                <h6 className="resume-entry-title fw-bold">TweetryDish</h6>
                                            </div>
                                            <div className="resume-entry-meta col-lg-4 text-lg-end">
                                                <a href="https://github.com/djleedke/tweetry-dish-app" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://tweetry-dish-app.herokuapp.com/" target="_blank" rel="noreferrer">Website</a>
                                            </div>
                                        </Row>
                                        <div className="resume-entry-body mt-lg-0 mt-2">
                                            <p>
                                            A web app that allows users to vote and modify each word of a daily quote. Each day 
                                            the quote is automatically tweeted with the highest voted words for that day. Built  
                                            using Flask, Python, HTML, CSS, Javascript, JQuery, SQLAlchemy, Tweepy, APScheduler, & teDatamuse API.
                                            Deployed on Heroku.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="resume-entry">
                                        <Row className="mt-3">
                                            <div className="col-lg-8">
                                                <h6 className="resume-entry-title fw-bold">ChatCode</h6>
                                            </div>
                                            <div className="resume-entry-meta col-lg-4 text-lg-end">
                                                <a href="https://github.com/djleedke/chat-code-app" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://chat-code-app.herokuapp.com/" target="_blank" rel="noreferrer">Website</a>
                                            </div>
                                        </Row>
                                        <div className="resume-entry-body mt-lg-0 mt-2">
                                            <p>
                                            A web app that utilizes SocketIO to allow users to chat. Messages must be "decoded" by the 
                                            user to read them (by typing them in). After which they are displayed temporarily and then 
                                            disappear into the internet void, never to be seen again.  Built using Flask, Flask-SocketIO, Python,
                                            HTML, CSS, Javascript, and JQuery.  Deployed on Heroku.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="resume-entry">
                                        <Row className="mt-3">
                                            <div className="col-lg-8">
                                                <h6 className="resume-entry-title fw-bold">PingPi</h6>
                                            </div>
                                            <div className="resume-entry-meta col-lg-4 text-lg-end">
                                                <a href="https://github.com/djleedke/ping-pi-app" target="_blank" rel="noreferrer">GitHub</a>
                                            </div>
                                        </Row>
                                        <div className="resume-entry-body mt-lg-0 mt-2">
                                            <p>
                                            A small web application designed to run on a Raspberry Pi that allows you to schedule pings to 
                                            websites of your choosing via a web interface. It is very useful for waking Heroku apps at specific times.
                                            Built with Flask, Python, HTML, CSS, Javascript, Bootstrap, SQLAlchemy, APScheduler, & easytimer.js.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-sidebar col-lg-3 mb-4">
                                <h5 className="resume-section-title">SKILLS</h5>
                                <div className="skills-section">
                                    <div className="skills-section">
                                        <h6 className="skills-title mt-3 fw-bold">Languages</h6>
                                        <ul className="skills-list">
                                            <li>Python</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                    <div className="skills-section">
                                        <h6 className="skills-title mt-3 fw-bold">Libraries</h6>
                                        <ul className="skills-list">
                                            <li>Bootstrap</li>
                                            <li>jQuery</li>
                                            <li>React</li>
                                            <li>SocketIO</li>
                                        </ul>
                                    </div>
                                    <div className="skills-section">
                                        <h6 className="skills-title mt-3 fw-bold">Frameworks</h6>
                                        <ul className="skills-list">
                                            <li>Django</li>
                                            <li>Flask</li>
                                        </ul>
                                    </div>
                                    <div className="skills-section">
                                        <h6 className="skills-title mt-3 fw-bold">Database</h6>
                                        <ul className="skills-list">
                                            <li>SQLAlchemy</li>
                                            <li>SQLite</li>
                                            <li>PostgreSQL</li>
                                        </ul>
                                    </div>
                                    <div className="skills-section">
                                        <h6 className="skills-title mt-3 fw-bold">Deployment</h6>
                                        <ul className="skills-list">
                                            <li>Heroku</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className="resume-footer invisible">
                        Footer
                    </div>  
            </Container>
        </div>
    );
}

export default Resume;