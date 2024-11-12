import styles from './Main.module.sass'

// Components
import Intro from '../../components/Intro/Intro'
import Features from '../../components/Features/Features'
import Hero from '../../components/Hero/Hero'

export default function Main() {
	return (
		<>
			<Intro />
			<Features />
			<Hero />
		</>
	)
}
