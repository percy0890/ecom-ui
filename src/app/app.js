/**
 * app.js
 *
 * This is the global Container/feature.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _get from 'lodash/get';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import AppConstants from 'app/app.constants.json';
import BrowserCheck from './components/BrowserCheck';
import appSaga from './state/app.saga';
import injectSaga from './utils/injectSaga';
import config from './config/index.config';
import Routes from './routesWrapper';
import Loader from './components/Loader';
import InitGTM from './components/InitGTM';
import CookiesConsentMessage from './components/CookiesConsentMessage';
import { setCookieConsentStatus } from './state/app.actions';

const { GOOGLE_TAG_MANAGER_ID, PUSH_NOTIFICATIONS_ENABLED } = config || null;

export class App extends React.PureComponent {
  onNotificationsReceived(payload) {
    const topicName = _get(payload, 'data.topicName');

    switch (topicName.toUpperCase()) {
      default:
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        {PUSH_NOTIFICATIONS_ENABLED && <Routes />}
        {!PUSH_NOTIFICATIONS_ENABLED && <Routes />}
        <BrowserCheck />
        {this.props.accessToken && (
          <CookiesConsentMessage
            isModalOpen={!this.props.displayCookiesConsent}
            closeModal={() => this.props.setCookieConsentStatus()}
          />
        )}
        {GOOGLE_TAG_MANAGER_ID && <InitGTM gtmId={GOOGLE_TAG_MANAGER_ID} />}
        {this.props.isLoading && <Loader />}
        <ReduxToastr
          timeOut={AppConstants.TOASTR_TIMEOUT_IN_SECS * 1000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  accessToken: PropTypes.string,
  displayCookiesConsent: PropTypes.bool.isRequired,
  setCookieConsentStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.global.isLoading,
  accessToken: state.global.userInfo.accessToken,
  displayCookiesConsent: state.global.displayCookiesConsent,
});

const mapDispatchToProps = dispatch => ({
  setCookieConsentStatus: payload => dispatch(setCookieConsentStatus(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withAppSaga = injectSaga({ key: 'global', saga: appSaga });

export default compose(
  withAppSaga,
  withConnect,
)(App);
