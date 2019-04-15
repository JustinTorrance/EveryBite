import { combineReducers } from 'redux'
import { recipesReducer } from './recipesReducer'
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  isLoading: loadingReducer
})

export default rootReducer