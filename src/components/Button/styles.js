import styled from 'styled-components';

export const InputButton = styled.button`
	min-width: 100px;

	position: relative;
	background: #8b32dc;

	margin: 5px;

	border: none;
	border-radius: 5px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	-webkit-transition-duration: 0.4s; /* Safari */
	transition-duration: 0.4s;
	text-decoration: none;
	overflow: hidden;
	cursor: pointer;

	color: #fff;
	padding: 10px;

	font-size: 16px;

	cursor: pointer;

	span {
		margin-right: 5px;
		margin-left: 5px;
	}

	:focus {
		outline: none;
	}

	:hover {
		background: #ff00ff;
	}

	:after {
		content: '';
		background: #8f39dd;
		display: block;
		position: absolute;
		padding-top: 300%;
		padding-left: 350%;
		margin-left: -20px !important;
		margin-top: -120%;
		opacity: 0;
		transition: all 0.8s;
	}

	:active:after {
		padding: 0;
		margin: 0;
		opacity: 1;
		transition: 0s;
	}
`;
