const express = require("express");

const app = express();

app.use(express.json())

require("./database/connection");
const coffeeroute = require("./routes/coffee.route")

app.use("",coffeeroute)
app.listen(3000, () => {
  console.log("Backend is working");
});
