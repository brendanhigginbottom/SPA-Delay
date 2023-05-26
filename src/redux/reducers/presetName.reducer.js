const presetNameReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_PRESET_NAME':
        return action.payload;
      default:
        return state;
    }
  };
  
  // presetName will be on the redux state at:
  // state.presetName
  export default presetNameReducer;