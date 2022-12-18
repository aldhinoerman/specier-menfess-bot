const express = require("express");
const app = express();

const { SpecierBot } = require("./specier-bot");

const PORT = process.env.PORT || 3000;

const bot = new SpecierBot({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  triggerWord: process.env.TRIGGER,
});

app.get("/", (req, res, next) => {
  res.send("Welcome to twitter bot server!");
});

app.get("/trigger", async (req, res, next) => {
  job.fireOnTick();
  res.send("job triggered!");
});

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
