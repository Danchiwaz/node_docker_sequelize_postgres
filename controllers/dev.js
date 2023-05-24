exports.version = (req, res, next) => {
    return res.status(200).json({
        message:"changed the file and now using docker compose file"
    })
}