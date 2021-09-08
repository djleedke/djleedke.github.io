//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//My Components
import Sidebar from './components/Sidebar';

//Pages
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

//React-Router
import { HashRouter, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function App() {

    return (

        <HashRouter>
            <div className="App vh-100">
                <Sidebar></Sidebar>
                <div className="main-wrapper min-vh-100">
                    <Route exact path="/" component={AboutMe}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
