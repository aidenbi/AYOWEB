import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Hours from './components/Hours/Hours';
import Reviews from './components/Reviews/Reviews';
import Menu from './components/Menu/Menu';
import Directions from './components/Directions/Directions';
import Contact from './components/Contact'
import TopCarousel from './components/TopCarousel/TopCarousel'
import SpanningImage from './images/spanningFood.svg'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <TopCarousel></TopCarousel>
      <About></About>
      <Hours>
        <img className='SpanningImage' src={SpanningImage}></img>
      </Hours>
      <Directions></Directions>
      <Menu></Menu>
      <Reviews></Reviews>
      <Contact></Contact>

    </div>
  );
}

export default App;
