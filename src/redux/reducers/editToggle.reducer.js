const editToggleReducer = (state = false, action) => {
    switch (action.type) {
      case 'TOGGLE_EDIT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // editToggle will be on the redux state at:
  // state.editToggle
  export default editToggleReducer;