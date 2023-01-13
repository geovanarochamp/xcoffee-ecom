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

export function DeliveryForm() {
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
				<CepInput type="text" placeholder="CEP" />
				<input type="text" placeholder="Rua" />
				<Col2>
					<input type="text" placeholder="Número" />
					<input type="text" placeholder="Complemento" />
				</Col2>
				<Col3>
					<input type="text" placeholder="Bairro" />
					<input type="text" placeholder="Cidade" />
					<input type="text" placeholder="UF" />
				</Col3>
			</Form>
		</Container>
	)
}
