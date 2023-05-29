const presetValuesReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PRESET_VALUES':
        return action.payload;
      default:
        return state;
    }
  };
  
  // presetValues will be on the redux state at:
  // state.presetValues
  export default presetValuesReducer;