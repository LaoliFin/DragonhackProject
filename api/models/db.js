const mongoose = require("mongoose");
require("dotenv").config();

//Lokalna DB
//var dbURI = "mongodb://127.0.0.1/Hedgebit";

//Mongo Atlas
//dbURI = "mongodb+srv://Hedgebit:Hedgebit@cluster0.4k4cju0.mongodb.net/Hedgebit?retryWrites=true&w=majority";

// MongoDB Atlas podatkovna baza v oblaku
if (process.env.NODE_ENV === "production") {
  dbURI = process.env.MONGODB_ATLAS_URI;
  // Lokalna Docker podatkovna baza
} else if (process.env.NODE_ENV === "test") {
  dbURI = "mongodb://sp-mongo-db/Hedgebit"; //SPREMENI URI
}


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
