
import { html, render } from 'htm/preact';
import {
    Provider,
    createStore,
    useDispatch,
    useSelector,
    connect,
    combineReducers
} from './build';

import { logger } from './build/logger';

// Reducer Function
const reducer = (state: any = { count: 0 }, action: any) => {
    switch (action.type) {
        case 'increment_delay':
            return { ...state, waiting: true };
        case 'increment':
            return { ...state, count: state.count + 1, waiting: false };
        default:
            return state;
    }
};

// Action Creator
const delayIncrement = (count: number) => (dispatch: any) => {
    let factor = count / 10;
    dispatch({ type: 'increment_delay' });
    setTimeout(
        () => dispatch({ type: 'increment' }),
        count * factor * 100,
    ); /* = 10n^2 */
};

let newreducer = combineReducers({ counter: reducer })

const store = createStore(newreducer, logger);

// Hooks component
const Counter = () => {
    let state = useSelector(state => ( state.counter ));
    console.log(state)
    let dispatch = useDispatch();
    let handleIncrement = () =>
        !state.waiting && dispatch({ type: 'increment' });
    let handleIncrementDelay = () =>
        !state.waiting && dispatch(delayIncrement(state.count));
    return html`
        ${state.count}
        <button onclick=${handleIncrement}>
            ${state.waiting ? 'wait...' : '+1'}
        </button>
        <button onclick=${handleIncrementDelay}>
            ${state.waiting ? 'wait...' : '+1 w/ delay'}
        </button>
    `;
};

// HOC Version
const CounterConnect = connect(state => ({ state: state.counter }), { delayIncrement })(
    ({ state, dispatch, delayIncrement }: any) => {
        let handleIncrement = () =>
            !state.waiting && dispatch({ type: 'increment' });
        let handleIncrementDelay = () =>
            !state.waiting && delayIncrement(state.count);
        return html`
            ${state.count}
            <button onclick=${handleIncrement}>
                ${state.waiting ? 'wait...' : '+1'}
            </button>
            <button onclick=${handleIncrementDelay}>
                ${state.waiting ? 'wait...' : '+1 w/ delay'}
            </button>
        `;
    },
);

const App = () => {
    return html`
        <${Provider} store=${store}>
            <${Counter} />
        <//>
        <${Provider} store=${store}>
            <${CounterConnect} />
        <//>
    `;
};

render(
    html`
        <${App} />
    `,
    document.getElementById('app') || document.body,
);