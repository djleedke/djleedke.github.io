
//Assets
import profilePic from '../assets/me.png';

//React
import { useState } from 'react';

//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

//React-Router
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Sidebar(){

    //Used to close the sidebar when a new page is selected on mobile
    const [expanded, setExpanded] = useState(false);

    //These lines are to allow the buttons to navigate using react-router,
    //cleaner than using CSS and href in the button which reloads page
    const history = useHistory();

    function handleClick(path){
        history.push(path);
    }

    return(
        <div className="sidebar">
            {/* Name */}
            <h4 className="navbar-name text-center pt-lg-4 mb-0 fw-bold">Doug Leedke</h4>
            <Navbar collapseOnSelect expand="lg" className="ps-3 pe-3 text-center" variant="dark" expanded={expanded}>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} className="m-2" aria-controls="navbar"/>
                <Navbar.Collapse id="navigation" className="flex-column">
                    {/* Profile Pic */}
                    <div className="w-100 pt-3">
                        <Image roundedCircle src={profilePic} alt="Profile picture for Doug Leedke" />
                    </div>
                    <div className="bio m-3">
                        Greetings!  My name is Doug Leedke and I am a software developer.  Welcome to my site!
                    </div>
                    {/* Social Media Links */}
                    <div className="social-links fs-5 p-2">
                        <a href="https://github.com/djleedke" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/djleedke/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                    {/* Site Navigation */}
                    <hr className="w-100"></hr>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="sidebar-link-active" onClick={() => setExpanded(false)} exact><i className="far fa-user"></i><span className="m-2">About Me</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" activeClassName="sidebar-link-active" onClick={() => setExpanded(false)}><i className="fas fa-code"></i><span className="m-2">Portfolio</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to ="/resume" activeClassName="sidebar-link-active" onClick={() => setExpanded(false)}><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="m-2">Resume</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="sidebar-link-active" onClick={() => setExpanded(false)}><i className="fa fa-envelope-open-o" aria-hidden="true"></i><span className="m-2">Contact</span></NavLink>
                        </li>
                    </ul>
                    <hr className="w-100"></hr>
                    <Button onClick={() => {handleClick("contact"); setExpanded(false)}} className="fw-bold mt-2 mb-3 ps-3 pe-3">
                        <i className="fas fa-paper-plane me-2" aria-hidden="true"></i>
                        <span>Hire Me</span>
                    </Button>
                </Navbar.Collapse>
            </Navbar>

        </div>     
    );
}

export default Sidebar;