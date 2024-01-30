const router = require('express').Router()

const PhotoController = require('../controllers/photoController')

router.get('/photos', PhotoController.GetAllPhotos)

router.get('/photos/:id', PhotoController.GetOnePhotoByID)

module.exports = router