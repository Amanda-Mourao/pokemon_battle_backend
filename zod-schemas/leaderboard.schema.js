import { z } from "zod/v4";

const leaderboardSchema = z.object({
  id: z
    .int({
      error: "Id must be a whole number",
    })
    .positive({
      error: "Id must be greater than 0",
    })
    .nonoptional(),

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

  date: z
    .date({
      error: "Date must be a date",
    })
    .default(),
});

export { leaderboardSchema };
