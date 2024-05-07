import express from 'express'
import {
	getUserData,
	loginUser,
	registerUser,
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/user', protect, getUserData)

export default router
