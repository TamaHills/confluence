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
exports.combineReducers = function (reducers) {
    var reducerKeys = Object.keys(reducers);
    var reducer = function (state, action) {
        return reducerKeys.reduce(function (acc, key) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[key] = state
                ? reducers[key](state[key], action)
                : reducers[key](undefined, {}), _a)));
        }, { __reducer__metadata__: function () { return ({ __composite__reducer__: true }); } });
    };
    return reducer;
};
//# sourceMappingURL=combine-reducers.js.map