import { ArrowLeft } from 'phosphor-react'
import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
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
	const { register, setValue, getValues, watch } = useForm()

	useEffect(() => {
		setValue('paymentType', '')
	}, [])

	const cep = watch('cep')

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
					<DeliveryForm
						register={register}
						setValue={setValue}
						getValues={getValues}
						cep={cep}
					/>
					<Payment setValue={setValue} />
				</FormsWrapper>
				<OrderWrapper>
					<strong>Cafés selecionados</strong>
					<Order getValues={getValues} />
				</OrderWrapper>
			</Container>
		</>
	)
}
