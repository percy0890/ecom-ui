import { lazy } from 'react';
import IMG from 'app/utils/images';
import AppConstants from 'app/app.constants.json';
const PlanTrips = lazy(() => import('./planTrips'));

export default [
  {
    exact: true,
    path: AppConstants.ROUTES.PLAN_TRIPS,
    screen: PlanTrips,
    sidebar: true,
    name: 'Plan',
    icon: IMG.PLAN_TRIPS,
    iconActive: IMG.PLAN_TRIPS_ACTIVE,
    isPrivate: true,
  },
];
