import { combineReducers } from 'redux';
import searchReducer from './components/reducer/reducer'; 

const rootReducer = combineReducers({
  search: searchReducer,      
});

export default rootReducer;