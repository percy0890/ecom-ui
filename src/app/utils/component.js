import { compose } from 'redux';
import withAuthCheck from 'app/hoc/AuthRouteCheck';
import withSidebarCheck from 'app/hoc/SidebarStateCheck';
import withMasterData from 'app/hoc/MasterData';

export const getHOCWrappedComponent = (component, routeObj) =>
  compose(
    withAuthCheck(routeObj.isPrivate),
    withSidebarCheck(),
    withMasterData(),
  )(component, routeObj.name);
