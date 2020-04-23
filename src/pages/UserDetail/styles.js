import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 95vh;

	h1 {
		color: #fff;
		margin-bottom: 50px;
		opacity: 0.8;
	}

	overflow: hidden;
`;

export const Content = styled.div`
	height: 65%;
	min-height: 500px;
	width: 50%;
	min-width: 650px;

	display: flex;
	align-items: stretch;
	justify-content: space-between;

	margin-bottom: 20px;
`;

export const User = styled.div`
	width: 220px;

	border-radius: 10px;

	background: #eeeeee;

	img {
		width: 100%;
		border-radius: 10px 10px 0px 0px;
	}

	h2,
	h3 {
		text-align: center;
		margin: 0;
	}

	h2 {
		margin-top: 10px;
	}

	h3 {
		font-size: 16px;
		opacity: 0.4;
	}
`;

export const UserInfo = styled.div`
	padding: 20px;

	font-size: 14px;
`;

export const Field = styled.p`
	font-weight: bold;
`;

export const Value = styled.span`
	font-weight: normal;
`;

export const RepoInfo = styled.div`
	padding: 20px;

	background: #ccc;
`;

export const Result = styled.div`
	flex: 1;

	margin-left: 30px;

	background: #eeeeee;

	border-radius: 10px;

	overflow: overlay;
	overflow-x: hidden;

	p {
		margin: 0px;
		padding: 5px;
	}
`;

export const List = styled.ul`
	min-height: 380px;
	max-height: 500px;

	margin: 0;
	padding: 0px 20px 40px;

	list-style-type: none;
`;

export const Item = styled.li`
	padding: 10px 0px;

	border-bottom: 1px solid #ccc;

	text-decoration: none;

	cursor: pointer;

	:hover {
		opacity: 0.8;
		color: #8f39dd;
	}
`;

export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	text-decoration: none;

	span {
		margin: 0px 10px;
	}

	:hover {
		opacity: 0.7;
	}

	:visited {
		color: #000;
	}
`;
