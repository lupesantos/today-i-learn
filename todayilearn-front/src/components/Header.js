import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { useContext, useState } from 'react';
import { AuthGoogleContext } from '../contexts/authGoogle';
import { TailSpin } from 'react-loader-spinner';
import { Form, Button } from '../common/FormstyleSearch';
import UserContext from '../contexts/UserContext';
import useGetTutorial from '../hooks/api/useGetTutorial';
import ListTutorials from '../components/ListTutorials';

export default function Header() {
	const { getTutorial } = useGetTutorial();
	const [button, setButton] = useState(false);
	const { term, setTerm } = useContext(UserContext);
	const { signOut } = useContext(AuthGoogleContext);
	const [loading, setLoading] = useState(false);
	const [disable, setDisable] = useState(false);
	const [tutorialList, setTutorialList] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: '',
	});

	async function showGetTutorial() {
		const term = 'tutorial';
		const data = await getTutorial(term);
		setTutorialList(data);
	}

	async function handleForm(e) {
		e.preventDefault();
		setDisable(!disable);

		setError({
			isError: false,
			message: '',
		});

		try {
			setLoading(!loading);
		} catch (error) {
			setLoading(!loading);
			setError({
				isError: true,
				message: error.response.data.message,
			});
		}
	}

	function showLogoutButton() {
		setButton(!button);
	}
	function handleSignUp(e) {
		let value = e.target.value;
		setTerm({ ...term, [e.target.name]: value });
	}

	return (
		<>
			<ContentHeader>
				<Link to='/home'>
					<a>Today I Learn</a>
				</Link>
				<SearchBarWrappler>
					<TutorialForm onSubmit={handleForm}>
						<input
							autoComplete='off'
							type='text'
							name='term'
							value={term.term}
							onChange={handleSignUp}
							placeholder='search...'
							required
						/>

						{error.isError ? <h5>{error.message}</h5> : <></>}
						<Button
							type='submit'
							disabled={disable}
							onClick={() => {
								setLoading(!loading);
								setTimeout(() => {
									setLoading(false);
								}, 800);
								showGetTutorial();
							}}
						>
							{loading ? <TailSpin color='#ffffff' width='10' /> : <>F</>}
						</Button>
					</TutorialForm>
				</SearchBarWrappler>
				<RighSide>
					{button ? (
						<SlArrowUp
							onClick={showLogoutButton}
							style={{
								marginLeft: '10px',
								cursor: 'pointer',
							}}
							size='19px'
							color='white'
						/>
					) : (
						<SlArrowDown
							onClick={showLogoutButton}
							style={{
								marginLeft: '10px',
								cursor: 'pointer',
							}}
							size='19px'
							color='white'
						/>
					)}
				</RighSide>
				{button ? (
					<LogOutButton onClick={() => signOut()}>Logout</LogOutButton>
				) : (
					<></>
				)}
				{tutorialList ? (
					<ListTutorials
						tutorialList={tutorialList}
						setTutorialList={setTutorialList}
					/>
				) : (
					<></>
				)}
			</ContentHeader>
		</>
	);
}

const TutorialForm = styled(Form)`
	height: 100px;
	font-family: 'Roboto', sans-serif;
	display: flex;
	gap: 10px;
`;

const ContentHeader = styled.header`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	font-family: 'Roboto', sans-serif;
	font-size: 35px;
	color: white;
	width: 100vw;
	height: 72px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #393e46;

	a {
		margin-left: 10px;
		color: white;
		text-decoration: none;
	}
`;

const LogOutButton = styled.div`
	width: 150px;
	height: 43px;
	background-color: #393e46;
	border-radius: 0px 0px 0px 20px;
	font-family: 'Lato';
	font-size: 15px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	position: fixed;
	right: 0;
	top: 72px;
`;
const SearchBarWrappler = styled.div`
	width: 200px;
	margin: 0 20px;

	position: relative;
`;
const RighSide = styled.header`
	display: flex;
	margin-right: 10px;
	justify-content: center;
	align-items: center;
	img {
		height: 45px;
		width: 45px;
		border-radius: 35px;
		margin-left: 20px;
		margin-right: 20px;
	}
`;
