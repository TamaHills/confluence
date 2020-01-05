import { ReducerObject, ReducerFn } from './types';

export const combineReducers = (reducers: ReducerObject): ReducerFn => {
    let reducerEntries = Object.entries(reducers);

    let reducer: ReducerFn = (state, action) => {
        let reducerResults = reducerEntries.map(([key, reducerFn]):[string, any] => [
            key,
            state ? reducerFn(state[key], action) : reducerFn(undefined, {}),
        ]);
        
        return Object.fromEntries(reducerResults);
    };

    return reducer;
};
