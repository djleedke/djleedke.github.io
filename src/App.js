import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App vh-100">
        <Container fluid>
            <Row className="h-100">
                <Col className="col-lg-2 col-12 p-0">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-lg-10 col-12 p-0">
                    <Main></Main>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
