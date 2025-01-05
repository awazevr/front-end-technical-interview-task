import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="logo">GlobalEscapes</div>
      <nav>
        <ul className="nav-items">
          <li>Our Locations</li>
          <li>Let Your Property</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="join-us">
        <button>Join Us</button>
      </div>
    </div>
  );
};

export default Navigation;
