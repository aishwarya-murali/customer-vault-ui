import {
  SET_LOCATION,
  SET_HOME_QUERY,
  SET_SESSION,
  SET_STUDIO_METADATA,
  SET_HEADER,
  SET_ERROR,
  SET_ALERT,
  CLEAR_ALERT,
  SET_ACTIVE_ORGANIZATION,
  SET_CURRENT_ROUTE_NAME
} from './actionTypes';

export function setSession(profile, context) {
  return {
    type: SET_SESSION,
    profile,
    context
  };
}

export function setStudioMetadata(metadata) {
  return {
    type: SET_STUDIO_METADATA,
    metadata
  };
}

export function setActiveOrganization(organization) {
  return {
    type: SET_ACTIVE_ORGANIZATION,
    organization,
    ...eventPayload('Change organization')
  };
}

export function setHomeQuery(query) {
  return {
    type: SET_HOME_QUERY,
    query
  };
}

export function setHeader({ title = '', description = '' }) {
  return {
    type: SET_HEADER,
    header: { title, description }
  };
}

export function setError(error) {
  return {
    type: SET_ERROR,
    error
  };
}

export function setAlert(alert) {
  return {
    type: SET_ALERT,
    alert
  };
}

export function clearAlert() {
  return {
    type: CLEAR_ALERT,
    alert: null
  };
}

export function closeAlert() {
  return (dispatch) => (
    dispatch(clearAlert())
  );
}
