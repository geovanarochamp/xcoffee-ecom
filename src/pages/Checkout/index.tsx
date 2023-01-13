import { DeliveryForm } from './DeliveryForm'
import { Order } from './Order'
import { Payment } from './Payment'
import { Container, FormsWrapper, OrderWrapper } from './styles'

export function Checkout() {
	return (
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
	)
}
