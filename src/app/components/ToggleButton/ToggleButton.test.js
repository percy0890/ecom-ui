import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from './ToggleButton';

describe('<ToggleButton />', () => {
  it('renders correctly', () => {
    expect(shallow(<ToggleButton buttonType="" />)).toMatchSnapshot();
  });
});
