import styles from './Container.module.sass'

interface ContainerProps {
	children: JSX.Element
}

export default function Container({ children }: ContainerProps) {
	return <div className={styles.container}>{children}</div>
}
