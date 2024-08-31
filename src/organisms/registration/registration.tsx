import './registration.scss'

import { FC } from 'react'

import { Link } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'

import { IRegistration } from './registration.interface'

const Registration: FC = () => {
	const { register, handleSubmit, formState, watch } = useForm<IRegistration>({
		mode: 'onChange',
	})

	const password = watch('password', '')

	const nameError = formState.errors.name?.message
	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message
	const repeatPasswordError = formState.errors.repeatPassword?.message

	const onSubmit: SubmitHandler<IRegistration> = (data) => {
		alert(
			`Ваше имя: ${data.name}, ваша почта: ${data.email} и ваш пароль: ${data.password}`
		)
	}

	return (
		<section className='registration section'>
			<div className='registration__container container'>
				<h1 className='registration__title title-text'>
					Зарегистрировать профиль
				</h1>
				<form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
					<div className='registration__box'>
						<div className='registration__item'>
							<input
								className={`registration__input input-form description-text ${
									nameError ? 'input-form_error' : ''
								}`}
								type='text'
								placeholder='Ваше имя'
								{...register('name', {
									required: 'Это поле обязательно к заполнению',
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
							{nameError && (
								<p className='registration__text error-text'>{nameError}</p>
							)}
						</div>
						<div className='registration__item'>
							<input
								className={`registration__input input-form description-text ${
									emailError ? 'input-form_error' : ''
								}`}
								type='email'
								placeholder='Ваша почта'
								{...register('email', {
									required: 'Это поле обязательно к заполнению',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Неправильная почта',
									},
								})}
							/>
							{emailError && (
								<p className='registration__text error-text'>{emailError}</p>
							)}
						</div>
						<div className='registration__item'>
							<input
								className={`registration__input input-form description-text ${
									passwordError ? 'input-form_error' : ''
								}`}
								type='password'
								placeholder='Ваш пароль'
								{...register('password', {
									required: 'Это поле обязательно к заполнению',
									pattern: {
										value:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
										message:
											'Пароль должен быть не меньше 8 символов и содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
									},
								})}
							/>
							{passwordError && (
								<p className='registration__text error-text'>{passwordError}</p>
							)}
						</div>
						<div className='registration__item'>
							<input
								className={`registration__input input-form description-text ${
									repeatPasswordError ? 'input-form_error' : ''
								}`}
								type='password'
								placeholder='Повторите ваш пароль'
								{...register('repeatPassword', {
									required: 'Это поле обязательно к заполнению',
									validate: (value) =>
										value === password || 'Пароли не совпадают',
								})}
							/>
							{repeatPasswordError && (
								<p className='registration__text error-text'>
									{repeatPasswordError}
								</p>
							)}
						</div>
					</div>
					<div className='registration__buttons'>
						<RegularButton type='submit' className='registration__button'>
							Зарегистрироваться
						</RegularButton>
						<p className='registration__link description-text'>
							<Link to='/authorization'>У меня уже есть профиль</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Registration
