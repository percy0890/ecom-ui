/**
 * QA environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys.
 *
 */
export default {
  SERVER_URL: 'https://qa.api.ecom.co.in/',
  FIREBASE: {
    FIREBASE_ANALYTICS_ENABLED: true,
    WEB: {
      apiKey: 'AIzaSyA36ah27xJwUKPV9lUN02lrykMLJ7qYcr0',
      authDomain: 'ecom-app-qa.firebaseapp.com',
      databaseURL: 'https://ecom-app-qa.firebaseio.com',
      projectId: 'ecom-app-qa',
      storageBucket: 'ecom-app-qa.appspot.com',
      messagingSenderId: '1002090307851',
    },
    FCM_VAPID_KEY:
      'BMC7x1nA-jebru0mA6NPnI7ecCidjLp6TXCsrqwjuRyTN_fYMMAr9wI1AgRq5KuYPzxSNfYicJXdYHD_dFzTGVw',
    DEFAULT_CHANNEL_NAME_ANDROID: 'test-channel',
    DEFAULT_SUBSCRIBER_TOPIC: 'test-channel',
  },
  DEBUG_MODE: true,
};
