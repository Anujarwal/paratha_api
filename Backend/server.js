const express = require("express");
require("dotenv").config();
const cors = require("cors")
const app = express();

const PORT = process.env.PORT || 5050;
app.use(cors())
app.get("/api", (req, res) => {
  res.send("paratha express");
});

// app.get("/paratha", );
app.use("/api", require("./Routes/ParathaRoutes"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
