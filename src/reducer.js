const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      name: action.payload.name
    };
  }
  return state;
};

export default reducer;
