//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Sidebar from './components/Sidebar';

//Pages
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

//React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App vh-100">
                <Sidebar></Sidebar>
                <div className="main-wrapper min-vh-100">
                    <Switch>
                        <Route exact path="/">
                            <AboutMe />
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route exact path="/resume">
                            <Resume />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
