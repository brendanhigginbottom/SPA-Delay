const feedbackCheckReducer = (state = "1", action) => {
    switch (action.type) {
      case 'SET_FEEDBACK_CHECK':
        return action.payload;
      default:
        return state;
    }
  };
  
  // feedbackCheck (On/Off) will be on the redux state at:
  // state.feedbackCheck
  export default feedbackCheckReducer;