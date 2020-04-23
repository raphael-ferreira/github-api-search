import React from 'react';

import { InputButton } from './styles';

export default function Button(props) {
	return (
		<InputButton type="button" onClick={props.onClick}>
			{props.children}
		</InputButton>
	);
}
