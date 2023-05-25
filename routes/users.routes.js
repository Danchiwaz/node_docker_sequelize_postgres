const userControllers = require("../controllers/users")
const usersRouter = require("express").Router();


usersRouter.route("/").get(userControllers.getAll).post(userControllers.createUser)
usersRouter.route("/:id")
.get(userControllers.getOneUser)
.delete(userControllers.deleteUser)
.put(userControllers.updateSingleUser);


// getAll 
// getOne
// createOne
// updateOne 
// deleteOne 




module.exports = usersRouter;