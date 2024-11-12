import Button from '../../UI/MainButton/Button'
import styles from './Features.module.sass'

import { FEATURES } from './constant'

export default function Features() {
	return (
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
	)
}
