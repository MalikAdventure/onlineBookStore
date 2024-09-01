import './cart.scss'

import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setCartShow } from '../../store/reducers/cartSlice'

const Cart = () => {
	const dispatch = useAppDispatch()

	const { cartGoods, cartShow } = useAppSelector((state) => state.cartReducer)

	const handleOutsideClick = (event: MouseEvent) => {
		if (
			event.target instanceof HTMLElement &&
			!event.target.closest('.button-cart')
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
					<div className='cart__goods description-text'>
						{cartGoods &&
							cartGoods.map((item) => (
								<p key={item.id}>
									{item.id} x {item.quantity}
								</p>
							))}
						{cartGoods.length === 0 && (
							<p className='description-text'>Корзина пуста</p>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Cart
