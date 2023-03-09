import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { useListExercises } from './useListExercises.js'
import Loader from '../../ui/Loader.jsx'

const SelectExercises = ({control}) => {
	const {data, isLoading} = useListExercises()
	// console.log(data)
	if (isLoading) return <Loader />

	return (
		<Controller
			name='exercisesIds'
			control={control}
			render={({ field: { value,onChange } }) => {
				// console.log(value)
				return (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={data.map((exercise) => ({
							value: exercise.id,
							label: exercise.names
						}))}
						value={value}
						onChange={onChange}
						isMulti
					/>
				)
			}}
		/>
	)
}

export default SelectExercises