const express = require("express");
const getUpcomingMatches = require("../controllers/schedule.controller");

const router = express.Router();

router.get("/upcoming", getUpcomingMatches);

module.exports = router;
