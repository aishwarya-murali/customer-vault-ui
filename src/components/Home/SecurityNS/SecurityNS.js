import React, { Component } from 'react';

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
