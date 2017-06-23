import * as actions from './actionTypes';

const initialState = {
  securityNSVals : [],
  securityNSVal: {},
  error: null,
}

export default function reducers(state = initialState, action){
  switch (action.type) {
    case actions.ADD_SN_REJECTED:
      return {
        ...state,
        error: action.payload
      }
      case actions.FETCH_SN_FULFILLED:
          return {
            ...state,
            securityNSVals: action.payload
        }
      default:
      break;
  }

  return state;
}
