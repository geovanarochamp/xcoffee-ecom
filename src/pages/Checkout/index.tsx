import { ArrowLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { DeliveryForm } from './DeliveryForm'
import { Order } from './Order'
import { Payment } from './Payment'
import {
	BackButton,
	ButtonWrapper,
	Container,
	FormsWrapper,
	OrderWrapper,
} from './styles'

export function Checkout() {
	return (
		<>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<ButtonWrapper>
					<BackButton>
						<ArrowLeft size={20} weight={'bold'} />
					</BackButton>
					Voltar
				</ButtonWrapper>
			</Link>
			<Container>
				<FormsWrapper>
					<strong>Complete seu Pedido</strong>
					<DeliveryForm />
					<Payment />
				</FormsWrapper>
				<OrderWrapper>
					<strong>Cafés selecionados</strong>
					<Order />
				</OrderWrapper>
			</Container>
		</>
	)
}
