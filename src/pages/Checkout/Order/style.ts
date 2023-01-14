import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background: ${(props) => props.theme['gray-200']};
	border-radius: 6px 44px;
	padding: 4rem;

	button {
		width: 100%;
		margin-top: 2.4rem;
		padding: 12px 8px;

		border: none;
		border-radius: 6px;

		background: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.white};
		font-weight: bold;
		text-transform: uppercase;
	}
`

export const ItemWrapper = styled.div`
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
`
