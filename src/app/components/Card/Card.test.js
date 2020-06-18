import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderer.create(<Card>App</Card>);
  });

  it('renders correctly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Call clickCard function', () => {
    const onCardExpand = jest.fn();
    const props = {
      tapType: 'select',
      shiftType: 'LOGOUT',
      onCardExpand,
    };
    const card = shallow(<Card {...props} />);
    card.instance().clickCard();
    expect(onCardExpand).toBeCalled();
  });

  it('Call getSelectedClass function', () => {
    const onCardExpand = jest.fn();
    const props = {
      tapType: 'SELECT',
      selectedCard: [1],
      id: 1,
      shiftType: 'LOGIN',
      onCardExpand,
    };
    const card = shallow(<Card {...props} />);
    const getSelectedClass = jest.spyOn(card.instance(), 'getSelectedClass');

    expect(getSelectedClass).not.toHaveBeenCalled();
  });
  it('Check Select with logout functionality', () => {
    const onCardExpand = jest.fn();
    const props = {
      tapType: 'SELECT',
      selectedCard: [1],
      id: 1,
      shiftType: 'LOGOUT',
      onCardExpand,
      assignmentIcon: true,
    };
    const card = shallow(<Card {...props} />);
    const getSelectedClass = jest.spyOn(card.instance(), 'getSelectedClass');

    expect(getSelectedClass).not.toHaveBeenCalled();
  });
  it('Check Expand with logout functionality', () => {
    const onCardExpand = jest.fn();
    const props = {
      tapType: 'EXPAND',
      selectedCard: [1],
      id: 1,
      shiftType: 'LOGOUT',
      onCardExpand,
      assignmentIcon: true,
      shiftIcon: true,
    };
    const card = shallow(<Card {...props} />);
    const getSelectedClass = jest.spyOn(card.instance(), 'getSelectedClass');

    expect(getSelectedClass).not.toHaveBeenCalled();
  });
});
