import './authorization.scss'

import { FC } from 'react'

import { Link } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'

import { IAuthorization } from './authorization.interface'

import { useTranslation } from 'react-i18next'

const Authorization: FC = () => {
	const { register, handleSubmit, formState } = useForm<IAuthorization>({
		mode: 'onChange',
	})

	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message

	const onSubmit: SubmitHandler<IAuthorization> = (data) => {
		alert(
			t('authorization.alert.message', {
				email: data.email,
				password: data.password,
			})
		)
	}

	const { t } = useTranslation()

	return (
		<section className='authorization section'>
			<div className='authorization__container container'>
				<h1 className='authorization__title title-text'>
					{t('authorization.title')}
				</h1>
				<form className='authorization__form' onSubmit={handleSubmit(onSubmit)}>
					<div className='authorization__box'>
						<div className='authorization__item'>
							<input
								className={`authorization__input input-form description-text ${
									emailError ? 'input-form_error' : ''
								}`}
								type='email'
								placeholder={t('authorization.email')}
								{...register('email', {
									required: `${t('global.input.required')}`,
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: `${t('global.input.errorEmail')}`,
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
								placeholder={t('authorization.password')}
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
								<p className='authorization__text error-text'>
									{passwordError}
								</p>
							)}
						</div>
					</div>
					<div className='authorization__buttons'>
						<RegularButton type='submit' className='authorization__button'>
							{t('authorization.signIn')}
						</RegularButton>
						<p className='authorization__link description-text'>
							<Link to='/registration'>{t('authorization.noProfile')}</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Authorization
