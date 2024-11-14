import styles from './Player.module.sass'

import ReactPlayer from 'react-player/youtube'

export default function Player() {
	return (
		<div className={styles.playerWrapper}>
			<ReactPlayer
				className={styles.reactPlayer}
				url={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
				width='100%'
				height='100%'
				controls
			/>
		</div>
	)
}
