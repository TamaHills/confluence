"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var context_1 = require("./context");
exports.useStore = function (_a) {
    var reducer = _a.reducer, initialState = _a.initialState, middleware = _a.middleware;
    // this is where the state lives
    var _b = hooks_1.useState(initialState), state = _b[0], setState = _b[1];
    // This the action dispatcher
    // actions passed in should either be an async action creator or an object containing the action
    var dispatch = function (action) {
        // catches async creators
        if (typeof action === 'function') {
            // passes this function into an async creator
            // this gives the creator the ability to call actions after resolution
            action(dispatch);
        }
        else {
            // pass action to reducer
            var newState_1 = reducer(state, action);
            /*
                this is the argument for the StateUpdater call.
                if the user has supplied middleware this will generate a middleware reducer function.
                if no middleware is provided the updater will just resolve to the result of the reducer
            */
            var stateUpdate = middleware.length
                ? function (prevState) {
                    return middleware.reduce(function (newState, mw) {
                        var ctx = {
                            newState: newState,
                            prevState: prevState,
                            action: action,
                            reducer: reducer,
                        };
                        return mw(ctx);
                    }, newState_1);
                }
                : newState_1;
            // update the state
            setState(stateUpdate);
        }
    };
    // Compose and return the context object
    return { state: state, dispatch: dispatch };
};
// Provider component
exports.Provider = function (_a) {
    var children = _a.children, store = _a.store;
    // state is not shared between providers
    var value = exports.useStore(store);
    return preact_1.h(context_1.ctx.Provider, { value: value, children: children });
};
//# sourceMappingURL=provider.js.map