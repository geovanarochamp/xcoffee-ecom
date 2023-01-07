import { Outlet } from 'react-router-dom'
import { FooterSection } from '../components/Footer'
import { Header } from '../components/Header'

export function DefaultLayout() {
	return (
		<div>
			<Header />
			<Outlet />
			<FooterSection />
		</div>
	)
}
