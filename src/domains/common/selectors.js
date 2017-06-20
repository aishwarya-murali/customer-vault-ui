import config             from 'config';
import { createSelector } from 'reselect';

export const error    = (state) => state.common.error;
export const alert    = (state) => state.common.alert;
export const location = (state) => state.common.location;
export const profile  = (state) => state.common.profile;
export const header   = (state) => state.common.header;

export const homeTitle = createSelector(
  profile,
  (state, props) => ({ domain: props.domain, username: props.username }),
  ($profile, $props) => {
    let scope = 'All assets';

    if ($props.domain === config.mulesoft.domain) {
      scope = config.mulesoft.name;
    } else if ($profile && $props.domain === $profile.organization.domain) {
      scope = $profile.organization.name;
    } else if ($props.username) {
      scope = $props.username === $profile.username ? 'My assets' : $props.username;
    }

    return scope;
  }
);

export const authorization = createSelector(
  profile,
  ($profile) => {
    if ($profile) {
      return `bearer ${$profile.accessToken}`;
    }

    return null;
  }
);
