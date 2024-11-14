// Components
import Intro from '../../components/Intro/Intro'
import Features from '../../components/Features/Features'
import Hero from '../../components/Hero/Hero'
import Transition from '../../UI/Transition/Transition'

export default function Main() {
	return (
		<Transition>
			<Intro />
			<Features />
			<Hero />
		</Transition>
	)
}
