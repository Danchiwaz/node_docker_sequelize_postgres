const User = require("../models/users.model");

// gettting all the users
exports.getAll = async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get one user

exports.getOneUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// create one user
exports.createUser = async (req, res, next) => {
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    try {
      const user = await User.create(USER_MODEL);
      return res.status(201).json({
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// delete user
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.destory({
      wherre: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// docker exec -it psql -U Danchiwaz node_docker_db
