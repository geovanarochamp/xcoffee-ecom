import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background: ${(props) => props.theme['gray-200']};
	border-radius: 6px 44px;
	padding: 4rem;

	strong {
		font-size: 1.6rem;
	}
`

export const ItemWrapper = styled.div`
	padding-bottom: 2.8rem;
	margin-bottom: 2.8rem;
	border-bottom: 1px solid ${(props) => props.theme['gray-500']};
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	color: ${(props) => props.theme['gray-800']};

	img {
		width: 8rem;
	}

	span {
		font-size: 1.6rem;
	}
`

export const EditOrderWrapper = styled.div`
	display: flex;
	gap: 2rem;
`

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 0.8rem;
	margin-top: 0.8rem;

	button {
		width: fit-content;
		display: flex;
		gap: 0.4rem;
		align-items: center;
		background: ${(props) => props.theme['gray-400']};
		border-radius: 6px;
		padding: 0.8rem;
		outline: none;
		border: none;

		text-transform: uppercase;
		font-size: 1.2rem;
		color: ${(props) => props.theme['gray-700']};

		cursor: pointer;

		svg {
			color: ${(props) => props.theme['primary-dark']};
		}
	}
`

export const Amount = styled.div`
	width: fit-content;

	display: flex;
	align-items: center;
	background: ${(props) => props.theme['gray-400']};
	border-radius: 6px;

	button {
		padding: 0.8rem;
		background: transparent;
		color: ${(props) => props.theme['primary-dark']};
		outline: none;
		border: none;

		cursor: pointer;
	}

	span {
		padding: 0 0.8rem;
	}
`

export const TotalWrapper = styled.div`
	margin-top: 2.4rem;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`

export const TotalInfo = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.4rem;

	strong {
		font-size: 2rem;
	}
`

export const ConfirmOrderButton = styled.button`
	width: 100%;
	margin-top: 2.4rem;
	padding: 12px 8px;

	border: none;
	border-radius: 6px;

	background: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.white};
	font-weight: bold;
	text-transform: uppercase;
	font-size: 1.4rem;

	transition: all 0.3s;

	&:hover {
		background: ${(props) => props.theme['primary-dark']};
	}
`
