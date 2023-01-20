import InputMask from 'comigo-tech-react-input-mask'
import {
	FieldValues,
	UseFormGetValues,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form/dist/types'
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
	setValue: UseFormSetValue<FieldValues>
	getValues: UseFormGetValues<FieldValues>
	cep: string
}

type AddressData = {
	bairro: string
	cep: string
	complemento: string
	ddd: string
	gia: string
	ibge: string
	localidade: string
	logradouro: string
	siafi: string
	uf: string
}

export function DeliveryForm({
	register,
	setValue,
	getValues,
	cep,
}: DeliveryFormProps) {
	async function catchAddressByCep() {
		if (cep) {
			const cepNum = cep.replace(/[^0-9]/g, '')

			if (cepNum.length === 8) {
				await fetch(`https://viacep.com.br/ws/${cepNum}/json/`)
					.then((response) => response.json())
					.then((data: AddressData) => {
						setValue('address', data.logradouro)
						setValue('neighborhood', data.bairro)
						setValue('city', data.localidade)
						setValue('state', data.uf)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}
	}

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
					{...register('cep', { required: true })}
					onBlur={catchAddressByCep}
				/>
				<input placeholder="Rua" {...register('address', { required: true })} />
				<Col2>
					<InputMask
						type="number"
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
						{...register('neighborhood', { required: true })}
					/>
					<input
						placeholder="Cidade"
						{...register('city', { required: true })}
					/>
					<InputMask
						mask="aa"
						placeholder="UF"
						{...register('state', { required: true })}
					/>
				</Col3>
			</Form>
		</Container>
	)
}
