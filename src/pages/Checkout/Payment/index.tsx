import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FieldValues, UseFormSetValue } from 'react-hook-form/dist/types'
import { ButtonWrapper, Container, Header, TitleWrapper } from './style'

type PaymentProps = {
	setValue: UseFormSetValue<FieldValues>
}

export function Payment({ setValue }: PaymentProps) {
	function handleClickPayment(paymentType: string) {
		setValue('paymentType', paymentType)
	}

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
				<button onClick={() => handleClickPayment('Cartão de crédito')}>
					<CreditCard size={18} /> CARTÃO DE CRÉDITO
				</button>
				<button onClick={() => handleClickPayment('Cartão de débito')}>
					<Bank size={18} /> CARTÃO DE DÉBITO
				</button>
				<button onClick={() => handleClickPayment('Dinheiro')}>
					<Money size={18} /> DINHEIRO
				</button>
			</ButtonWrapper>
		</Container>
	)
}
