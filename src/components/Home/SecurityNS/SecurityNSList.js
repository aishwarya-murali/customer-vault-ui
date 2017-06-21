import React, { Component } from 'react';
import Link from '@mulesoft/anypoint-components/lib/Link'
import Button from '@mulesoft/anypoint-components/lib/Button'
import FixedTable from '@mulesoft/anypoint-components/lib/FixedTable'
import { push } from 'react-router-redux';

export default class SecurityNSList extends Component {

  constructor(props) {
    super(props);
    this.columns = [
      {
        name: 'Name',
        key: 'name',
        renderer: null,
      },
    ]

    this.routeToSNCreatePage = this.routeToSNCreatePage.bind(this);
  }

  routeToSNCreatePage() {
      var createURL = "/home/securityNamespace/create";
      this.props.dispatch(push(createURL));
  }

  render() {
    return(
      <div>
        <div className="page-title">
            <h2>Security Namespaces</h2>
            <span style={{color: "grey"}}>Add Security Namespaces</span>
            <br />
            <br />
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
