// import AppConstants from 'app/app.constants.json';
// import _find from 'lodash/find';
// import { minutesToHHMM } from './timeConverter';

// export const getDuration = (status, actualDuration, bookedDuration) => {
//   if (
//     status === AppConstants.TRIP_STATUS.COMPLETED ||
//     status === AppConstants.TRIP_STATUS.TERMINATED
//   ) {
//     return {
//       label: 'Actual Duration',
//       duration: minutesToHHMM(actualDuration),
//     };
//   }
//   return { label: 'Booked Duration', duration: minutesToHHMM(bookedDuration) };
// };

// export const floatTwoDecimalLimit = number => parseInt(number * 100, 10) / 100;

// export const getDistance = (status, actualKm, bookedKm) => {
//   if (
//     status === AppConstants.TRIP_STATUS.COMPLETED ||
//     status === AppConstants.TRIP_STATUS.TERMINATED
//   ) {
//     return {
//       label: 'Actual Distance',
//       distance: floatTwoDecimalLimit(actualKm),
//     };
//   }
//   return {
//     label: 'Booked Distance',
//     distance: floatTwoDecimalLimit(bookedKm),
//   };
// };

// export const getFare = (status, actualAmount, bookedAmount) => {
//   if (
//     status === AppConstants.TRIP_STATUS.COMPLETED ||
//     status === AppConstants.TRIP_STATUS.TERMINATED
//   ) {
//     return { label: 'Actual Amount', amount: actualAmount };
//   }
//   return { label: 'Booked Amount', amount: bookedAmount };
// };

// export const getAssignmentDetails = tripData => {
//   if (
//     tripData.tripStatus.toLowerCase() === AppConstants.TRIP_STATUS.CANCELLED
//   ) {
//     return _find(
//       tripData.tripEvents,
//       event => event.eventType === AppConstants.EVENTS.TRIP_CANCELLED,
//     );
//   }
//   let terminatedData = _find(
//     tripData.tripEvents,
//     event => event.eventType === AppConstants.EVENTS.TRIP_TERMINATE,
//   );
//   if (!terminatedData) {
//     terminatedData = _find(
//       tripData.tripEvents,
//       event => event.eventType === AppConstants.EVENTS.TRIP_RESCUE,
//     );
//   }
//   return terminatedData;
// };

// export const getTripEventDetails = (tripData, action) =>
//   _find(tripData.tripEvents, event => event.eventType === action);
