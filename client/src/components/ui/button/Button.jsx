import styles from './Button.module.scss'
import cn from 'clsx'

const Button = ({children, clickHandler, size = 'xl'}) => {
	return <div className={styles.wrapper}>
		{/*styles[size] = styles.xl*/}
		<button className={cn(styles.button, styles[size])} onClick={clickHandler}>
			{children}
		</button>
	</div>
}

export default Button