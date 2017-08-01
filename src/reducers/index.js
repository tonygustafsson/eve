import { combineReducers } from 'redux';

import eveReducer from './eveReducer';

const reducers = combineReducers({
  eve: eveReducer
})

export default reducers