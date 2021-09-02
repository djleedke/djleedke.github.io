
import NavLink from 'react-router-dom/NavLink';
import profilePic from '../assets/me.png';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

function Sidebar(){
    return(
        <div className="sidebar">
            {/* Name */}
            <h4 className="navbar-name text-center pt-lg-4 mb-0 fw-bold">Doug Leedke</h4>
            <Navbar collapseOnSelect expand="lg" className="ps-3 pe-3" variant="dark">
                <Navbar.Toggle className="m-2" aria-controls="navbar"/>
                <Navbar.Collapse id="navigation" className="flex-column">
                    {/* Profile Pic */}
                    <div className="w-100 pt-3 text-center">
                        <Image roundedCircle src={profilePic} alt="Profile picture for Doug Leedke" />
                    </div>
                    <div className="bio m-3 text-center">
                        Greetings!  My name is Doug Leedke and I am a software developer.  Welcome to my site!
                    </div>
                    {/* Social Media Links */}
                    <div className="social-links text-center fs-5 p-2">
                        <a href="https://github.com/djleedke" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/djleedke/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                    {/* Site Navigation */}
                    <hr className="w-100"></hr>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="sidebar-link-active" exact><i className="far fa-user"></i><span className="m-2">About Me</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" activeClassName="sidebar-link-active"><i className="fas fa-code"></i><span className="m-2">Portfolio</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to ="/resume" activeClassName="sidebar-link-active"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="m-2">Resume</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="sidebar-link-active"><i className="fa fa-envelope-open-o" aria-hidden="true"></i><span className="m-2">Contact</span></NavLink>
                        </li>
                    </ul>
                    <hr className="w-100"></hr>
                </Navbar.Collapse>
            </Navbar>

        </div>     
    );
}

export default Sidebar;