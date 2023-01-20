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
import { useState } from 'react'

type DeliveryFormProps = {
	register: UseFormRegister<FieldValues>
}

export function DeliveryForm({ register }: DeliveryFormProps) {
	const [cep, setCep] = useState('')
	const [address, setAddress] = useState({})

	async function catchAddressByCep() {
		const cepNum = cep.replace(/[^0-9]/g, '')
		const response = await fetch(`https://viacep.com.br/ws/${cepNum}/json/`)
		const data = await response.json()
		setAddress(data)
		console.log(data)
		// setInputsWithAddress()
	}

	// function setInputsWithAddress() {}

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
					onChange={(e) => setCep(e.target.value)}
					onBlur={catchAddressByCep}
					placeholder="CEP"
					{...(register('cep'), { required: true })}
				/>
				<input
					value={address ? address.logradouro : ''}
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
						value={address ? address.bairro : ''}
						placeholder="Bairro"
						{...(register('neighborhood'), { required: true })}
					/>
					<input
						value={address ? address.localidade : ''}
						placeholder="Cidade"
						{...(register('city'), { required: true })}
					/>
					<InputMask
						value={address ? address.uf : ''}
						mask="aa"
						placeholder="UF"
						{...(register('state'), { required: true })}
					/>
				</Col3>
			</Form>
		</Container>
	)
}
