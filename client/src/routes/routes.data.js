import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import NewExercise from '../components/screens/new-exercise/NewExercise.jsx'
import Workout from '../components/screens/workouts/detail/Workout'
import ListWorkouts from '../components/screens/workouts/list/ListWorkouts'

export const routes = [
	{
		path: '/', //путь
		// exact = false
		component: Home, //сам компонент
		isAuth: true//нужна ли авторизация для этой страницы
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true,
	},
	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true,
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true,
	}/*
	{
		path: '/exercise/:id',

		component: SingleExercise,
		isAuth: true,
	}, */
]
