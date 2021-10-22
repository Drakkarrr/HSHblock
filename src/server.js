import nodemailer from "nodemailer";

const express = require("express");
const app = express();

const PORT = express.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/pages/ContactUs.jsx");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
