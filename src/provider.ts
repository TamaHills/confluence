import { h } from 'preact'
import { useState } from 'preact/hooks';
import { Action, Store, MiddlewareContext } from './types';

import { ctx } from './context';
export const useStore = ({ reducer, initialState, middleware }: Store) => {
    // this is where the state lives
    let [state, setState] = useState(initialState);

    // This the action dispatcher
    // actions passed in should either be an async action creator or an object containing the action
    let dispatch = (action: Action) => {
        // catches async creators
        if (typeof action === 'function') {
            // passes this function into an async creator
            // this gives the creator the ability to call actions after resolution
            action(dispatch);
        } else {
            // pass action to reducer
            let newState = reducer(state, action);
            /*  
                this is the argument for the StateUpdater call.
                if the user has supplied middleware this will generate a middleware reducer function.
                if no middleware is provided the updater will just resolve to the result of the reducer
            */
            let stateUpdate: any = middleware.length
                ? (prevState: any) =>
                      middleware.reduce((newState, mw) => {
                          let ctx: MiddlewareContext = {
                              newState,
                              prevState,
                              action,
                              reducer,
                          };
                          return mw(ctx);
                      }, newState)
                : newState;
            // update the state
            setState(stateUpdate);
        }
    };

    // Compose and return the context object
    return { state, dispatch };
};

// component props
interface ProviderProps {
    children: [];
    store: Store;
}

// Provider component
export const Provider = ({ children, store }: ProviderProps) => {
    // state is not shared between providers
    const value = useStore(store);

    return h(ctx.Provider, {value, children})
};
