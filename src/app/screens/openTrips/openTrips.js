import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _get from 'lodash/get';
import './openTrips.scss';

export class OpenTrips extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="open-trips">
        <div className="title-container">
          <h1 className="page-title">Open Trips</h1>
        </div>
        <div className="page-content trips">
          {!true ? (
            <React.Fragment>{String('data')}</React.Fragment>
          ) : (
            <div className="no-trips-msg">
              There are no open trips available. Please plan some trips for the
              shift selected.
            </div>
          )}
        </div>
      </div>
    );
  }
}

OpenTrips.propTypes = {};

const mapStateToProps = state => ({
  tripsData: _get(state.global, 'actualTrips', []),
  appFilters: _get(state.global, 'appFilters', {}),
});

const mapDispatchToProps = () => ({
  // getTripsData: (filters, apiOptions) =>
  //   dispatch(getTripsData(filters, apiOptions)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(OpenTrips);
