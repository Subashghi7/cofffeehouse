const { addcoffee, putcoffee, deletecoffee, updatecoffee, singlecoffee } = require("../controllers/coffee.controller")

const router = require("express").Router()

router.route("/coffee").get(addcoffee).post(putcoffee)
router.route("/coffee/:id").delete(deletecoffee).patch(updatecoffee).get(singlecoffee)

module.exports= router