# preact-confluence

Implements the flux pattern in preact with hooks and context

basic usage

```TSX
import { render, h } from 'preact';
import {
    createStore,
    useSelector,
    useDispatch,
    Provider,
    ReducerAction,
} from 'preact-confluence';
// Actions

const incrementDelay = (dispatch: (action: ReducerAction) => void) => {
    dispatch({ type: 'increment_start' });
    setTimeout(() => {
        dispatch({ type: 'increment_complete' });
    }, 3000);
};

// Reducers
const reducer = (
    state = { count: 0, waiting: false },
    action: ReducerAction,
) => {
    switch (action.type) {
        case 'increment_start':
            return {
                ...state,
                waiting: true,
            };
        case 'increment_complete':
            return {
                ...state,
                count: state.count + 1,
                waiting: false
            };
        default:
            return state;
    }
};

// App Interface
const App = () => {
    let { count, waiting } = useSelector(state => state);
    let dispatch = useDispatch();
    let clickHandler = () => !waiting && dispatch({ type: 'increment_complete' });
    let delayClickHandler = () => !waiting && incrementDelay(dispatch);
    return (
        <>
        {count}
        <button onclick={clickHandler}>{waiting ? 'wait' :'click' }</button>
        <button onclick={delayClickHandler}>{waiting ? 'wait' :'click' }</button>
        </>
    );
};

// Root Application
let store = createStore(reducer);

const Root = () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
};

// Mount application

render(
    <Root/>,
    document.getElementById('mount') || document.body,
);
```

## TODO:
- Document
- MiddleWare
