const router = require('express').Router()

const PhotoController = require('../controllers/photoController')

router.get('/photos', PhotoController.GetAllPhotos)

router.get('/photos/:id', PhotoController.GetOnePhotoByID)

router.post('/photos', PhotoController.CreatePhoto)

router.put('/photos/:id', PhotoController.UpdateOnePhotoByID)

module.exports = router