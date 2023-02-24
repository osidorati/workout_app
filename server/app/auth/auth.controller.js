// @desc		Auth user
// @route		POST /api/users/login
// @access	Public
import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'

export const authUser = asyncHandler(async (req, res) => {
	const user = await prisma.user.findMany()

	res.json(user);
})