const express = require("express")
const accController = require("../controllers/accController")
const router = express.Router()

router.post("/account/save", accController.createAcc)

router.get("/account/find", accController.findAllAcc)

router.delete("/account/delete/:id", accController.deleteAcc)

module.exports = router