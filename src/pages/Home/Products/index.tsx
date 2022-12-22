import { Container } from '../styles'

import CupXC from '../../../assets/cupxc.png'
import ArtXC from '../../../assets/artxc.png'
import KitXC from '../../../assets/kitxc.png'

export function Products() {
	return (
		<Container>
			<h2>Nossos Kits</h2>
			<Wrapper3Col>
				<Col1>
					<img src="" alt="" />
					<h3>Café Premiado</h3>
					<p>
						Cafés especiais selecionados, com composição: Frutas Amarelas,
						Melaço de Cana, Corpo Médio, Acidez Cítrica e Capim Limão.
					</p>
				</Col1>

				<Col2>
					<img src="" alt="" />
					<h3>Obra Autêntica</h3>
					<p>
						Pinturas minimalistas desenhadas à lápis em papel próprio para
						aquarela, de origem francesa, formadas inteiramente da matéria prima
						do café (borra de cafés premiados).
					</p>
				</Col2>

				<Col3>
					<img src="" alt="" />
					<h3>Arte e Café</h3>
					<p>eBook exclusivo de ilustração do processo criativo das artes!</p>
				</Col3>
			</Wrapper3Col>
		</Container>
	)
}
