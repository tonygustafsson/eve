import { getAnswer } from  './brain';

export const interfaceLoaded = () => {
    return {
        type: 'INTERFACE_LOADED',
    };
};

export const speak = (said, time) => {
    return {
        type: 'SPEAK',
        payload: said,
        time: time,
    };
};
