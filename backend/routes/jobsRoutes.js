import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	res.status(200).json({ message: 'Get jobs' })
})

router.post('/', (req, res) => {
	res.status(200).json({ message: 'Create job' })
})

router.put('/:id', (req, res) => {
	res.status(200).json({ message: `Update job ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
	res.status(200).json({ message: `Delete job ${req.params.id}` })
})

export default router
