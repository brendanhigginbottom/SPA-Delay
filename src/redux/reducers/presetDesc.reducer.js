const presetDescReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_PRESET_DESC':
        return action.payload;
      default:
        return state;
    }
  };
  
  // presetDesc will be on the redux state at:
  // state.presetDesc
  export default presetDescReducer;