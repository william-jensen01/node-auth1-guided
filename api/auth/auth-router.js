const express = require("express");
const User = require("../users/users-model.js");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password, role = 2 } = req.body

  const hashed = bcrypt.hashSync(password, 10) // 2 ^ 10

  User.add({ username, password: hashed, role })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
});

router.post('/login', (req, res) => {
  res.json('silly login');
});

router.get('/logout', (req, res) => {
  res.json('silly logout');
});

module.exports = router;
