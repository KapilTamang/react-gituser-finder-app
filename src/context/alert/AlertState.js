import React, { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertReducer from './AlertReducer';
import AlertContext from './AlertContext';

const AlertState = (props) => {
	const initialState = {
		alert: null,
	};

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	const setAlert = (msg, style) => {
		dispatch({
			type: SET_ALERT,
			msg: msg,
			style: style,
		});

		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
	};

	return (
		<AlertContext.Provider value={{ alert: state.alert, setAlert }}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
