/**
* Check for the status of a fetch action and throws an error if status is not 200-like
*
* @param {Object} response
*/
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.status = response.status;
  throw error;
}
