import styled from 'styled-components';

export const InputText = styled.input`
	padding: 10px;

	flex: 1;
	margin: 5px;

	border: 2px solid #8b32dc;
	border-radius: 5px;

	background: #fff;

	::placeholder {
		font-size: 16px;
	}

	:focus {
		outline: none;
	}
`;
