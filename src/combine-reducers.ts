import { ReducerObject, reducerFn } from './types';

export const combineReducers = (reducers: ReducerObject): reducerFn => {
    let reducerKeys = Object.keys(reducers);

    let reducer: reducerFn = (state, action) => {
        return reducerKeys.reduce(
            (acc, key) => ({
                ...acc,
                [key]: state
                    ? reducers[key](state[key], action)
                    : reducers[key](undefined, {}),
            }),
            {},
        );
    };

    return reducer;
};
