import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/cart'

import {
	Amount,
	ButtonsWrapper,
	CartWrapper,
	ComboImage,
	Container,
} from './styles'

type ProductProps = {
	data: {
		id: string
		title: string
		price: string
		img: string
	}
}

export function Product({ data }: ProductProps) {
	const [amount, setAmount] = useState(0)

	const { cartItems, setCartItems } = useCart()

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
		if (newItem.amount > 0) {
			const checkItemExists = cartItems.filter(
				(item: any) => item.id === newItem.id,
			)

			if (checkItemExists) {
				const removePreviousItemFromCart = cartItems.filter(
					(item: any) => item.id !== newItem.id,
				)
				setCartItems([...removePreviousItemFromCart, newItem])
			} else {
				setCartItems([...cartItems, newItem])
			}
		}
	}

	console.log(cartItems)

	return (
		<Container>
			<ComboImage src={data.img} alt="" />
			<h3>{data.title}</h3>
			<p>+ 3 microlotes premiados e 1 ebook ilustrado</p>
			<CartWrapper>
				<div>
					<span>R$ </span>
					<strong>{data.price}</strong>
				</div>
				<ButtonsWrapper>
					<Amount>
						<button onClick={handleRemoveAmount}>
							<Minus size={15} weight="bold" />
						</button>
						<span>{amount}</span>
						<button onClick={handleAddAmount}>
							<Plus size={15} weight="bold" />
						</button>
					</Amount>
					<button onClick={handleAddNewCartItem}>
						<ShoppingCartSimple size={18} />
					</button>
				</ButtonsWrapper>
			</CartWrapper>
		</Container>
	)
}
