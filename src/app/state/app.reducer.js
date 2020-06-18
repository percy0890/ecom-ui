import storage from 'redux-persist/lib/storage'; // default: localStorage if web, AsyncStorage if react-native
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { ActionTypes } from './app.types';

// The initial state of the App
const initialState = {
  selectedTrips: [],
  createdTrips: [],
  planTrips: [],
  actualTrips: [],
  redirectToPlan: false,
  isLoading: false,
  isSideDrawerOpen: false,
  displayCookiesConsent: false,
  userInfo: {
    userId: null,
    accessToken: null,
    refreshToken: null,
    sessionToken: null,
    deviceToken: null,
    siteId: null,
    sitesList: [],
    userName: null,
    userIdKey: null,
  },
  appFilters: {
    siteId: null,
    tripType: null,
    shiftId: null,
    planDate: new Date(),
    clientId: null,
  },
  clientList: [],
  submitTripSuccess: {},
};

const userFromServer = {
  userId: 1,
  accessToken: 'accessToken',
  // refreshToken: null,
  // sessionToken: null,
  deviceToken: 'deviceToken',
  siteId: null,
  sitesList: [],
  userName: 'User',
  userIdKey: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TRIPS_DATA_SUCCESS: {
      return {
        ...state,
        planTrips: action.payload.planTrips || state.planTrips,
        actualTrips: action.payload.actualTrips || state.actualTrips,
      };
    }
    case ActionTypes.SET_TRIPS_DATA: {
      return {
        ...state,
        planTrips: action.payload,
      };
    }
    case ActionTypes.SUBMIT_TRIP_SUCCESS:
      return { ...state, submitTripSuccess: action.payload };
    case ActionTypes.SET_CLIENT_LIST:
      return { ...state, clientList: action.payload };
    case ActionTypes.SET_REDIRECT_TO_PLAN:
      return { ...state, redirectToPlan: action.payload };
    case ActionTypes.SET_SELECTED_TRIPS:
      return { ...state, selectedTrips: action.payload };
    case ActionTypes.SHOW_LOADER:
      return { ...state, isLoading: true };
    case ActionTypes.SET_APP_FILTERS:
      return { ...state, appFilters: action.payload };
    case ActionTypes.HIDE_LOADER:
      return { ...state, isLoading: false };
    case ActionTypes.SET_DEVICE_TOKEN:
      return {
        ...state,
        userInfo: { ...state.userInfo, deviceToken: action.payload },
      };
    case ActionTypes.TOGGLE_SIDE_DRAWER:
      return { ...state, isSideDrawerOpen: !state.isSideDrawerOpen };
    case ActionTypes.SET_AUTH_STATE:
      return { ...state, userInfo: userFromServer };
    case ActionTypes.RESET_AUTH_STATE:
      return {
        ...state,
        userInfo: {
          userId: null,
          accessToken: null,
          refreshToken: null,
          sessionToken: null,
          deviceToken: null,
          userName: '',
          siteId: null,
          sitesList: [],
          userIdKey: null,
        },
      };

    case ActionTypes.SET_CURRENT_SITE:
      return {
        ...state,
        userInfo: { ...state.userInfo, siteId: action.payload },
      };
    case ActionTypes.SET_COOKIE_CONSENT_STATUS:
      return { ...state, displayCookiesConsent: true };

    default:
      return state;
  }
}

export default persistReducer(
  {
    key: 'global',
    storage,
    blacklist: ['isLoading', 'isSideDrawerOpen'],
    stateReconciler: autoMergeLevel2,
  },
  reducer,
);
