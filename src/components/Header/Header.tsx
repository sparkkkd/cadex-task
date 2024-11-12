import styles from './Header.module.sass'

import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className={styles.container}>
			<Link className={styles.logo} to={`/`}>
				Some company
			</Link>
			<Link className={styles.contact} to={`/contacts`}>
				Contact us
			</Link>
		</div>
	)
}
