import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import "./Homepage.css";


const teamMembers = [
  { 
    name: "Nasra Hassan", 
    description: ""
  },
  { 
    name: "Limbani Chaponda", 
    description: ""
  },
  { 
    name: "Grace Schmelzer", 
    description: ""
  },
  { 
    name: "Jacob Cohen", 
    description: ""
  }, 
];

const Home: React.FC = () => {  
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="welcome-text">Welcome to!</p>
          <h1 className="brand-title">Sustain-A-Byte</h1>
          <p className="subtitle">Sustainabyte – Nourishing Communities, One Bite at a Time…</p>
          <Link to="/signup">
            <button className="cta-button">Get Started Now!</button>
          </Link>     
         </div>
      </header>
      <section className="about-section">  
      <h2 className="about-title">About Us</h2>
        <div className="about-container"> 
          <div className="about-text">
            <p>
          Sustainabyte was created with a single goal in mind: to bridge the gap between food waste and food insecurity.
        Every year, tons of edible food are discarded, while countless individuals and families go hungry. 
        Sustainabyte is a web and mobile platform that empowers both donors—like restaurants, grocery stores, and individuals—and recipients to connect with local food banks and distribution centers.
      </p>
      <p>
          Using the app is simple: users can sign up or log in to personalize their experience. From there, they can search for available food items, view locations offering donations, and save items to their cart. 
        The Saved page acts as a shopping cart, letting users track saved items and even see their estimated savings. When ready, users can claim food items directly from their list.
      </p>
      <p>
          For those looking to give back, the Donation page allows users to easily upload images of items, specify pickup details, and note expiration dates—ensuring safe, effective distribution.
        Whether you're donating or in need, Sustainabyte streamlines the process to make access to food faster, fairer, and more informed.
      </p>
          </div>
          <div className="about-image">
            <img src="https://media.istockphoto.com/id/1459969367/photo/young-volunteer-holding-donation-box.jpg?s=612x612&w=0&k=20&c=52h_EudrpiHkqCPNuVWJDAPj4xvLcr61C3ttHV-hHCg=" alt="About Sustain-A-Byte" />
          </div>
        </div>
      </section> 
      <section className="team-section">
        <h2>Meet The Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-item">
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section> 
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>
     
      <footer className="footer">
        <p>@Sustainabyte</p>
      </footer>
    </div>
  );
};

export default Home;
