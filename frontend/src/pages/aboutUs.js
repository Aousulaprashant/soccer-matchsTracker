// src/pages/About.js
import React from "react";
import "./css/about.css";
import Header from "../components/Header";
const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1 className="about-title">About SportsOrca</h1>

        <p className="about-text">
          <strong>SportsOrca</strong> is a digital-first sports technology
          company focused on building innovative platforms that blend sports,
          AI, and real-time data. Our mission is to create powerful tools and
          engaging user experiences for sports fans around the world.
        </p>

        <p className="about-text">
          This project has been proudly developed and maintained by the team at
          SportsOrca. From data architecture to interactive UI, the system
          reflects our passion for blending technology and sports storytelling.
        </p>

        <p className="about-text">
          We integrate real-time sports data, deliver dynamic content, and
          engineer solutions that empower users to explore the sports world like
          never before. Our coverage includes soccer, basketball, NFL, MLB, NHL,
          NASCAR, and more.
        </p>

        <h2 className="about-subtitle">What We Do</h2>
        <ul className="about-list">
          <li>Build high-performance sports data platforms</li>
          <li>Integrate AI-driven content systems</li>
          <li>Deliver real-time match updates and analytics</li>
          <li>Cover inspiring and culturally relevant sports stories</li>
        </ul>

        <h2 className="about-subtitle">Our Vision</h2>
        <p className="about-text">
          At SportsOrca, we believe in the power of sports to unite and uplift
          people. We are committed to enhancing the digital sports experience
          with technology that is fast, reliable, and emotionally resonant.
        </p>
      </div>
    </div>
  );
};

export default About;
