import { errorReducer } from './errorReducer'

describe('errorReducer', () => {

  it('should return initial state', () => {
    const expected = ''
    const result = errorReducer(undefined, '')
    expect(result).toEqual(expected)
  })

  it('should return an error message', () => {
    const expected = 'Something went wrong'
    const action = {
      type: 'HAS_ERRORED',
      message: 'Something went wrong'
    }
    const result = errorReducer('', action)
    expect(result).toEqual(expected)
  })

})