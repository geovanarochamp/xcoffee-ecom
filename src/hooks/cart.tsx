import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'

type CartItemsData = {
	id: string
	title: string
	price: number
	img: string
	amount: number
	total: number
}

type CartContextProps = {
	cartItems: CartItemsData[]
	setCartItems: (data: CartItemsData[]) => void
}

type CartProviderProps = {
	children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

function CartProvider({ children }: CartProviderProps) {
	const [cartItems, setCartItems] = useState<CartItemsData[]>([])

	useEffect(() => {
		if (cartItems.length > 0) {
			localStorage.setItem('cartItems', JSON.stringify(cartItems))
		}
	}, [cartItems])

	useEffect(() => {
		const savedCartItems = JSON.parse(localStorage.getItem('cartItems'))
		console.log(savedCartItems)
		if (savedCartItems.length > 0) {
			setCartItems(savedCartItems)
		}
	}, [])
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
