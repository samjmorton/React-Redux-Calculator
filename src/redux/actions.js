import {
	CLEAR_INPUT,
	CALCULATE_OUTPUT,
	SET_INPUT,
	SET_OPERATOR,
} from './actionTypes';

export const clearInput = () => ({ type: CLEAR_INPUT });
export const calculateOutput = (input) => ({ type: CALCULATE_OUTPUT, input });
export const setInput = (input) => ({ type: SET_INPUT, input });
export const setOperator = (input) => ({ type: SET_OPERATOR, input });
