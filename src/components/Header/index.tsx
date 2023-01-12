import XCoffeLogo from '../../assets/logo.png'
import { ShoppingCartSimple, MapPin } from 'phosphor-react'
import {
	Wrapper,
	HeaderContainer,
	HeaderButton,
	BackgroundColor,
} from './styles'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
	const [formatLocation, setFormatLocation] = useState('')

	function getCurrentLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude
			formatCurrentLocation(latitude, longitude)
		})
	}

	async function formatCurrentLocation(latitude: number, longitude: number) {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAB8WMNzhKwmM8pzDFdQV1X9Vvih1HU_C8`

		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const city = data.results[0]?.address_components[3]?.long_name || ''
				const state = data.results[0]?.address_components[4]?.short_name || ''

				if (city && state) {
					setFormatLocation(`${city}, ${state}`)
				} else {
					setFormatLocation('')
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		getCurrentLocation()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formatLocation])

	return (
		<BackgroundColor>
			<Wrapper>
				<HeaderContainer>
					<Link to="/">
						<img src={XCoffeLogo} alt="xcoffee escrito em preto" />
					</Link>
					<div>
						<HeaderButton isTransparent>
							<MapPin size={24} />
							{formatLocation}
						</HeaderButton>
						<Link to="/checkout">
							<HeaderButton>
								<ShoppingCartSimple size={24} />
							</HeaderButton>
						</Link>
					</div>
				</HeaderContainer>
			</Wrapper>
		</BackgroundColor>
	)
}
