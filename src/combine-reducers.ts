import { ReducerObject, ReducerFn } from './types';

export const combineReducers = (reducers: ReducerObject): ReducerFn => {
    let reducerEntries = Object.entries(reducers);

    let reducer: ReducerFn = (state = undefined, action = {}) => {
        let reducerResults = reducerEntries.map(([key, reducerFn]): [
            string,
            any,
        ] => [key, reducerFn(state, action)]);

        return Object.fromEntries(reducerResults);
    };

    return reducer;
};
