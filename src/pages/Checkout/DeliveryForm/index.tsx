import InputMask from 'comigo-tech-react-input-mask'
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types'
import { MapPinLine } from 'phosphor-react'
import {
	CepInput,
	Col2,
	Col3,
	Container,
	Form,
	Header,
	TitleWrapper,
} from './style'

type DeliveryFormProps = {
	register: UseFormRegister<FieldValues>
}

export function DeliveryForm({ register }: DeliveryFormProps) {
	return (
		<Container>
			<Header>
				<MapPinLine size={20} />
				<TitleWrapper>
					<h4>Endereço de entrega</h4>
					<span>Informe o enderço onde deseja receber seu pedido</span>
				</TitleWrapper>
			</Header>

			<Form id="deliveryForm">
				<CepInput
					mask="99999-999"
					placeholder="CEP"
					{...(register('cep'), { required: true })}
				/>
				<input
					placeholder="Rua"
					{...(register('address'), { required: true })}
				/>
				<Col2>
					<InputMask
						mask="999999999"
						placeholder="Número"
						{...register('addressNumber', {
							valueAsNumber: true,
							required: true,
						})}
					/>
					<input placeholder="Complemento" {...register('addressComplement')} />
				</Col2>
				<Col3>
					<input
						placeholder="Bairro"
						{...(register('neighborhood'), { required: true })}
					/>
					<input
						placeholder="Cidade"
						{...(register('city'), { required: true })}
					/>
					<InputMask
						mask="aa"
						placeholder="UF"
						{...(register('state'), { required: true })}
					/>
				</Col3>
			</Form>
		</Container>
	)
}
