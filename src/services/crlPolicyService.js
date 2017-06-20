import config from 'config';
import { format } from 'url';
import { checkStatus } from '../utils/fetch';

export function addCRLPolicy(profile, crlPolicy){
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
    body: JSON.stringify(crlPolicy)
  })
  .then((checkStatus))
  .then((response) => response.json());
}

export function getCRlPolicyList(profile) {
  const url =
  //"http://127.0.0.1:3001/v1/organizations/7d3868fd-6e4a-434b-8826-07ee23b6286f/policies";

  format({
    ...config.api.uri,
    pathname:`/v1/organizations/${profile.organization.id}/policies/`
  });

console.log("Inside get CRL");
  return fetch(url)
  .then((checkStatus))
  .then((response) => response.json())
}
