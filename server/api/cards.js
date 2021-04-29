const router = require("express").Router();
const {
  models: { Card },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.findAll();
    res.json(cards);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
