import styled from 'styled-components'

export const ImageBackground = styled.div`
	background-image: url('https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h6_bg.jpg');
	background-position: top;
`
export const Container = styled.div`
	width: 70vw;
	margin: auto;
`

export const Wrapper = styled.div`
	padding: 7.8rem 0;
	display: flex;
	gap: 5.6rem;

	img {
		height: 36rem;
	}
`

export const Headlines = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1.6rem;

	h1 span {
		color: ${(props) => props.theme['primary-dark']};
	}
`
