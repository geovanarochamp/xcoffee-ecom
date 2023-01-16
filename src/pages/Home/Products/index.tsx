import { Product } from '../../../components/Product'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container, ProductsWrapper } from './styles'

import { v4 as uuidv4 } from 'uuid'

import ObraPreparo from '../../../assets/obra-preparo.png'
import ObraMoagem from '../../../assets/obra-moagem.png'
import ObraColheita from '../../../assets/obra-colheita.png'
import ObraSecagem from '../../../assets/obra-secagem.png'
import ObraTorrefacao from '../../../assets/obra-torrefacao.png'
import { GoToCart } from '../../../components/GoToCart'

export function Products() {
	const products = [
		{
			id: uuidv4(),
			title: 'Combo Obra Preparo',
			price: 697,
			img: ObraPreparo,
		},
		{
			id: uuidv4(),
			title: 'Combo Obra Colheita',
			price: 697,
			img: ObraColheita,
		},
		{
			id: uuidv4(),
			title: 'Combo Obra Moagem',
			price: 697,
			img: ObraMoagem,
		},
		{
			id: uuidv4(),
			title: 'Combo Obra Secagem',
			price: 697,
			img: ObraSecagem,
		},
		{
			id: uuidv4(),
			title: 'Combo Obra Torrefação',
			price: 697,
			img: ObraTorrefacao,
		},
	]
	return (
		<Container>
			<SectionTitle
				title="Coffee & Art"
				subtitle="Compra simples e segura. Entrega rápida e rastreada."
			/>

			<GoToCart />
			<ProductsWrapper>
				{products.map((product) => (
					<Product key={product.id} data={product} />
				))}
			</ProductsWrapper>
		</Container>
	)
}
