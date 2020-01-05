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
exports.__esModule = true;
var preact_1 = require("htm/preact");
var context_1 = require("./context");
// Helper function to wrap the action creators to be used as props
var wrapActions = function (actions, dispatch) {
    if (actions === void 0) { actions = {}; }
    var wrappedActions = Object.entries(actions).reduce(function (acc, _a) {
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
    return function (component) { return function () { return preact_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <", ">\n        ", "\n    <//>\n"], ["\n    <", ">\n        ",
        "\n    <//>\n"])), context_1.Consumer, function (_a) {
        var state = _a.state, dispatch = _a.dispatch;
        // Get state from selector function
        var selectedState = selector(state);
        // Wrap actions to attach context
        var wrappedActions = wrapActions(actions, dispatch);
        return preact_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                <", "\n                    ...", "\n                />\n            "], ["\n                <", "\n                    ...", "\n                />\n            "])), component, __assign(__assign(__assign({}, selectedState), wrappedActions), { dispatch: dispatch }));
    }); }; };
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=connect.js.map