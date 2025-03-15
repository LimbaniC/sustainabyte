import React from "react";
import "/Users/nasrahassan/sustainabyte/sustainability/frontend/components/HomePage/Homepage.css";


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
  <div className="nav-item">
    <span>Saved</span>
  </div>
  <div className="nav-item">
    <span>Search</span>
  </div>
  <div className="nav-item">
   <span>Donate</span>
  </div>
  <div className="nav-item login">Login</div>
</nav>

      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="welcome-text">Welcome to!</p>
          <h1 className="brand-title">SUSTAIN-A-BYTE</h1>
          <p className="subtitle">Sustainabyte – Nourishing Communities, One Bite at a Time…</p>
          <button className="cta-button">Get Started Now!</button>
        </div>
      </header>

      <section className="about-section">
        <h2>About us</h2>
        <p>…</p>
      </section> 

      <section className="team-section">
        <h2>Meet The Team</h2>
        <p>…</p>
      </section> 

      <section className="contact-section">
        <h2>Contact us</h2>
        <p>…</p>
      </section>
      <footer className="footer">
        <p>@Sustainabyte</p>
      </footer>
    </div>
  );
};

export default Home;
