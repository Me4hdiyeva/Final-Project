const express = require("express");
const { getUserCoins, createCoin, deleteCoin } = require("../controllers/cripto");
const router = express.Router()

router.post("/cripto", createCoin )
router.get("/cripto/:userId", getUserCoins )
router.delete("/cripto/:id", deleteCoin )

module.exports = router