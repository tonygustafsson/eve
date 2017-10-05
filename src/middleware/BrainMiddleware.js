import {  } from '../actions';

export const BrainMiddleware = store => next => action => {
    switch (action.type) {
        case 'SPEAK':
            console.log('said: ' + action.payload);
            return next(action);
        default:
            return next(action);
    }
};
