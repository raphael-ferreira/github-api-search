import React from 'react';

import { InputText } from './styles';

const Textbox = (props) => {
	return (
		<InputText
			type="text"
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			onKeyPress={props.onKeyPress}
		/>
	);
};

export default Textbox;
