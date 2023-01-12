import { createContext, ReactNode, useContext, useState } from 'react'

export type CartProviderProps = {
	children: ReactNode
}

export const CartContext = createContext({} as any)

function CartProvider({ children }: CartProviderProps) {
	const [cartItems, setCartItems] = useState([])
	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	)
}

function useCart() {
	const context = useContext(CartContext)
	return context
}

export { CartProvider, useCart }
