const timeReducer = (state = 50, action) => {
    switch (action.type) {
      case 'SET_TIME':
        return action.payload;
      default:
        return state;
    }
  };
  
  // time will be on the redux state at:
  // state.time
  export default timeReducer;
  