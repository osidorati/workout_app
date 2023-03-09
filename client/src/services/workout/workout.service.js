import { $axios } from '../../api'

const WORKOUTS = '/workouts'

class WorkoutService {
	async getAll() {
		return await $axios.get(WORKOUTS)
	}

	async getById() {
		return await $axios.get(`${WORKOUTS}/${id}`)
	}

	//name, exerciseIds
	async create(body) {
		return await $axios.post(WORKOUTS, body)
	}

	async update(id, body) {
		return await $axios.put(`${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return await $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
