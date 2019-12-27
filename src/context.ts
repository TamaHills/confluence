import { html } from 'htm/preact';
import { createContext, VNode } from 'preact';
import { useReducer } from 'preact/hooks';
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
    // state is not shared by providers
    let [state, dispatch] = useReducer(reducer, initialState);


    // Wrap dipsatch to easily invert the control for async creators. 
    let dispatchWrapper = (action: Action) => {
        // Catches async creators
        if (typeof action === 'function') {
            action(dispatch);
        } else {
            dispatch(action);
        }
    };

    let context: ProviderContext = { state, dispatch: dispatchWrapper };
    // Wrap the children in a context provider
    return html`
        <${ctx.Provider} value=${context}>${children}<//>
    `;
};

// Helper function to wrap the action creators for props
let wrapActions = (
    actions: ActionsObject,
    dispatch: dispatchFn,
): WrappedActionsObject => {
    let wrappedActions = Object.keys(actions).reduce(
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


// HOC for connecting components to context
export const connect = (selector: selectorFn, actions: ActionsObject) => (
    component: (props: any) => VNode<{}>,
) => () => html`
    <${ctx.Consumer}>
        ${({ state, dispatch }: ProviderContext) => {
            // Get state from selector function
            let selectedState = selector(state);

            // Wrap actions to attach comtext
            let wrappedActions = wrapActions(actions, dispatch);

            return html`
                <${component} ...${{ ...selectedState, ...wrappedActions }} />
            `;
        }}
    <//>
`;

// Store
export const createStore = (reducer: reducerFn): Store => {
    // Grab initial state from reducer
    let initialState = reducer(undefined, {});

    console.log(initialState);
    // return composed store object
    return { reducer, initialState };
};
