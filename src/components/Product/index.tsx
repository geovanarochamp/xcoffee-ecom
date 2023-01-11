import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
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
	const [amount, setAmount] = useState(0)

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
						<button
							onClick={() =>
								setAmount((amount) => (amount > 0 ? amount - 1 : amount))
							}
						>
							<Minus size={15} weight="bold" />
						</button>
						<span>{amount}</span>
						<button onClick={() => setAmount((amount) => amount + 1)}>
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
