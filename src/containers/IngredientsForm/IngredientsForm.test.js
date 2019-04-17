import React from 'react';
import { shallow } from 'enzyme';
import { IngredientsForm, mapDispatchToProps, mapsta } from './IngredientsForm'
jest.mock('../../thunks/fetchRecipes')

describe('IngredientsForm', () => {
  const wrapper = shallow(<IngredientsForm />);
    it('should match the snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });

  describe('mapDispatchToProps', () => {
    it('should call mockDispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn()
      const fetchRecipes = jest.fn()
      const actionToDispatch = fetchRecipes([{name: 'curry'}])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchRecipes([{name: 'curry'}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
  
})



