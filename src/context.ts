import { html } from 'htm/preact';
import { createContext, VNode } from 'preact';
import { useState } from 'preact/hooks';
import {
    Action,
    ProviderContext,
    ReducerAction,
    Store,
    ActionsObject,
    WrappedActionsObject,
    dispatchFn,
    selectorFn,
    reducerFn,
} from './types';

/* Setup */

// initial context object
export const init: ProviderContext = {
    state: undefined,
    dispatch: (action: ReducerAction) => {
        action;
    },
};

// initialize context object
export const ctx = createContext(init);
// Provider component

// component props
interface ProviderProps {
    children: [];
    store: Store;
}

export const Provider = ({
    children,
    store: { reducer, initialState },
}: ProviderProps) => {
    // this is where the state lives
    // state is not shared between providers
    let [state, setState] = useState(initialState);

    // Wrap dipsatch to easily invert the control for async creators.
    let dispatch = (action: Action) => {
        // Catches async creators
        if (typeof action === 'function') {
            action(dispatch);
        } else {
            let newState = reducer(state, action);
            setState((state:any) => {
                console.log('current state', state)
                console.log('action', action)
                console.log('new state', newState)
                return newState
            })
        }
    };

    // Compose the context object
    let context: ProviderContext = { state, dispatch };
    // Wrap the children in a context provider
    return html`
        <${ctx.Provider} value=${context}>${children}<//>
    `;
};

// Helper function to wrap the action creators to be used as props
let wrapActions = (
    actions: ActionsObject,
    dispatch: dispatchFn,
): WrappedActionsObject => {
    let wrappedActions:WrappedActionsObject = Object.keys(actions).reduce(
        (acc: any, action) => ({
            ...acc,
            [action]: (...args: any[]) => {
                dispatch(actions[action](...args));
            },
        }),
        {},
    );
    return wrappedActions;
};

// Export the bare consumer
// This allows users to acess the store wihtout an HOC or Hooks
export const Consumer = ctx.Consumer;

type FuncComponent = (props: any) => VNode<{}>;

// HOC for connecting components to context
export const connect = (selector: selectorFn, actions: ActionsObject) => (
    component: FuncComponent,
) => () => html`
    <${Consumer}>
        ${({ state, dispatch }: ProviderContext) => {
            // Get state from selector function
            let selectedState = selector(state);

            // Wrap actions to attach context
            let wrappedActions = wrapActions(actions, dispatch);

            return html`
                <${component} ...${{ ...selectedState, ...wrappedActions, dispatch }} />
            `;
        }}
    <//>
`;

// Store
export const createStore = (reducer: reducerFn): Store => {
    // Grab initial state from reducer
    let initialState = reducer(undefined, {});

    // return composed store object
    return { reducer, initialState };
};