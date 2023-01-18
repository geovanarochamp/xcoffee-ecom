import styled from 'styled-components'
import InputMask from 'comigo-tech-react-input-mask'

export const Container = styled.div`
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
		font-size: 1.2rem;
		color: ${(props) => props.theme['gray-700']};
	}
`
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	margin-top: 3.2rem;

	input {
		padding: 1.2rem;
		background: ${(props) => props.theme['gray-300']};
		border: 1px solid ${(props) => props.theme['gray-400']};
		border-radius: 4px;
		font-size: 1.4rem;
		text-transform: uppercase;
	}
`

export const CepInput = styled(InputMask)`
	width: 25%;
`

export const Col2 = styled.div`
	display: flex;
	gap: 1.2rem;

	& input:first-child {
		width: 50%;
	}

	& input:nth-child(2) {
		width: 50%;
	}
`

export const Col3 = styled.div`
	display: flex;
	gap: 1.2rem;
	flex: 1;

	& input:first-child {
		width: 25%;
	}
	& input:nth-child(2) {
		width: 60%;
	}
	& input:nth-child(3) {
		width: 15%;
	}
`
