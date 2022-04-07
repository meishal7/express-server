const express = require("express");

const app = express();

const PORT = process.env.posrt || 3000;

app.use("/test", (req, res, next) => {
  res.status(200).send("This is test page.");
  next();
});
app.use("/", (req, res, next) => {
  res.status(200).send("Hello from Express server!");
});

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});
