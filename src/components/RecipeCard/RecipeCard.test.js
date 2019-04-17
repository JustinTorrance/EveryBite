import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './RecipeCard';

describe.skip('RecipeCard', () => {
  const wrapper = shallow(<RecipeCard />);

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});