

function SubmitTestForm() {
	
	//TODO: gather fields from form
	//TODO: Jsonify form fields
	//TODO: Call postFormDataAsJson to http://localhost:8090/your/endpoint
  alert("The form was submitted");
}

/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postFormDataAsJson({ url, formData }) {
	/**
	 * We can't pass the `FormData` instance directly to `fetch`
	 * as that will cause it to automatically format the request
	 * body as "multipart" and set the `Content-Type` request header
	 * to `multipart/form-data`. We want to send the request body
	 * as JSON, so we're converting it to a plain object and then
	 * into a JSON string.
	 * 
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
	 */
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		/**
		 * The default method for a request with fetch is GET,
		 * so we must tell it to use the POST HTTP method.
		 */
		method: "POST",
		/**
		 * These headers will be added to the request and tell
		 * the API that the request body is JSON and that we can
		 * accept JSON responses.
		 */
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		/**
		 * The body of our POST request is the JSON string that
		 * we created above.
		 */
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}