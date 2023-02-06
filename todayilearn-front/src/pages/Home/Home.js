import styled from 'styled-components';
import SideBar from '../../components/SideBar';

export default function Home() {
	return (
		<>
			<HomeContainer>
				<SideBar />
			</HomeContainer>
		</>
	);
}

const HomeContainer = styled.div`
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	height: 100vh;
	position: fixed;
	top: 72px;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: #222831;
	overflow: auto;
`;
