import config from 'config';
import { format, parse } from 'url';

/**
* Recieves an urlObject-like and fills all missed props to generate a real urlObject
* https://nodejs.org/api/url.html#url_url_strings_and_url_objects
*
* Example:

  compose({ port: 80, hostname: '0.0.0.0', protocol: 'http' }) =>
  Url {
    protocol: 'http:',
    slashes: true,
    host: '0.0.0.0:80',
    port: '80',
    hostname: '0.0.0.0',
    pathname: '/',
    path: '/',
    href: 'http://0.0.0.0:80/'
  }

*
* @param {Object} urlObject
*/
export function compose(urlObject = {}) {
  const formatted = format(urlObject);
  const parsed = parse(formatted);

  return parsed;
}

/**
* Retrives the redirect URL from the state
* or the config.externalUri as default
*
*/
export function getRedirectUrl(state) {
  return state || format(config.externalUri);
}
