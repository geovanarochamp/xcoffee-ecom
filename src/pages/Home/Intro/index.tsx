import MockupImg from '../../../assets/mockup.png'
import { Container, Headlines, ImageBackground, Wrapper } from './style'

export function HomeIntro() {
	return (
		<ImageBackground>
			<Container>
				<Wrapper>
					<Headlines>
						<h1>
							Aprecie o café em suas várias formas artesanais:{' '}
							<span>sabor e arte.</span>
						</h1>
						<h4>
							Uma experiência que agrada o paladar e aquece o coração de quem
							aprecia.
						</h4>
					</Headlines>
					<img src={MockupImg} alt="" />
				</Wrapper>
			</Container>
		</ImageBackground>
	)
}
