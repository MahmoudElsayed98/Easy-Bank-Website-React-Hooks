import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import './App.css';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutUs />
    </div>
  );
}

export default App;
