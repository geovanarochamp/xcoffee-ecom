import { Clock, MapPin, Money } from 'phosphor-react'
import {
	Container,
	ContentWrapper,
	IconWrapper,
	Info,
	InfoWrapper,
	TitleWrapper,
} from './styles'

import Illustration from '../../assets/illustration.svg'
import { Link } from 'react-router-dom'

export function SuccessOrder() {
	const savedOrderInfo = JSON.parse(localStorage.getItem('@xcoffee:address'))

	return (
		<Container>
			{savedOrderInfo ? (
				<>
					<TitleWrapper>
						<h3>Uhu! Pedido confirmado</h3>
						<span>Agora é só aguardar que logo o café chegará até você</span>
					</TitleWrapper>

					<ContentWrapper>
						<Info>
							<InfoWrapper>
								<IconWrapper>
									<MapPin size={20} />
								</IconWrapper>
								<div>
									<span>
										Entrega em{' '}
										<strong>
											{savedOrderInfo.address}, {savedOrderInfo.addressNumber}
										</strong>
									</span>
									<span>
										{savedOrderInfo.neighborhood} - {savedOrderInfo.city}/
										{savedOrderInfo.state}
									</span>
								</div>
							</InfoWrapper>

							<InfoWrapper>
								<IconWrapper>
									<Clock size={20} />
								</IconWrapper>
								<div>
									<span>Previsão de entrega</span>
									<strong>20 min - 30 min</strong>
								</div>
							</InfoWrapper>

							<InfoWrapper>
								<IconWrapper>
									<Money size={20} />
								</IconWrapper>
								<div>
									<span>Pagamento na entrega</span>
									<strong> {savedOrderInfo.paymentType}</strong>
								</div>
							</InfoWrapper>
						</Info>
						<img src={Illustration} alt="" />
					</ContentWrapper>
				</>
			) : (
				<TitleWrapper>
					<h3>Ooops, quase lá...</h3>
					<span>
						Complete seu <Link to="/checkout">carrinho de compras</Link>
					</span>
				</TitleWrapper>
			)}
		</Container>
	)
}
