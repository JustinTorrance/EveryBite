import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {
  const wrapper = shallow(
  <RecipeCard 
    name={'curry'}
    time={60}
    id={'1'}
    image={'image'}
    ingredients={['rice', 'beans']}

  />);

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});