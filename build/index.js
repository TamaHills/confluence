"use strict";
exports.__esModule = true;
var hooks_1 = require("./hooks");
exports.useDispatch = hooks_1.useDispatch;
exports.useSelector = hooks_1.useSelector;
var context_1 = require("./context");
exports.Consumer = context_1.Consumer;
exports.createStore = context_1.createStore;
var connect_1 = require("./connect");
exports.connect = connect_1.connect;
var provider_1 = require("./provider");
exports.Provider = provider_1.Provider;
var combine_reducers_1 = require("./combine-reducers");
exports.combineReducers = combine_reducers_1.combineReducers;
//# sourceMappingURL=index.js.map