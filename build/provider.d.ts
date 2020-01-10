import { Store } from './types';
export declare const useStore: ({ reducer, initialState, middleware }: Store) => any[];
interface ProviderProps {
    children: [];
    store: Store;
}
export declare const Provider: ({ children, store }: ProviderProps) => import("preact").VNode<any>;
export {};
