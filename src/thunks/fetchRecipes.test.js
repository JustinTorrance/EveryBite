import { storeRecipes, isLoading, hasErrored } from '../actions'
import { fetchRecipes } from './fetchRecipes'
import { recipeCleaner } from '../cleaner'

describe('fetchRecipes', () => {
  let mockUrl
  let mockDispatch
  let mockIngredients
  
  beforeEach(() => {
    mockUrl = 'www.someurl.com'
    mockDispatch = jest.fn()
    mockIngredients = [{name: 'curry'}]
  })
  
  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchRecipes(mockIngredients)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    const thunk = fetchRecipes(mockIngredients)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it.skip('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{name: 'curry'}])
    }))
    const thunk = fetchRecipes(mockIngredients)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it.skip('should dispatch storeRecipes if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    const thunk = fetchRecipes(mockIngredients)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(storeRecipes(mockIngredients))
  })
})