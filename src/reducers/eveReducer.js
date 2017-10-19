const initState = {
    dialog: [],
    loading: true,
    saidLast: '',
    listeningFor: 'name',
    user: {
        name: null,
        age: null,
    }
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INTERFACE_LOADED':
            return { ...state, loading: false };
        case 'SPEAK':
            let dialog = state.dialog.slice(); 

            if (state.listeningFor === 'name') {
                let answer = 'Nice to meet you, ' + action.payload;

                dialog.unshift({'time': action.time, 'sentence': action.payload, 'answer': answer});                
                return { ...state, dialog: dialog, user: { name: action.payload }, listeningFor: null, 'answer': answer };
            }

            dialog.unshift({'time': action.time, 'sentence': action.payload, 'answer': action.answer});
            return { ...state, dialog: dialog, saidLast: action.payload };
        case 'LOCAL_STORAGE_TO_STATE':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
