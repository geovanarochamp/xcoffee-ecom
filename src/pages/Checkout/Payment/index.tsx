import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form/dist/types'
import {
	ButtonWrapper,
	Container,
	CreditCardButton,
	DebitCardButton,
	Header,
	MoneyButton,
	TitleWrapper,
} from './style'

type PaymentProps = {
	setValue: UseFormSetValue<FieldValues>
}

export function Payment({ setValue }: PaymentProps) {
	const [paymentType, setPaymentType] = useState('')
	function handleClickPayment(paymentType: string) {
		setValue('paymentType', paymentType)
		setPaymentType(paymentType)
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
				<CreditCardButton
					onClick={() => handleClickPayment('Cartão de crédito')}
					paymentType={paymentType}
				>
					<CreditCard size={18} /> CARTÃO DE CRÉDITO
				</CreditCardButton>
				<DebitCardButton
					onClick={() => handleClickPayment('Cartão de débito')}
					paymentType={paymentType}
				>
					<Bank size={18} /> CARTÃO DE DÉBITO
				</DebitCardButton>
				<MoneyButton
					onClick={() => handleClickPayment('Dinheiro')}
					paymentType={paymentType}
				>
					<Money size={18} /> DINHEIRO
				</MoneyButton>
			</ButtonWrapper>
		</Container>
	)
}
