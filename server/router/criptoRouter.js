const express = require("express");
const { getUserCoins, createCoin, deleteCoin , sellCoin } = require("../controllers/cripto");
const router = express.Router()

router.post("/cripto", createCoin )
router.put("/cripto", sellCoin )
router.get("/cripto/:userId", getUserCoins )
router.delete("/cripto/:id", deleteCoin )

module.exports = router