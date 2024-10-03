import './cart.scss'

import { FC } from 'react'

import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setCartShow, setCartGoods } from '../../store/reducers/cartSlice'

import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import { useTranslation } from 'react-i18next'

const Cart: FC = () => {
	const dispatch = useAppDispatch()

	const { cartGoods, cartShow } = useAppSelector((state) => state.cartReducer)

	const handleOutsideClick = (event: MouseEvent) => {
		if (
			event.target instanceof HTMLElement &&
			!event.target.closest('.button-cart') &&
			!event.target.closest('.cart')
		) {
			dispatch(setCartShow(false))
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick)
		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	const { t } = useTranslation()

	return (
		<>
			{cartShow && (
				<div className='cart'>
					<h2 className='cart__title title-text'>{t('cart.title')}</h2>
					<ul className='cart__goods description-text'>
						{cartGoods &&
							cartGoods.map((item) => (
								<li key={item.id} className='cart__goods-item'>
									<p className='cart__goods-text link-text'>
										{t('cart.goods', {
											id: item.id,
											quantity: item.quantity,
										})}
									</p>
									<RoundButton
										style={{
											backgroundColor: 'var(--blue)',
											color: 'var(--white)',
											width: '30px',
											height: '30px',
											borderRadius: '5px',
										}}
										onClick={() => {
											dispatch(setCartGoods({ id: item.id, quantity: 1 }))
										}}>
										+
									</RoundButton>
									<RoundButton
										style={{
											backgroundColor: 'var(--blue)',
											color: 'var(--white)',
											width: '30px',
											height: '30px',
											borderRadius: '5px',
										}}
										onClick={() => {
											dispatch(setCartGoods({ id: item.id, quantity: -1 }))
										}}>
										-
									</RoundButton>
								</li>
							))}
						{cartGoods.length === 0 && (
							<p className='description-text' style={{ textAlign: 'center' }}>
								{t('cart.empty')}
							</p>
						)}
					</ul>
				</div>
			)}
		</>
	)
}

export default Cart
