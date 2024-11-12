import Button from '../../UI/Button/Button'
import styles from './Header.module.sass'

import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Link className={styles.logo} to={`/`}>
					Some company
				</Link>
				<Button link='/contacts' text='Contact us' />
			</div>
		</div>
	)
}
