import { createContext, useContext, useState } from 'react'

export const CartContext = createContext

function CartProvider({ children }) {
	const [amount, setAmount] = useState(0)
	const [cart, setCart] = useState([])

	function handleRemoveAmount() {
		setAmount((amount) => (amount > 0 ? amount - 1 : amount))
	}

	function handleAddAmount() {
		setAmount((amount) => amount + 1)
	}

	function handleAddNewCartItem() {
		const newItem = {
			id: data.id,
			title: data.title,
			price: data.price,
			amount,
		}
		setCart([...cart, newItem])
	}

	return <CartContext.Provider>{children}</CartContext.Provider>
}
function useCart() {
	const context = useContext(CartContext)

	return context
}

export { CartProvider, useCart }
