const filterReducer = (state = 'None', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.payload;
      default:
        return state;
    }
  };
  
  // filter will be on the redux state at:
  // state.filter
  export default filterReducer;