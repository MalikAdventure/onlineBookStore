import './upButton.scss'

import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import { setShowButton } from '../../store/reducers/upSlice'

import { useEffect } from 'react'

import up from '../../assets/icons/up.png'

const UpButton = () => {
	const dispatch = useAppDispatch()
	const { showButton } = useAppSelector((state) => state.upReducer)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 800) {
				dispatch(setShowButton(true))
			} else {
				dispatch(setShowButton(false))
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<>
			{showButton && (
				<RoundButton onClick={scrollUp} className='up-button'>
					<img src={up} alt='вверх' />
				</RoundButton>
			)}
		</>
	)
}

export default UpButton
