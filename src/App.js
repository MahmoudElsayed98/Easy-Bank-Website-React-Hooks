import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import './App.css';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/AboutUs';
import Articles from './Components/Articles';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutUs />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
