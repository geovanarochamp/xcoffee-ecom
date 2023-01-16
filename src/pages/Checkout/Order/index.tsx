import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../hooks/cart'
import {
	Amount,
	Container,
	ItemWrapper,
	TotalInfo,
	TotalWrapper,
} from './style'

export function Order() {
	const { cartItems } = useCart()
	const [amount, setAmount] = useState(0)

	function handleRemoveAmount() {
		setAmount(amount > 0 ? amount - 1 : amount)
	}

	function handleAddAmount() {
		setAmount((amount) => amount + 1)
	}

	const itemTotal = 29.7
	const deliveryFee = 3.5
	const total = itemTotal + deliveryFee

	return (
		<Container>
			<h2>Order</h2>
			<div>
				{cartItems.map((item) => (
					<ItemWrapper key={item.id}>
						<div>
							<img src={item.img} alt="" />
							<div>
								<span>{item.title}</span>
								<Amount>
									<button onClick={handleRemoveAmount}>
										<Minus size={15} weight="bold" />
									</button>
									<span>{item.amount}</span>
									<button onClick={handleAddAmount}>
										<Plus size={15} weight="bold" />
									</button>
								</Amount>
							</div>
						</div>
						<strong>R$ {item.price}</strong>
					</ItemWrapper>
				))}
			</div>
			<TotalWrapper>
				<TotalInfo>
					<span>Total de Itens</span>
					<span>{itemTotal.toFixed(2).replace('.', ',')}</span>
				</TotalInfo>
				<TotalInfo>
					<span>Entrega</span>
					<span>{deliveryFee.toFixed(2).replace('.', ',')}</span>
				</TotalInfo>
				<TotalInfo>
					<strong>Total</strong>
					<strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
				</TotalInfo>
			</TotalWrapper>

			<button>CONFIRMAR PEDIDO</button>
		</Container>
	)
}
