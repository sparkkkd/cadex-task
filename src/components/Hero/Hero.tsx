import Button from '../../UI/Button/Button'
import styles from './Hero.module.sass'

export default function Hero() {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Less important title</h3>
			<Button text='Contact us' link='/contacts' />
		</div>
	)
}
