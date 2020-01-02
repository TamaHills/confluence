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
var src_1 = require("./src");
// Reducer Function
var reducer = function (state, action) {
    if (state === void 0) { state = { count: 0 }; }
    switch (action.type) {
        case 'increment_delay':
            return __assign(__assign({}, state), { waiting: true });
        case 'increment':
            return __assign(__assign({}, state), { count: state.count + 1, waiting: false });
        default:
            return state;
    }
};
// Action Creator
var delayIncrement = function (count) { return function (dispatch) {
    var factor = count / 10;
    dispatch({ type: 'increment_delay' });
    setTimeout(function () { return dispatch({ type: 'increment' }); }, count * factor * 100); // 10n^2
}; };
var store = src_1.createStore(reducer);
// Hooks component
var Counter = function () {
    var state = src_1.useSelector(function (state) { return state; });
    var dispatch = src_1.useDispatch();
    var handleIncrement = function () {
        return !state.waiting && dispatch({ type: 'increment' });
    };
    var handleIncrementDelay = function () {
        return !state.waiting && dispatch(delayIncrement(state.count));
    };
    return preact_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        ", "\n        <button onclick=", ">\n            ", "\n        </button>\n        <button onclick=", ">\n            ", "\n        </button>\n    "], ["\n        ", "\n        <button onclick=", ">\n            ", "\n        </button>\n        <button onclick=", ">\n            ", "\n        </button>\n    "])), state.count, handleIncrement, state.waiting ? 'wait...' : '+1', handleIncrementDelay, state.waiting ? 'wait...' : '+1 w/ delay');
};
// HOC Component
var CounterConnect = src_1.connect(function (state) { return ({ state: state }); }, {
    delayIncrement: delayIncrement,
})(function (_a) {
    var state = _a.state, dispatch = _a.dispatch, delayIncrement = _a.delayIncrement;
    var handleIncrement = function () {
        return !state.waiting && dispatch({ type: 'increment' });
    };
    var handleIncrementDelay = function () {
        return !state.waiting && delayIncrement(state.count);
    };
    return preact_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        ", "\n        <button onclick=", ">\n            ", "\n        </button>\n        <button onclick=", ">\n            ", "\n        </button>\n    "], ["\n        ", "\n        <button onclick=", ">\n            ", "\n        </button>\n        <button onclick=", ">\n            ", "\n        </button>\n    "])), state.count, handleIncrement, state.waiting ? 'wait...' : '+1', handleIncrementDelay, state.waiting ? 'wait...' : '+1 w/ delay');
});
var App = function () {
    return preact_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        <", " store=", ">\n            <", " />\n        <//>\n        <", " store=", ">\n            <", " />\n        <//>\n    "], ["\n        <", " store=", ">\n            <", " />\n        <//>\n        <", " store=", ">\n            <", " />\n        <//>\n    "])), src_1.Provider, store, Counter, src_1.Provider, store, CounterConnect);
};
preact_1.render(preact_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        <", " />\n    "], ["\n        <", " />\n    "])), App), document.getElementById('app') || document.body);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=demo.js.map