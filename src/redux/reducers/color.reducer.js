const colorReducer = (state = 50, action) => {
    switch (action.type) {
      case 'SET_COLOR':
        return action.payload;
      default:
        return state;
    }
  };
  
  // color will be on the redux state at:
  // state.gain
  export default colorReducer;
  