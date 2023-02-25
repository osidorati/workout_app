import asyncHandler from 'express-async-handler'
import { prisma } from '../app/prisma.js'
import { UserFields } from '../app/utils/user.utils.js'

export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id
		},
		select: UserFields
	})

	res.json(user)
})