import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connection.js'

dotenv.config()

const PORT = process.env.PORT || 5050

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
