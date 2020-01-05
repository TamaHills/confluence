"use strict";
exports.__esModule = true;
var hooks_1 = require("preact/hooks");
var context_1 = require("./context");
/* Hooks */
// State
exports.useSelector = function (select) {
    // Grab state from context provider
    var state = hooks_1.useContext(context_1.ctx).state;
    // Pass state to selector function
    return select(state);
};
// Dispatch
exports.useDispatch = function () {
    // Grab dispatch from context provider
    var dispatch = hooks_1.useContext(context_1.ctx).dispatch;
    return dispatch;
};
//# sourceMappingURL=hooks.js.map