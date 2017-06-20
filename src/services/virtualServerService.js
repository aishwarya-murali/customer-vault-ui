import { checkStatus } from '../utils/fetch';
import config from 'config';
import { format }      from 'url';

export function getVirtualServerList(profile) {
  const url = format({
    ...config.api.uri,
    pathname: `/v1/organizations/${profile.organization.id}/virtualserverwithrules`
  });

  return fetch(url)
    .then(checkStatus)
    .then((response) => response.json());
}

export function getVirtualServer(profile, id) {
  const url = format({
    ...config.api.uri,
    pathname: `/v1/organizations/${profile.organization.id}/virtualserverwithrules/` + id
  });

  return fetch(url)
    .then(checkStatus)
    .then((response) => response.json());
}



export function addVirtualServer(profile, newVirtualServer) {
  const url = format({
    ...config.api.uri,
    pathname: `/v1/organizations/${profile.organization.id}/virtualserverwithrules`
  });

    return fetch(url, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newVirtualServer)
})
    .then(checkStatus)
    .then((response) => response.json());
}

export function updateVirtualServer(profile, updatedVirtualServer, virtualServerId) {

  const url = format({
    ...config.api.uri,
    pathname: `/v1/organizations/${profile.organization.id}/virtualserverwithrules/`+virtualServerId
  });

    return fetch(url, {
    method: "put",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedVirtualServer)
    })
    .then(checkStatus)
    .then((response) => response.json());
}

export function deleteVirtualServer(profile, virtualServerId) {
  const url = format({
    ...config.api.uri,
    pathname: `/v1/organizations/${profile.organization.id}/virtualservers/` + virtualServerId
  });

  return fetch(url, {
  method: "delete",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then(checkStatus)
  .then((response) => response.json());
}
