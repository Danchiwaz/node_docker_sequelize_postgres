const User = require("../models/users.model");

exports.getAll = async (req, res, next) =>{
    try {
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



// docker exec -it psql -U Danchiwaz node_docker_db 