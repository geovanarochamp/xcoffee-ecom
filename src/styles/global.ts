/* eslint-disable dot-notation */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

	:root{
		font-size: 62.5%; /* 10px */
	}

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
		border-radius: 4px;
    }

	h1 {
		font-size: 4.8rem;
		color: ${(props) => props.theme['gray-800']};
	}

	h2 {
		font-size: 30px;
    	line-height: 48px;
		text-align: center;
		color: ${(props) => props.theme['gray-800']}
	}

	h3 {
		font-weight: 700;
		font-size: 2rem;
		line-height: 130%;
		color: ${(props) => props.theme['gray-700']};
	}

	h4 {
		font-size: 2rem;
		color: ${(props) => props.theme['gray-700']};
		font-weight: normal;
	}


	p {
		margin-top: .8rem;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 130%;
		text-align: center;
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

	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
