import styled from 'styled-components'

export const Container = styled.div`
	padding: 2rem;
	background: ${(props) => props.theme['gray-200']};
	border-radius: 6px 36px;
	text-align: center;
`

export const ComboImage = styled.img`
	width: 30rem;
	border-radius: 6px;
	margin: -5rem 0 1rem;
`

export const CartWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 4rem;
	margin-top: 2rem;
	color: ${(props) => props.theme['gray-700']};

	span {
		font-size: 1.6rem;
	}

	strong {
		font-size: 2.4rem;
	}
`

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 0.8rem;

	button {
		padding: 1rem;

		background: ${(props) => props.theme['primary-dark']};
		outline: none;
		border: none;
		border-radius: 8px;

		color: ${(props) => props.theme.white};
		cursor: pointer;
	}
`

export const Amount = styled.div`
	display: flex;
	align-items: center;
	background: ${(props) => props.theme['gray-400']};
	border-radius: 6px;

	button {
		padding: 1.2rem 0.8rem 1.2rem;
		background: transparent;
		color: ${(props) => props.theme['primary-dark']};
		outline: none;
		border: none;

		cursor: pointer;
	}
`
