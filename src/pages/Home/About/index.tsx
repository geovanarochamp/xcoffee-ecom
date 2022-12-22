import { Col, Container, Wrapper3Col } from './styles'

import CupXC from '../../../assets/cupxc.png'
import ArtXC from '../../../assets/artxc.png'
import KitXC from '../../../assets/kitxc.png'
import { SectionTitle } from '../../../components/SectionTitle'

export function About() {
	return (
		<Container>
			<SectionTitle title="Conheça o nosso kit" />

			<Wrapper3Col>
				<Col>
					<img
						src={CupXC}
						alt="pacote de cafe preto, plotado com o logotipo da marca"
					/>
					<h3>Café Premiado</h3>
					<p>
						Microlotes de <strong>cafés especiais</strong> selecionados, com
						composição: Frutas Amarelas, Melaço de Cana, Corpo Médio, Acidez
						Cítrica e Capim Limão.
					</p>
				</Col>

				<Col>
					<img
						src={ArtXC}
						alt="quandro com pintura de um coador passando café com tinta feita em borra de café"
					/>
					<h3>Obra Autêntica</h3>
					<p>
						Pinturas minimalistas desenhadas à lápis em papel próprio para
						aquarela, de origem francesa, formadas inteiramente da matéria prima
						do café (<strong>borra de cafés premiados</strong>).
					</p>
				</Col>

				<Col>
					<img
						src={KitXC}
						alt="imagem ilustrativa do kit do produto composto por 3 pacotes de café, uma obra de arte, e um ebook"
					/>
					<h3>Arte e Café</h3>
					<p>
						EBOOK exclusivo de ilustração com fotos do
						<strong> processo criativo das artes do início ao fim.</strong>
					</p>
				</Col>
			</Wrapper3Col>
		</Container>
	)
}
