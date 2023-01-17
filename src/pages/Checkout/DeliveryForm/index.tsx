import { useState } from 'react'
import InputMask from 'react-input-mask'
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

export function handleCepInput() {}

export function DeliveryForm() {
	const [cep, setCep] = useState('')
	const [street, setStreet] = useState('')
	const [number, setNumber] = useState('')
	const [complement, setComplement] = useState('')
	const [neighborhood, setNeighborhood] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	console.log(cep)

	return (
		<Container>
			<Header>
				<MapPinLine size={20} />
				<TitleWrapper>
					<h4>Endereço de entrega</h4>
					<span>Informe o enderço onde deseja receber seu pedido</span>
				</TitleWrapper>
			</Header>

			<Form>
				<CepInput
					mask="99999-999"
					placeholder="CEP"
					onChange={(e) => setCep(e.target.value)}
				/>
				<InputMask
					mask="999999999"
					placeholder="Rua"
					onChange={(e) => setStreet(e.target.value)}
				/>
				<Col2>
					<InputMask
						mask="999999999"
						placeholder="Número"
						onChange={(e) => setNumber(e.target.value)}
					/>
					<InputMask
						mask="99999"
						placeholder="Complemento"
						onChange={(e) => setComplement(e.target.value)}
					/>
				</Col2>
				<Col3>
					<InputMask
						mask="99999"
						placeholder="Bairro"
						onChange={(e) => setNeighborhood(e.target.value)}
					/>
					<InputMask
						mask="99999"
						placeholder="Cidade"
						onChange={(e) => setCity(e.target.value)}
					/>
					<InputMask
						mask="aa"
						placeholder="UF"
						onChange={(e) => setState(e.target.value)}
					/>
				</Col3>
			</Form>
		</Container>
	)
}
