import styled from 'styled-components';
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import usePostTutorial from '../hooks/api/useTutorial';
import getUser from '../services/getUser';
import { Form, Button } from '../common/Formstyle';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

export default function NewTutorial({ setButton2, button2 }) {
	const { postTutorial } = usePostTutorial();
	const user = getUser();
	const [tutorial, setTutorial] = useState({
		name: '',
		description: '',
		tags: '',
	});
	const [loading, setLoading] = useState(false);
	const [disable, setDisable] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: '',
	});

	const editorRef = useRef();

	async function handleForm(e) {
		e.preventDefault();
		setDisable(!disable);

		setError({
			isError: false,
			message: '',
		});
		let teste = editorRef.current.getContent();
		teste.replace('');
		teste = teste.replace(/"/g, "'");

		try {
			setLoading(!loading);
			await postTutorial(user.id, tutorial.name, teste, tutorial.tags);

			toast('Tutorial criado com sucesso!');
		} catch (error) {
			setLoading(!loading);
			setError({
				isError: true,
				message: error.response.data.message,
			});
			toast('Não foi possível criar o tutorial!');
		}
	}

	function handleSignUp(e) {
		let value = e.target.value;
		setTutorial({ ...tutorial, [e.target.name]: value });
	}

	return (
		<>
			<TutorialForm onSubmit={handleForm}>
				<TutorialHeader>
					<h2>Criar novo tutorial</h2>
				</TutorialHeader>

				<NameTags>
					<input
						autoComplete='off'
						type='text'
						name='name'
						value={tutorial.name}
						onChange={handleSignUp}
						placeholder='Nome do tutorial'
						required
					/>
					<input
						autoComplete='off'
						type='text'
						name='tags'
						value={tutorial.tags}
						onChange={handleSignUp}
						placeholder='Tags'
						required
					/>
				</NameTags>
				<Editor onInit={(evt, editor) => (editorRef.current = editor)} />
				<Space />

				{error.isError ? <h5>{error.message}</h5> : <></>}
				<Button
					type='submit'
					disabled={disable}
					onClick={() => {
						setLoading(!loading);
						setTimeout(() => {
							setLoading(false);
						}, 800);
					}}
				>
					{loading ? <TailSpin color='#ffffff' width='10' /> : <>Cadastrar</>}
				</Button>
			</TutorialForm>
		</>
	);
}

const TutorialForm = styled(Form)`
	height: 540px;
	font-family: 'Roboto', sans-serif;
`;

const NameTags = styled.div`
	display: flex;
	gap: 10px;
`;
const Space = styled.div`
	width: 100px;
	height: 20px;
	background: #222831;
`;

const TutorialHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background: #393e46;
	margin-bottom: 5px;
	border-radius: 5px 5px 0 0;
`;
