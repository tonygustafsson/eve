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
            let dialog = state.dialog.slice(),
                said = action.payload.toLowerCase();

            if (state.listeningFor === 'name') {
                let answer = { text: 'Nice to meet you, ' + action.payload };

                dialog.unshift({'time': action.time, 'sentence': action.payload, 'answer': answer});

                return {
                    ...state,
                    dialog: dialog,
                    user: { name: action.payload },
                    listeningFor: null,
                    answer: answer,
                };
            }

            if (said.startsWith('my name is ') && said.split(' ').length > 3) {
                let name = action.payload.split(' ')[3];

                dialog.unshift({
                    time: action.time,
                    sentence: action.payload,
                    answer: action.answer,
                });

                return {
                    ...state,
                    user: { ...state.user, name: name },
                    dialog: dialog,
                    saidLast: action.payload,
                }
            }

            if ((said.includes('my') && said.includes('age')) || (said.includes('year') && said.includes('old'))) {
                let age = said.match(/\d/g).join("");

                dialog.unshift({
                    time: action.time,
                    sentence: action.payload,
                    answer: action.answer,
                    imageUrl: '',
                });

                return {
                    ...state,
                    user: { ...state.user, age: age },
                    dialog: dialog,
                    saidLast: action.payload,
                }
            }

            if (said.includes('tell') && said.includes('me') && said.includes('about')) {
                //TODO: This does not work properly

                var define = said.split(' ')[3],
                    url = 'http://api.wordnik.com:80/v4/word.json/' + define + '/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
        
                fetch(url).then(response => {
                    return response.json();
                }).then(response => {
                      return response[0].text;
                }).then(response => {
                    dialog.unshift({
                        time: action.time,
                        sentence: action.payload,
                        answer: response,
                        imageUrl: '',
                    });

                    return {
                        ...state,
                        dialog: dialog,
                        saidLast: action.payload,
                    }
                });
            }

            dialog.unshift({
                time: action.time,
                sentence: action.payload,
                answer: action.answer,
                imageUrl: '',
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
