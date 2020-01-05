"use strict";
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
var preact_1 = require("preact");
var context_1 = require("./context");
// Helper function to wrap action creators to be used as props
var wrapActions = function (actions, dispatch) {
    if (actions === void 0) { actions = {}; }
    var actionEntries = Object.entries(actions);
    var wrappedActions = actionEntries.reduce(function (acc, _a) {
        var _b;
        var actionName = _a[0], actionCreator = _a[1];
        return (__assign(__assign({}, acc), (_b = {}, _b[actionName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var action = actionCreator.apply(void 0, args);
            dispatch(action);
        }, _b)));
    }, {});
    return wrappedActions;
};
// HOC for connecting components to context
exports.connect = function (selector, actions) {
    if (selector === void 0) { selector = function (state) { return ({ state: state }); }; }
    if (actions === void 0) { actions = {}; }
    return function (component) { return function () {
        return preact_1.h(context_1.Consumer, {
            children: function (_a) {
                var state = _a.state, dispatch = _a.dispatch;
                // Get state from selector function
                var selectedState = selector(state);
                // Wrap actions to attach context
                var wrappedActions = wrapActions(actions, dispatch);
                return preact_1.h(component, __assign(__assign(__assign({}, selectedState), wrappedActions), { dispatch: dispatch }));
            },
        });
    }; };
};
//# sourceMappingURL=connect.js.map