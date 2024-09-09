import React from "react";
import './Home.css';
import img from './../img/me.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegram } from 'react-icons/fa';

const Home = ({ theme }) => {
  return (
    <>
      <div className={`home-content ${theme}`}>
        <div>
          <ul className={`ul ${theme}`}>
            <li ><FaFacebookF /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedinIn /></li>
            <li><FaInstagram /></li>
            <li><FaTelegram /></li>
          </ul>
        </div>
        <div className={`img ${theme}`}>
          <img src={img} alt="Me" />
        </div>
        <div>
          <h1>Hello, my name is</h1>
          <p>Ashenafi Sahele, I am a frontend developer certified in advanced React from Meta. I am a dedicated young man based in Ethiopia.</p>
          <button className={`btn ${theme}`}>About Me</button>
          <button className={`btn ${theme}`}>CV</button>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;