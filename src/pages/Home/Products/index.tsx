import { Product } from '../../../components/Product'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container, ProductsWrapper, TitleWrapper } from './styles'

import ObraPreparo from '../../../assets/obra-preparo.png'
import ObraMoagem from '../../../assets/obra-moagem.png'
import ObraColheita from '../../../assets/obra-colheita.png'
import ObraSecagem from '../../../assets/obra-secagem.png'
import ObraTorrefacao from '../../../assets/obra-torrefacao.png'

export function Products() {
	return (
		<Container>
			<div>
				<SectionTitle
					title="Coffee & Art"
					subtitle="Compra simples e segura. Entrega rápida e rastreada."
				/>
			</div>

			<ProductsWrapper>
				<Product
					img={ObraPreparo}
					title={'Combo Obra Preparo'}
					price={'697,00'}
				/>
				<Product
					img={ObraColheita}
					title={'Combo Obra Colheita'}
					price={'697,00'}
				/>
				<Product
					img={ObraMoagem}
					title={'Combo Obra Moagem'}
					price={'697,00'}
				/>
				<Product
					img={ObraSecagem}
					title={'Combo Obra Secagem'}
					price={'697,00'}
				/>
				<Product
					img={ObraTorrefacao}
					title={'Combo Obra Torrefação'}
					price={'697,00'}
				/>
			</ProductsWrapper>
		</Container>
	)
}
