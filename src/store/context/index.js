import React, { createContext, useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, user: action.user };

		default:
			return state;
	}
};

const INITIAL_STATE = {
	user: null,
};

const MainContext = createContext(INITIAL_STATE);

function MainProvider(props) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return (
		<MainContext.Provider value={{ state, dispatch }}>
			{props.children}
		</MainContext.Provider>
	);
}

export { MainContext, MainProvider };
