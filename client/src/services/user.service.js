import { $axios } from '../api'

const USERS = '/users'

class UserService {
	async getProfile() {
		const res = await $axios.get(`${USERS}/profile`)
		console.log(res)
		return res
	}
}

export default new UserService()
