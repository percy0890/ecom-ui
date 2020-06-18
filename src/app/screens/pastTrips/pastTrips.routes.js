import { lazy } from 'react';
import AppConstants from 'app/app.constants.json';
import { IMG } from './pastTrips.dependencies';
const PastTrips = lazy(() => import('.'));

export default [
  {
    exact: true,
    path: AppConstants.ROUTES.PAST_TRIPS,
    screen: PastTrips,
    sidebar: true,
    name: ' Past',
    icon: IMG.PAST_TRIPS,
    iconActive: IMG.PAST_TRIPS_ACTIVE,
    isPrivate: true,
  },
];
