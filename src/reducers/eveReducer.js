const currentTime = () => {
    let date = new Date(),
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        
    return hours + ':' + minutes + ':' + seconds;
}

const initState = {
    loading: true,
    saidLast: '',
    currentPhrase: '',
    currentTime: currentTime()
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INTERFACE_LOADED':
      return { ...state, loading: false };
    case 'TYPE':
      return { ...state, currentPhrase: action.payload };
    case 'SPEAK':
      return { ...state, saidLast: action.payload };
    default:
      return state;
  }
}

export default reducer;
