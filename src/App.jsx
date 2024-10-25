import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Messages />
    </div>
  );
}

export default App;
