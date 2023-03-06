import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data.js'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth.js'
import { TOKEN } from '../../../app.constants.js'
import Cookies from 'js-cookie'

const Menu = ({ isShow, setIsShow }) => {
	const {setIsAuth} = useAuth()
	const navigate = useNavigate()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)

		navigate('/auth')
	}

	return (
		<nav className={cn(styles.menu, {
			//динамический ключ в объекте?
			[styles.show]: isShow
		})}>
			<ul>
				{menu.map((item, idx) => (
					<li key={`_menu_${idx}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu