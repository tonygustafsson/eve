const initState = {
    dialog: [],
    loading: true,
    saidLast: '',
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INTERFACE_LOADED':
            return { ...state, loading: false };
        case 'SPEAK':
            let dialog = Object.create(state.dialog);
            dialog.unshift({'time': action.time, 'sentence': action.payload, 'answer': action.answer});
            return { ...state, dialog: dialog, saidLast: action.payload };
        default:
            return state;
    }
}

export default reducer;
