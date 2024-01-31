const router = require('express').Router()

const PhotoController = require('../controllers/photoController')
const UserController = require('../controllers/userController')

const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/users/register', UserController.Register)
router.post('/users/login', UserController.Login)

router.use(authentication)

router.get('/photos', PhotoController.GetAllPhotos)
router.get('/photos/:id', PhotoController.GetOnePhotoByID)
router.post('/photos', PhotoController.CreatePhoto)

router.put('/photos/:id', authorization, PhotoController.UpdateOnePhotoByID)
router.delete('/photos/:id', authorization, PhotoController.DeleteOnePhotoByID)

module.exports = router