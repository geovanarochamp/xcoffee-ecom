import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 0.8rem;
	cursor: pointer;
	color: ${(props) => props.theme['primary-dark']};
	font-size: 1.4rem;
`

export const ButtonGoToCart = styled.button`
	padding: 0.8rem;
	border: 2px solid ${(props) => props.theme['primary-dark']};
	outline: none;
	border-radius: 9999px;
	background: ${(props) => props.theme.white};
	color: ${(props) => props.theme['primary-dark']};

	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		color: ${(props) => props.theme.white};
		background: ${(props) => props.theme['primary-dark']};
	}
`
