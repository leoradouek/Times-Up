const router = require("express").Router();
const {
  models: { Room },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
