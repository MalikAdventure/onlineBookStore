import './cart.scss'

import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setCartShow } from '../../store/reducers/cartSlice'

import RoundButton from '../../atoms/buttons/roundButton/roundButton'

const Cart = () => {
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

	return (
		<>
			{cartShow && (
				<div className='cart'>
					<h2 className='cart__title title-text'>Корзина</h2>
					<ul className='cart__goods description-text'>
						{cartGoods &&
							cartGoods.map((item) => (
								<li key={item.id}>
									Книга: {item.id} штук: {item.quantity}
									<RoundButton>+</RoundButton>
									<RoundButton>-</RoundButton>
								</li>
							))}
						{cartGoods.length === 0 && (
							<p className='description-text' style={{ textAlign: 'center' }}>
								Корзина пуста
								<br />
								Добавьте что-нибудь
							</p>
						)}
					</ul>
				</div>
			)}
		</>
	)
}

export default Cart
