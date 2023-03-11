import { useMutation, useQuery } from '@tanstack/react-query'
import WorkoutService from '../../../../services/workout/workout.service.js'
import WorkoutLogService from '../../../../services/workout/workout-log.service.js'
import { useNavigate } from 'react-router-dom'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery(['get workouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }) => data
		})

	const navigate = useNavigate()

	const {
		mutate: mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(['Create new workout log'],
		(workoutId) => WorkoutLogService.create(),
		{onSuccess(data) {
			navigate(`/workout/${data.id}`)}
		})

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}