import { CardContainer, mapStateToProps } from './CardContainer'

describe('CardContainer', () => {
  
  describe('mapStateToProps', () => {
    
    it('should return an object with isLoading and error', () => {
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