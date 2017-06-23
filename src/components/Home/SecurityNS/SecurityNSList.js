import React, { Component } from 'react';
import Link from '@mulesoft/anypoint-components/lib/Link'
import Button from '@mulesoft/anypoint-components/lib/Button'
import FixedTable from '@mulesoft/anypoint-components/lib/FixedTable'
import { push } from 'react-router-redux';

export default class SecurityNSList extends Component {

  componentsDidMount() {
    this.props.actions.fetchSecurityNS(this.props.profile);
  }
  constructor(props) {
    super(props);
    this.columns = [
      {
        name: 'Name',
        key: 'name',
        renderer: row => <Link to={getRowLink(row)}>{row.policyData.name}</Link>,
      },
    ]

    this.routeToSNCreatePage = this.routeToSNCreatePage.bind(this);
  }

  routeToSNCreatePage() {
      var createURL = "/home/security-namespace/create";
      this.props.dispatch(push(createURL));
  }

  render() {
    //this.props.actions.fetchSecurityNS(this.props.profile);
    console.log(this.props.securityNSVals);
    const { securityNSVals } = this.props.securityNSVals;
    return(
      <div>
        <div className="page-title">
            <h2>Security Namespaces</h2>
            <br />

            <Button kind="primary" onClick={this.routeToSNCreatePage} id="primary-button">
              <span>Add Security Namespace</span>
            </Button>
        </div>
        <br />
        <br />
        <div style={{height: "70vh"}}>
         <FixedTable
           columns={this.columns}

         />
       </div>
        </div>
      );
    }
}

const getRowLink = row => `/home/security-policies/edit/${row.id}`;
