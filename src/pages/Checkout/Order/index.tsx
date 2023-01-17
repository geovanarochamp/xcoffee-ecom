import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../../hooks/cart'
import {
	Amount,
	ButtonsWrapper,
	ConfirmOrderButton,
	Container,
	EditOrderWrapper,
	ItemWrapper,
	TotalInfo,
	TotalWrapper,
} from './style'

type CartItemsData = {
	id: string
	title: string
	price: number
	img: string
	amount: number
	total: number
}

export function Order() {
	const { cartItems, setCartItems } = useCart()

	function setNewItem(newItem: CartItemsData) {
		const cartItemsWithOutItem = cartItems.filter(
			(item) => item.id !== newItem.id,
		)
		setCartItems([...cartItemsWithOutItem, newItem])
	}

	function handleRemoveAmount(item: CartItemsData) {
		const previousAmount = item.amount
		if (previousAmount > 1) {
			const amount = previousAmount - 1

			const newItem = {
				id: item.id,
				title: item.title,
				price: item.price,
				img: item.img,
				amount,
				total: item.price * amount,
			}

			setNewItem(newItem)
		}
	}

	function handleAddAmount(item: CartItemsData) {
		const previousAmount = item.amount
		const amount = previousAmount + 1

		const newItem = {
			id: item.id,
			title: item.title,
			price: item.price,
			img: item.img,
			amount,
			total: item.price * amount,
		}

		setNewItem(newItem)
	}

	function handleRemoveItem(id: string) {
		const cartItemsWithOutItem = cartItems.filter((item) => item.id !== id)
		setCartItems(cartItemsWithOutItem)
	}
	let itemTotal = 0
	const deliveryFee = 3.5

	return (
		<Container>
			{cartItems.length > 0 ? (
				<>
					<div>
						{cartItems.map((item) => {
							itemTotal = itemTotal + item.total
							return (
								<ItemWrapper key={item.id}>
									<EditOrderWrapper>
										<img src={item.img} alt="" />
										<div>
											<span>{item.title}</span>
											<ButtonsWrapper>
												<Amount>
													<button onClick={() => handleRemoveAmount(item)}>
														<Minus size={15} weight="bold" />
													</button>
													<span>{item.amount}</span>
													<button onClick={() => handleAddAmount(item)}>
														<Plus size={15} weight="bold" />
													</button>
												</Amount>
												<button onClick={() => handleRemoveItem(item.id)}>
													<Trash size={15} /> Remover
												</button>
											</ButtonsWrapper>
										</div>
									</EditOrderWrapper>
									<strong>R$ {item.total.toFixed(2).replace('.', ',')}</strong>
								</ItemWrapper>
							)
						})}
					</div>
					<TotalWrapper>
						<TotalInfo>
							<span>Total de Itens</span>
							<span>R$ {itemTotal.toFixed(2).replace('.', ',')}</span>
						</TotalInfo>
						<TotalInfo>
							<span>Entrega</span>
							<span>R$ R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
						</TotalInfo>
						<TotalInfo>
							<strong>Total</strong>
							<strong>
								R$ {(itemTotal + deliveryFee).toFixed(2).replace('.', ',')}
							</strong>
						</TotalInfo>
					</TotalWrapper>

					<ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
				</>
			) : (
				<h4>Não há itens no carrinho.</h4>
			)}
		</Container>
	)
}
