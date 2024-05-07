import mongoose from 'mongoose'

const jobSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		role: { type: String, required: true },
		company: { type: String, required: true },
		location: { type: String, required: true },
		locationType: { type: Boolean, required: true },
		minSalary: { type: Number, required: true },
		maxSalary: { type: Number, required: true },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

const Job = mongoose.model('Job', jobSchema)

export default Job
