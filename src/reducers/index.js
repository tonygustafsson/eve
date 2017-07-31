const initState = {
    loading: true
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INTERFACE_LOADED':
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default reducer;