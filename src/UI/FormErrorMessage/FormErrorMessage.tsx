import styles from './FormErrorMessage.module.sass'

interface FormErrorMessageProps {
	errorMessage: string | undefined
}

export default function FormErrorMessage({ errorMessage }: FormErrorMessageProps) {
	return <span className={styles.error}>Error: {errorMessage}</span>
}
