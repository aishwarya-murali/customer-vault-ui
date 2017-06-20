import config from 'config';
//import { getPath } from '~/utils/routes';

/**
* Get links for a given profile
* @param {Object} profile
*/

export function validateEntitlement(profile) {
  if (config.useSecurityFabricEntitlement) {
    if (!profile) {
      const error = new Error('User unauthorized.');
      error.status = 401;
      throw error;
    }
    if (!profile.organization.entitlements.securityFabric.enabled) {
      const error = new Error('Organization is not entitled to see Security Fabric.');
      error.status = 403;
      throw error;
    }
  }
  return profile;
}
