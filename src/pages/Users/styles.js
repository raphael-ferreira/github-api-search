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

export const ContentContainer = styled.div`
	width: 500px;

	p {
		width: 100%;

		text-align: center;
		font-size: 16px;
		color: #fff;

		opacity: 0.5;
	}
`;

export const SearchContainer = styled.div`
	display: flex;
`;

export const ResultContainer = styled.div`
	margin: 5px;

	min-height: 500px;
	max-height: 500px;

	background: #eeeeee;

	border-radius: 5px;
	border: 2px solid #8f39dd;

	overflow: scroll;
	overflow-x: hidden;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;

	list-style-type: none;
`;

export const Item = styled.li`
	display: flex;
	align-items: center;

	padding: 20px;

	border-bottom: 1px solid #ccc;

	text-decoration: none;

	cursor: pointer;

	:hover {
		opacity: 0.8;
		color: #8f39dd;
	}

	img {
		width: 60px;
		height: 60px;

		border-radius: 50%;
	}

	span {
		flex: 1;
		font-size: 20px;
		margin: 20px;
	}
`;
