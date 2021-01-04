const initState = {
    dialog: [],
    loading: true,
    saidLast: '',
    listeningFor: 'name',
    user: {
        name: null,
        age: null,
    },
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INTERFACE_LOADED':
            return { ...state, loading: false };
        case 'SPEAK':
            let dialog = state.dialog.slice();

            dialog.unshift({
                time: action.time,
                sentence: action.payload,
                answer: action.answer,
                imageUrl: '',
            });

            if (dialog.length > 10) dialog.pop();

            return { ...state, dialog: dialog, saidLast: action.payload };
        case 'REMEMBER_NAME':
            return { ...state, user: { ...state.user, name: action.payload }, listeningFor: '' };
        case 'REMEMBER_AGE':
            return { ...state, user: { ...state.user, age: action.payload } };
        case 'CLEAR':
            return initState;
        default:
            return state;
    }
};

export default reducer;
