import React, { Component } from 'react';
import NavBar from '@mulesoft/anypoint-navbar';
import { getActiveOrganizationId } from '../../services/authenticationService';
import List from '@mulesoft/anypoint-components/lib/List';
import Link from 'react-router/lib/Link';

const product = {
  href: "/anypointPlatformHome",
  icon: "encrypted",
  name: "Security Fabric",
  isTransparent : true
}

export default class SecurityFabricHome extends Component {

  render() {
    console.log("This.props",this.props);
    var profile = this.props.profile;
    var titleStyle = {
        marginTop: "20px"
      }

      var sideMenuStyle = {
        marginTop: "10px",
        borderRight: "1px solid #CACBCC",

      }

    var childrenPath = this.props.children.props.route.path;
    console.log('child path ',this.props.children.props.route.path);
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
        <div  className="main-container">
            <div className="side-menu" style={sideMenuStyle}>
              <h6 id="side-menu-title">Security Fabric</h6>
                <List>
                  <li className={childrenPath == undefined || childrenPath == "securityNamespace" ? "active" : "" }><Link to="/home/securityNamespace">Security Namespace</Link></li>
                </List>
            </div>

            <div className="section" style={{paddingLeft: "20px", paddingTop: "10px", width: "100%"}}>
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}
