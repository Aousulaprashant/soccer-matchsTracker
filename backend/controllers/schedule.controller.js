const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const getUpcomingMatches = async (req, res) => {
  try {
    //console.log(process.env.API_KEY);
    const response = await axios.get(
      "https://v3.football.api-sports.io/fixtures",
      {
        headers: {
          "x-apisports-key": process.env.API_KEY,
        },
        params: {
          league: 39,
          season: 2023,
          from: "2023-09-01", // Replace with today's or a future date
          to: "2023-09-30", // A valid future date within that season
          timezone: "Asia/Kolkata",
        },
      }
    );

    console.log("Raw response:", JSON.stringify(response.data, null, 1));

    const matches = response.data.response.map((fix) => ({
      fixtureId: fix.fixture.id,
      date: fix.fixture.date,
      venue: fix.fixture.venue.name,
      referee: fix.fixture.referee || "N/A",
      round: fix.league.round,
      homeTeam: {
        name: fix.teams.home.name,
        logo: fix.teams.home.logo,
      },
      awayTeam: {
        name: fix.teams.away.name,
        logo: fix.teams.away.logo,
      },
      status: fix.fixture.status.short,
    }));
    console.log(matches);
    res.status(200).json(matches);
  } catch (error) {
    console.error("Error fetching matches:", error.message);
    res.status(500).json({ error: "Unable to fetch upcoming matches" });
  }
};

module.exports = getUpcomingMatches;
