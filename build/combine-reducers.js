"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineReducers = function (reducerObject) {
    // create an array of reducer entries [key, reducer] from the users supplied ReducerObject
    var reducers = Object.entries(reducerObject);
    // create a new reducer funtion
    var composedReducer = function (state, action) {
        if (state === void 0) { state = undefined; }
        if (action === void 0) { action = {}; }
        // map reducer entries to state entries [key, state]
        var stateEntries = reducers.map(function (_a) {
            var key = _a[0], reducer = _a[1];
            return [
                key,
                reducer(state === null || state === void 0 ? void 0 : state[key], action),
            ];
        });
        // create & return a state object from the state entries
        return Object.fromEntries(stateEntries);
    };
    // return the new reducer function
    return composedReducer;
};
//# sourceMappingURL=combine-reducers.js.map