// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = h;
exports.Fragment = y;
exports.createRef = p;
exports.Component = d;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = A;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    f,
    r = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return v(n, o, l && l.key, l && l.ref);
}

function v(l, u, i, t) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function y(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(k);
}

function k() {
  var n, l, i, t, o, f, r;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (i = void 0, t = void 0, f = (o = (l = n).__v).__e, (r = l.__P) && (i = [], t = T(r, o, s({}, o), l.__n, void 0 !== r.ownerSVGElement, null, i, null == f ? m(o) : f), $(i, o), t != f && w(o)));
}

function _(n, l, u, i, t, o, f, c, s) {
  var h,
      v,
      p,
      y,
      d,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == r && (c = null != o ? o[0] : _ ? m(u, 0) : null), h = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {
        if ((p = k[v]) && u.key == p.key && u.type === p.type) {
          k[v] = void 0;
          break;
        }

        p = null;
      }

      if (y = T(n, u, p = p || r, i, t, o, f, c, s), (v = u.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(v, u.__c || y, u)), null != y) {
        if (null == w && (w = y), null != u.__d) y = u.__d, u.__d = null;else if (o == p || y != c || null == y.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(y);else {
            for (d = c, v = 0; (d = d.nextSibling) && v < _; v += 2) if (d == y) break n;

            n.insertBefore(y, c);
          }

          "option" == l.type && (n.value = "");
        }
        c = y.nextSibling, "function" == typeof l.type && (l.__d = y);
      }
    }

    return h++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (h = o.length; h--;) null != o[h] && a(o[h]);

  for (h = _; h--;) null != k[h] && A(k[h], k[h]);

  if (g) for (h = 0; h < g.length; h++) z(g[h], g[++h], g[++h]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) b(n[i], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? v(null, n, null, null) : null != n.__e || null != n.__c ? v(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, i, t) {
  var o;

  for (o in u) o in l || P(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || P(n, o, l[o], u[o], i);
}

function C(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function P(n, l, u, i, t) {
  var o, f, r, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (f in i) u && f in u || C(o, f, "");
      if (u) for (r in u) i && u[r] === i[r] || C(o, r, u[r]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function T(l, u, i, t, o, f, r, e, c) {
  var a,
      h,
      v,
      p,
      m,
      w,
      g,
      k,
      x,
      C,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, x = (a = P.contextType) && t[a.__c], C = a ? x ? x.props.value : a.__ : t, i.__c ? g = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(k, C) : (u.__c = h = new d(k, C), h.constructor = P, h.render = D), x && x.sub(h), h.props = k, h.state || (h.state = {}), h.context = C, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, P.getDerivedStateFromProps(k, h.__s))), p = h.props, m = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && k !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, C), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, C)) {
          for (h.props = k, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = i.__e, u.__k = i.__k, h.__h.length && r.push(h), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(p, m, w);
        });
      }
      h.context = C, h.props = k, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), u.__k = b(null != a && a.type == y && null == a.key ? a.props.children : a), null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(p, m)), _(l, u, i, t, o, f, r, e, c), h.base = u.__e, h.__h.length && r.push(h), g && (h.__E = h.__ = null), h.__e = null;
    } else u.__e = j(i.__e, u, i, t, o, f, r, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, i);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, o, f, c) {
  var s,
      a,
      h,
      v,
      p,
      y = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), o = null;
  }

  if (null === l.type) null != o && (o[o.indexOf(n)] = null), y !== d && (n.data = d);else if (l !== u) {
    if (null != o && (o = e.slice.call(n.childNodes)), h = (y = u.props || r).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, !c) {
      if (y === r) for (y = {}, p = 0; p < n.attributes.length; p++) y[n.attributes[p].name] = n.attributes[p].value;
      (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || ""));
    }

    x(n, d, y, t, c), l.__k = l.props.children, v || _(n, l, u, i, "foreignObject" !== l.type && t, o, f, r, c), c || ("value" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked));
  }
  return n;
}

function z(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function A(l, u, i) {
  var t, o, f;

  if (n.unmount && n.unmount(l), (t = l.ref) && z(t, null, u), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = null, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (f = 0; f < t.length; f++) t[f] && A(t[f], u, i);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, i) {
  var t, f, c;
  n.__ && n.__(l, u), f = (t = i === o) ? null : i && i.__k || u.__k, l = h(y, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, f || r, r, void 0 !== u.ownerSVGElement, i && !t ? [i] : f ? null : e.slice.call(u.childNodes), c, i || r, t), $(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && i.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError) u.setState(u.constructor.getDerivedStateFromError(n));else {
        if (null == u.componentDidCatch) continue;
        u.componentDidCatch(n);
      }
      return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (this.__e = !1, l && this.__h.push(l), g(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, d.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = r, f = 0;
},{}],"node_modules/htm/dist/htm.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var n = function (t, r, u, e) {
  for (var p = 1; p < r.length; p++) {
    var s = r[p],
        h = "number" == typeof s ? u[s] : s,
        a = r[++p];
    1 === a ? e[0] = h : 3 === a ? e[1] = Object.assign(e[1] || {}, h) : 5 === a ? (e[1] = e[1] || {})[r[++p]] = h : 6 === a ? e[1][r[++p]] += h + "" : e.push(a ? t.apply(null, n(t, h, u, ["", null])) : h);
  }

  return e;
},
    t = function (n) {
  for (var t, r, u = 1, e = "", p = "", s = [0], h = function (n) {
    1 === u && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? s.push(n || e, 0) : 3 === u && (n || e) ? (s.push(n || e, 1), u = 2) : 2 === u && "..." === e && n ? s.push(n, 3) : 2 === u && e && !n ? s.push(!0, 5, e) : u >= 5 && ((e || !n && 5 === u) && (s.push(e, u, r), u = 6), n && (s.push(n, u, r), u = 6)), e = "";
  }, a = 0; a < n.length; a++) {
    a && (1 === u && h(), h(a));

    for (var f = 0; f < n[a].length; f++) t = n[a][f], 1 === u ? "<" === t ? (h(), s = [s], u = 3) : e += t : 4 === u ? "--" === e && ">" === t ? (u = 1, e = "") : e = t + e[0] : p ? t === p ? p = "" : e += t : '"' === t || "'" === t ? p = t : ">" === t ? (h(), u = 1) : u && ("=" === t ? (u = 5, r = e, e = "") : "/" === t && (u < 5 || ">" === n[a][f + 1]) ? (h(), 3 === u && (s = s[0]), u = s, (s = s[0]).push(u, 2), u = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (h(), u = 2) : e += t), 3 === u && "!--" === e && (u = 4, s = s[0]);
  }

  return h(), s;
},
    r = "function" == typeof Map,
    u = r ? new Map() : {},
    e = r ? function (n) {
  var r = u.get(n);
  return r || u.set(n, r = t(n)), r;
} : function (n) {
  for (var r = "", e = 0; e < n.length; e++) r += n[e].length + "-" + n[e];

  return u[r] || (u[r] = t(n));
};

function _default(t) {
  var r = n(this, e(t), arguments, []);
  return r.length > 1 ? r : r[0];
}
},{}],"node_modules/htm/preact/index.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = m;
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function () {
    return _preact.h;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
exports.html = void 0;

var _preact = require("preact");

var _htm = _interopRequireDefault(require("htm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function m(r, t) {
  (0, _preact.render)(r, t, t.firstElementChild);
}

var n = _htm.default.bind(_preact.h);

exports.html = n;
},{"preact":"node_modules/preact/dist/preact.module.js","htm":"node_modules/htm/dist/htm.module.js"}],"node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = v;
exports.useReducer = m;
exports.useEffect = p;
exports.useLayoutEffect = l;
exports.useRef = d;
exports.useImperativeHandle = s;
exports.useMemo = y;
exports.useCallback = T;
exports.useContext = w;
exports.useDebugValue = A;

var _preact = require("preact");

var t,
    u,
    r,
    i = [],
    o = _preact.options.__r,
    f = _preact.options.diffed,
    c = _preact.options.__c,
    e = _preact.options.unmount;

function a(t) {
  _preact.options.__h && _preact.options.__h(u);
  var r = u.__H || (u.__H = {
    t: [],
    u: []
  });
  return t >= r.t.length && r.t.push({}), r.t[t];
}

function v(n) {
  return m(x, n);
}

function m(n, r, i) {
  var o = a(t++);
  return o.__c || (o.__c = u, o.i = [i ? i(r) : x(void 0, r), function (t) {
    var u = n(o.i[0], t);
    o.i[0] !== u && (o.i[0] = u, o.__c.setState({}));
  }]), o.i;
}

function p(n, r) {
  var i = a(t++);
  q(i.o, r) && (i.i = n, i.o = r, u.__H.u.push(i));
}

function l(n, r) {
  var i = a(t++);
  q(i.o, r) && (i.i = n, i.o = r, u.__h.push(i));
}

function d(n) {
  return y(function () {
    return {
      current: n
    };
  }, []);
}

function s(n, t, u) {
  l(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function y(n, u) {
  var r = a(t++);
  return q(r.o, u) ? (r.o = u, r.v = n, r.i = n()) : r.i;
}

function T(n, t) {
  return y(function () {
    return n;
  }, t);
}

function w(n) {
  var r = u.context[n.__c];
  if (!r) return n.__;
  var i = a(t++);
  return null == i.i && (i.i = !0, r.sub(u)), r.props.value;
}

function A(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function F() {
  i.some(function (n) {
    n.__P && (n.__H.u.forEach(_), n.__H.u.forEach(g), n.__H.u = []);
  }), i = [];
}

function _(n) {
  n.m && n.m();
}

function g(n) {
  var t = n.i();
  "function" == typeof t && (n.m = t);
}

function q(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function x(n, t) {
  return "function" == typeof t ? t(n) : t;
}

_preact.options.__r = function (n) {
  o && o(n), t = 0, (u = n.__c).__H && (u.__H.u.forEach(_), u.__H.u.forEach(g), u.__H.u = []);
}, _preact.options.diffed = function (t) {
  f && f(t);
  var u = t.__c;

  if (u) {
    var o = u.__H;
    o && o.u.length && (1 !== i.push(u) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
      var t,
          u = function () {
        clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
      },
          r = setTimeout(u, 100);

      "undefined" != typeof window && (t = requestAnimationFrame(u));
    })(F));
  }
}, _preact.options.__c = function (n, t) {
  t.some(function (n) {
    n.__h.forEach(_), n.__h = n.__h.filter(function (n) {
      return !n.i || g(n);
    });
  }), c && c(n, t);
}, _preact.options.unmount = function (n) {
  e && e(n);
  var t = n.__c;

  if (t) {
    var u = t.__H;
    u && u.t.forEach(function (n) {
      return n.m && n.m();
    });
  }
};
},{"preact":"node_modules/preact/dist/preact.module.js"}],"build/context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("preact");
/* Setup */
// initial context object


exports.init = {
  state: undefined,
  dispatch: function dispatch(action) {
    action;
  }
}; // initialize context object

exports.ctx = preact_1.createContext(exports.init); // Export the bare consumer
// This allows users to access the store wihtout an HOC or Hooks

exports.Consumer = exports.ctx.Consumer; // Store

exports.createStore = function (reducer) {
  var middleware = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    middleware[_i - 1] = arguments[_i];
  } // Grab initial state from reducer


  var initialState = reducer(undefined, {}); // return composed store object

  return {
    reducer: reducer,
    initialState: initialState,
    middleware: middleware
  };
};
},{"preact":"node_modules/preact/dist/preact.module.js"}],"build/hooks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hooks_1 = require("preact/hooks");

var context_1 = require("./context");
/* Hooks */
// State


exports.useSelector = function (select) {
  // Grab state from context provider
  var state = hooks_1.useContext(context_1.ctx).state; // Pass state to selector function

  return select(state);
}; // Dispatch


exports.useDispatch = function () {
  // Grab dispatch from context provider
  var dispatch = hooks_1.useContext(context_1.ctx).dispatch;
  return dispatch;
};
},{"preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","./context":"build/context.js"}],"build/connect.js":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("preact");

var context_1 = require("./context"); // Helper function to wrap action creators to be used as props


var wrapActions = function wrapActions(actions, dispatch) {
  if (actions === void 0) {
    actions = {};
  }

  var actionEntries = Object.entries(actions);
  var wrappedActions = actionEntries.reduce(function (acc, _a) {
    var _b;

    var actionName = _a[0],
        actionCreator = _a[1];
    return __assign(__assign({}, acc), (_b = {}, _b[actionName] = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var action = actionCreator.apply(void 0, args);
      dispatch(action);
    }, _b));
  }, {});
  return wrappedActions;
}; // HOC for connecting components to context


exports.connect = function (selector, actions) {
  if (selector === void 0) {
    selector = function selector(state) {
      return {
        state: state
      };
    };
  }

  if (actions === void 0) {
    actions = {};
  }

  return function (component) {
    return function () {
      return preact_1.h(context_1.Consumer, {
        children: function children(_a) {
          var state = _a.state,
              dispatch = _a.dispatch; // Get state from selector function

          var selectedState = selector(state); // Wrap actions to attach context

          var wrappedActions = wrapActions(actions, dispatch);
          return preact_1.h(component, __assign(__assign(__assign({}, selectedState), wrappedActions), {
            dispatch: dispatch
          }));
        }
      });
    };
  };
};
},{"preact":"node_modules/preact/dist/preact.module.js","./context":"build/context.js"}],"build/provider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("preact");

var hooks_1 = require("preact/hooks");

var context_1 = require("./context");

var middlewareReducer = function middlewareReducer(reducer, middleware, newState, action) {
  return function (prevState) {
    return middleware.reduce(function (newState, mw) {
      var ctx = {
        newState: newState,
        prevState: prevState,
        action: action,
        reducer: reducer
      };
      return mw(ctx);
    }, newState);
  };
};

exports.useStore = function (_a) {
  var reducer = _a.reducer,
      initialState = _a.initialState,
      middleware = _a.middleware; // this is where the state lives

  var _b = hooks_1.useState(initialState),
      state = _b[0],
      setState = _b[1]; // This the action dispatcher
  // actions passed in should either be an async action creator or an object containing the action


  var dispatch = function dispatch(action) {
    // catches async creators
    if (typeof action === 'function') {
      // passes this function into an async creator
      // this gives the creator the ability to call actions after resolution
      action(dispatch);
    } else {
      // pass action to reducer
      var newState = reducer(state, action);
      /*
          this is the argument for the StateUpdater call.
          if the user has supplied middleware this will generate a middleware reducer function.
          if no middleware is provided the updater will just resolve to the result of the reducer
      */

      var stateUpdate = middleware.length ? middlewareReducer(reducer, middleware, newState, action) : newState; // update the state

      setState(stateUpdate);
    }
  }; // Compose and return the context object


  return {
    state: state,
    dispatch: dispatch
  };
}; // Provider component


exports.Provider = function (_a) {
  var children = _a.children,
      store = _a.store; // state is not shared between providers

  var value = exports.useStore(store);
  return preact_1.h(context_1.ctx.Provider, {
    value: value,
    children: children
  });
};
},{"preact":"node_modules/preact/dist/preact.module.js","preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","./context":"build/context.js"}],"build/combine-reducers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.combineReducers = function (reducerObject) {
  // create an array of reducer entries [key, reducer] from the users supplied ReducerObject
  var reducers = Object.entries(reducerObject); // create a new reducer funtion

  var composedReducer = function composedReducer(state, action) {
    if (state === void 0) {
      state = undefined;
    }

    if (action === void 0) {
      action = {};
    } // map reducer entries to state entries [key, state]


    var stateEntries = reducers.map(function (_a) {
      var key = _a[0],
          reducer = _a[1];
      return [key, reducer(state === null || state === void 0 ? void 0 : state[key], action)];
    }); // create & return a state object from the state entries

    return Object.fromEntries(stateEntries);
  }; // return the new reducer function


  return composedReducer;
};
},{}],"build/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
},{"./hooks":"build/hooks.js","./context":"build/context.js","./connect":"build/connect.js","./provider":"build/provider.js","./combine-reducers":"build/combine-reducers.js"}],"build/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.logger = function (ctx) {
  console.log('previous state', ctx.prevState);
  console.log('dispatched action', ctx.action);
  console.log('resulting state', ctx.newState);
  return ctx.newState;
};
},{}],"demo.ts":[function(require,module,exports) {
"use strict";

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("htm/preact");

var build_1 = require("./build");

var logger_1 = require("./build/logger"); // Reducer Function


var reducer = function reducer(state, action) {
  if (state === void 0) {
    state = {
      count: 0
    };
  }

  switch (action.type) {
    case 'increment_delay':
      return __assign(__assign({}, state), {
        waiting: true
      });

    case 'increment':
      return __assign(__assign({}, state), {
        count: state.count + 1,
        waiting: false
      });

    default:
      return state;
  }
}; // Action Creator


var delayIncrement = function delayIncrement(count) {
  return function (dispatch) {
    var factor = count / 10;
    dispatch({
      type: 'increment_delay'
    });
    setTimeout(function () {
      return dispatch({
        type: 'increment'
      });
    }, count * factor * 100);
    /* = 10n^2 */
  };
};

var newreducer = build_1.combineReducers({
  counter: reducer
});
var store = build_1.createStore(newreducer, logger_1.logger); // Hooks component

var Counter = function Counter() {
  var state = build_1.useSelector(function (state) {
    return state.counter;
  });
  console.log(state);
  var dispatch = build_1.useDispatch();

  var handleIncrement = function handleIncrement() {
    return !state.waiting && dispatch({
      type: 'increment'
    });
  };

  var handleIncrementDelay = function handleIncrementDelay() {
    return !state.waiting && dispatch(delayIncrement(state.count));
  };

  return preact_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        ", "\n        <button onclick=", ">\n            ", "\n        </button>\n        <button onclick=", ">\n            ", "\n        </button>\n    "], ["\n        ", "\n        <button onclick=", ">\n            ", "\n        </button>\n        <button onclick=", ">\n            ", "\n        </button>\n    "])), state.count, handleIncrement, state.waiting ? 'wait...' : '+1', handleIncrementDelay, state.waiting ? 'wait...' : '+1 w/ delay');
}; // HOC Version


var CounterConnect = build_1.connect(function (state) {
  return {
    state: state.counter
  };
}, {
  delayIncrement: delayIncrement
})(function (_a) {
  var state = _a.state,
      dispatch = _a.dispatch,
      delayIncrement = _a.delayIncrement;

  var handleIncrement = function handleIncrement() {
    return !state.waiting && dispatch({
      type: 'increment'
    });
  };

  var handleIncrementDelay = function handleIncrementDelay() {
    return !state.waiting && delayIncrement(state.count);
  };

  return preact_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            ", "\n            <button onclick=", ">\n                ", "\n            </button>\n            <button onclick=", ">\n                ", "\n            </button>\n        "], ["\n            ", "\n            <button onclick=", ">\n                ", "\n            </button>\n            <button onclick=", ">\n                ", "\n            </button>\n        "])), state.count, handleIncrement, state.waiting ? 'wait...' : '+1', handleIncrementDelay, state.waiting ? 'wait...' : '+1 w/ delay');
});

var App = function App() {
  return preact_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        <", " store=", ">\n            <", " />\n        <//>\n        <", " store=", ">\n            <", " />\n        <//>\n    "], ["\n        <", " store=", ">\n            <", " />\n        <//>\n        <", " store=", ">\n            <", " />\n        <//>\n    "])), build_1.Provider, store, Counter, build_1.Provider, store, CounterConnect);
};

preact_1.render(preact_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        <", " />\n    "], ["\n        <", " />\n    "])), App), document.getElementById('app') || document.body);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
},{"htm/preact":"node_modules/htm/preact/index.module.js","./build":"build/index.js","./build/logger":"build/logger.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50919" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","demo.ts"], null)
//# sourceMappingURL=/demo.56710ae6.js.map