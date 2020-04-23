import styled from 'styled-components';

import icon from '../../assets/icons/search.svg';

export const InputButton = styled.button`
	position: relative;
	background: #8b32dc;

	margin: 5px;
	width: 130px;

	border: none;
	border-radius: 5px;

	-webkit-transition-duration: 0.4s; /* Safari */
	transition-duration: 0.4s;
	text-decoration: none;
	overflow: hidden;
	cursor: pointer;

	padding: 10px;
	padding-left: 30px;

	color: #fff;
	background-image: url(${icon});
	background-repeat: no-repeat;
	background-size: 15%;
	background-position: 10px 50%;

	font-size: 16px;

	cursor: pointer;

	:focus {
		outline: none;
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
