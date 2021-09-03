
//Components
import Intro from '../components/Intro';
import Overview from '../components/Overview'
import Projects from '../components/Projects'

//React-Bootstrap
import Container from 'react-bootstrap/Container';

function AboutMe(){
    return(
        <div className="about-me-page">
            <Intro></Intro>
            <hr className="break"></hr>
            <Overview></Overview>
            <Container>
                <hr className="mt-3"></hr>
            </Container>
            <Projects></Projects>
        </div>        
    );
}

export default AboutMe;