import { combineReducers } from 'redux'

import authReducer from './auth';
import deliveriesReducer from './deliveries';
import balanceReducer from './balance';

const rootReducer = combineReducers({
  auth: authReducer,
  deliveries: deliveriesReducer,
  balance: balanceReducer,
})

export default rootReducer;
