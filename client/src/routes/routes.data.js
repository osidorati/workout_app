import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'

export const routes = [
	{
		path: '/', //путь
		// exact = false
		component: Home, //сам компонент
		isAuth: false //нужна ли авторизация для этой страницы
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
		isAuth: false
	} /*
	{
		path: '/new-exercise',

		component: NewExercise,
		isAuth: true,
	},

	{
		path: '/workout/:id',

		component: SingleWorkout,
		isAuth: true,
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		isAuth: true,
	},
	{
		path: '/exercise/:id',

		component: SingleExercise,
		isAuth: true,
	}, */
]
