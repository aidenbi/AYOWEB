import NavBar from "../components/NavBar/NavBar";
import About from '../components/About/About';
import Hours from '../components/Hours/Hours';
import Reviews from '../components/Reviews/Reviews';
import Menu from '../components/Menu/Menu';
import Directions from '../components/Directions/Directions';
import TopCarousel from '../components/TopCarousel/TopCarousel'
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="page-shell">
      <NavBar />
      <TopCarousel />
      <main className="content-shell">
        <About />
        <Hours />
        <Directions />
        <Menu />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
}
