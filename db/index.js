import chalk from "chalk";
import { mongoose } from "mongoose";

export default async function dbInit() {
  try {
    // mongoose.connection.on("error", (err) => {
    //   console.error("MongoDB connection error:", err);
    // });

    const mongo = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "pokemonBattle",
    });
    console.log(chalk.cyan(` DB connected to ${mongo.connection.name}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
