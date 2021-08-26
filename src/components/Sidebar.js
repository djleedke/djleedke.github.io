
import profilePic from '../assets/me.png'
import Image from 'react-bootstrap/Image'

function Sidebar(){
    return(
        <div className="sidebar">
             {/* Name & Profile Pic */}
            <h4 className="text-center pt-4 fw-bold">Doug Leedke</h4>
            <div className="w-100 pt-3 text-center">
                <Image roundedCircle src={profilePic} alt="Profile picture for Doug Leedke" />
            </div>
            <div className="bio m-3 text-center">
                Greetings!  My name is Doug Leedke and I am a software developer.  Welcome to my site!
            </div>
            {/* Social Media Links*/}
            <div className="social-links text-center fs-5 p-2">
                <a href="https://github.com/djleedke" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/djleedke/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
            {/* Site Navigation */}
            <hr className="m-3"></hr>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#"><i class="far fa-user"></i><span className="m-2">About Me</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#"><i class="fas fa-code"></i><span className="m-2">Portfolio</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#"><i class="fa fa-file-text-o" aria-hidden="true"></i><span className="m-2">Resume</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#"><i class="fa fa-envelope-open-o" aria-hidden="true"></i><span className="m-2">Contact</span></a>
                    </li>
                </ul>
            <hr className="m-3"></hr>
        </div>     
    );
}

export default Sidebar