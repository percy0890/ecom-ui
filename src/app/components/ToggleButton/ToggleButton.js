import React from 'react';
import PropTypes from 'prop-types';
import './ToggleButton.scss';

export default function ToggleButton({ customClass = '', onChange, checked }) {
  return (
    <label className={`switch ${customClass}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round" />
    </label>
  );
}

ToggleButton.propTypes = {
  customClass: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};
