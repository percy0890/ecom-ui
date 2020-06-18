/**
 * Prod environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys.
 *
 */
export default {
  SERVER_URL: 'https://api.ecom.co.in/',
  // GOOGLE_TAG_MANAGER_ID: 'GTM-PFCS7CQ',
  FIREBASE: {
    FIREBASE_ANALYTICS_ENABLED: true,
    WEB: {
      apiKey: 'AIzaSyDdaz8sVQJvQeCt2DgYhrJJjdnkSp0xvRQ',
      authDomain: 'ecom-app.firebaseapp.com',
      databaseURL: 'https://ecom-app.firebaseio.com',
      projectId: 'ecom-app',
      storageBucket: 'ecom-app.appspot.com',
      messagingSenderId: '342487203541',
    },
    FCM_VAPID_KEY:
      'BKlsZ_A1G8c01YLUbyfLGLPGQ5jb9_cUba1NhuFK_gpSy8ZLIFgueC9mxpJifvg9ogQLraA5I31PQxZ6VPQvmWc',
    DEFAULT_CHANNEL_NAME_ANDROID: 'test-channel',
    DEFAULT_SUBSCRIBER_TOPIC: 'test-channel',
  },
  DEBUG_MODE: false,
};
