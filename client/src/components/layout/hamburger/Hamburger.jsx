import styles from './Hamburger.module.scss'
import { CgMenuRight, IoClose } from 'react-icons/all.js'
import Menu from './Menu.jsx'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside.js'

const Hamburger = ({backlink}) => {

	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	const logoutHandler = () => {}

	return <div className={styles.wrapper} ref={ref}>
		<button onClick={() => setIsShow(!isShow)}>
			{isShow ? <IoClose /> : <CgMenuRight />}
		</button>
		<Menu isShow={isShow} setIsShow={setIsShow}/>
	</div>
}

export default Hamburger