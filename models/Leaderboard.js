import { Schema, model } from "mongoose";

const leaderboardList = new Schema({
  username: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const leaderboard = model("leaderboard", leaderboardList);
