import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
	Amount,
	ButtonsWrapper,
	CartWrapper,
	ComboImage,
	Container,
} from './styles'

type ProductProps = {
	img: string
	title: string
	price: string
}

export function Product({ img, title, price }: ProductProps) {
	return (
		<Container>
			<ComboImage src={img} alt="" />
			<h3>{title}</h3>
			<p>+ 3 microlotes premiados e 1 ebook ilustrado</p>
			<CartWrapper>
				<div>
					<span>R$ </span>
					<strong>{price}</strong>
				</div>
				<ButtonsWrapper>
					<Amount>
						<button>
							<Minus size={15} weight="bold" />
						</button>
						<span>1</span>
						<button>
							<Plus size={15} weight="bold" />
						</button>
					</Amount>
					<button>
						<ShoppingCartSimple size={18} />
					</button>
				</ButtonsWrapper>
			</CartWrapper>
		</Container>
	)
}