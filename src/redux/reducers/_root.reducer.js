import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// Delay parameter value reducers
import color from './SingleParamReducers/color.reducer';
import filter from './SingleParamReducers/filter.reducer';
import mix from './SingleParamReducers/mix.reducer';
import feedback from './SingleParamReducers/feedback.reducer';
import input from './SingleParamReducers/input.reducer';
import time from './SingleParamReducers/time.reducer';
import scale from './SingleParamReducers/scale.reducer';
import volume from './SingleParamReducers/volume.reducer';
import feedbackCheck from './SingleParamReducers/feedbackCheck.reducer';
import spread from './SingleParamReducers/spread.reducer';

// Preset name, description, and values reducers
import presetName from './presetName.reducer';
import presetDesc from './presetDesc.reducer';
import presetValues from './presetValues.reducer';

// Reducers for storing info from database
import dBPresets from './dBPresets.reducer';

// Reducer for editToggle for conditional rendering on SavePreset component
import editToggle from './editToggle.reducer';
// stores preset id for PUT sage
import editPresetId from './editPresetId.reducer';

// Toggle for basic/all parameter view
import paramView from './paramView.reducer';

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
  spread, // setting spread parameter value
  presetName, // setting prest name
  presetDesc, // setting preset description
  presetValues, // setting all preset values
  dBPresets, // storing presets retrieved from server
  editToggle, // toggling boolean for conditional rendering
  editPresetId, // gets preset Id to pass to sage for PUT
  paramView, // toggle param view between basic and all params
});

export default rootReducer;
