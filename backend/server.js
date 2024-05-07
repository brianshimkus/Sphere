import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connection.js'
import jobRoutes from './routes/jobRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import colors from 'colors'

dotenv.config()

const PORT = process.env.PORT || 5050

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/jobs', jobRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`.yellow)
})
