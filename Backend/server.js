const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5050;

app.get("/api", (req, res) => {
  res.send("paratha express");
});

// app.get("/paratha", );
app.use("/api", require("./Routes/ParathaRoutes"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
