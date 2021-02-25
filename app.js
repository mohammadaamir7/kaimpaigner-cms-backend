const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const Router = require("./routes/routes");
require('dotenv').config();

//DB connection
require("./modal/db");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/", Router);



app.listen(process.env.PORT || 5000, () => {
  console.log("Example app listening on port 5000!");
});
