import { put, call, retry, select } from 'redux-saga/effects';
import _result from 'lodash/result';
import _noop from 'lodash/noop';
import _get from 'lodash/get';

import config from 'app/config/index.config';
import endpoints from 'app/config/autoGenApiEndpoints.json';
import request from 'app/utils/createRequest';
import { showLoadingSpinner, hideLoadingSpinner } from 'app/state/app.actions';
import { apiErrorHandler } from './apiErrorHandler.saga';

const defaultOptions = {
  baseUrl: config.SERVER_URL,
  endpoint: null,
  query: {},
  method: 'GET',
  data: {},
  pathParam: '', // This can be used to give custom path params like /test/12345 where 12345 is dynamic so here -> pathParam: /12345
  path: null, // this is set by api saga based on the endpoint you specify.. this will be overriden if u specify manually
  intercept: true, // by default api saga will intercept all requests for generic errors
  loader: true, // by default show loader for all requests.
  timeout: parseInt(config.API_TIMEOUT, 10),
  retryCount: 0,
  headers: {
    // Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-ecom-app-id': config.APP_ID,
    'x-ecom-user-role': 'admin',
  },
};

export function addDefaultApiConfig(apiOptions) {
  const pathParam = apiOptions.pathParam || defaultOptions.pathParam;
  const headers = { ...defaultOptions.headers, ...apiOptions.headers };
  return {
    ...defaultOptions,
    ...apiOptions,
    headers,
    path: _result(endpoints, apiOptions.endpoint, '') + pathParam,
  };
}

export default function* apiSaga(apiOptions, customError, action) {
  const globalState = yield select(state => state.global);
  const apiConfig = yield call(addDefaultApiConfig, apiOptions);
  if (_get(globalState, 'userInfo.sessionToken', null)) {
    apiConfig.headers['x-ecom-session-token'] =
      globalState.userInfo.sessionToken;
  }
  if (_get(globalState, 'userInfo.accessToken', null)) {
    apiConfig.headers['x-ecom-auth-token'] = globalState.userInfo.accessToken;
  }
  if (_get(globalState, 'userInfo.deviceToken', null)) {
    apiConfig.headers['x-ecom-device-token'] = globalState.userInfo.deviceToken;
  }
  if (_get(globalState, 'userInfo.userIdKey', null)) {
    apiConfig.headers['x-ecom-user-id'] = globalState.userInfo.userIdKey;
  }
  if (_get(globalState, 'userInfo.siteId', null)) {
    apiConfig.headers['x-ecom-site-id'] = globalState.appFilters.siteId;
  }

  let showLoader = _noop;
  let hideLoader = _noop;
  let response = null;
  if (apiConfig.loader) {
    showLoader = function* generator() {
      yield put(showLoadingSpinner());
    };
    hideLoader = function* generator() {
      yield put(hideLoadingSpinner());
    };
  }

  try {
    yield showLoader();
    // response = yield call(request, apiConfig);
    response = yield retry(config.API_MAX_RETRIES, 0, request, apiConfig);
    if (action && action.offline) {
      yield put({ type: 'offline/ACTION_EXEC_SUCCESS', action });
    }
    yield hideLoader();
  } catch (failedResponse) {
    console.error('API call error:', failedResponse);
    yield hideLoader();
    return yield call(
      apiErrorHandler,
      failedResponse,
      apiConfig,
      customError,
      action,
    );
  }
  return response;
}
