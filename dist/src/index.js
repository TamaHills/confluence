"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("./hooks");
exports.useDispatch = hooks_1.useDispatch;
exports.useSelector = hooks_1.useSelector;
var context_1 = require("./context");
exports.connect = context_1.connect;
exports.Provider = context_1.Provider;
exports.createStore = context_1.createStore;
var combine_reducers_1 = require("./combine-reducers");
exports.combineReducers = combine_reducers_1.combineReducers;
//# sourceMappingURL=index.js.map