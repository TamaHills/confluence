/* Types */
export type Action = ReducerAction | asyncCreatorFn;

// Function Types
export type dispatchFn = (action: ReducerAction) => void;
export type reducerFn = (state: any, action: ReducerAction) => any;
export type selectorFn = (state: any) => any;
export type creatorFn = (...args: any[]) => Action;
export type asyncCreatorFn = (dispatch: dispatchFn) => any | void;

// Interfaces
export interface ReducerAction {
    [key: string]: any;
    type?: string;
}

export interface Store {
    initialState: any;
    reducer: reducerFn;
}

export interface ProviderContext {
    dispatch: dispatchFn;
    state: any;
}

export interface ReducerObject {
    [key: string]: reducerFn;
}

export interface ActionsObject {
    [key: string]: creatorFn;
}

export interface WrappedActionsObject {
    [key: string]: () => void;
}
