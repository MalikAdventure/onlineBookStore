import './authorization.scss'

import { FC } from 'react'

import { Link } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'

import { IAuthorization } from './authorization.interface'

const Authorization: FC = () => {
	const { register, handleSubmit, formState } = useForm<IAuthorization>({
		mode: 'onChange',
	})

	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message

	const onSubmit: SubmitHandler<IAuthorization> = (data) => {
		alert(`Ваша почта: ${data.email} и ваш пароль: ${data.password}`)
	}

	return (
		<section className='authorization section'>
			<div className='authorization__container container'>
				<h1 className='authorization__title title-text'>Войти в профиль</h1>
				<form className='authorization__form' onSubmit={handleSubmit(onSubmit)}>
					<div className='authorization__box'>
						<div className='authorization__item'>
							<input
								className={`authorization__input input-form description-text ${
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
								<p className='authorization__text error-text'>{emailError}</p>
							)}
						</div>
						<div className='authorization__item'>
							<input
								className={`authorization__input input-form description-text ${
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
								<p className='authorization__text error-text'>
									{passwordError}
								</p>
							)}
						</div>
					</div>
					<div className='authorization__buttons'>
						<RegularButton type='submit' className='authorization__button'>
							Авторизоваться
						</RegularButton>
						<p className='authorization__link description-text'>
							<Link to='/registration'>У меня нет профиля</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Authorization
