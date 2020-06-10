//load required packages using require
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerSpec = require("./swagger");
const swaggerUI = require("swagger-ui-express");

//Swagger setup
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
//Register Middlewares
//CORS
app.use(cors());
//Body-Parser
app.use(bodyParser.json());

// Notes Route
const notesRoute = require("./routes/Notes");
app.use("/api/notes", notesRoute);

//Connect to MongoDb
mongoose.connect(
  process.env.DATABASE_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database ready to use!");
  }
);

// Start server
app.listen("3100");
