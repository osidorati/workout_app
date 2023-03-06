import { TOKEN } from '../app.constants.js'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from './useAuth.js'
import Cookies from 'js-cookie'

export const useCheckToken = () => {
	const {isAuth, setIsAuth} = useAuth()
	const {pathname} = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}

