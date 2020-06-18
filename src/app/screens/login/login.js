import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  // config,
  // AppConstants,
  setAuthState,
} from './login.dependencies';
import './login.scss';

export class Login extends React.PureComponent {
  state = {
    openLoginForm: false,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   if (
    //     this.props.accessToken &&
    //     this.props.accessToken !== AppConstants.INVALID &&
    //     this.props.accessToken !== AppConstants.E403
    //   ) {
    //     this.props.history.push(config.PRIVATE_ROOT);
    //   }
    // });
    // window.addEventListener('message', this.receiveMessage, false);
  }

  redirectToOAuthLogin = () => {
    this.setState(
      {
        openLoginForm: true,
      },
      // () => {
      //   setTimeout(() => {
      //     const iframeEl = document.querySelector('iframe');
      //     iframeEl.contentWindow.postMessage(this.props.deviceToken, '*');
      //   }, 2000);
      // },
    );
    this.props.setAuthState();
  };

  // getTransformedSitesList(rawListData) {
  //   const sitesList = [];

  //   _forEach(rawListData, site => {
  //     sitesList.push({
  //       value: site.siteId,
  //       label: site.siteName,
  //     });
  //   });

  //   return sitesList;
  // }

  render() {
    return (
      <div className="bg-container">
        <div className="bg-overlay">
          {!this.state.openLoginForm && (
            <div className="pre-form-wrap">
              <h1 className="login-h1">Welcome</h1>
              <Button
                buttonType="secondary"
                label="Login to Ecom App"
                customClass="login-btn"
                onClick={this.redirectToOAuthLogin}
              />
            </div>
          )}
          {/* {this.state.openLoginForm && (
            <div className="post-form-wrap">
              <iframe
                title="Ecom App Login"
                src={`${config.SERVER_URL}oauth/authorize?appid=${
                  config.APP_ID
                }`}
              />
            </div>
          )} */}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  // accessToken: PropTypes.string,
  // deviceToken: PropTypes.string,
  // history: PropTypes.object,
  setAuthState: PropTypes.func,
};

const mapStateToProps = state => ({
  accessToken: state.global.userInfo.accessToken,
  deviceToken: state.global.userInfo.deviceToken,
});

const mapDispatchToProps = dispatch => ({
  setAuthState: payload => dispatch(setAuthState(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
