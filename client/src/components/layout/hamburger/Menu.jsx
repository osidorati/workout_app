import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data.js'

const Menu = ({ isShow }) => {
	const logoutHandler = () => {}
	return (
		<nav className={cn(styles.menu, {
			//динамический ключ в объекте?
			[styles.show]: isShow
		})}>
			<ul>
				{menu.map((item, idx) => (
					<li key={`_menu_${idx}`}>
						{item.title}
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