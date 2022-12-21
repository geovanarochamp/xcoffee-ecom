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
						<h3>
							Uma experiência que agrada não apenas o paladar, mas também a
							visão de quem aprecia.
						</h3>
					</Headlines>
					<img src={MockupImg} alt="" />
				</Wrapper>
			</Container>
		</ImageBackground>
	)
}
