import './App.css';
import menu from "./menu.jpg"
import menu2 from "./menu2.jpg"
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Hours from './components/Hours/Hours';
import Directions from './components/Directions';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Contact from './components/Contact'
import TopCarousel from './components/TopCarousel/TopCarousel'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <TopCarousel></TopCarousel>
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
