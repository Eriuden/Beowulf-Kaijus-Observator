const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const agentRoutes = require("./routes/agent.routes");
const kaijuRoutes = require("./routes/kaiju.route");
require("dotenv").config({ path: "./config/.env" });
const { requireAuth, checkAgent } = require("./middleware/auth.middleware");
require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//jwt
app.get("*", checkAgent);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.agent._id);
});

//routes
app.use("/api/agent", agentRoutes);
app.use("/api/kaiju", kaijuRoutes);

//serveur

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
