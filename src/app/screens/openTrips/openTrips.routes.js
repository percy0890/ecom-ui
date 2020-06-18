import { lazy } from 'react';
import AppConstants from 'app/app.constants.json';
import { IMG } from './openTrips.dependencies';

const OpenTrips = lazy(() => import('.'));

export default [
  {
    exact: true,
    path: AppConstants.ROUTES.OPEN_TRIPS,
    screen: OpenTrips,
    sidebar: true,
    name: 'Open',
    icon: IMG.OPEN_TRIPS,
    iconActive: IMG.OPEN_TRIPS_ACTIVE,
    isPrivate: true,
  },
];
