require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

/**
 * Aqui se invocan las rutas
 */

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("listen for http://localhost:" + port);
});

dbConnect();
