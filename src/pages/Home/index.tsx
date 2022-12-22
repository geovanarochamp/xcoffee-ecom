import { HomeIntro } from './Intro'
import { Products } from './Products'
import { Container } from './styles'

export function Home() {
	return (
		<Container>
			<HomeIntro />
			<Products />
		</Container>
	)
}
