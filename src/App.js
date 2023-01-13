import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Hours from './components/Hours/Hours';
import Reviews from './components/Reviews/Reviews';
import Menu from './components/Menu/Menu';
import Directions from './components/Directions/Directions';
import TopCarousel from './components/TopCarousel/TopCarousel'
import Footer from './components/Footer/Footer';

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
                  <Footer></Footer>
            </div>
      );
}

export default App;
