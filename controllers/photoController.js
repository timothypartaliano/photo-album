const { Photo } = require('../models')

class PhotoController {
    static GetAllPhotos(req, res) {
        Photo.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = PhotoController