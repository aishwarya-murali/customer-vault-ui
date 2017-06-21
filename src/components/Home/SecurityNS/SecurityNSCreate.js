import React, { Component } from 'react';
import TextField from '@mulesoft/anypoint-components/lib/TextField';
import Form from '@mulesoft/anypoint-components/lib/Form';

export default class SecurityNSCreate extends Component{

constructor() {
  super()
  this.state = {
    name: null,
  }
}

  render() {
    var data = {...this.state};

    return (
      <div>
      <div className="page-title">
          <h2>Add/Edit Security Namespace</h2>
          <span style={{color: "grey"}}>Add CRL</span>
          <br />
          <br />
      </div>
      <div className="form-body">
      <Form
        align="horizontal"
        value={data}
        >
      <TextField
        name="name"
        label="Name"
        required
        />
      </Form>
      </div>
      </div>
    );
  }
}
