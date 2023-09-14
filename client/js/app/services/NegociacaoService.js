"use strict";

System.register(["../dao/NegociacaoDAO.js", "../helpers/NegociacaoDTO.js", "../models/Negociacao.js", "./ConnectionFactory.js"], function (_export, _context) {
  "use strict";

  var NegociacaoDAO, NegociacaoDTO, Negociacao, ConnectionFactory, _obterNegociacoes3, _obterNegociacoes, NegociacaoService;
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function (t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function (t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function (e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function (t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function (e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
  function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(r) { var n = this.s["return"]; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, "throw": function _throw(r) { var n = this.s["return"]; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }
  function _obterNegociacoes2(_x3) {
    return (_obterNegociacoes3 = _obterNegociacoes3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(url) {
      var response, negociacoes;
      return _regeneratorRuntime().wrap(function _callee8$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return fetch(url);
          case 2:
            response = _context10.sent;
            if (response.ok) {
              _context10.next = 5;
              break;
            }
            throw new Error(response.statusText);
          case 5:
            _context10.next = 7;
            return response.json();
          case 7:
            negociacoes = _context10.sent;
            return _context10.abrupt("return", negociacoes.map(function (n) {
              return new NegociacaoDTO(n);
            }));
          case 9:
          case "end":
            return _context10.stop();
        }
      }, _callee8);
    }))).apply(this, arguments);
  }
  return {
    setters: [function (_daoNegociacaoDAOJs) {
      NegociacaoDAO = _daoNegociacaoDAOJs.NegociacaoDAO;
    }, function (_helpersNegociacaoDTOJs) {
      NegociacaoDTO = _helpersNegociacaoDTOJs.NegociacaoDTO;
    }, function (_modelsNegociacaoJs) {
      Negociacao = _modelsNegociacaoJs.Negociacao;
    }, function (_ConnectionFactoryJs) {
      ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
    }],
    execute: function () {
      _obterNegociacoes = /*#__PURE__*/new WeakSet();
      _export("NegociacaoService", NegociacaoService = /*#__PURE__*/function (_cadastra, _apagarTodos, _listaTodos, _importa, _obterNegociacoesDaSemana, _obterNegociacoesDaSemanaAnterior, _obterNegociacoesDaSemanaRetrasada) {
        function NegociacaoService() {
          _classCallCheck(this, NegociacaoService);
          _classPrivateMethodInitSpec(this, _obterNegociacoes);
        }
        _createClass(NegociacaoService, [{
          key: "cadastra",
          value: function cadastra(_x) {
            return (_cadastra = _cadastra || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(negociacao) {
              var connection, negociacaoDAO;
              return _regeneratorRuntime().wrap(function _callee$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return ConnectionFactory.getConnection();
                  case 2:
                    connection = _context2.sent;
                    negociacaoDAO = new NegociacaoDAO(connection);
                    negociacao = new Negociacao(negociacao.data, negociacao.quantidade, negociacao.valor);
                    _context2.next = 7;
                    return negociacaoDAO.adiciona(negociacao);
                  case 7:
                    return _context2.abrupt("return", negociacao);
                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }, _callee);
            }))).apply(this, arguments);
          }
        }, {
          key: "apagarTodos",
          value: function apagarTodos() {
            return (_apagarTodos = _apagarTodos || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var connection, negociacaoDAO;
              return _regeneratorRuntime().wrap(function _callee2$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return ConnectionFactory.getConnection();
                  case 2:
                    connection = _context3.sent;
                    negociacaoDAO = new NegociacaoDAO(connection);
                    return _context3.abrupt("return", negociacaoDAO.apagarTodos());
                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee2);
            }))).apply(this, arguments);
          }
        }, {
          key: "listaTodos",
          value: function listaTodos() {
            return (_listaTodos = _listaTodos || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var connection, negociacaoDAO;
              return _regeneratorRuntime().wrap(function _callee3$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return ConnectionFactory.getConnection();
                  case 2:
                    connection = _context4.sent;
                    negociacaoDAO = new NegociacaoDAO(connection);
                    return _context4.abrupt("return", negociacaoDAO.listaTodos());
                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee3);
            }))).apply(this, arguments);
          }
        }, {
          key: "importa",
          value: function importa(_x2) {
            return (_importa = _importa || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(listaAtual) {
              var _this = this;
              var resquests, negociacoes, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, request, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _loop, _iterator2, _step2;
              return _regeneratorRuntime().wrap(function _callee4$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Promise.all([this.obterNegociacoesDaSemana(), this.obterNegociacoesDaSemanaAnterior(), this.obterNegociacoesDaSemanaRetrasada()]);
                  case 2:
                    resquests = _context6.sent;
                    negociacoes = [];
                    _iteratorAbruptCompletion = false;
                    _didIteratorError = false;
                    _context6.prev = 6;
                    _iterator = _asyncIterator(resquests);
                  case 8:
                    _context6.next = 10;
                    return _iterator.next();
                  case 10:
                    if (!(_iteratorAbruptCompletion = !(_step = _context6.sent).done)) {
                      _context6.next = 45;
                      break;
                    }
                    request = _step.value;
                    _iteratorAbruptCompletion2 = false;
                    _didIteratorError2 = false;
                    _context6.prev = 14;
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                      var negociacao;
                      return _regeneratorRuntime().wrap(function _loop$(_context5) {
                        while (1) switch (_context5.prev = _context5.next) {
                          case 0:
                            negociacao = _step2.value;
                            negociacao = new NegociacaoDTO(negociacao);
                            if (!listaAtual.some(function (n) {
                              return n.isEquals(negociacao);
                            })) {
                              _context5.next = 4;
                              break;
                            }
                            return _context5.abrupt("return", 1);
                          case 4:
                            _context5.next = 6;
                            return _this.cadastra(negociacao);
                          case 6:
                            negociacao = _context5.sent;
                            negociacoes.push(negociacao);
                          case 8:
                          case "end":
                            return _context5.stop();
                        }
                      }, _loop);
                    });
                    _iterator2 = _asyncIterator(request);
                  case 17:
                    _context6.next = 19;
                    return _iterator2.next();
                  case 19:
                    if (!(_iteratorAbruptCompletion2 = !(_step2 = _context6.sent).done)) {
                      _context6.next = 26;
                      break;
                    }
                    return _context6.delegateYield(_loop(), "t0", 21);
                  case 21:
                    if (!_context6.t0) {
                      _context6.next = 23;
                      break;
                    }
                    return _context6.abrupt("continue", 23);
                  case 23:
                    _iteratorAbruptCompletion2 = false;
                    _context6.next = 17;
                    break;
                  case 26:
                    _context6.next = 32;
                    break;
                  case 28:
                    _context6.prev = 28;
                    _context6.t1 = _context6["catch"](14);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context6.t1;
                  case 32:
                    _context6.prev = 32;
                    _context6.prev = 33;
                    if (!(_iteratorAbruptCompletion2 && _iterator2["return"] != null)) {
                      _context6.next = 37;
                      break;
                    }
                    _context6.next = 37;
                    return _iterator2["return"]();
                  case 37:
                    _context6.prev = 37;
                    if (!_didIteratorError2) {
                      _context6.next = 40;
                      break;
                    }
                    throw _iteratorError2;
                  case 40:
                    return _context6.finish(37);
                  case 41:
                    return _context6.finish(32);
                  case 42:
                    _iteratorAbruptCompletion = false;
                    _context6.next = 8;
                    break;
                  case 45:
                    _context6.next = 51;
                    break;
                  case 47:
                    _context6.prev = 47;
                    _context6.t2 = _context6["catch"](6);
                    _didIteratorError = true;
                    _iteratorError = _context6.t2;
                  case 51:
                    _context6.prev = 51;
                    _context6.prev = 52;
                    if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                      _context6.next = 56;
                      break;
                    }
                    _context6.next = 56;
                    return _iterator["return"]();
                  case 56:
                    _context6.prev = 56;
                    if (!_didIteratorError) {
                      _context6.next = 59;
                      break;
                    }
                    throw _iteratorError;
                  case 59:
                    return _context6.finish(56);
                  case 60:
                    return _context6.finish(51);
                  case 61:
                    return _context6.abrupt("return", negociacoes);
                  case 62:
                  case "end":
                    return _context6.stop();
                }
              }, _callee4, this, [[6, 47, 51, 61], [14, 28, 32, 42], [33,, 37, 41], [52,, 56, 60]]);
            }))).apply(this, arguments);
          }
        }, {
          key: "obterNegociacoesDaSemana",
          value: function obterNegociacoesDaSemana() {
            return (_obterNegociacoesDaSemana = _obterNegociacoesDaSemana || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var url;
              return _regeneratorRuntime().wrap(function _callee5$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    url = 'negociacoes/semana';
                    return _context7.abrupt("return", _classPrivateMethodGet(this, _obterNegociacoes, _obterNegociacoes2).call(this, url));
                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }, _callee5, this);
            }))).apply(this, arguments);
          }
        }, {
          key: "obterNegociacoesDaSemanaAnterior",
          value: function obterNegociacoesDaSemanaAnterior() {
            return (_obterNegociacoesDaSemanaAnterior = _obterNegociacoesDaSemanaAnterior || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var url;
              return _regeneratorRuntime().wrap(function _callee6$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    url = 'negociacoes/anterior';
                    return _context8.abrupt("return", _classPrivateMethodGet(this, _obterNegociacoes, _obterNegociacoes2).call(this, url));
                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }, _callee6, this);
            }))).apply(this, arguments);
          }
        }, {
          key: "obterNegociacoesDaSemanaRetrasada",
          value: function obterNegociacoesDaSemanaRetrasada() {
            return (_obterNegociacoesDaSemanaRetrasada = _obterNegociacoesDaSemanaRetrasada || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var url;
              return _regeneratorRuntime().wrap(function _callee7$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    url = 'negociacoes/retrasada';
                    return _context9.abrupt("return", _classPrivateMethodGet(this, _obterNegociacoes, _obterNegociacoes2).call(this, url));
                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }, _callee7, this);
            }))).apply(this, arguments);
          }
        }]);
        return NegociacaoService;
      }());
    }
  };
});
//# sourceMappingURL=NegociacaoService.js.map