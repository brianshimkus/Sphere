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
	const job = await Job.findById(req.params.id)

	if (!job) {
		res.status(400)
		throw new Error('Job not found')
	}

	const updatedJob = await Job.findByIdAndUpdate(
		req.params.id,
		{
			role: req.body.role || job.role,
			company: req.body.company || job.company,
			location: req.body.location || job.location,
			locationType: req.body.locationType || job.locationType,
			minSalary: req.body.minSalary || job.minSalary,
			maxSalary: req.body.maxSalary || job.maxSalary,
			description: req.body.description || job.description,
		},
		{ new: true }
	)

	res.status(200).json(updatedJob)
})

// @desc    Delete job
// @route   DELETE /api/jobs
// @access  Private
const deleteJob = asyncHandler(async (req, res) => {
	const job = await Job.findById(req.params.id)

	if (!job) {
		res.status(400)
		throw new Error('Job not found')
	}

	await job.deleteOne()

	res.status(200).json({ id: req.params.id })
})

export { getJobs, createJob, updateJob, deleteJob }
