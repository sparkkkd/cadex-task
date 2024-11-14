import Button from '../../UI/Button/Button'
import styles from './Header.module.sass'

import { Link } from 'react-router-dom'

import backgroundImage from '../../images/patterns.png'

export default function Header() {
	return (
		<header className={styles.container}>
			<div
				className={styles.background}
				style={{ backgroundImage: `url(${backgroundImage})` }}
			></div>
			<div className={styles.wrapper}>
				<Link className={styles.logo} to={`/home`}>
					Some company
				</Link>
				<Button link='/contacts' text='Contact us' />
			</div>
		</header>
	)
}
