import { combineReducers } from 'redux'
import { recipesReducer } from './recipesReducer'
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  isLoading: loadingReducer,
  error: errorReducer
})

export default rootReducer