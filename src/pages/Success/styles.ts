import styled from 'styled-components'

export const Container = styled.div`
	width: 75vw;
	margin: auto;
`

export const TitleWrapper = styled.div`
	margin-top: 8rem;

	h3 {
		color: ${(props) => props.theme.primary};
		font-size: 3.2rem;
	}

	span {
		font-size: 2rem;
		color: ${(props) => props.theme['gray-700']};
	}
`

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8rem;
`
export const Info = styled.div`
	width: 100%;
	margin-top: 4rem;
	padding: 40px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;

	border-radius: 6px 36px;
	border: 1px solid ${(props) => props.theme.primary};
`

export const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	font-size: 1.6rem;
	color: ${(props) => props.theme['gray-700']};

	div {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
`

export const IconWrapper = styled.div`
	color: ${(props) => props.theme['primary-dark']};
	background: ${(props) => props.theme['primary-light']};
	border-radius: 9999px;
	padding: 8px;
`
