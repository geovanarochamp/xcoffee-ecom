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
	data: {
		id: string
		title: string
		price: string
		img: string
	}
}

export function Product({ data }: ProductProps) {

	console.log(cart)

	return (
		<Container>
			<ComboImage src={data.img} alt="" />
			<h3>{data.title}</h3>
			<p>+ 3 microlotes premiados e 1 ebook ilustrado</p>
			<CartWrapper>
				<div>
					<span>R$ </span>
					<strong>{data.price}</strong>
				</div>
				<ButtonsWrapper>
					<Amount>
						<button onClick={handleRemoveAmount}>
							<Minus size={15} weight="bold" />
						</button>
						<span>{amount}</span>
						<button onClick={handleAddAmount}>
							<Plus size={15} weight="bold" />
						</button>
					</Amount>
					<button onClick={handleAddNewCartItem}>
						<ShoppingCartSimple size={18} />
					</button>
				</ButtonsWrapper>
			</CartWrapper>
		</Container>
	)
}
