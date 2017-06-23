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
  return {
    dispatch,
    actions: bindActionCreators({
    addSecurityNS: actions.snActions.addSecurityNS,
    fetchSecurityNS: actions.snActions.fetchSecurityNS,
    }, dispatch)
  }
}

const SecurityNSCreateContainer =  connect(securityNamespaceState, securityNamespaceActions)(SecurityNSCreate);

export default SecurityNSCreateContainer;
