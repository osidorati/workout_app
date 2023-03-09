import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import ExerciseService from '../../../services/exercise/exercise.service.js'

export const useExercisePage = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(() => ({
		register,
		handleSubmit,
		errors,
		control,
		onSubmit,
		isSuccess,
		error
	}), [isLoading, errors, error, isSuccess])
}