import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/cart'

import {
	Amount,
	ButtonsWrapper,
	CartWrapper,
	ComboImage,
	Container,
	InfoMessage,
} from './styles'

type ProductProps = {
	data: {
		id: string
		title: string
		price: number
		img: string
	}
}

type ItemProps = {
	id: string
	title: string
	price: number
	img: string
}

export function Product({ data }: ProductProps) {
	const [amount, setAmount] = useState(0)
	const [infoMessage, setInfoMessage] = useState('')

	const { cartItems, setCartItems } = useCart()

	function handleRemoveAmount() {
		setAmount(amount > 0 ? amount - 1 : amount)
		setInfoMessage('')
	}

	function handleAddAmount() {
		setAmount((amount) => amount + 1)
		setInfoMessage('')
	}

	function handleAddNewCartItem() {
		const newItem = {
			id: data.id,
			title: data.title,
			price: data.price,
			img: data.img,
			amount,
			total: data.price * amount,
		}
		if (newItem.amount > 0) {
			const checkItemExists = cartItems.filter(
				(item: ItemProps) => item.id === newItem.id,
			)

			if (checkItemExists) {
				const removePreviousItemFromCart = cartItems.filter(
					(item: ItemProps) => item.id !== newItem.id,
				)
				setCartItems([...removePreviousItemFromCart, newItem])
			} else {
				console.log('entrei')
				setCartItems([...cartItems, newItem])
			}
			setInfoMessage('✓ Adicionado ao carrinho')
		} else {
			setInfoMessage(
				'✖ Não foi possível adicionar ao carrinho. Verifique a quantidade.',
			)
		}
	}

	return (
		<Container>
			<ComboImage src={data.img} alt="" />
			<h3>{data.title}</h3>
			<p>+ 3 microlotes premiados e 1 ebook ilustrado</p>
			<CartWrapper>
				<div>
					<span>R$ </span>
					<strong>{data.price.toFixed(2).replace('.', ',')}</strong>
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
			<Link to="/checkout" style={{ textDecoration: 'none', padding: '.5rem' }}>
				<InfoMessage>{infoMessage}</InfoMessage>
			</Link>
		</Container>
	)
}
