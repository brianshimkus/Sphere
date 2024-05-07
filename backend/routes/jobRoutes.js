import express from 'express'
import {
	createJob,
	deleteJob,
	getJobs,
	updateJob,
} from '../controllers/jobController.js'

const router = express.Router()

router.route('/').get(getJobs).post(createJob)
router.route('/:id').put(updateJob).delete(deleteJob)

export default router
