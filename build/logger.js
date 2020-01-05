"use strict";
exports.__esModule = true;
exports.logger = function (ctx) {
    console.log('previous state', ctx.prevState);
    console.log('dispatched action', ctx.action);
    console.log('resulting state', ctx.newState);
    return ctx.newState;
};
//# sourceMappingURL=logger.js.map