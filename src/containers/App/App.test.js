import { App, mapStateToProps} from './App'

describe('App', () => {
  
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