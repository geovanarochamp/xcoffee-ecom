import styled from 'styled-components'

export const Container = styled.div`
	width: 70vw;
	margin: 4rem auto 0;
	display: flex;
	gap: 3.2rem;

	strong {
		font-size: 1.8rem;
		color: ${(props) => props.theme['gray-800']};
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
