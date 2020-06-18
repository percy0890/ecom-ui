import React from 'react';
import PropTypes from 'prop-types';
import IMG from 'app/utils/images';
import AppConstants from 'app/app.constants.json';
import './Card.scss';
import { naCheck } from 'app/utils/common';

class Card extends React.PureComponent {
  clickCard = () => {
    this.props.onCardExpand(this.props.id);
  };

  checkValidationOnSelection = () =>
    this.props.selectedCard &&
    this.props.selectedCard.includes(this.props.id) &&
    this.props.tapType === AppConstants.CLICK_TYPE.SELECT;

  getSelectedClass = () => {
    if (
      this.checkValidationOnSelection() &&
      this.props.shiftType === AppConstants.SHIFT_TYPE.LOGIN
    )
      return 'select-card-pickup';
    if (
      this.checkValidationOnSelection() &&
      this.props.shiftType === AppConstants.SHIFT_TYPE.LOGOUT
    )
      return 'select-card-drop';
    return '';
  };

  getShiftClass = () => {
    if (
      this.checkValidationOnSelection() &&
      this.props.shiftType === AppConstants.SHIFT_TYPE.LOGIN
    )
      return 'shifts-pickup';
    if (
      this.checkValidationOnSelection() &&
      this.props.shiftType === AppConstants.SHIFT_TYPE.LOGOUT
    )
      return 'shifts-drop';
    return '';
  };

  render() {
    return (
      <React.Fragment>
        {this.props.selectedCard &&
        this.props.selectedCard.includes(this.props.id) &&
        this.props.tapType === AppConstants.CLICK_TYPE.EXPAND ? (
          <div
            className="card-container-open"
            role="presentation"
            onClick={this.clickCard}
          >
            <div className={`upper-container ${this.props.customClass}`}>
              <div className="shift-type-block">
                {this.props.shiftIcon && (
                  <img
                    src={this.props.shiftIcon}
                    alt="dots"
                    className="image"
                  />
                )}
                <div className="shift-type">
                  {naCheck(
                    this.props.shiftType && this.props.shiftType.toUpperCase(),
                  )}
                </div>
              </div>
              <div className="shift-id-container">
                <div className="shift-id">
                  <span>SHIFT ID: </span>
                  <span className="text">{this.props.shiftId}</span>
                </div>
                {this.props.assignmentIcon && (
                  <img
                    src={this.props.assignmentIcon}
                    alt="dots"
                    className="image"
                  />
                )}
              </div>
            </div>
            <div className="bottom-container">
              <div className="booking-id">
                <span>BOOKING ID: </span>
                <span className="text">{naCheck(this.props.bookingId)}</span>
              </div>
              <div className="location-container">
                <div className="row-wrap">
                  <div className="date-time">
                    <div>{naCheck(this.props.startDate)}</div>
                    <div className="time">{naCheck(this.props.startTime)}</div>
                  </div>
                  <div className="address-box">
                    <div className="indicator green" />
                    <div className="text">
                      <span>{naCheck(this.props.startLocation)}</span>
                    </div>
                  </div>
                </div>
                <div className="row-wrap">
                  <div className="date-time">
                    <div>{naCheck(this.props.endDate)}</div>
                    <div className="time">{naCheck(this.props.endTime)}</div>
                  </div>
                  <div className="address-box">
                    <div className="indicator red" />
                    <div className="text">
                      <span>{naCheck(this.props.endLocation)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-container">
                <div className="info-row">
                  <div className="info-field">
                    <div className="label">Trip Status</div>
                    <div className="value">
                      {naCheck(this.props.tripStatus)}
                    </div>
                  </div>
                  <div className="info-field">
                    <div className="label">Vehicle No.</div>
                    <div className="value">
                      {naCheck(this.props.vehicleNumber)}
                    </div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-field">
                    <div className="label">Driver Name</div>
                    <div className="value">
                      {naCheck(this.props.driverName)}
                    </div>
                  </div>
                  <div className="info-field">
                    <div className="label">Contact No.</div>
                    <div className="value">
                      {naCheck(this.props.contactNumber)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="card-container cursor-pointer"
            role="presentation"
            onClick={this.clickCard}
          >
            {this.props.selectedCard &&
            this.props.selectedCard.includes(this.props.id) &&
            this.props.tapType === AppConstants.CLICK_TYPE.SELECT ? (
              <div className={`left-container ${this.props.customClass}`}>
                <div className="title-block center-align">
                  <img
                    src={IMG.FILTER_RIDE}
                    alt="dots"
                    className="checked-image"
                  />
                </div>
              </div>
            ) : (
              <div className={`left-container ${this.props.customClass}`}>
                <div className="title-block">
                  {this.props.shiftIcon && (
                    <img
                      src={this.props.shiftIcon}
                      alt="dots"
                      className="image"
                    />
                  )}
                  <div className="title">
                    {naCheck(
                      this.props.shiftType &&
                        this.props.shiftType.toUpperCase(),
                    )}
                  </div>
                </div>
                <div className="description-block">
                  <div>{naCheck(this.props.startDate)}</div>
                  <div className="time">
                    {naCheck(this.props.startTime)}-
                    {naCheck(this.props.endTime)}
                  </div>
                </div>
              </div>
            )}
            <div className={`right-container ${this.getSelectedClass()} `}>
              <div className={`upper-right-container ${this.getShiftClass()} `}>
                <div className="shift-id-block">
                  <span>SHIFT ID: </span>
                  <span className="shift-id">
                    {naCheck(this.props.shiftId)}
                  </span>
                </div>
                {this.props.assignmentIcon && (
                  <img
                    src={this.props.assignmentIcon}
                    alt="dots"
                    className="shift-icon"
                  />
                )}
              </div>
              <div className="address-container">
                <div className="address-indicator-block">
                  {this.props.icon && <img src={this.props.icon} alt="dots" />}
                </div>
                <div className="address">
                  <span>
                    {naCheck(
                      this.props.shiftType === AppConstants.SHIFT_TYPE.LOGIN
                        ? this.props.startLocation
                        : this.props.endLocation,
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Card.propTypes = {
  id: PropTypes.any,
  customClass: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  shiftId: PropTypes.string,
  shiftType: PropTypes.string,
  icon: PropTypes.any,
  assignmentIcon: PropTypes.any,
  shiftIcon: PropTypes.any,
  onCardExpand: PropTypes.func,
  selectedCard: PropTypes.any,
  bookingId: PropTypes.string,
  contactNumber: PropTypes.string,
  driverName: PropTypes.string,
  vehicleNumber: PropTypes.string,
  tripStatus: PropTypes.string,
  startLocation: PropTypes.string,
  endLocation: PropTypes.string,
  tapType: PropTypes.string,
};

export default Card;
