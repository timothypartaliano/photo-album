const { Photo, User } = require('../models')

class PhotoController {
    static GetAllPhotos(req, res) {
        Photo.findAll({
            include: User
        })
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
            image_url,
            UserId: User.id
        })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static UpdateOnePhotoByID(req, res) {
        let id = +req.params.id
        const { title, caption, image_url } = req.body
        let data = {
            title,
            caption,
            image_url
        }
        Photo.update(
            data,
            {
                where: {
                    id
                },
                returning: true
            }
        )
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static DeleteOnePhotoByID(req, res) {
        let id = +req.params.id
        Photo.destroy({
            where: {
                id
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = PhotoController