import express from "express";

const title = "PAY SPLIT";
const paySplitRouter = express.Router();

paySplitRouter.get("/", (req, res) => {
  // TODO: No error handling in the code yet. We will do that in the next phase.
  if (req.query.coins && req.query.people) {
    const coins = Number(req.query.coins);
    const people = Number(req.query.people);
    const result = Math.ceil(coins / people);

    const isJust = result % 1000 === 0;
    res.render("pay_split/result", {coins, people, result, title, isJust});
  } else {
    res.render("pay_split/index", {title});
  }
});

export {paySplitRouter};
