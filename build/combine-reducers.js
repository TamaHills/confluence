"use strict";
exports.__esModule = true;
exports.combineReducers = function (reducers) {
    var reducerEntries = Object.entries(reducers);
    var reducer = function (state, action) {
        var reducerResults = reducerEntries.map(function (_a) {
            var key = _a[0], reducerFn = _a[1];
            return [
                key,
                state ? reducerFn(state[key], action) : reducerFn(undefined, {}),
            ];
        });
        return Object.fromEntries(reducerResults);
    };
    return reducer;
};
//# sourceMappingURL=combine-reducers.js.map