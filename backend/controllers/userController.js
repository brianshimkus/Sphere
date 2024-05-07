import asyncHandler from 'express-async-handler'

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	res.json({ message: 'Register new user' })
})

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
	res.json({ message: 'Login user' })
})

// @desc    Get user data
// @route   GET /api/users/user
// @access  Public
const getUserData = asyncHandler(async (req, res) => {
	res.json({ message: 'Get user data' })
})

export { registerUser, loginUser, getUserData }
