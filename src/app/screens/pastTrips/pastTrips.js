import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import './pastTrips.scss';

export class PastTrips extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="past-trips">
        <div className="title-container">
          <h1 className="page-title">Past Trips</h1>
        </div>
        <div className="page-content trips">
          {false ? (
            String('data')
          ) : (
            <div className="no-trips-msg">
              There are no past trips available.
            </div>
          )}
        </div>
      </div>
    );
  }
}

PastTrips.propTypes = {};

const mapStateToProps = state => ({
  tripsData: _get(state.global, 'actualTrips', []),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PastTrips);
