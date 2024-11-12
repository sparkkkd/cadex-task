import Container from '../../UI/Container/Container'
import styles from './Intro.module.sass'

import ReactPlayer from 'react-player/youtube'

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
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
						width='100%'
						height='100%'
						controls
					/>
				</div>
			</div>
		</Container>
	)
}
