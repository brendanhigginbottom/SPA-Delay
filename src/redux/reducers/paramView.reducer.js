const paramViewReducer = (state = "1", action) => {
    switch (action.type) {
      case 'SET_PARAM_VIEW':
        return action.payload;
      default:
        return state;
    }
  };
  
  // param view (On/Off) will be on the redux state at:
  // state.paramView
  export default paramViewReducer;