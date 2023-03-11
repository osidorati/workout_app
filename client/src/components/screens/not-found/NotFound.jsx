import Layout from '../../layout/Layout.jsx'
import { useAuth } from '../../../hooks/useAuth.js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
	const {isAuth} = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth')
		}
	})

	return (
		<>
			<Layout heading='Page not found'/>
			<div className='wrapper-inner-page'> 404 page not found </div>
		</>
	)
}

export default NotFound