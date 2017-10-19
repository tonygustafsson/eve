export const LocalStorageMiddleware = store => next => action => {
    switch (action.type) {
        default:
            let state = store.getState();

            window.localStorage.setItem('eve', JSON.stringify(state));

            return next(action);
    }
};
