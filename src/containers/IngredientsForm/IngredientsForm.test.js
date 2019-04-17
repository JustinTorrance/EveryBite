import { IngredientsForm, mapDispatchToProps, mapsta } from './IngredientsForm'
jest.mock('../../thunks/fetchRecipes')

describe('IngredientsForm', () => {

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



