import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
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
			<div>
				{cartItems.map((item) => (
					<ItemWrapper key={item.id}>
						<EditOrderWrapper>
							<img src={item.img} alt="" />
							<div>
								<span>{item.title}</span>
								<ButtonsWrapper>
									<Amount>
										<button onClick={handleRemoveAmount}>
											<Minus size={15} weight="bold" />
										</button>
										<span>{item.amount}</span>
										<button onClick={handleAddAmount}>
											<Plus size={15} weight="bold" />
										</button>
									</Amount>
									<button>
										<Trash size={15} /> Remover
									</button>
								</ButtonsWrapper>
							</div>
						</EditOrderWrapper>
						<strong>R$ {item.price}</strong>
					</ItemWrapper>
				))}
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
					<strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
				</TotalInfo>
			</TotalWrapper>

			<ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
		</Container>
	)
}
