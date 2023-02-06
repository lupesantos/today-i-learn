import styled from 'styled-components';
import TutorialForms from '../components/TutorialForms';
import ErrorForms from '../components/ErrorForms';
import { useState } from 'react';

export default function SideBar() {
	const [button, setButton] = useState(false);
	const [button2, setButton2] = useState(false);

	function showTutorialForm() {
		if (button2) {
			setButton2(!button2);
		}
		setButton(!button);
	}
	function showErrorForm() {
		if (button) {
			setButton(!button);
		}
		setButton2(!button2);
	}
	return (
		<>
			<NewTutorialError onClick={showTutorialForm}>
				Novo Tutorial
			</NewTutorialError>
			<NewTutorialError onClick={showErrorForm}>Novo Erro</NewTutorialError>
			{button ? (
				<TutorialForms setButton2={setButton2} button2={button2} />
			) : (
				<></>
			)}
			{button2 ? <ErrorForms /> : <></>}
		</>
	);
}

const NewTutorialError = styled.div`
	width: 120px;
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
