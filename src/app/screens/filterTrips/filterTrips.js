import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './filterTrips.scss';

export class FilterTrips extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="select-trips-container">
        <div className="title-container">
          <h1 className="page-title">Fliter Trips</h1>
        </div>
      </div>
    );
  }
}

FilterTrips.propTypes = {
  // appFilters: PropTypes.object,
};

const mapStateToProps = () => ({
  // sitesList: state.global.userInfo.sitesList,
  // clientList: _get(state.global, 'clientList', []),
  // redirectToPlan: _get(state.global, 'redirectToPlan', false),
});
const mapDispatchToProps = () => ({
  // getClientList: () => dispatch(getClientList()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FilterTrips);
