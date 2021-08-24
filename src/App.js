import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App d-flex">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
}

export default App;
