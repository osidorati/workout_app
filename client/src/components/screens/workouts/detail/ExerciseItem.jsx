import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from './Workout.module.scss'

const ExerciseItem = ({ exerciseLog }) => {
	const navigation = useNavigate()
	console.log(import.meta.env.VITE_SERVER_URL + exerciseLog.exercise[0].iconPath)

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigation(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise[0].names}</span>

				<img
					src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise[0].iconPath}
					height='34'
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem
