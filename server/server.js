import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import authRoutes from './app/auth/auth.routes.js'
import { prisma } from './app/prisma.js'


dotenv.config()

const app = express()

async function main(){
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', authRoutes)

	const PORT = process.env.PORT || 5000

	app.listen(PORT, function () {
		console.log(`Server listens http://${process.env.NODE_ENV}:${PORT}`)
	})
}

main().then(async () => {
	await prisma.$disconnect()
})
.catch(async e => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
})