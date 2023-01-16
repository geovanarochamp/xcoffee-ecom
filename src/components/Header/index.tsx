/* eslint-disable no-undef */
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
	const [formatLocation, setFormatLocation] = useState('Buscando localização')

	function getCurrentLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude
			formatCurrentLocation(latitude, longitude)
		})
	}

	async function formatCurrentLocation(latitude: number, longitude: number) {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAB8WMNzhKwmM8pzDFdQV1X9Vvih1HU_C8`
		let city
		let state

		await fetch(url)
			.then((response) => response.json())
			.then((data: google.maps.GeocoderResponse) => {
				data.results.map((item) => {
					return item.types.map((type) => {
						return (
							type.includes('administrative_area_level_2') &&
							item.address_components.map((addressComponent) => {
								return addressComponent.types.map((addressComponentType) => {
									return (
										addressComponentType.includes(
											'administrative_area_level_2',
										) && (city = addressComponent.short_name)
									)
								})
							})
						)
					})
				})
			})
			.catch((error) => {
				console.log(error)
			})

		await fetch(url)
			.then((response) => response.json())
			.then((data: google.maps.GeocoderResponse) => {
				data.results.map((item) => {
					return item.types.map((type) => {
						return (
							type.includes('administrative_area_level_1') &&
							item.address_components.map((addressComponent) => {
								return addressComponent.types.map((addressComponentType) => {
									return (
										addressComponentType.includes(
											'administrative_area_level_1',
										) && (state = addressComponent.short_name)
									)
								})
							})
						)
					})
				})
			})
			.catch((error) => {
				console.log(error)
			})
		setFormatLocation(`${city}, ${state}`)
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
