import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './hooks/cart'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CartProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
				<GlobalStyle />
			</CartProvider>
		</ThemeProvider>
	)
}

export default App
