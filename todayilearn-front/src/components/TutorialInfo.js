import { Form } from '../common/Formstyle';
import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import ReactHtmlParser from 'html-react-parser';

export default function TutorialInfo() {
	const { tutorialInfo } = useContext(UserContext);
	const teste = `${tutorialInfo.description}`;

	return (
		<>
			<TutorialBox>
				<TutorialHeader>
					<h2>{tutorialInfo.name}</h2>
				</TutorialHeader>
				<h2>{ReactHtmlParser(teste)}</h2>
			</TutorialBox>
		</>
	);
}

const TutorialBox = styled(Form)`
	height: 540px;
	font-family: 'Roboto', sans-serif;
`;

const TutorialHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background: #393e46;
	margin-bottom: 5px;
	border-radius: 5px 5px 0 0;
`;
