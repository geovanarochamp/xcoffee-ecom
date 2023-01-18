import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ButtonWrapper, Container, Header, TitleWrapper } from './style'

export function Payment() {
	return (
		<Container>
			<Header>
				<CurrencyDollar size={20} />
				<TitleWrapper>
					<h4>Pagamento</h4>
					<span>
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</span>
				</TitleWrapper>
			</Header>

			<ButtonWrapper>
				<button>
					<CreditCard size={18} /> CARTÃO DE CRÉDITO
				</button>
				<button>
					<Bank size={18} /> CARTÃO DE DÉBITO
				</button>
				<button>
					<Money size={18} /> DINHEIRO
				</button>
			</ButtonWrapper>
		</Container>
	)
}
