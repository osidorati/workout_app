import styles from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'
import { IoMdArrowBack } from 'react-icons/all.js'
import Hamburger from '../hamburger/Hamburger.jsx'

const Header = ({backlink}) => {

	const {isAuth} = useAuth

	return <header className={styles.header}>
		<button onClick={() => {}}>
			<IoMdArrowBack fill='#fff' fontSize={29} />
		</button>

		<Hamburger />
	</header>
}

export default Header