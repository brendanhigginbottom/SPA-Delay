const editPresetIdReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_EDIT_ID':
        return action.payload;
      default:
        return state;
    }
  };
  
  // editToggle will be on the redux state at:
  // state.editToggle
  export default editPresetIdReducer;