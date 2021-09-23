
//React-Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ProjectCard (props) {

    return(
        <Card className="project-card mb-5">
            <Row className="g-0">
                <div className="project-img col-12 col-xl-7 position-relative">
                    { props.overlay && 
                        <div className="project-img-overlay">
                            <Button variant="secondary"><i className="fas fa-eye me-1"></i> View Details</Button>
                        </div>
                    }
                    <Image fluid src={ props.imagePath } alt={ props.projectName }></Image>
                </div>
                <div className="col-12 col-xl-5">
                    <div className="card-body">
                        <a href={ props.projectUrl } target="_blank" rel="noreferrer">{ props.projectName }</a>
                        <p className="mt-2 project-description">
                            { props.projectDescription }
                        </p>
                    </div>
                </div>
            </Row>                        
        </Card>
    );
}

export default ProjectCard;