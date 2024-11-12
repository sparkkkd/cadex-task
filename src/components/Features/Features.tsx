import Button from '../../UI/Button/Button'
import Container from '../../UI/Container/Container'
import styles from './Features.module.sass'

import { FEATURES } from './constant'

export default function Features() {
	return (
		<Container>
			<div className={styles.container}>
				<h2 className={styles.title}>Also very important title</h2>
				<div className={styles.featuresContainer}>
					{FEATURES.map((feature) => (
						<div key={feature.id} className={styles.feature}>
							<h4>{feature.title}</h4>
							<span>{feature.text}</span>
						</div>
					))}
				</div>
				<Button link='/contacts' text='Contact us' />
			</div>
		</Container>
	)
}
