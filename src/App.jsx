import React from 'react'
import './App.css'
import Checkbox from './components/checkbox';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          {}
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>BLOG</li>
          </ul>
        </nav>
        <div className="chat">
          {}
          <img src="/images/chat.svg" alt="chat" />
          <div className="chat-number">
            <p>Need help?</p>
            <h4>(307) 555-0133</h4>
          </div>
        </div>
      </div>

      <div className="nav-book">
        <div className="nav-text">
          <h1>Journey with Confidence <span>Migrate</span> with Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <button><p>Learn More</p>
            {}
            <img src="images/cursor.svg" alt="strelka" />
          </button>
        </div>
      </div>

      <div className="free">
        <div className="free-img">
          {}
          <img src="images/free.png" alt="img" />
        </div>



        <div className="about-us-section">
      <h5 className="about-heading">ABOUT US <span className="about-icon">
        {}
        <img src="images/polet.svg" alt="" />
        </span></h5>
      <h1 className="main-heading">Unknown Wanderlust <br /> Your Journey into</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcs nunc.
        Duis egestas ac ante sed tincidunt.
      </p>
      <div className="info-container">
        <div className="info-box">
       <div className="chekkend">
       <Checkbox />
       <h4>Safety Guides</h4>
       </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="info-box">
          <div className="chekkend">
       <Checkbox />
       <h4>Safety Guides</h4>
       </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <button className="read-more-button">
        Read More <span className="arrow-icon">
          {}
          <img src="images/cursor.svg" alt="" />
        </span>
      </button>
    </div>
      </div>
    </div>
  )
}

export default App