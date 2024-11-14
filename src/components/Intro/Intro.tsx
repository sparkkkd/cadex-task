import Container from '../../UI/Container/Container'
import Player from '../Player/Player'
import styles from './Intro.module.sass'

export default function Intro() {
	return (
		<Container>
			<div className={styles.container}>
				<div className={styles.left}>
					<h1 className={styles.title}>Most important title on the page</h1>
					<article className={styles.subtitle}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
						condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
					</article>
				</div>
				<div className={styles.right}>
					<Player url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
				</div>
			</div>
		</Container>
	)
}
