import './registration.scss'

import { FC } from 'react'

import { Link } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'

import { IRegistration } from './registration.interface'

import { useTranslation } from 'react-i18next'

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
			t('registration.alert.message', {
				name: data.name,
				email: data.email,
				password: data.password,
			})
		)
	}

	const { t } = useTranslation()

	return (
		<section className='registration section'>
			<div className='registration__container container'>
				<h1 className='registration__title title-text'>
					{t('registration.title')}
				</h1>
				<form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
					<div className='registration__box'>
						<div className='registration__item'>
							<input
								className={`registration__input input-form description-text ${
									nameError ? 'input-form_error' : ''
								}`}
								type='text'
								placeholder={t('registration.name')}
								{...register('name', {
									required: `${t('global.input.required')}`,
									minLength: {
										value: 2,
										message: `${t('global.input.minLength')}`,
									},
									maxLength: {
										value: 16,
										message: `${t('global.input.maxLength')}`,
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
								placeholder={t('registration.email')}
								{...register('email', {
									required: `${t('global.input.required')}`,
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: `${t('global.input.errorEmail')}`,
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
								placeholder={t('registration.password')}
								{...register('password', {
									required: `${t('global.input.required')}`,
									pattern: {
										value:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
										message: `${t('global.input.errorPassword')}`,
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
								placeholder={t('registration.repeatPassword')}
								{...register('repeatPassword', {
									required: `${t('global.input.required')}`,
									validate: (value) =>
										value === password ||
										`${t('global.input.errorMatchPassword')}`,
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
							{t('registration.singUp')}
						</RegularButton>
						<p className='registration__link description-text'>
							<Link to='/authorization'>{t('registration.haveProfile')}</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Registration
