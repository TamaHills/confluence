export declare type Action = ReducerAction | AsyncCreatorFn;
export declare type DispatchFn = (action: ReducerAction) => void;
export declare type ReducerFn = (state: any, action: ReducerAction) => any;
export declare type MiddlewareFn = (ctx: MiddlewareContext) => any;
export declare type SelectorFn = (state: any) => any;
export declare type CreatorFn = (...args: any[]) => Action;
export declare type WrappedCreatorFn = (...args: any[]) => void;
export declare type AsyncCreatorFn = (dispatch: DispatchFn) => void;
export interface ReducerAction {
    [key: string]: any;
    type?: string;
}
export interface Store {
    initialState: any;
    reducer: ReducerFn;
    middleware: MiddlewareFn[];
}
export interface ProviderContext {
    dispatch: DispatchFn;
    state: any;
}
export interface ReducerObject {
    [key: string]: ReducerFn;
}
export interface ActionsObject {
    [key: string]: CreatorFn;
}
export interface WrappedActionsObject {
    [key: string]: WrappedCreatorFn;
}
export interface MiddlewareContext {
    reducer: ReducerFn;
    prevState: any;
    newState: any;
    action: ReducerAction;
}
