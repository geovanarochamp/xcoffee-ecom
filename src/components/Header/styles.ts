import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 70vw;
	margin: auto;
`

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3.2rem 0;

	img {
		width: 13rem;
		cursor: pointer;
	}
	div {
		display: flex;
		gap: 1.2rem;
	}
`

export const HeaderButton = styled.button<{ isTransparent?: boolean }>`
	display: flex;
	align-items: center;
	gap: 0.4rem;

	padding: 0.8rem;

	background: ${(props) =>
		props.isTransparent ? 'transparent' : props.theme['primary-light']};
	border-radius: 8px;
	border: ${(props) => (props.isTransparent ? '2px solid ' : 'none')};
	outline: none;

	font-weight: 400;
	font-size: 1.4rem;

	color: ${(props) => props.theme.primary};
	cursor: pointer;
`
