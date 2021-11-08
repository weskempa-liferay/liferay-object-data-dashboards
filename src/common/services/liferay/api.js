const {REACT_APP_LIFERAY_API = window.location.origin} = process.env;

export const getLiferayAuthenticationToken = () => {
	try {
		// eslint-disable-next-line no-undef
		const token = Liferay.authToken;

		return token;
	} catch (error) {
		console.warn('Not able to find Liferay auth token\n', error);

		return '';
	}
};

const baseFetch = async (url, {body, method = 'GET'} = {}) => {

    let headers = new Headers({
		'Content-Type': 'application/json',
		'x-csrf-token': getLiferayAuthenticationToken()
	})

	let apiPath = REACT_APP_LIFERAY_API;

	// Basic Auth for local development testing only
	// Auth token is the best method for live use and
	// is available when acting as a Web Component (Custom Element)

	if (getLiferayAuthenticationToken()==""){
		headers = new Headers({
	    	'Authorization': 'Basic ' + btoa('test@liferay.com:test'), 
			'Content-Type': 'application/json'
	    });
	    apiPath = "http://localhost:8080";
	}

	const response = await fetch(apiPath + '/' + url, {
		...(body && {body: JSON.stringify(body)}),
		headers: headers,
		method,
	});

	const data = await response.json();

	return {data};
};

export {REACT_APP_LIFERAY_API};

export default baseFetch;
