import config from 'config';
import { format } from 'url';
import { checkStatus } from '../utils/fetch';

export function addSecurityNS(profile, securityNSVal){
  const url = format({
    ...config.api.uri,
    pathname:`/v1/organizations/${profile.organization.id}/policies/`
  });

  return fetch(url, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(securityNSVal)
  })
  .then((checkStatus))
  .then((response) => response.json());
}

export function getSecurityNSList(profile) {
  const url =
  //"http://127.0.0.1:3001/v1/organizations/7d3868fd-6e4a-434b-8826-07ee23b6286f/policies";

  format({
    ...config.api.uri,
    pathname:`/v1/organizations/${profile.organization.id}/policies/`
  });
  return fetch(url)
  .then((checkStatus))
  .then((response) => response.json())
}
