// MatchCard.jsx
import React from "react";
import vsBackground from "../../IMG/23762.jpg";

const MatchCard = ({ match }) => {
  return (
    <div key={match.fixtureId} className="match-card">
      <div
        className="teams"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <img src={vsBackground} className="vsBack" alt="" />
        <div className="team">
          <img
            src={match.homeTeam.logo}
            alt={`${match.homeTeam.name} logo`}
            style={{ width: 40, height: 40 }}
          />
          <p>{match.homeTeam.name}</p>
        </div>
        <span></span>
        <div className="team">
          <img
            src={match.awayTeam.logo}
            alt={`${match.awayTeam.name} logo`}
            style={{ width: 40, height: 40 }}
          />
          <p>{match.awayTeam.name}</p>
        </div>
      </div>

      <div className="match-info">
        <div className="info-column left">
          <div className="info-item date">
            Date: {new Date(match.date).toLocaleString()}
          </div>
          <div className="info-item venue">Venue: {match.venue}</div>
          <div className="info-item status">Status: {match.status}</div>
        </div>
        <div className="info-column right">
          <div className="info-item referee">Referee: {match.referee}</div>
          <div className="info-item round">Round: {match.round}</div>
          {/* Optional place for extra info or keep empty */}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
