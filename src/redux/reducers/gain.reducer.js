const gainReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_GAIN':
        return action.payload;
      default:
        return state;
    }
  };
  
  // gain will be on the redux state at:
  // state.gain
  export default gainReducer;
  