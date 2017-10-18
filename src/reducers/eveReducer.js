const initState = {
    dialog: [],
    loading: true,
    saidLast: '',
    userName: null,
    listeningFor: 'name',
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INTERFACE_LOADED':
            return { ...state, loading: false };
        case 'SPEAK':
            let dialog = Object.create(state.dialog); 

            if (state.listeningFor === 'name') {
                let answer = 'Nice to meet you, ' + action.payload;

                dialog.unshift({'time': action.time, 'sentence': action.payload, 'answer': answer});                
                return { ...state, dialog: dialog, userName: action.payload, listeningFor: null, 'answer': answer };
            }

            dialog.unshift({'time': action.time, 'sentence': action.payload, 'answer': action.answer});
            return { ...state, dialog: dialog, saidLast: action.payload };
        default:
            return state;
    }
}

export default reducer;
