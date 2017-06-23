import React, { Component } from 'react';
import Link from '@mulesoft/anypoint-components/lib/Link'

class SecurityNS extends Component {
    render() {
      return(
        <div>
          {this.props.children}
        </div>
      );
    }
}

export default SecurityNS;
