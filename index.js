const express = require("express");
const path = require("path");
let indexRouter = require("./routes/index");
let peronRoute = require("./routes/persons");
let bodyParser = require('body-parser');

// Database
const db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();


// configure the app to use bodyParser()
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(bodyParser.json());




// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Index route
app.use("/", indexRouter);

// Person routes
app.use("/persons", peronRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
