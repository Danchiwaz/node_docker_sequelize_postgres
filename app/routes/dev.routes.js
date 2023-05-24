const controllers = require("../controllers/dev")
const router = require("express").Router();

router.get("/version", controllers.version);



module.exports = router;