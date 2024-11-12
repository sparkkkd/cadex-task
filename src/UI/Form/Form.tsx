import styles from './Form.module.sass'

import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage'

import { IFormData } from '../../types/types'

const formValidationSchema = {
	name: Yup.string().required('Enter name'),
	email: Yup.string().required('Enter email').email('Invalid email'),
	text: Yup.string().required('Enter text'),
}

export default function Form() {
	const validationSchema = Yup.object().shape(formValidationSchema)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({
		defaultValues: {},
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	})

	const onSubmit: SubmitHandler<IFormData> = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<label className={styles.label}>Name</label>
				<input
					className={styles.input}
					placeholder='Enter your name...'
					type='text'
					{...register('name')}
				/>
				{errors.name && <FormErrorMessage errorMessage={errors.name?.message} />}

				<label className={styles.label}>Email</label>
				<input
					className={styles.input}
					placeholder='Enter your email...'
					type='text'
					{...register('email')}
				/>
				{errors.email && <FormErrorMessage errorMessage={errors.email?.message} />}

				<label className={styles.label}>Message</label>
				<textarea className={styles.textArea} {...register('text')} />
				{errors.text && <FormErrorMessage errorMessage={errors.text?.message} />}

				<button type='submit' className={styles.button}>
					Submit
				</button>
			</form>
		</div>
	)
}
