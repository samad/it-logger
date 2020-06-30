import * as actions from '../actions/types';

const inititalState = {
	logs: null,
	current: null,
	loading: false,
	error: null,
};

export default (state = inititalState, action) => {
	switch (action.type) {
		case actions.SEARCH_LOGS:
			return {
				...state,
				logs: action.payload,
			};

		case actions.GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			};

		case actions.SET_LOADING:
			return {
				...state,
				loading: true,
			};

		case actions.LOGS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};

		case actions.ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload],
			};

		case actions.DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter((log) => log.id !== action.payload),
				loading: false,
			};

		case actions.UPDATE_LOG:
			return {
				...state,
				logs: state.logs.map((log) => (log.id === action.payload.id ? action.payload : log)),
			};

		case actions.SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};

		case actions.CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};

		default:
			return state;
	}
};
