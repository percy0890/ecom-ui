import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    expect(
      shallow(<Button buttonType="" reverse invert customInvertClass="btn" />),
    ).toMatchSnapshot();
  });
});
