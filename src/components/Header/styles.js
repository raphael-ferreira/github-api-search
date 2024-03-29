import styled from 'styled-components';

export const Container = styled.header``;

export const List = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #8f39dd;

	-webkit-transition-duration: 0.4s; /* Safari */
	transition-duration: 0.4s;
`;

export const ListItem = styled.li`
	float: left;
`;

export const Link = styled.a`
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;

	-webkit-transition-duration: 0.4s; /* Safari */
	transition-duration: 0.4s;

	:hover {
		background-color: #ff00ff;
	}
`;
