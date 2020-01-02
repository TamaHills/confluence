export declare type Action = ReducerAction | asyncCreatorFn;
export declare type dispatchFn = (action: ReducerAction) => void;
export declare type reducerFn = (state: any, action: ReducerAction) => any;
export declare type selectorFn = (state: any) => any;
export declare type creatorFn = (...args: any[]) => Action;
export declare type asyncCreatorFn = (dispatch: dispatchFn) => any | void;
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
