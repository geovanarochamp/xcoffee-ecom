import styled from 'styled-components'

export const Container = styled.div`
	width: 70vw;
	margin: 2rem auto 0;
	display: flex;
	gap: 3.2rem;

	strong {
		font-size: 1.8rem;
		color: ${(props) => props.theme['gray-800']};
	}
`
export const ButtonWrapper = styled.div`
	width: 70vw;
	margin: 2rem auto 0;
	display: flex;
	align-items: center;
	gap: 0.8rem;
	cursor: pointer;
	color: ${(props) => props.theme['primary-dark']};
	font-size: 1.4rem;
`

export const BackButton = styled.button`
	border: none;
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

export const FormsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	flex: 1;
	width: 65%;
`
export const OrderWrapper = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`
