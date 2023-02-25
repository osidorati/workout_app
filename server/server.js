import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import authRoutes from './app/auth/auth.routes.js'
import { prisma } from './app/prisma.js'
import { errorHandler, notFound } from './middleware/error.middleware.js'
import userRoutes from './user/user.routes.js'


dotenv.config()

const app = express()

async function main(){
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRoutes)

	app.use(notFound)
	app.use(errorHandler)

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