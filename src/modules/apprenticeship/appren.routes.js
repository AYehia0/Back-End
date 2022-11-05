const router = require("express").Router()
const isAuthorized = require("../../middlewares/authUsers.js")
const apprenControllers = require("./appren.controllers.js")

// create an apprenticeship
router.post("/appren", isAuthorized, apprenControllers.createAppren)

// update an apprenticeship
router.put("/appren/:id", isAuthorized, apprenControllers.updateAppren)

// get apprenticeship/s
router.get("/appren/:id?", isAuthorized, apprenControllers.getAppren)

// get apprenticeship/s by share link
router.get("/appren/:user/:id", apprenControllers.shareAppren)

// delete an apprenticeship
router.delete("/appren/:id", isAuthorized, apprenControllers.deleteAppren)

module.exports = router
