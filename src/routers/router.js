const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const userController = require('../controllers/userController')

//login
router.post(apiRoute+'/user',userController.getUser)

//registro
router.post(apiRoute+'/registro',userController.create)

module.exports = router;