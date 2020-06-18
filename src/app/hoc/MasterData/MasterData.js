import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _find from 'lodash/find';

export const withMasterData = () => WrappedComponent => {
  class HOC extends PureComponent {
    getDriverMasterForId = id =>
      _find(this.props.masterData.drivers, { driverId: Number(id) });

    getVehicleMasterForId = id =>
      _find(this.props.masterData.vehicles, { vehicleId: Number(id) });

    getVendorMasterForId = id =>
      _find(this.props.masterData.vendors, { vendorId: Number(id) });

    getContractMasterForId = id =>
      _find(this.props.masterData.contracts, { id: Number(id) });

    render() {
      return (
        <WrappedComponent
          {...this.props}
          getDriverMasterForId={this.getDriverMasterForId}
          getVehicleMasterForId={this.getVehicleMasterForId}
          getVendorMasterForId={this.getVendorMasterForId}
          getContractMasterForId={this.getContractMasterForId}
        />
      );
    }
  }

  HOC.propTypes = {
    masterData: PropTypes.object,
  };

  const mapStateToProps = state => ({
    masterData: state.global.masterData,
  });

  const withConnect = connect(
    mapStateToProps,
    null,
  );

  return withConnect(HOC);
};
