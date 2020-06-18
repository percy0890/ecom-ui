import { lazy } from 'react';
import IMG from 'app/utils/images';
import AppConstants from 'app/app.constants.json';

const FilterTrips = lazy(() => import('./filterTrips'));

export default [
  {
    exact: true,
    path: AppConstants.ROUTES.FILTER_TRIPS,
    screen: FilterTrips,
    sidebar: true,
    name: 'Filter',
    icon: IMG.FILTER_TRIPS,
    iconActive: IMG.FILTER_TRIPS_ACTIVE,
    isPrivate: true,
  },
];
