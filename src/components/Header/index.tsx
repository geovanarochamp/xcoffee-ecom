import XCoffeLogo from '../../assets/logo.png'
import { ShoppingCartSimple, MapPin } from 'phosphor-react'
import {
	Wrapper,
	HeaderContainer,
	HeaderButton,
	BackgroundColor,
} from './styles'
import { useEffect, useState } from 'react'

export function Header() {
	const [latitude, setLatitude] = useState(0)
	const [longitude, setlongitude] = useState(0)
	const [isFetching, setIsFetching] = useState(false)
	const [formatLocation, setFormatLocation] = useState('Buscando localização')

	function getCurrentLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude)
			setlongitude(position.coords.longitude)
		})
	}

	async function formatCurrentLocation() {
		setIsFetching(true)

		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAB8WMNzhKwmM8pzDFdQV1X9Vvih1HU_C8`

		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const city = data.results[0]?.address_components[3]?.long_name || ''
				const state = data.results[0]?.address_components[4]?.short_name || ''
				setFormatLocation(`${city}, ${state}`)
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				setIsFetching(false)
			})
	}

	useEffect(() => {
		getCurrentLocation()
		formatCurrentLocation()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formatLocation])

	return (
		<BackgroundColor>
			<Wrapper>
				<HeaderContainer>
					<img src={XCoffeLogo} alt="xcoffee escrito em preto" />
					<div>
						<HeaderButton isTransparent>
							<MapPin size={24} />
							{isFetching ? 'Buscando localização' : formatLocation}
						</HeaderButton>
						<HeaderButton>
							<ShoppingCartSimple size={24} />
						</HeaderButton>
					</div>
				</HeaderContainer>
			</Wrapper>
		</BackgroundColor>
	)
}
