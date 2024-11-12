import { Link } from 'react-router-dom'

import styles from './Button.module.sass'

export interface MainButtonProps {
	link: string
	text: string
}

export default function MainButton({ link, text }: MainButtonProps) {
	return (
		<Link to={link} className={styles.contact}>
			{text}
		</Link>
	)
}
