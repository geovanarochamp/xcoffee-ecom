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
		font-size: 14px;
	}
`

export const CepInput = styled.input`
	width: 33%;
`

export const Col2 = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	row-gap: 1.2rem;
	column-gap: 1.2rem;
`

export const Col3 = styled.div`
	display: grid;
	grid-template-columns: 2fr 3fr 1fr;
	column-gap: 1.2rem;
`
