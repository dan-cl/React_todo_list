/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import AddToDo from '.';

describe('AddToDo component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddToDo />);
    expect(component.exists()).toEqual(true);
  });
});
