const filterReducer = (state = 0, action) => {
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