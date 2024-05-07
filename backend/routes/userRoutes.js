import express from 'express'
import {
	getUserData,
	loginUser,
	registerUser,
} from '../controllers/userController.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/user', getUserData)

export default router
