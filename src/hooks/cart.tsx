import { createContext, useContext, useState } from 'react'

export const CartContext = createContext

function CartProvider({ children }) {
	function removeFromCart() {
		
	}
	return <CartContext.Provider>{children}</CartContext.Provider>
}
function useCart() {
	const context = useContext(CartContext)

	return context
}

export { CartProvider, useCart }
