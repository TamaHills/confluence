import { html } from 'htm/preact';
import { FunctionComponent } from 'preact';
import {
    ProviderContext,
    ActionsObject,
    WrappedActionsObject,
    DispatchFn,
    SelectorFn,
    CreatorFn
} from './types';
import { Consumer } from './context';

// Helper function to wrap the action creators to be used as props
let wrapActions = (
    actions: ActionsObject = {},
    dispatch: DispatchFn,
): WrappedActionsObject => {
    let wrappedActions = Object.entries(actions).reduce(
        (acc: WrappedActionsObject, [actionName, actionCreator]:[any, CreatorFn]) => ({
            ...acc,
            [actionName]: (...args: any[]) => {
                let action = actionCreator(...args)
                dispatch(action);
            },
        }),
        {},
    );
    return wrappedActions;
};

// HOC for connecting components to context
export const connect = (
    selector: SelectorFn = state => ({ state }),
    actions: ActionsObject = {},
) => (component: FunctionComponent) => () => html`
    <${Consumer}>
        ${({ state, dispatch }: ProviderContext) => {
            // Get state from selector function
            let selectedState = selector(state);

            // Wrap actions to attach context
            let wrappedActions = wrapActions(actions, dispatch);

            return html`
                <${component}
                    ...${{ ...selectedState, ...wrappedActions, dispatch }}
                />
            `;
        }}
    <//>
`;
