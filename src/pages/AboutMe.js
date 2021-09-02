import Container from 'react-bootstrap/Container';
import Intro from '../components/Intro';
import Overview from '../components/Overview'
import Projects from '../components/Projects'

function AboutMe(){
    return(
        <div class="about-me-page">
            <Intro></Intro>
            <hr class="break"></hr>
            <Overview></Overview>
            <Container>
                <hr class="mt-3"></hr>
            </Container>
            <Projects></Projects>
        </div>        
    );
}

export default AboutMe;