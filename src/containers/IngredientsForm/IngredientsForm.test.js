import React from 'react';
import { shallow } from 'enzyme';
import { IngredientsForm, mapDispatchToProps } from './IngredientsForm'
jest.mock('../../thunks/fetchRecipes')

describe('IngredientsForm', () => {
  const wrapper = shallow(
    <IngredientsForm 
      fetchRecipes={jest.fn()}
    />);
  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should set state to the values of form inputs', () => {
    const wrapper = shallow(<IngredientsForm 
                      fetchRecipes={jest.fn()}
                    />)
    const mockedEvent = {
      target: {
        name: 'ingredient1',
        value: 'tomato'
      }
    }
    wrapper.instance().handleChange(mockedEvent)
    expect(wrapper.state('ingredient1')).toEqual('tomato')
  })

  it.skip('should use handleSubmit to call fetchRecipes', () => {
    const wrapper = shallow(<IngredientsForm 
                      fetchRecipes={jest.fn()}
                    />)
    const mockedEvent = {
      preventDefault: jest.fn()
    }
    wrapper.instance().handleSubmit(mockedEvent)
    expect(wrapper.instance().props.fetchRecipes.hasBeenCalled)
  })

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



