import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// Delay parameter value reducers
import color from './color.reducer';
import filter from './filter.reducer';
import mix from './mix.reducer';
import feedback from './feedback.reducer';
import input from './input.reducer';
import time from './time.reducer';
import scale from './scale.reducer';
import volume from './volume.reducer';
import feedbackCheck from './feedbackCheck.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  color, // setting parameter value of color as number
  filter, // setting string corresponding to array of filter options
  mix, // setting mix parameter value
  feedback, // setting feedback parameter value
  input, // setting input on/off
  time, // setting time parameter value
  scale, // setting string corresponding to array of scale options
  volume, // setting volume parameter value
  feedbackCheck, // setting feedback on/off

  

});

export default rootReducer;
