const { conection } = require("../database/conection");
const express = require("express");
const cors = require("cors");

conection();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "welcome!" });
});

app.listen(3000, () => {
  console.log("server on port ", 3000);
});
