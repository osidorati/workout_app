import { useQuery } from '@tanstack/react-query'
import ExerciseLogService from '../../../../services/exercise/exercise-log.service.js'
import { useParams } from 'react-router-dom'

export const useExerciseLog = () => {
	const {id} = useParams()

	const { data: exerciseLog, isSuccess, isLoading } = useQuery(['get exercise log', id],
		() => ExerciseLogService.getById(id), {
			select: ({ data }) => data
		})

	return {
		exerciseLog,
		isSuccess,
		isLoading
	}
}