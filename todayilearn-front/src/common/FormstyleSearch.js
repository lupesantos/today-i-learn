import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	align-items: center;

	input {
		width: 246.4px;
		font-family: 'Roboto', sans-serif;
		height: 40px;
		border-radius: 5px;
		border: 1px solid rgb(127, 133, 141);
		padding-left: 10px;
		font-size: 15px;
		font-weight: 500;
		background-color: rgb(245, 245, 245);
	}

	input::placeholder {
		font-size: 15px;
		font-weight: 500;
		color: rgb(127, 133, 141);
	}

	input:focus {
		outline: 0.5px solid grey;
	}

	textarea:focus {
		outline: 0.5px solid grey;
	}

	h2 {
		color: white;
		font-weight: bold;
		font-size: 22px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	h5 {
		color: white;
		text-decoration: underline;
		font-weight: bold;
		margin-bottom: 12px;
		font-size: 15px;
	}
`;

const Button = styled.button`
	height: 30px;
	border-radius: 5px;
	color: #ffffff;
	border: 1px solid rgb(127, 133, 141);
	border-radius: 5px;
	font-size: 20px;
	font-weight: bold;
	width: 30px;
	background-color: #222831;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export { Button, Form };
