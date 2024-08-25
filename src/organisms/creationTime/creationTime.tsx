import './creationTime.scss'

import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'

import { setNowTime } from '../../store/reducers/timeSlice'

const CreationTime = () => {
	const dispatch = useAppDispatch()
	const creationTime = new Date('2024-7-27').getTime()
	const nowTime = useAppSelector((state) => state.timeReducer.nowTime)

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(setNowTime(new Date().getTime()))
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const time = nowTime - creationTime

	const days = Math.floor(time / (1000 * 60 * 60 * 24))
	const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((time % (1000 * 60)) / 1000)

	return (
		<section className='creation-time section'>
			<div className='creation-time__container container'>
				<h2 className='creation-time__title title-text'>
					Сколько времени прошло с момента создания проекта
				</h2>
				<div className='creation-time__time description-text'>
					{days} дней, {hours} часов, {minutes} минут, {seconds} секунд
				</div>
			</div>
		</section>
	)
}

export default CreationTime
