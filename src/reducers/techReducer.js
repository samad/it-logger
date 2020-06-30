import * as actions from '../actions/types';

const inititalState = {
	techs: null,
	loading: false,
	error: null,
};

export default (state = inititalState, action) => {
	switch (action.type) {
		case actions.GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false,
			};

		case actions.ADD_TECH:
			return {
				...state,
				techs: [...state.techs, action.payload],
				loading: false,
			};

		case actions.DELETE_TECH:
			return {
				...state,
				techs: state.techs.filter((tech) => tech.id !== action.payload),
				loading: false,
			};

		case actions.TECHS_ERROR:
			console.log(action.payload);
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		case actions.SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return {
				...state,
			};
	}
};
