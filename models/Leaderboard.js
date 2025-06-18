import { Schema, model } from "mongoose";

const leaderboardList = new Schema({
  // id: {
  //   type: Schema.Types.ObjectId,
  //   ref: "id",
  //   required: true,
  //   unique: true,
  // },
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
// export default leaderboard;
