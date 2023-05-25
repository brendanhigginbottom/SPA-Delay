const inputReducer = (state = 1, action) => {
    switch (action.type) {
      case 'SET_INPUT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // input will be on the redux state at:
  // state.input
  export default inputReducer;