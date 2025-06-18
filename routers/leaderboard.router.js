import { Router } from "express";
import validate from "../middlewares/validate.js";
import { leaderboardSchema } from "../zod-schemas/leaderboard.schema.js";
import { leaderboard } from "../models/Leaderboard.js";
import {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} from "../controllers/index.js";

export const leaderboardRouter = Router();

leaderboardRouter.get("/", getAll(leaderboard));
leaderboardRouter.post(
  "/",
  validate(leaderboardSchema),
  createOne(leaderboard)
);
leaderboardRouter.get("/:id", getOne(leaderboard));
leaderboardRouter.put(
  "/:id",
  validate(leaderboardSchema),
  updateOne(leaderboard)
);
leaderboardRouter.delete("/:id", deleteOne(leaderboard));

// export default leaderboardRouter;
