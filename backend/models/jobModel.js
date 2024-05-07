import mongoose from 'mongoose'

const jobSchema = mongoose.Schema(
	{
		role: { type: String, required: true },
		company: { type: String, required: true },
		location: { type: String, required: true },
		locationType: { type: Boolean, required: true },
		salaryRange: { type: Number, required: true, minimum: 0, maximum: 1000000 },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

const Job = mongoose.model('Job', jobSchema)

export default Job
