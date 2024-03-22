import { createAction } from '@reduxjs/toolkit';

export const addError = createAction('errors/addError', (payload) => {
	const { data, isCritical, text } = payload;

	const errorStatus = data.response?.status || 0;

	let errorCode;
	if (data.isAxiosError && !data.response) {
		errorCode = 'NETWORK';
	}
	if (data.isAxiosError && (errorStatus === 400 || errorStatus > 404)) {
		errorCode = 'SERVER';
	}
	if (data.isAxiosError && errorStatus === 404) {
		errorCode = 'NOT_FOUND';
	}

	const raw = data || {};
	const error = {
		...raw,
		config: {
			data: data.config?.data,
			method: data.config?.method,
			url: data.config?.url,
		},
	};

	return {
		payload: {
			data: error,
			isCritical,
			text,
			type: errorCode,
		},
	};
});
