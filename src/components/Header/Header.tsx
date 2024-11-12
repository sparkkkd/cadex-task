import Button from '../../UI/MainButton/Button'
import styles from './Header.module.sass'

import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className={styles.container}>
			<Link className={styles.logo} to={`/`}>
				Some company
			</Link>
			<Button link='/contacts' text='Contact us' />
		</div>
	)
}
