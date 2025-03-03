const mongoose = require("mongoose");
require("dotenv").config();

//mongodb+srv://tele:<tele>@telebytes.vaczzy9.mongodb.net/

// MongoDB Atlas podatkovna baza v oblaku
if (process.env.NODE_ENV === "production") {
  dbURI = process.env.MONGODB_ATLAS_URI;
  // Lokalna Docker podatkovna baza
} else if (process.env.NODE_ENV === "test") {
  dbURI = "mongodb+srv://tele:tele@telebytes.vaczzy9.mongodb.net"; //SPREMENI URI
}

//mongodb+srv://tele:<tele>@telebytes.vaczzy9.mongodb.net/
mongoose.connect(dbURI);
mongoose.connection.on("connected", () =>
    console.log(`Mongoose connected to ${dbURI}.`)
);
mongoose.connection.on("error", (err) =>
    console.log(`Mongoose connection error: ${err}.`)
);
mongoose.connection.on("disconnected", () =>
    console.log("Mongoose disconnected")
);

  const gracefulShutdown = async (msg, callback) => {
    await mongoose.connection.close();
    console.log(`Mongoose disconnected through ${msg}.`);
    callback();
  };

  process.once("SIGUSR2", () => {
    gracefulShutdown("nodemon restart", () =>
      process.kill(process.pid, "SIGUSR2")
    );
  });

  process.on("SIGINT", () => {
    gracefulShutdown("app termination", () => process.exit(0));
  });

  process.on("SIGTERM", () => {
    gracefulShutdown("Cloud-based app shutdown", () => process.exit(0));
  });

  require("./schemas");
