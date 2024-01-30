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

    static GetOnePhotoByID(req, res) {
        let id = +req.params.id
        Photo.findByPk(id)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static CreatePhoto(req, res) {
        const { title, caption, image_url } = req.body

        Photo.create({
            title,
            caption,
            image_url
        })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = PhotoController