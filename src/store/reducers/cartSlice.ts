import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
	cartGoods: { id: number; quantity: number }[]
	cartShow: boolean
}

const initialState: CartState = {
	cartGoods: [],
	cartShow: false,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCartGoods: (
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			const existingItem = state.cartGoods.find(
				(item) => item.id === action.payload.id
			)
			if (existingItem) {
				existingItem.quantity += action.payload.quantity
			} else {
				state.cartGoods.push({
					id: action.payload.id,
					quantity: action.payload.quantity,
				})
			}
			console.log(state.cartGoods)
		},
		setCartShow: (state, action: PayloadAction<boolean>) => {
			state.cartShow = action.payload
		},
	},
})

export const { setCartGoods, setCartShow } = cartSlice.actions
export default cartSlice.reducer
