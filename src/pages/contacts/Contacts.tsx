import Container from '../../UI/Container/Container'
import styles from './Contacts.module.sass'

import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FormErrorMessage from '../../UI/FormErrorMessage/FormErrorMessage'

import { IFormData } from '../../types/types'
import { sendMessage } from '../../api/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const formValidationSchema = {
	name: Yup.string().required('Enter name'),
	email: Yup.string().required('Enter email').email('Invalid email'),
	text: Yup.string().required('Enter text'),
}

export default function Contacts() {
	const nav = useNavigate()
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
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

	const onSubmit: SubmitHandler<IFormData> = async (data) => {
		const result = await sendMessage(data)

		if (result.ok) {
			setIsSuccess(true)
		}
	}

	useEffect(() => {
		if (isSuccess) {
			setTimeout(() => {
				console.log(`123`)

				nav('/')
			}, 3000)
		}
	}, [isSuccess])

	return (
		<Container>
			<div className={styles.wrapper}>
				{!isSuccess ? (
					<>
						<h2 className={styles.title}>Only CTA on the page</h2>
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
					</>
				) : (
					<span className={styles.success}>Message generated on the server</span>
				)}
			</div>
		</Container>
	)
}
