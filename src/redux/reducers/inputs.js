import {
	CLEAR_INPUT,
	CALCULATE_OUTPUT,
	SET_INPUT,
	SET_OPERATOR,
} from '../actionTypes';

const initialState = {
	result: 0,
};

const calculateResult = (state, input) => {
	switch (state.operator) {
		case '+':
			return parseInt(input, 10) + parseInt(state.result, 10);
		case '-':
			return parseInt(input, 10) - parseInt(state.result, 10);
		case 'x':
			return parseInt(input, 10) * parseInt(state.result, 10);
		case '/':
			return parseInt(input, 10) / parseInt(state.result, 10);
		default:
			return input;
	}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_INPUT: {
      return {
				...state,
				result: 0,
      };
		}
		case SET_INPUT: {
			return {
				...state,
				result: calculateResult(state, action.input),
				operator: null,
			};
		}
		case SET_OPERATOR: {
			return {
				...state,
				operator: action.input,
			};
		}
		case CALCULATE_OUTPUT: {
			return {
				...state,
				result: calculateResult(state, action.input),
				operator: null,
			};
		}
    default:
      return state;
  }
};
