"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("htm/preact");
var preact_2 = require("preact");
var hooks_1 = require("preact/hooks");
/* Setup */
// initial context object
exports.init = {
    state: undefined,
    dispatch: function (action) {
        action;
    },
};
// initialize context object
exports.ctx = preact_2.createContext(exports.init);
exports.Provider = function (_a) {
    var children = _a.children, _b = _a.store, reducer = _b.reducer, initialState = _b.initialState;
    // this is where the state lives
    // state is not shared between providers
    var _c = hooks_1.useState(initialState), state = _c[0], setState = _c[1];
    // Wrap dipsatch to easily invert the control for async creators.
    var dispatch = function (action) {
        // Catches async creators
        if (typeof action === 'function') {
            action(dispatch);
        }
        else {
            var newState_1 = reducer(state, action);
            setState(function (state) {
                console.log('current state', state);
                console.log('action', action);
                console.log('new state', newState_1);
                return newState_1;
            });
        }
    };
    // Compose the context object
    var context = { state: state, dispatch: dispatch };
    // Wrap the children in a context provider
    return preact_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <", " value=", ">", "<//>\n    "], ["\n        <", " value=", ">", "<//>\n    "])), exports.ctx.Provider, context, children);
};
// Helper function to wrap the action creators to be used as props
var wrapActions = function (actions, dispatch) {
    var wrappedActions = Object.keys(actions).reduce(function (acc, action) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[action] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            dispatch(actions[action].apply(actions, args));
        }, _a)));
    }, {});
    return wrappedActions;
};
// Export the bare consumer
// This allows users to acess the store wihtout an HOC or Hooks
exports.Consumer = exports.ctx.Consumer;
// HOC for connecting components to context
exports.connect = function (selector, actions) { return function (component) { return function () { return preact_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    <", ">\n        ", "\n    <//>\n"], ["\n    <", ">\n        ",
    "\n    <//>\n"])), exports.Consumer, function (_a) {
    var state = _a.state, dispatch = _a.dispatch;
    // Get state from selector function
    var selectedState = selector(state);
    // Wrap actions to attach context
    var wrappedActions = wrapActions(actions, dispatch);
    return preact_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <", " ...", " />\n            "], ["\n                <", " ...", " />\n            "])), component, __assign(__assign(__assign({}, selectedState), wrappedActions), { dispatch: dispatch }));
}); }; }; };
// Store
exports.createStore = function (reducer) {
    // Grab initial state from reducer
    var initialState = reducer(undefined, {});
    // return composed store object
    return { reducer: reducer, initialState: initialState };
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=context.js.map