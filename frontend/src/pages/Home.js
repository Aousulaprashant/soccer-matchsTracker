// Home.jsx
import React from "react";
import "./css/Home.css";
import Header from "../components/Header";
import BackGround from "../IMG/Backgroudsoccer.jpg";
import sunil from "../IMG/sunilChetri.7";
const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="hero-image">
        <img
          src={BackGround}
          className="backgroundImg"
          alt="Soccer Background"
        />
        <div className="hero-heading">
          <h1 className="hero-heading1">Stay</h1>

          <h1 className="hero-heading2">Updated with Upcoming Matches</h1>

          <p className="hero-subtext">
            <em>Football is not just a game, it's a lifestyle.</em> <br />
            Welcome to <strong>SoccerVerse</strong> – your one-stop destination
            for all things football. Stay ahead with real-time updates on
            upcoming matches, explore team stats, relive game highlights, and
            celebrate the spirit of the sport with fellow fans. Whether you're a
            die-hard supporter or a casual viewer, this platform is built to
            keep you connected to the heart of the game.
          </p>
        </div>
      </div>

      <div className="hero-middle">
        <h2>Teamwork Makes The Dream Work</h2>
        <p>
          Success on the field isn’t about one star player — it’s about a team
          moving as one, fighting for every ball, covering every inch, and never
          giving up until the final whistle.
        </p>
      </div>

      <div className="player-card">
        <div className="card-left">
          <h1>Best Player In Football</h1>
          <p>
            Sunil Chhetri, India's football legend, has inspired millions with
            his leadership, dedication, and incredible goal-scoring record.
          </p>

          <div className="info-boxes">
            <div className="box">
              <div className="icon">👤</div>
              <div>
                <strong>Name</strong>
                <div>Sunil Chhetri</div>
              </div>
            </div>
            <div className="box dark">
              <div className="icon">🌏</div>
              <div>
                <strong>Country</strong>
                <div>India</div>
              </div>
            </div>
            <div className="box darker">
              <div className="icon">⚽</div>
              <div>
                <strong>Team</strong>
                <div>India / Bengaluru FC</div>
              </div>
            </div>
          </div>

          <hr />

          <div className="stats">
            <div className="stat">
              <span>Goals</span>
              <div className="bar">
                <div style={{ width: "95%" }}></div>
              </div>
              <span>95%</span>
            </div>
            <div className="stat">
              <span>Stamina</span>
              <div className="bar">
                <div style={{ width: "90%" }}></div>
              </div>
              <span>90%</span>
            </div>
            <div className="stat">
              <span>Leadership</span>
              <div className="bar">
                <div style={{ width: "92%" }}></div>
              </div>
              <span>92%</span>
            </div>
          </div>
        </div>

        <div className="card-right">
          <img src={sunil} alt="Sunil Chhetri" />
        </div>
      </div>
    </div>
  );
};

export default Home;
