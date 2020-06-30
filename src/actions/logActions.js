import * as actions from './types';

/* export const getLogs = () => {
	return async (dispatch) => {
		setLoading();

		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: actions.GET_LOGS,
			payload: data,
		});
	};
}; */

export const getLogs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: actions.GET_LOGS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actions.LOGS_ERROR,
			payload: error.response.statusText,
		});
	}
};

export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: actions.ADD_LOG,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actions.LOGS_ERROR,
			payload: error.response.statusText,
		});
	}
};

export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`/logs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: actions.DELETE_LOG,
			payload: id,
		});
	} catch (error) {
		dispatch({
			type: actions.LOGS_ERROR,
			payload: error.response.statusText,
		});
	}
};

export const setCurrent = (log) => {
	return {
		type: actions.SET_CURRENT,
		payload: log,
	};
};

export const clearCurrent = () => {
	return {
		type: actions.CLEAR_CURRENT,
	};
};

export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		dispatch({
			type: actions.UPDATE_LOG,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actions.LOGS_ERROR,
			payload: error.response.statusText,
		});
	}
};

export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();
		console.log(data);

		dispatch({
			type: actions.SEARCH_LOGS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actions.LOGS_ERROR,
			payload: error.response.statusText,
		});
	}
};

export const setLoading = () => {
	return {
		type: actions.SET_LOADING,
	};
};
