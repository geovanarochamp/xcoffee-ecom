/* eslint-disable dot-notation */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
		border-radius: 4px;
    }

	h1, h2 {
		font-family: 'Anton', sans-serif;
		color: ${(props) => props.theme['gray-800']};
		letter-spacing: 0.75px;
	}

	h3, h4 {
		font-family: 'Roboto', sans-serif;
		color: ${(props) => props.theme.primary};
	}

    body {
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-600']};
		-webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
