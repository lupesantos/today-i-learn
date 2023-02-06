import styled from 'styled-components';
import { BiExit } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import usePostError from '../hooks/api/useError';
import getUser from '../services/getUser';
import { Form, Button } from '../common/Formstyle';

export default function NewTutorial() {
	const { postError } = usePostError();
	const user = getUser();
	const [newError, setnewError] = useState({
		name: '',
		description: '',
		tags: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: '',
	});

	async function handleForm(e) {
		e.preventDefault();
		setError({
			isError: false,
			message: '',
		});

		try {
			setLoading(!loading);
			await postError(
				user.id,
				newError.name,
				newError.description,
				newError.tags
			);
		} catch (error) {
			setLoading(!loading);
			setError({
				isError: true,
				message: error.response.data.message,
			});
		}
	}

	function handleSignUp(e) {
		let value = e.target.value;
		setnewError({ ...newError, [e.target.name]: value });
		console.log(newError);
	}

	return (
		<>
			<ErrorForm onSubmit={handleForm}>
				<ErrorHeader>
					<h2>Criar novo erro</h2>
				</ErrorHeader>

				<NameTags>
					<input
						autoComplete='off'
						type='text'
						name='name'
						value={newError.name}
						onChange={handleSignUp}
						placeholder='Nome do tutorial'
						required
					/>
					<input
						autoComplete='off'
						type='text'
						name='tags'
						value={newError.tags}
						onChange={handleSignUp}
						placeholder='Tags'
						required
					/>
				</NameTags>

				<textarea
					cols={30}
					rows={10}
					autoComplete='off'
					type='text'
					name='description'
					value={newError.description}
					onChange={handleSignUp}
					placeholder='Description'
					required
				></textarea>

				{error.isError ? <h5>{error.message}</h5> : <></>}
				<Button
					type='submit'
					onClick={() => {
						setLoading(!loading);
					}}
				>
					{loading ? <TailSpin color='#ffffff' width='10' /> : <>Cadastrar</>}
				</Button>
			</ErrorForm>
		</>
	);
}

const ErrorForm = styled(Form)`
	height: 540px;
	font-family: 'Roboto', sans-serif;
`;

const NameTags = styled.div`
	display: flex;
	gap: 10px;
`;

const ErrorHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background: #393e46;
	margin-bottom: 5px;
	border-radius: 5px 5px 0 0;
`;
