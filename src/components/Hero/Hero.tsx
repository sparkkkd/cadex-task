import Button from '../../UI/Button/Button'
import styles from './Hero.module.sass'

import backgroundImage from '../../images/hero.png'

export default function Hero() {
	return (
		<div className={styles.container}>
			<div
				className={styles.background}
				style={{ backgroundImage: `url(${backgroundImage})` }}
			></div>
			<h3 className={styles.title}>Less important title</h3>
			<Button text='Contact us' link='/contacts' />
		</div>
	)
}
