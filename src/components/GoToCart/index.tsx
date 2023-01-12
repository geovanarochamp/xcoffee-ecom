import { ArrowRight } from 'phosphor-react'
import { useCart } from '../../hooks/cart'
import { Link } from 'react-router-dom'

import { ButtonGoToCart, Container } from './styles'

export function GoToCart() {
	const { cartItems } = useCart()
	const isVisible = cartItems.length > 0
	return (
		<>
			{isVisible && (
				<Link to="/checkout" style={{ textDecoration: 'none' }}>
					<Container>
						Ir para o carrinho
						<ButtonGoToCart>
							<ArrowRight size={20} weight={'bold'} />
						</ButtonGoToCart>
					</Container>
				</Link>
			)}
		</>
	)
}
