const express = require("express")
const upload = require("../middleware/uploadMiddleware")
const { addImg } = require("../controllers/uploadImg")

const router = express.Router()

router.post("/upload/:id", upload.single("image"), addImg)

module.exports = router