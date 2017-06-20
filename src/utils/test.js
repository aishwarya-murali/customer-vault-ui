export function buildJSONResponse(
  response,
  status = 200,
  headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }
) {
  const jsonResponse = response && JSON.stringify(response);

  return new Response(jsonResponse, {
    status,
    headers
  });
}
