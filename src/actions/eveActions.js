export const interfaceLoaded = () => {
    return {
        type: 'INTERFACE_LOADED'
    };
};

export const type = (typed) => {
    return {
        type: 'TYPE',
        payload: typed
    };
};

export const speak = (said) => {
    return {
        type: 'SPEAK',
        payload: said
    };
};
