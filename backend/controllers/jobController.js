// @desc    Fetch all jobs
// @route   GET /api/jobs
// @access  Private
const getJobs = (req, res) => {
	res.status(200).json({ message: 'Get jobs' })
}

// @desc    Create a job
// @route   POST /api/jobs
// @access  Private
const createJob = (req, res) => {
	res.status(200).json({ message: 'Create job' })
}

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private
const updateJob = (req, res) => {
	res.status(200).json({ message: `Update job ${req.params.id}` })
}

// @desc    Delete job
// @route   DELETE /api/jobs
// @access  Private
const deleteJob = (req, res) => {
	res.status(200).json({ message: `Delete job ${req.params.id}` })
}

export { getJobs, createJob, updateJob, deleteJob }
