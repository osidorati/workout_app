import { $axios } from '../../api'

const EXERCISES = '/exercises'

class WorkoutService {
	async getAll() {
		return await $axios.get(EXERCISES)
	}

	//name, path, iconPath
	async create(body) {
		return await $axios.post(EXERCISES, body)
	}

	async update(id, body) {
		return await $axios.put(`${EXERCISES}/${id}`, body)
	}

	async delete(id) {
		return await $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new WorkoutService()
