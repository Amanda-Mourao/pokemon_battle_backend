import { z } from "zod/v4";

const leaderboardSchema = z.object({
  username: z
    .string({
      error: "Username must be a string",
    })
    .max(500, {
      error: "Username cannot exceed 500 characters",
    }),

  score: z
    .int({
      error: "Score must be a whole number",
    })
    .positive({
      error: "Score must be greater than 0",
    }),
});

export { leaderboardSchema };
