import { Schema, model } from "mongoose";

const leaderboardList = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: "id",
    required: true,
    unique: true,
  },
  username: {
    type: String,
    ref: "username",
    required: true,
  },
  score: {
    type: Number,
    ref: "score",
    required: true,
  },
  date: {
    type: Date,
    ref: "date",
    default: "",
  },
});

const Leaderboard = model("leaderboard", leaderboardList);
export default Leaderboard;
