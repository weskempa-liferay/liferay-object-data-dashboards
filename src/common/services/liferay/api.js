import { Buffer } from 'buffer';

const getAuthzHeaders = () => {

	if (typeof window['Liferay'] == 'undefined') {
		const user = process.env.REACT_APP_LIFERAY_USER;
		const password = process.env.REACT_APP_LIFERAY_PASSWORD;
		const base64credentials = Buffer(`${user}:${password}`).toString(
			'base64'
		);

		// Basic Auth for local development testing only
		// Auth token is the best method for live use and
		// is available when acting as a Web Component (Custom Element)
		return new Headers({
			'Authorization': 'Basic ' + base64credentials,
			'Content-Type': 'application/json',
		});
	}
	return new Headers({
		'Content-Type': 'application/json',
		'x-csrf-token': window['Liferay'].authToken,
	});
};

const baseFetch = async (url, {body, method = 'GET'} = {}) => {
	const apiPath = (process.env.REACT_APP_LIFERAY_API)?
						process.env.REACT_APP_LIFERAY_API:"";

	const response = await fetch(apiPath + '/' + url, {
		...(body && {body: JSON.stringify(body)}),
		headers: getAuthzHeaders(),
		method,
	});

	const data = await response.json();

	return {data};
};

export default baseFetch;
