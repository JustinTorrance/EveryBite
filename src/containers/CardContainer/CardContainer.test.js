import { CardContainer, mapStateToProps } from './CardContainer'
import React from 'react'
import { shallow } from 'enzyme'

describe('CardContainer', () => {

  const wrapper = shallow(<CardContainer 
                            recipes={[{name: 'curry'}]}
                          />)

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  
  describe('mapStateToProps', () => {

    it('should return an object with isLoading and recipes', () => {
      const mockState = {
        isLoading: false,
        error: 'Something went wrong',
        recipes: [{name: 'curry'}]
      }
      const expected = {
        isLoading: false,
        recipes: [{name: 'curry'}]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  
})