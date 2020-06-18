/**
 * Gets the repositories of the user from Github
 */

import { put, call, select, takeEvery } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import _get from 'lodash/get';
import api from '../utils/api/api.saga';
import { ActionTypes } from './app.types';
import AppConstants from '../app.constants.json';
import {
  setDeviceToken,
  resetAuthState,
  setCurrentSite,
  tripsDataLoaded,
  setRedirectToPlan,
  setClientList,
  submitTripSuccess,
} from './app.actions';

function* getDeviceTokenFromAPI({ payload }) {
  try {
    const result = yield call(api, {
      endpoint: 'GET_DEVICE_TOKEN',
      method:
        payload.deviceToken && payload.deviceToken !== AppConstants.INVALID
          ? 'PUT'
          : 'POST',
      data: {
        fcmToken: payload.fcmToken,
      },
    });
    yield put(setDeviceToken(result.body.data.deviceToken));
  } catch (error) {
    yield put(setDeviceToken(AppConstants.INVALID));
    // Display error toastr here
    console.log('Error during API call!', error);
  }
}

export function* getSiteData({ payload }) {
  try {
    const globalState = yield select(state => state.global);
    const result = yield call(api, {
      endpoint: 'UPDATE_USER_SITE',
      method: 'PUT',
      data: {
        siteId: payload,
      },
      pathParam: `/${globalState.userInfo.userIdKey}`,
    });
    yield put(setCurrentSite(result.body.data.currentSite));
  } catch (error) {
    console.error('Error during API call!', error);
  }
}

export function* logoutUser() {
  try {
    // yield call(api, {
    //   endpoint: 'LOGOUT_USER',
    //   method: 'PUT',
    // });
    yield put(resetAuthState());
    // setTimeout(() => window.location.reload(), 1000);
  } catch (error) {
    console.error('Error during API call!', error);
  }
}

export function* sendToEventTruck(action) {
  try {
    yield call(
      api,
      {
        endpoint: 'EVENTS_PUBLISH',
        method: 'POST',
        data: action.payload,
        loader: false,
      },
      action,
    );
    if (action.toastrSuccessMessage) {
      setTimeout(() => {
        toastr.success('Success', action.toastrSuccessMessage);
      }, AppConstants.API_WAIT_TIME);
    }
  } catch (error) {
    console.log('Error sending event call', error, action.payload);
  }
}

export function* getTripsData({ payload, apiOptions }) {
  try {
    const tripsDataSuccessPayload = { planTrips: null, actualTrips: null };
    if (apiOptions.planTrips) {
      const planTripsResult = yield call(api, {
        endpoint: 'PLAN_TRIP',
        method: 'GET',
        // data: payload,
        pathParam: `?${payload}`,
        loader: _get(apiOptions, 'loader', true),
      });
      tripsDataSuccessPayload.planTrips = planTripsResult.body.data;
    }
    if (apiOptions.actualTrips) {
      const actualQueryPayload = payload.replace('planDate', 'actualDate');
      const actualTripsResult = yield call(api, {
        endpoint: 'ACTUAL_TRIP',
        method: 'GET',
        // data: payload,
        pathParam: `?${actualQueryPayload}`,
        loader: _get(apiOptions, 'loader', true),
      });
      tripsDataSuccessPayload.actualTrips = actualTripsResult.body.data;
    }
    yield put(tripsDataLoaded(tripsDataSuccessPayload));
    if (apiOptions.planTrips && apiOptions.actualTrips) {
      yield put(setRedirectToPlan(true));
    }
  } catch (error) {
    console.error('Error during API call!', error);
  }
}

export function* getClientList() {
  try {
    const result = yield call(api, {
      endpoint: 'SITE_CLIENTS',
      method: 'GET',
    });
    yield put(setClientList(result.body.data));
  } catch (error) {
    console.error('Error during API call!', error);
  }
}

export function* submitPlanTrips({ payload }) {
  try {
    const result = yield call(api, {
      endpoint: 'SUBMIT_PLAN_TRIPS',
      method: 'POST',
      data: payload,
    });
    yield put(submitTripSuccess(result.body));
    toastr.success('Success', _get(result, 'body.message'));
  } catch (error) {
    console.error('Error during API call!', error);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  // By using takeLatest only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount

  yield takeEvery(ActionTypes.GET_DEVICE_TOKEN, getDeviceTokenFromAPI);
  yield takeEvery(ActionTypes.GET_SITE_DATA, getSiteData);
  yield takeEvery(ActionTypes.LOGOUT_USER, logoutUser);
  yield takeEvery(ActionTypes.SEND_TO_EVENT_TRUCK, sendToEventTruck);
  yield takeEvery(ActionTypes.GET_TRIPS_DATA, getTripsData);
  yield takeEvery(ActionTypes.SUBMIT_PLAN_TRIPS, submitPlanTrips);
  yield takeEvery(ActionTypes.GET_CLIENT_LIST, getClientList);
}
