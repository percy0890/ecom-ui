import {
  getObjWithoutBlankProps,
  convertToQueryString,
} from 'app/utils/common';
import { ActionTypes } from './app.types';

export const getTripsData = (filters, apiOptions = {}) => ({
  type: ActionTypes.GET_TRIPS_DATA,
  payload: convertToQueryString({
    ...getObjWithoutBlankProps(filters),
  }),
  apiOptions,
});

export const getClientList = () => ({ type: ActionTypes.GET_CLIENT_LIST });

export const setClientList = data => ({
  type: ActionTypes.SET_CLIENT_LIST,
  payload: data,
});

export const setTripsData = data => ({
  type: ActionTypes.SET_TRIPS_DATA,
  payload: data,
});

export const tripsDataLoaded = data => ({
  type: ActionTypes.TRIPS_DATA_SUCCESS,
  payload: data,
});

export const setSelectedFilters = data => ({
  type: ActionTypes.SET_APP_FILTERS,
  payload: data,
});

export const setRedirectToPlan = data => ({
  type: ActionTypes.SET_REDIRECT_TO_PLAN,
  payload: data,
});

export const setSelectedTrips = data => ({
  type: ActionTypes.SET_SELECTED_TRIPS,
  payload: data,
});

export const setCreatedTrips = data => ({
  type: ActionTypes.SET_CREATED_TRIPS,
  payload: data,
});

export const submitPlanTrips = payload => ({
  type: ActionTypes.SUBMIT_PLAN_TRIPS,
  payload,
});

export const submitTripSuccess = payload => ({
  type: ActionTypes.SUBMIT_TRIP_SUCCESS,
  payload,
});

export const showLoadingSpinner = () => ({
  type: ActionTypes.SHOW_LOADER,
});

export const hideLoadingSpinner = () => ({
  type: ActionTypes.HIDE_LOADER,
});

export const setFirebaseDeviceToken = token => ({
  type: ActionTypes.SET_FIREBASE_DEVICE_TOKEN,
  payload: token,
});

export const subscribeTokenToTopic = (token, topic) => ({
  type: ActionTypes.SUBSCRIBE_TOKEN_TO_TOPIC,
  token,
  topic,
});

export const toggleSideDrawer = () => ({
  type: ActionTypes.TOGGLE_SIDE_DRAWER,
});

export const getDeviceToken = payload => ({
  type: ActionTypes.GET_DEVICE_TOKEN,
  payload,
});

export const setDeviceToken = token => ({
  type: ActionTypes.SET_DEVICE_TOKEN,
  payload: token,
});

export const setAuthState = payload => ({
  type: ActionTypes.SET_AUTH_STATE,
  payload,
});

export const resetAuthState = () => ({
  type: ActionTypes.RESET_AUTH_STATE,
});

export const getSiteData = siteId => ({
  type: ActionTypes.GET_SITE_DATA,
  payload: siteId,
});

export const logoutUser = () => ({
  type: ActionTypes.LOGOUT_USER,
});

export const setCurrentSite = siteId => ({
  type: ActionTypes.SET_CURRENT_SITE,
  payload: siteId,
});

export const sendToEventTruck = (
  eventName,
  eventDesc,
  eventPayload,
  toastrSuccessMessage,
) => ({
  type: ActionTypes.SEND_TO_EVENT_TRUCK,
  payload: {
    name: eventName,
    details: eventDesc,
    payload: eventPayload,
  },
  toastrSuccessMessage,
});

export const setCookieConsentStatus = payload => ({
  type: ActionTypes.SET_COOKIE_CONSENT_STATUS,
  payload,
});
