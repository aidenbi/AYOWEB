import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Hours from './components/Hours/Hours';
import Directions from './components/Directions';
import Reviews from './components/Reviews/Reviews';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact'
import topImage from './images/main1.svg'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <img id='home' className='Top-image' src={topImage}></img>
      <About></About>
      <Hours></Hours>
      <Directions></Directions>
      <Menu>

      </Menu>
      <Reviews></Reviews>
      <Contact></Contact>

    </div>
  );
}

export default App;
