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
leaderboardRouter.get("/:id", getOne(leaderboard));
leaderboardRouter.put(
  "/:id",
  validate(leaderboardSchema),
  updateOne(leaderboard)
);
leaderboardRouter.delete("/:id", deleteOne(leaderboard));
// leaderboardRouter.post(
//   "/",
//   validate(leaderboardSchema),
//   createOne(leaderboard)
// );

// export default leaderboardRouter;
// Falls Eintrag mit gleichem Namen → Score aufaddieren
leaderboardRouter.post("/", async (req, res) => {
  const { username, score } = req.body;

  try {
    const existing = await leaderboard.findOne({ username });

    if (existing) {
      existing.score += score;
      await existing.save();
      return res
        .status(200)
        .json({ message: "Score aktualisiert", data: existing });
    } else {
      const newEntry = new leaderboard({ username, score });
      await newEntry.save();
      return res
        .status(201)
        .json({ message: "Neuer Score gespeichert", data: newEntry });
    }
  } catch (err) {
    return res.status(500).json({ error: "Fehler beim Speichern" });
  }
});
