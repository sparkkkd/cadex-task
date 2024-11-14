import styles from './Player.module.sass'

import ReactPlayer from 'react-player/youtube'

interface PlayerProps {
	url: string
}

export default function Player({ url }: PlayerProps) {
	return (
		<div className={styles.playerWrapper}>
			<ReactPlayer className={styles.reactPlayer} url={url} width='100%' height='100%' controls />
		</div>
	)
}
