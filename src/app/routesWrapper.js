import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  HashRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _forEach from 'lodash/forEach';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { materialUITheme } from 'app/utils/common';
import ErrorBoundary from './components/ErrorBoundary';

import Loader from './components/Loader';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import { getHOCWrappedComponent } from './utils/component';
import config from './config/index.config';
import { routeMap } from './app.routes';

const getRouteComponents = routes => {
  const routeComponents = [];
  _forEach(routes, route => {
    routeComponents.push(
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={getHOCWrappedComponent(route.screen, route)}
      />,
    );
  });
  return routeComponents;
};

export class Routes extends React.PureComponent {
  render() {
    const { accessToken, siteId } = this.props;
    this.theme = materialUITheme();

    const lazyRoutesMap = (
      <MuiThemeProvider theme={this.theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Suspense fallback={<Loader />}>
            <Switch>
              {getRouteComponents(routeMap)}
              <Redirect to={config.PUBLIC_ROOT} /> {/* Redirect if 404 */}
              {/* <Route component={NoMatch} /> IF 404 to be displayed separately */}
            </Switch>
          </Suspense>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );

    return (
      <Router>
        <ErrorBoundary>
          {/* {accessToken && ( */}
          {accessToken && (
            <div className="layout-container">
              <SideDrawer menuItems={routeMap} />
              <main className="page-container">
                <PageHeader siteId={siteId} />
                {lazyRoutesMap}
              </main>
              <Footer menuItems={routeMap} />
            </div>
          )}
          {!accessToken && lazyRoutesMap}
        </ErrorBoundary>
      </Router>
    );
  }
}

Routes.propTypes = {
  accessToken: PropTypes.string,
  siteId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const mapStateToProps = state => ({
  accessToken: state.global.userInfo.accessToken,
  siteId: state.global.userInfo.siteId,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
)(Routes);
