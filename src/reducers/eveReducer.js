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

                return {
                    ...state,
                    dialog: dialog,
                    user: { name: action.payload },
                    listeningFor: null,
                    answer: answer,
                };
            }

            if (action.payload.startsWith('my name is ') && action.payload.split(' ').length > 3) {
                let name = action.payload.split(' ')[3].charAt(0).toUpperCase();

                return {
                    ...state,
                    user: { name: name },
                }
            }

            dialog.unshift({
                time: action.time,
                sentence: action.payload,
                answer: action.answer,
            });

            if (dialog.length > 10) dialog.pop();

            return { ...state, dialog: dialog, saidLast: action.payload };
        case 'CLEAR':
            return initState;
        default:
            return state;
    }
}

export default reducer;
