import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button({
  buttonType,
  customClass,
  customInvertClass,
  icon,
  label,
  reverse,
  onClick,
  invert,
  isDisabled,
}) {
  const reverseButtonClass = reverse ? 'btn-reverse' : '';
  const buttonTypeClass = buttonType
    ? `btn-${buttonType.trim().toLowerCase()}`
    : '';

  const labelLessClass = label ? '' : 'label-less';
  const invertClass = invert ? 'invert' : '';
  return (
    <button
      type="button"
      className={`btn ${buttonTypeClass} ${customClass} ${invertClass} ${invert &&
        customInvertClass} ${labelLessClass}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className={` btn-content-container ${reverseButtonClass}`}>
        {label && <span className="label">{label}</span>}
        {icon && (
          <div className="icon-container">
            <img src={icon} alt="button icon" className="icon" />
          </div>
        )}
      </div>
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  customClass: PropTypes.string,
  customInvertClass: PropTypes.string,
  reverse: PropTypes.bool,
  invert: PropTypes.bool,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
