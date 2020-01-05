import { ProviderContext, Store, ReducerFn, MiddlewareFn } from './types';
export declare const init: ProviderContext;
export declare const ctx: import("preact").Context<ProviderContext>;
export declare const Consumer: import("preact").Consumer<ProviderContext>;
export declare const createStore: (reducer: ReducerFn, ...middleware: MiddlewareFn[]) => Store;
