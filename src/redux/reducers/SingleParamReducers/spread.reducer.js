const spreadReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_SPREAD':
        return action.payload;
      default:
        return state;
    }
  };
  
  // spread will be on the redux state at:
  // state.spread
  export default spreadReducer;
  