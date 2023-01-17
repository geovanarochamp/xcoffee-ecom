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

export function SuccessOrder() {
	return (
		<Container>
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
								Entrega em <strong> Rua Tal</strong>
							</span>
							<span>Bairro - Cidade/ES</span>
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
							<strong>Cartão de Crédito</strong>
						</div>
					</InfoWrapper>
				</Info>
				<img src={Illustration} alt="" />
			</ContentWrapper>
		</Container>
	)
}
