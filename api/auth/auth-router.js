const express = require("express");
const User = require("../users/users-model.js");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password } = req.body

  const hashed = bcrypt.hashSync(password, 10) // 2 ^ 10

  User.add({ username, password: hashed, role: 2 })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  // 1- we pull the user from the db by that username
  // 2- we compare their db hash, against the password in req
  try {
    const allegedUser = await User.findBy({ username }).first()
    if (allegedUser && bcrypt.compareSync(password, allegedUser.password)) {

    } else {

    }
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.get('/logout', (req, res) => {
  res.json('silly logout');
});

module.exports = router;
