/** All routes of the app are imported here, routes are defined in their respective folders */

/** Primary Routes */
import LoginRoutes from 'app/screens/login/login.routes';
import PlanTripsRoutes from 'app/screens/planTrips/planTrips.routes';
// import CreateTripsRoutes from 'app/screens/createTrip/createTrip.routes';
import OpenTripsRoutes from 'app/screens/openTrips/openTrips.routes';
import PastTripsRoutes from 'app/screens/pastTrips/pastTrips.routes';
import FilterTrips from 'app/screens/filterTrips/filterTrips.routes';

export const routeMap = [
  ...LoginRoutes,
  ...FilterTrips,
  ...PlanTripsRoutes,
  // ...CreateTripsRoutes,
  ...OpenTripsRoutes,
  ...PastTripsRoutes,
];
