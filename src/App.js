
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App vh-100">
        <Sidebar></Sidebar>
        <div class="main-wrapper">
            <AboutMe></AboutMe>
        </div>
    </div>
  );
}

export default App;
