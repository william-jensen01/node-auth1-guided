const express = require("express");
const User = require("../users/users-model.js")
const router = express.Router()

router.post('/register', (req, res) => {
  res.json('silly register')
})

router.post('/login', (req, res) => {
  res.json('silly login')
})

router.get('/logout', (req, res) => {
  res.json('silly logout')
})

module.exports = router
