const scaleReducer = (state = 'x1', action) => {
    switch (action.type) {
      case 'SET_SCALE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // scale will be on the redux state at:
  // state.scale
  export default scaleReducer;