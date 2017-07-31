import {  } from '../actions';

export const LocalStorageMiddleware = store => next => action => {
    if (typeof window.localStorage === 'undefined') return next(action);

    switch (action.type) {
        default:
            return next(action);
    }
};
