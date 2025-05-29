import React, { useEffect, useState } from "react";
import axois from "axios";
import MatchCard from "../components/matchCard";
import "./css/Schedule.css";
import Header from "../components/Header";
const Schedule = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axois.get(
          "https://soccer-matchs-tracker.vercel.app/api/schedule/upcoming"
        );

        // Axios automatically parses JSON
        setMatches(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <Header />
      <div className="schedule-container">
        <h1 className="schedule-heading">Upcoming Matches</h1>

        {loading && <p className="message">Loading matches...</p>}
        {error && <p className="error">Error: {error}</p>}

        {!loading && !error && (
          <div className="matches-list">
            {matches.length === 0 ? (
              <p className="message">No upcoming matches found.</p>
            ) : (
              matches.map((match, index) => <MatchCard match={match} />)
            )}

            {/* <div>
            {matches.map((match) => (
              <MatchCard match={match} />
            ))}
          </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
