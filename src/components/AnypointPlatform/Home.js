import React, { Component } from 'react';
import MediaObject from '@mulesoft/anypoint-components/lib/MediaObject';
import Row from '@mulesoft/anypoint-components/lib/Row';
import Hero from '@mulesoft/anypoint-components/lib/Hero';
import Icon from '@mulesoft/anypoint-icons/lib/Icon';
import Button from '@mulesoft/anypoint-components/lib/Button';
import Link from 'react-router/lib/Link';
import NavBar from '@mulesoft/anypoint-navbar';
import { getActiveOrganizationId } from '../../services/authenticationService';
import './Home.css';

const anypointProducts = [
  {id:'api-manager',icon:'api-manager-greyscale',label:'API Manager'},
  {id:'runtime-manager',icon:'runtime-manager-greyscale',label:'Runtime Manager'},
  {id:'exchange-logo',icon:'exchange-logo-filled',label:'Exchange'},
  {id:'access-management',icon:'settings',label:'Access Management'},
  {id:'data-gateway',icon:'data-gateway-greyscale',label:'Data Gateway'},
  {id:'message-queue',icon:'message-queue-greyscale',label:'MQ'},
  {id:'partner-manager',icon:'partner-manager-greyscale',label:'Partner Manager'},
  {id:'tokenization-service',icon:'encrypted-small',label:'Tokenization Service'},
  {id:'pki-service',icon:'encrypted-small',label:'PKI Service'},
  {id:'sf-edge-policies',icon:'encrypted-small',label:'Security Fabric'}
];

const product = {
  href: "/anypointPlatformHome",
  icon: "mulesoft-logo",
  name: "Anypoint Platform",
  isTransparent : true
}

export default class Home extends Component {
  constructor() {
    super();

    this.onOpenNavbarMenu = this.onOpenNavbarMenu.bind(this);
    this.onCloseNavbarMenu = this.onCloseNavbarMenu.bind(this);
    this.onOrganizationChange = this.onOrganizationChange.bind(this);
    this.onSignout = this.onSignout.bind(this);
  }

  onOrganizationChange() {
    console.log("Organization Changed");
  }

  onSignout() {
    console.log("User signed out");
  }

  onOpenNavbarMenu() {
    console.log("Navbar opened")
  }

  onCloseNavbarMenu() {
    console.log("Navbar closed");
  }

  renderRow() {
     return (
              <Row style={{width: '60%'}}>
                {anypointProducts.map((anypointProduct, index) => (
                  <div>
                  <Row align='center' key={anypointProduct.id} style={{marginTop: '10px', width:'100%'}}>
                    <Icon name={anypointProduct.icon} size='m' /><br />
                 </Row>
                 <Row style={{color: '#f9fafb',marginTop: '10px',textAlign: 'center', fontSize : '14px', width:'90%'}}>
                   <Link  to="/home">{anypointProduct.label}</Link>
                 </Row>
                 </div>
               ))}
             </Row>
           );
  }

  renderIcon(icon) {
    return (
      <Icon name={icon} size='l' fill="rgb(0, 162, 223)" className="verticalLine" />
    );
  }

  render() {
    return(
      <div>
        <NavBar
        activeProductName="Security Fabric"
        profile={profile}
        onOpen={this.onOpenNavbarMenu}
        onClose={this.onCloseNavbarMenu}
        activeOrganizationId={getActiveOrganizationId(profile)}
        signInLink={`anypointPlatformHome/login`}
        signOutLink={`anypointPlatformHome/logout`}
        studio={false}
        onOrganizationChange={this.onOrganizationChange}
        onSignout={this.onSignout}
      />
      <Hero style={{height: '365px'}} className="homePageBackground">
        <Row style={{marginTop: 0}} align='center' className="homePageText">
          <MediaObject title='Security Fabric' media={this.renderIcon("encrypted-small")}>
            <span className="homePageText">
              This is Security Fabric.
            </span> <br/><br/>
          <Button kind='primary' noFill
              label='Open'
              href="/home"
              id='primary-button' style={{padding: '7px 40px', marginTop: '20px'}}
            />
          </MediaObject>
        </Row>
        <Row align="center" style={{marginTop: '2%'}}>
            {this.renderRow(anypointProducts)}
        </Row>
      </Hero>
      <div style={{height: '182px',marginTop: 20}}>
        <Row align="center" style={{fontSize: '23px',color: '#6b6c6d', fontFamily: 'DIN Pro,sans-serif', textAlign: 'center'}}>
          <div>Support</div>
        </Row>
        <Row style={{marginTop: 20, marginLeft:'15%', width: '70%'}} align='space-around'>
            <div>
              <Row align="center">
              <Icon name="documentation" size='m'/>
              </Row>
              <Row align="center" style={{fontSize: '20px',color: '#6b6c6d', fontFamily: 'DIN Pro,sans-serif'}}>
                <div>Documentation</div>
              </Row>
            </div>
            <div>
              <Row align="center" >
              <Icon name="forum-small"size='m' />
              </Row>
              <Row align="center" style={{fontSize: '20px',color: '#6b6c6d', fontFamily: 'DIN Pro,sans-serif'}}>
                <div>Forums</div>
              </Row>
              </div>
              <div>
                <Row align="center">
                  <Icon name="support-portal-small" size='m'/>
                </Row>
                <Row align="center"  style={{fontSize: '20px',color: '#6b6c6d', fontFamily: 'DIN Pro,sans-serif'}}>
                  <div>Support Center</div>
                </Row>
              </div>
              <div>
                <Row align="center">
                <Icon name="download-center-small" size='m' />
                </Row>
                <Row align="center"  style={{fontSize: '20px',color: '#6b6c6d', fontFamily: 'DIN Pro,sans-serif'}}>
                  <div>Downloads</div>
                </Row>
              </div>
        </Row>
      </div>
    </div>
    );
  }
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
      "username": "aut_exchange5",
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
      "name": "Exchange Automation A",
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
