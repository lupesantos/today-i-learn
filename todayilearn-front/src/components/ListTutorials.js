import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import TutorialErrorSelectBox from './TutorialErrorSelectBox';

export default function ListTutorials({ tutorialList, setTutorialList }) {
	function closeList() {
		setTutorialList(false);
	}
	return (
		<>
			<Container>
				<CloseTutorialList>
					<AiOutlineClose onClick={closeList} size='1.2em' color='white' />
				</CloseTutorialList>

				{tutorialList.map((item, index) => (
					<TutorialErrorSelectBox
						key={index}
						id={item.id}
						userId={item.userId}
						name={item.name}
						description={item.description}
						tags={item.tags}
					/>
				))}
			</Container>
		</>
	);
}

const Container = styled.div`
	height: 680px;
	width: 600px;
	position: fixed;
	top: 77px;
	left: 130px;
	min-height: 380px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid rgb(127, 133, 141);
	border-radius: 5px;
	margin-left: 5px;
`;

const Button = styled.button`
	height: 46px;
	border-radius: 5px;
	color: #ffffff;
	border: 1px solid rgb(127, 133, 141);
	border-radius: 5px;
	font-size: 20px;
	font-weight: bold;
	width: 277px;
	background-color: #222831;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

const TutorialHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background: #393e46;
	margin-bottom: 5px;
	border-radius: 5px 5px 0 0;
`;

const TutorialErrorSelectBox3 = styled.div`
	font-family: 'Roboto', sans-serif;
	font-size: 15px;
	font-weight: bold;
	width: 150px;
	height: 40px;
	display: Flex;
	align-items: center;
	justify-content: center;
	background: #222831;
	border-radius: 5px;
	color: white;
	margin: 5px 5px;
	border: 1px solid rgb(127, 133, 141);
`;

const CloseTutorialList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	margin: 5px 5px;
	border: 1px solid rgb(127, 133, 141);
`;
