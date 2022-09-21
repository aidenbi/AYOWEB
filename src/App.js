import './App.css';
import menu from "./menu.jpg"
import menu2 from "./menu2.jpg"
import NavBar from './components/NavBar';
import About from './components/About';
import Hours from './components/Hours';
import Directions from './components/Directions';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Contact from './components/Contact'
import topImage from './images/main1.svg'

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <img className='Top-image' src={topImage}></img>
        <About></About>
        <Hours></Hours>
        <Directions></Directions>
        <Menu></Menu>
        <Reviews></Reviews>
        <Contact></Contact>
       
    </div>
  );
}

export default App;
