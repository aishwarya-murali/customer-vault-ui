import * as SecurityNSService from '../../services/securityNSService';
import * as actions      from './actionTypes';
import { push } from 'react-router-redux';

export function addSecurityNS(profile, securityNSVal){
  return function(dispatch) {
    return SecurityNSService.addSecurityNS(profile, securityNSVal)
    .then((response) => {
        dispatch(push('/home/security-namespace'));
      })
      .catch((err) => {
        dispatch({type: actions.ADD_SN_REJECTED , payload: err});
        throw err;
      });
  }
}

export function fetchSecurityNS(profile){
  return function(dispatch) {
    return SecurityNSService.getSecurityNSList(profile)
     .then((securityNSVals) => {
       dispatch({type: actions.FETCH_SN_FULFILLED, payload: securityNSVals})
     });
  }
}
