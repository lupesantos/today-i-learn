import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useEffect, useState } from 'react';

export default function TutorialErrorSelectBox({
	id,
	userId,
	name,
	description,
	tags,
}) {
	const { tutorialInfo, setTutorialInfo } = useContext(UserContext);

	return (
		<>
			<Link to={`/tutorial/${id}`}>
				<TutorialErrorSelectBox2
					onClick={() =>
						setTutorialInfo({
							...tutorialInfo,
							id,
							userId,
							name,
							description,
							tags,
						})
					}
				>
					{name}
				</TutorialErrorSelectBox2>
			</Link>
		</>
	);
}

const TutorialErrorSelectBox2 = styled.div`
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
	text-decoration: none;
`;
