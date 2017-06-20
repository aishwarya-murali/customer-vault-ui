import config                         from 'config';
import { format }                     from 'url';
import { checkStatus }                from '../utils/fetch';
import { camelizeUnderscoreObjProps } from '../utils/strings';

export function getProfile() {
  return profile;
}

export function getActiveOrganizationId(profile) {
  if (profile) {
    return profile.properties && profile.properties.cs_auth ?
      profile.properties.cs_auth.activeOrganizationId : profile.organization.id;
  }
  return null;
}


const profile = {
  "id": "782673d7-252c-4753-b210-d457d839f67f",
  "createdAt": "2017-03-23T20:01:26.287Z",
  "updatedAt": "2017-04-27T18:06:30.098Z",
  "firstName": "Test",
  "lastName": "User",
  "email": "test.user@mulesoft.com",
  "phoneNumber": "1234567890",
  "idprovider_id": "mulesoft",
  "username": "testUser",
  "enabled": true,
  "deleted": false,
  "organizationPreferences": {},
  "organization": {
    "name": "Security Fabric",
    "id": "7d3868fd-6e4a-434b-8826-07ee23b6286f",
    "createdAt": "2017-03-23T20:01:26.563Z",
    "updatedAt": "2017-04-19T21:51:22.941Z",
    "ownerId": "782673d7-252c-4753-b210-d457d839f67f",
    "clientId": "2ff22825286b4f90b1fd1901b36f2adf",
    "domain": "exc-aut-a",
    "idprovider_id": "mulesoft",
    "isFederated": false,
    "parentOrganizationIds": [],
    "subOrganizationIds": [
      "24f74b04-b603-46ad-bbe2-82d0ef5cbc90"
    ],
    "tenantOrganizationIds": [],
    "isMaster": true,
    "subscription": {
      "type": "Trial",
      "expiration": "2017-04-22T20:01:26.547Z"
    },
    "properties": {},
    "environments": [
      {
        "id": "458e828d-68d0-4788-aa60-c9692c6d0923",
        "name": "Development",
        "organizationId": "7d3868fd-6e4a-434b-8826-07ee23b6286f",
        "isProduction": true
      }
    ],
    "entitlements": {
      "createEnvironments": true,
      "autoscaling": false,
      "globalDeployment": false,
      "createSubOrgs": true,
      "hybrid": {
        "enabled": true
      },
      "armAlerts": true,
      "vCoresProduction": {
        "assigned": 1,
        "reassigned": 0
      },
      "hybridInsight": false,
      "vCoresSandbox": {
        "assigned": 0,
        "reassigned": 0
      },
      "apis": {
        "enabled": true
      },
      "staticIps": {
        "assigned": 0,
        "reassigned": 0
      },
      "vpcs": {
        "assigned": 0,
        "reassigned": 0
      },
      "cam": {
        "enabled": false
      },
      "workerLoggingOverride": {
        "enabled": false
      },
      "mqMessages": {
        "base": 0,
        "addOn": 0
      },
      "mqRequests": {
        "base": 0,
        "addOn": 0
      },
      "mqAdvancedFeatures": {
        "enabled": false
      },
      "objectStoreRequestUnits": {
        "base": 0,
        "addOn": 0
      },
      "objectStoreKeys": {
        "base": 0,
        "addOn": 0
      },
      "externalIdentity": true,
      "gateways": {
        "assigned": 1
      },
      "designCenter": {
        "api": true,
        "mozart": true
      },
      "partnersProduction": {
        "assigned": 0
      },
      "partnersSandbox": {
        "assigned": 0
      },
      "loadBalancer": {
        "assigned": 0,
        "reassigned": 0
      },
      "exchange2": {
        "enabled": true
      },
      "messaging": {
        "assigned": 0
      }
    },
    "owner": {
      "id": "782673d7-252c-4753-b210-d457d839f67f",
      "username": "testUser",
      "firstName": "Test",
      "lastName": "User",
      "email": "test.user@mulesoft.com",
      "organizationId": "7d3868fd-6e4a-434b-8826-07ee23b6286f",
      "enabled": true,
      "idprovider_id": "mulesoft",
      "createdAt": "2017-03-23T20:01:26.287Z",
      "updatedAt": "2017-04-27T18:06:30.098Z"
    }
  },
  "properties": {
    "cs_auth": {
      "activeOrganizationId": "7d3868fd-6e4a-434b-8826-07ee23b6286f"
    }
  },
  "memberOfOrganizations": [
    {
      "name": "Security Fabric",
      "id": "7d3868fd-6e4a-434b-8826-07ee23b6286f",
      "createdAt": "2017-03-23T20:01:26.563Z",
      "updatedAt": "2017-04-19T21:51:22.941Z",
      "ownerId": "782673d7-252c-4753-b210-d457d839f67f",
      "clientId": "2ff22825286b4f90b1fd1901b36f2adf",
      "domain": "exc-aut-a",
      "idprovider_id": "mulesoft",
      "isFederated": false,
      "parentOrganizationIds": [],
      "subOrganizationIds": [
        "24f74b04-b603-46ad-bbe2-82d0ef5cbc90"
      ],
      "tenantOrganizationIds": [],
      "parentName": null,
      "parentId": null,
      "isMaster": true,
      "subscription": {
        "type": "Trial",
        "expiration": "2017-04-22T20:01:26.547Z"
      }
    },
    {
      "name": "Security Fabric",
      "id": "24f74b04-b603-46ad-bbe2-82d0ef5cbc90",
      "createdAt": "2017-03-23T20:02:12.855Z",
      "updatedAt": "2017-04-19T21:51:37.498Z",
      "ownerId": "9e74dc27-94cc-44ec-a707-e7cc3550d4c8",
      "clientId": "2b1a05b69fef4af18ae31fd0ab72f114",
      "domain": null,
      "idprovider_id": "mulesoft",
      "isFederated": false,
      "parentOrganizationIds": [
        "7d3868fd-6e4a-434b-8826-07ee23b6286f"
      ],
      "subOrganizationIds": [],
      "tenantOrganizationIds": [],
      "parentName": "Security Fabric",
      "parentId": "7d3868fd-6e4a-434b-8826-07ee23b6286f",
      "isMaster": false
    }
  ],
  "contributorOfOrganizations": [
    {
      "name": "Security Fabric",
      "id": "7d3868fd-6e4a-434b-8826-07ee23b6286f",
      "createdAt": "2017-03-23T20:01:26.563Z",
      "updatedAt": "2017-04-19T21:51:22.941Z",
      "ownerId": "782673d7-252c-4753-b210-d457d839f67f",
      "clientId": "2ff22825286b4f90b1fd1901b36f2adf",
      "domain": "exc-aut-a",
      "idprovider_id": "mulesoft",
      "isFederated": false,
      "parentOrganizationIds": [],
      "subOrganizationIds": [
        "24f74b04-b603-46ad-bbe2-82d0ef5cbc90"
      ],
      "tenantOrganizationIds": [],
      "parentName": null,
      "parentId": null,
      "isMaster": true,
      "subscription": {
        "type": "Trial",
        "expiration": "2017-04-22T20:01:26.547Z"
      }
    },
    {
      "name": "Security Fabric",
      "id": "24f74b04-b603-46ad-bbe2-82d0ef5cbc90",
      "createdAt": "2017-03-23T20:02:12.855Z",
      "updatedAt": "2017-04-19T21:51:37.498Z",
      "ownerId": "9e74dc27-94cc-44ec-a707-e7cc3550d4c8",
      "clientId": "2b1a05b69fef4af18ae31fd0ab72f114",
      "domain": null,
      "idprovider_id": "mulesoft",
      "isFederated": false,
      "parentOrganizationIds": [
        "7d3868fd-6e4a-434b-8826-07ee23b6286f"
      ],
      "subOrganizationIds": [],
      "tenantOrganizationIds": [],
      "parentName": "Security Fabric",
      "parentId": "7d3868fd-6e4a-434b-8826-07ee23b6286f",
      "isMaster": false
    }
  ],
  "access_token": "4be4780f-b7cc-4a1a-87aa-89774ef8be30",
  "permissions": {
    "cloudhub": {
      "view": true
    },
    "api_platform": {
      "view": true
    },
    "exchange": {
      "view": true
    },
    "messaging": {
      "view": false
    },
    "dgw": {
      "view": true
    },
    "design_center": {
      "view": true
    },
    "admin": {
      "view": false
    },
    "support": {
      "view": true
    },
    "partners": {
      "view": false
    },
    "access_manager": {
      "view": true
    },
    "exchange2": {
      "view": true
    }
  }
}
