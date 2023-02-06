import { useContext } from 'react';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonSquare, Container } from '../../common/loginStyle';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

export default function Login() {
	const navigate = useNavigate();
	const { signInGoogle } = useContext(AuthGoogleContext);

	async function loginGoogle() {
		try {
			await signInGoogle();
			navigate('/Home');
			setTimeout(1000, toast('Login realizado com sucesso!'));
		} catch (error) {
			toast('Não foi possível fazer o login!');
		}
	}

	return (
		<Container>
			<Button onClick={loginGoogle}>
				<ButtonSquare>
					<FcGoogle
						onClick={loginGoogle}
						size='1.2em'
						color='rgb(107,158,208)'
					/>
				</ButtonSquare>
				<h5>Sign In With Google</h5>
			</Button>
		</Container>
	);
}
