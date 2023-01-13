import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	padding: 4rem;
	background: ${(props) => props.theme['gray-200']};
	border-radius: 6px;
`

export const Header = styled.header`
	display: flex;
	gap: 0.8rem;

	svg {
		color: ${(props) => props.theme.primary};
	}
`

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;

	h4 {
		font-size: 1.6rem;
		color: ${(props) => props.theme['gray-800']};
	}

	span {
		font-size: 1.4rem;
		color: ${(props) => props.theme['gray-700']};
	}
`

export const ButtonWrapper = styled.div`
	margin-top: 3.2rem;
	display: flex;
	gap: 1.2rem;

	button {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		padding: 1.6rem;

		background: ${(props) => props.theme['gray-400']};
		border: none;
		border-radius: 4px;

		font-size: 1.2rem;
		text-transform: uppercase;
		color: ${(props) => props.theme['gray-700']};

		cursor: pointer;
		flex: 1;
	}

	svg {
		color: ${(props) => props.theme['primary-dark']};
	}
`
