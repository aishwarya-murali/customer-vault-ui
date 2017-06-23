import  {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SecurityFabricHome from '../../components/Home';
import { actions } from '../../domains';

const homeState = (state)  => {
  return {
    profile: state.common.profile
  }
}

function homeActions(dispatch) {
  return bindActionCreators({
    track: (route) => dispatch(actions.trackPage(route)),
    onCloseAlert: () => dispatch(actions.closeAlert()),
    onOrganizationChange: (organization) => dispatch(actions.setActiveOrganization(organization)),
    onSignout: () => dispatch(actions.analyticsLogout())
  }, dispatch);
}

const SecurityFabricHomeContainer =  connect(homeState, homeActions)(SecurityFabricHome);

export default SecurityFabricHomeContainer;
