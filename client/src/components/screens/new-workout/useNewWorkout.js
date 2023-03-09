import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import WorkoutService from '../../../services/workout/workout.service.js'

export const useNewWorkout = () => {

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
			['create workout'],
			body => WorkoutService.create(body),
			{
				onSuccess: () => {
					reset(
						{
							names: '',
							exercisesIds: []
						}
					)
				}
			}
		)

		const onSubmit = data => {
			console.log(data)
			mutate({
				name: data.names,
				exerciseIds: data.exercisesIds.map(ex => ex.value)
			})
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
