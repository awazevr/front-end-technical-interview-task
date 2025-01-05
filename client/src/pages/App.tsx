import Navigation from '../components/Navigation/Navigation';
import FreeTextInput from '../components/FreeTextInput/FreeTextInput';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <div className="hero">
        <FreeTextInput />
      </div>

      <div className="main-content">
        <p className="lead">
          Your journey to <span>unforgettable experiences</span> begins here.
          Whether you're seeking a tranquil beach retreat, an exciting city
          escape, or an adventurous exploration of nature, we have destinations
          across the globe to fulfill every travel dream.
        </p>
        <p>
          At GlobalEscape, we believe that travel is not just about reaching a
          destination, but about embracing new cultures, making lifelong
          memories, and discovering the beauty of our world. From the bustling
          streets of Tokyo to the serene landscapes of the Swiss Alps, our
          carefully curated locations offer something for every kind of
          traveler.
        </p>
        <p>
          Start your adventure with us today and unlock the world’s wonders.
        </p>
        <p>Let the journey begin.</p>
      </div>
    </>
  );
}

export default App;
