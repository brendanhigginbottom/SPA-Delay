const feedbackReducer = (state = 50, action) => {
    switch (action.type) {
      case 'SET_FEEDBACK':
        return action.payload;
      default:
        return state;
    }
  };
  
  // feedback will be on the redux state at:
  // state.gain
  export default feedbackReducer;
  