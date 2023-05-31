const volumeReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_VOLUME':
        return action.payload;
      default:
        return state;
    }
  };
  
  // volume will be on the redux state at:
  // state.volume
  export default volumeReducer;
  