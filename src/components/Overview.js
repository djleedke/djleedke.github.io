
//React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//React-Router
import { NavLink } from 'react-router-dom';

function Overview () {
    return(
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
                        <i className="fab fa-html5 pe-2"></i>
                        <i className="fab fa-css3-alt pe-2"></i>
                        <i className="fab fa-js-square pe-2"></i>
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
                        <i className="fab fa-react"></i>
                    </div>
                    <div className="overview-item-title">
                        React
                    </div>
                    <div className="overview-item-content">
                        The magic behind this site!  I have several React projects up and running check them out <NavLink to="portfolio">here</NavLink>.
                        Django & React are my preferred web development stack (at the moment).
                    </div>
                </div>
                <div className="overview-item col-lg-3 col-6">
                    <div className="overview-icons">
                        <i className="fab fa-python"></i>
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
                        <i className="fas fa-chalkboard"></i>
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
    );
}

export default Overview;