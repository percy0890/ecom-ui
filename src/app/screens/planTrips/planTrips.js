import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _get from 'lodash/get';
import {
  setRedirectToPlan,
  submitPlanTrips,
  setSelectedTrips,
  setTripsData,
} from './planTrips.dependencies';
import './planTrips.scss';

export class PlanTrips extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="planed-trips">
        <div className="title-container">
          <h1 className="page-title">Plan Trips</h1>
        </div>
      </div>
    );
  }
}

PlanTrips.propTypes = {};

const mapStateToProps = state => ({
  tripsData: _get(state.global, 'planTrips', []),
});

const mapDispatchToProps = dispatch => ({
  setRedirectToPlan: redirect => dispatch(setRedirectToPlan(redirect)),
  submitPlanTrips: payload => dispatch(submitPlanTrips(payload)),
  setSelectedTrips: trips => dispatch(setSelectedTrips(trips)),
  setTripsData: trips => dispatch(setTripsData(trips)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PlanTrips);
