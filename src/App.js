import './App.css';
import menu from "./menu.jpg"
import menu2 from "./menu2.jpg"
import logo from "./crazylogo.PNG"
import NavScrollExample from './components/NavBar';

function App() {
  return (
    <div><NavScrollExample></NavScrollExample>
      <Router>
        <Routes>

        </Routes>
      </Router>
      <div className="App">

        <header className="">
          <img src={logo} width="200" height="150" alt='menu' />
          <h1>Asian Yummy One</h1>
          <img src={menu} width="600" height="400" alt='menu' />
          <img src={menu2} width="600" height="400" alt='menu' />
        </header>
      </div></div>
  );
}

export default App;
