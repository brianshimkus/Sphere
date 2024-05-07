import asyncHandler from 'express-async-handler'
import Job from '../models/jobModel.js'

// @desc    Fetch all jobs
// @route   GET /api/jobs
// @access  Private
const getJobs = asyncHandler(async (req, res) => {
	const jobs = await Job.find()

	res.status(200).json(jobs)
})

// @desc    Create a job
// @route   POST /api/jobs
// @access  Private
const createJob = asyncHandler(async (req, res) => {
	if (
		!req.body.role ||
		!req.body.company ||
		!req.body.location ||
		!req.body.locationType ||
		!req.body.minSalary ||
		!req.body.maxSalary ||
		!req.body.description
	) {
		res.status(400)
		throw new Error('Text is required')
	}

	const job = await Job.create({
		role: req.body.role,
		company: req.body.company,
		location: req.body.location,
		locationType: req.body.locationType,
		minSalary: req.body.minSalary,
		maxSalary: req.body.maxSalary,
		description: req.body.description,
	})

	res.status(200).json(job)
})

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private
const updateJob = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update job ${req.params.id}` })
})

// @desc    Delete job
// @route   DELETE /api/jobs
// @access  Private
const deleteJob = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete job ${req.params.id}` })
})

export { getJobs, createJob, updateJob, deleteJob }
