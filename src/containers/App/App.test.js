import React from 'react'
import { shallow } from 'enzyme'
import { App, mapStateToProps} from './App'

describe('App', () => {
  const wrapper = shallow(<App />);
  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    
    it('should return an object with isLoading and error', () => {
      const mockState = {
        isLoading: false,
        error: 'Something went wrong',
        recipes: [{name: 'curry'}]
      }
      const expected = {
        isLoading: false,
        error: 'Something went wrong'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})