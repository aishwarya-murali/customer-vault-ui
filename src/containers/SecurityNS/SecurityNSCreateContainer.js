import  {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { SecurityNSCreate } from '../../components/Home/SecurityNS';
import { actions } from '../../domains';

const securityNamespaceState = (state)  => {
  return {
    profile: state.common.profile
  }
}

function securityNamespaceActions(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

const SecurityNSCreateContainer =  connect(securityNamespaceState, securityNamespaceActions)(SecurityNSCreate);

export default SecurityNSCreateContainer;
