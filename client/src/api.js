import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.constants.js'

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})


// авторизация через localStorage
// Authorization: `Bearer ${localStorage.getItem('token')}`

// авторизация через Cookies
// red = token