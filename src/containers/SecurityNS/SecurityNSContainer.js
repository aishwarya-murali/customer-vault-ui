import  {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { SecurityNSList } from '../../components/Home/SecurityNS';
import { actions } from '../../domains';

const securityNamespaceState = (state)  => {
  return {
    profile: state.common.profile,
    securityNSVals : state.securityNSVals,
  }
}

function securityNamespaceActions(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({
      fetchSecurityNS: actions.snActions.fetchSecurityNS,
  }, dispatch)
 }
}

const SecurityNSContainer =  connect(securityNamespaceState, securityNamespaceActions)(SecurityNSList);

export default SecurityNSContainer;
