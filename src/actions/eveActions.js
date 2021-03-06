export const interfaceLoaded = () => {
    return {
        type: 'INTERFACE_LOADED',
    };
};

export const speak = (said, answer, time) => {
    return {
        type: 'SPEAK',
        payload: said,
        answer: answer,
        time: time,
    };
};

export const rememberName = (name) => {
    return {
        type: 'REMEMBER_NAME',
        payload: name,
    };
};

export const rememberAge = (age) => {
    return {
        type: 'REMEMBER_AGE',
        payload: age,
    };
};

export const clear = () => {
    return {
        type: 'CLEAR',
    };
};
