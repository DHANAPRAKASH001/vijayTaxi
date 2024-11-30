import {combineReducers} from 'redux';

// REDUCERS
import authSlice from '../screens/auth/reducers';
import customAlertSlice from '../components/customAlert/reducers';
import drawerMenuSlice from '../components/drawerMenu/reducers';

const rootReducer = combineReducers({
  // SCREEN REDUCERS
  auth: authSlice,

  // COMPONENT REDUCERS
  customAlert: customAlertSlice,
  drawerMenu: drawerMenuSlice,
});

export default rootReducer;
