"use strict";
exports.__esModule = true;
var preact_1 = require("preact");
/* Setup */
// initial context object
exports.init = {
    state: undefined,
    dispatch: function (action) {
        action;
    }
};
// initialize context object
exports.ctx = preact_1.createContext(exports.init);
// Export the bare consumer
// This allows users to access the store wihtout an HOC or Hooks
exports.Consumer = exports.ctx.Consumer;
// Store
exports.createStore = function (reducer) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    // Grab initial state from reducer
    var initialState = reducer(undefined, {});
    // return composed store object
    return { reducer: reducer, initialState: initialState, middleware: middleware };
};
//# sourceMappingURL=context.js.map