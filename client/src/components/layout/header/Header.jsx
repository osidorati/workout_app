import styles from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'
import { IoMdArrowBack, SlUser } from 'react-icons/all.js'
import Hamburger from '../hamburger/Hamburger.jsx'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({backlink = ''}) => {

	const {pathname} = useLocation()
	const navigate = useNavigate()

	const {isAuth} = useAuth()

	return <header className={styles.header}>
		{pathname !== '/' ? (
		<button onClick={() => {navigate(backlink)}}>
			<IoMdArrowBack fill='#fff' fontSize={29} />
		</button>
			):
			<button onClick={() => {navigate('/profile')}}>
				<SlUser fill='#fff' fontSize={29} />
			</button>
		}
		<Hamburger />
	</header>
}

export default Header