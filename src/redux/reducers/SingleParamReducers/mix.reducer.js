const mixReducer = (state = 50, action) => {
    switch (action.type) {
      case 'SET_MIX':
        return action.payload;
      default:
        return state;
    }
  };
  
  // mix will be on the redux state at:
  // state.mix
  export default mixReducer;
  