import Container from '../../UI/Container/Container'
import Form from '../../UI/Form/Form'
import styles from './Contacts.module.sass'

export default function Contacts() {
	return (
		<Container>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Only CTA on the page</h2>
				<Form />
			</div>
		</Container>
	)
}
