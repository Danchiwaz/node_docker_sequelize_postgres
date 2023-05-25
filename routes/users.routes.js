const userControllers = require("../controllers/users")
const usersRouter = require("express").Router();


usersRouter.route("/").get(userControllers.getAll)


// getAll 
// getOne
// createOne
// updateOne 
// deleteOne 




module.exports = usersRouter;