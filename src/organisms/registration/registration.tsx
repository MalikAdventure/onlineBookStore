import './registration.scss'

import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'

import { IRegistration } from './registration.interface'

const Registration: FC = () => {
	const { register, handleSubmit, formState } = useForm<IRegistration>({
		mode: 'onChange',
	})

	const nameError = formState.errors.name?.message
	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message

	const onSubmit: SubmitHandler<IRegistration> = (data) => {
		console.log(data)
	}

	return (
		<section className='registration section'>
			<div className='registration__container container'>
				<h1 className='registration__title title-text'>
					Зарегистрировать профиль
				</h1>
				<form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
					<div className='registration__box'>
						<input
							className='registration__input input-form description-text'
							type='text'
							placeholder='Ваше имя'
							{...register('name', {
								required: 'Это поле обязательно к заполнению1',
								minLength: {
									value: 2,
									message: 'Минимум 2 символа',
								},
								maxLength: {
									value: 16,
									message: 'Максимум 16 символов',
								},
							})}
						/>
						{nameError && <p className='error-text'>{nameError}</p>}
					</div>
					<div className='registration__box'>
						<input
							className='registration__input input-form description-text'
							type='email'
							placeholder='Ваша почта'
							{...register('email', {
								required: 'Это поле обязательно к заполнению2',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Неправильная почта',
								},
							})}
						/>
						{emailError && <p className='error-text'>{emailError}</p>}
					</div>
					<div className='registration__box'>
						<input
							className='registration__input input-form description-text'
							type='password'
							placeholder='Ваш пароль'
							{...register('password', {
								required: 'Это поле обязательно к заполнению3',
								pattern: {
									value:
										/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
									message:
										'Пароль должен быть не меньше 8 символов и содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ.',
								},
							})}
						/>
						{passwordError && <p className='error-text'>{passwordError}</p>}
					</div>
					<RegularButton type='submit' className='registration__button'>
						Зарегистрироваться
					</RegularButton>
				</form>
			</div>
		</section>
	)
}

export default Registration
