import styled from 'styled-components';

const Form = styled.form`
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
		margin-bottom: 13px;
	}

	input::placeholder {
		font-size: 15px;
		font-weight: 500;
		color: rgb(127, 133, 141);
	}

	input:focus {
		outline: 0.5px solid grey;
	}
	textarea {
		width: 516.4px;
		font-family: 'Roboto', sans-serif;
		height: 500px;
		border-radius: 5px;
		border: 1px solid rgb(127, 133, 141);
		padding-left: 10px;
		font-size: 15px;
		font-weight: 500;
		background-color: rgb(245, 245, 245);
		margin-bottom: 13px;
	}

	textarea::placeholder {
		font-size: 15px;
		font-weight: 500;
		color: rgb(127, 133, 141);
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

export { Button, Form };
