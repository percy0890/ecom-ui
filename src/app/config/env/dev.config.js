/**
 * Dev environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys.
 *
 */
export default {
  SERVER_URL: 'https://dev.api.ecom.co.in/',
  // GOOGLE_TAG_MANAGER_ID: 'GTM-PFCS7CQ',
  FIREBASE: {
    FIREBASE_ANALYTICS_ENABLED: true,
    WEB: {
      apiKey: 'AIzaSyDXLNCVQq-07zcxU6FYUYnMSkHePy-cpMw',
      authDomain: 'ecom-app-dev.firebaseapp.com',
      databaseURL: 'https://ecom-app-dev.firebaseio.com',
      projectId: 'ecom-app-dev',
      storageBucket: 'ecom-app-dev.appspot.com',
      messagingSenderId: '1080673119073',
    },
    FCM_VAPID_KEY:
      'BCCq9CHK2wpZcjfoHj4gWD2MhRiFoDornIsqGHauHhF7DePuCd47Q6pzCf7hqHpCV4xs5MGoF0p0GhM4weIzOtU',
    DEFAULT_CHANNEL_NAME_ANDROID: 'test-channel',
    DEFAULT_SUBSCRIBER_TOPIC: 'test-channel',
  },
  DEBUG_MODE: true,
};
