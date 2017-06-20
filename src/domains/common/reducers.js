import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SET_SESSION,
  SET_ACTIVE_ORGANIZATION
} from './actionTypes';

const initialState = {
  studioMetadata: {},
  location: {}
};

export default function reducers(state = initialState, action) {
  switch (action.type) {

    case SET_SESSION:
      return {
        ...state,
        profile: action.profile,
        context: action.context
      };

    case SET_ACTIVE_ORGANIZATION:
      if (!state.profile) return state;

      return {
        ...state,
        profile: {
          ...state.profile,
          properties: {
            ...state.profile.properties,
            cs_auth: {
              ...state.profile.properties.cs_auth,
              activeOrganizationId: action.organization.id
            }
          }
        }
      };

    default:
      return state;
  }
}
