const { Photo } = require("../models")

function authorization(req, res, next) {
    // Extract and validate photoId from request parameters
    const photoId = parseInt(req.params.id, 10);

    if (isNaN(photoId) || photoId <= 0) {
        return res.status(400).json({
            name: "Bad Request",
            devMessage: "Invalid photo ID provided"
        });
    }
    const authenticatedUser = res.locals.user

    Photo.findOne({
        where: {
            id: photoId
        }
    })
        .then(photo => {
            if (!photo) {
                return res.status(404).json({
                    name: "Data Not Found",
                    devMessage: `Photo with id ${photoId} not found`
                })
            }
            if (photo.UserId === authenticatedUser.id) {
                return next()
            } else {
                return res.status(403).json({
                    name: "Authorization Error",
                    devMessage: `User with id ${authenticatedUser.id} does not have permission to access Photo with id ${photoId}`
                })
            }
        })
        .catch(err => {
            return res.status(500).json(err)
        })
}

module.exports = authorization