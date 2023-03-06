import Header from './header/Header.jsx'
import styles from './Layout.module.scss'
import cn from 'clsx'
import { useCheckToken } from '../../hooks/useCheckToken.js'

const Layout = ({ children, bgImage, heading='', backLink='/' }) => {

	useCheckToken()
	return (
		<section
		className={cn(styles.wrapper, {
			[styles.otherPage]: !!heading
		})}
		style={{ backgroundImage: `url(${bgImage}` }}>
			<Header backlink={backLink} />

			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>

	)
}

export default Layout