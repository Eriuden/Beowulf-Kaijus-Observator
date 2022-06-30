const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.iodcc.mongodb.net/KaijuObservator"
  )
  .then(() => console.log("connecté à mongoDB"))
  .catch((err) => console.log("echec de connection à mongoDB", err));
