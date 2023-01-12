import { ArrowRight } from 'phosphor-react'
import { useCart } from '../../hooks/cart'
import { ButtonGoToCart, Container } from './styles'

export function GoToCart() {
	const { cartItems } = useCart()
	const isVisible = cartItems.length > 0
	return (
		<>
			{isVisible && (
				<Container>
					Ir para o carrinho
					<ButtonGoToCart>
						<ArrowRight size={20} weight={'bold'} />
					</ButtonGoToCart>
				</Container>
			)}
		</>
	)
}
