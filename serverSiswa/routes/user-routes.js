const userController = require('../controllers/user-controller')
const express = require('express')
const router = express.Router()
const userAuth = require('../middleware/user-auth')

router.get('/', userAuth, userController.getAllStudent)
router.get('/:id', userAuth, userController.getStudentById)
router.post('/', userAuth, userController.addStudent)
module.exports = router