const gainReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_GAIN':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default gainReducer;
  