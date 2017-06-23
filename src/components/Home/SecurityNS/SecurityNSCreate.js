import React, { Component } from 'react';
import TextField from '@mulesoft/anypoint-components/lib/TextField';
import Form from '@mulesoft/anypoint-components/lib/Form';
import Button  from '@mulesoft/anypoint-components/lib/Button';
import { convertToJson } from './mapper'

export default class SecurityNSCreate extends Component{

constructor(props) {
  super(props);
  this.state = {
    type: "SN",
    name: null,
  }

   this.handleFormChange = this.handleFormChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}

  componentsDidMount() {
    this.props.actions.fetchSecurityNS(this.props.profile);
  }
  handleSubmit(model){
    var securityNSVal = {... this.state};
    securityNSVal = convertToJson(securityNSVal);
    console.log(securityNSVal);
    this.props.actions.addSecurityNS(this.props.profile, securityNSVal);
  }
  handleFormChange(e,key){
   console.log(e);
     var targetKey = e.event.target;
     var targetValue = e.value[targetKey]
     this.setState({ [targetKey] : targetValue })
   }

  render() {
    var data = { ... this.state};


    return (
      <div>
      <div className="page-title">
          <h2>Add Security Namespace</h2>
          <span style={{color: "grey"}}>Namespace</span>
          <br />
          <br />
      </div>
      <div className="form-body">
      <Form
        align="horizontal"
        onSubmit={this.handleSubmit}
       onChange={this.handleFormChange}
        value={data}
        >
      <TextField
        name="name"
        label="Name"
        style={{width: "250px"}}

        />
        <div style={{ margin: "50px", maxWidth: "500px"}}>
          <Button type="submit" style={{ float: "right", width: "120px"}}>
              Save
          </Button>
        </div>
      </Form>
      </div>
      </div>
    );
  }
}
