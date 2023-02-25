// @desc		Auth user
// @route		POST /api/users/login
// @access	Public
import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'
import { generateToken } from './generateToken.js'
import { hash, verify } from 'argon2'
import { faker } from '@faker-js/faker'
import { UserFields } from '../utils/user.utils.js'

export const authUser = asyncHandler(async (req, res) => {
	const {email, password} = req.body

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	const isValidPassword = await verify(user.password, password)

	if (user && isValidPassword) {
		const token = generateToken(user.id)
		res.json({ user, token })
	}
	else {
		res.status(401)
		throw new Error('Email or password are not correct')
	}
})


export const registerUser = asyncHandler(async (req, res) => {
	// деструктуризация, достаем емейл и пароль
	const {email, password} = req.body

	//запрос к бд
	const isHaveUser = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exist')
	}

	const user = await prisma.user.create({
		data: {
			email: email,
			password: await hash(password),
			name: faker.name.fullName()
		},
		select: UserFields
	})

	const token = generateToken(user.id)

	res.json({ user, token })
})