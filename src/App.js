
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App vh-100">
        <Sidebar></Sidebar>
        <div class="main-wrapper">
            <Main></Main>
        </div>
    </div>
  );
}

export default App;
