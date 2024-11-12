import styles from './Main.module.sass'

// Components
import Intro from '../../components/Intro/Intro'
import Features from '../../components/Features/Features'

export default function Main() {
	return (
		<div className={styles.container}>
			<Intro />
			<Features />
		</div>
	)
}
