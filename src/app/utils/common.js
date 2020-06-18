import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';
import _isNumber from 'lodash/isNumber';
import _isNaN from 'lodash/isNaN';
import _pickBy from 'lodash/pickBy';
import _isBoolean from 'lodash/isBoolean';
import AppConstants from 'app/app.constants.json';
import { createMuiTheme } from '@material-ui/core';

export const convertToQueryString = params => {
  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  return queryString;
};

export const materialUITheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: '#0961ad',
      },
    },
    typography: {
      // ...
      // Tell Material-UI what's the font-size on the html element is.
      htmlFontSize: 10,
      fontFamily: 'Muli-SemiBold',
      // ...
    },
  });

export const throwException = err => {
  throw err;
};

export const getStringifiedObjValuesByKey = (objArray, key, delimiter = ', ') =>
  objArray.map(value => value[key]).join(delimiter);

export const getLocaleString = val => val.toLocaleString('en-IN');

export const naCheck = (...values) => {
  const NA = 'N/A';
  let output;

  if (!values && values[0] !== 0) {
    return NA;
  }

  _forEach(values, val => {
    if (output !== NA && !val && val !== 0) {
      output = NA;
    }
  });

  const isInteger = val => (Number.isInteger(val) ? val : val.toFixed(2));

  if (output !== NA) {
    output = _isNumber(values[0]) ? isInteger(values[0]) : values.join(' ');
  }

  return output;
};

export const unitAttacher = (value, unit, isPrePlaced) => {
  if (value === undefined || value === null || value === 'N/A') {
    return 'N/A';
  }
  if (isPrePlaced) {
    return `${unit} ${value}`;
  }
  return `${value} ${unit}`;
};

export const isBlank = value =>
  (_isEmpty(value) && !_isNumber(value) && !_isBoolean(value)) || _isNaN(value);

export const getObjWithoutBlankProps = obj =>
  _pickBy(obj, value => !isBlank(value));

export const getFullName = (firstName, lastName) => {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }

  if (firstName) {
    return firstName;
  }

  if (lastName) {
    return lastName;
  }

  return AppConstants.NOT_AVAILABLE;
};
