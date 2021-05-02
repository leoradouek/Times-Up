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

router.post("/", async (req, res, next) => {
  try {
    const room = {
      name: req.body.name,
    };

    const newRoom = await Room.create(room);
    res.status(201).json(newRoom);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
