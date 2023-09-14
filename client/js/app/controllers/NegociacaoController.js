"use strict";

System.register(["../views/MensagemView.js", "../views/NegociacaoView.js", "../helpers/Bind.js", "../helpers/DateConverter.js", "../models/Mensagem.js", "../models/ListaNegociacao.js", "../services/NegociacaoService.js"], function (_export, _context) {
  "use strict";

  var MensagemView, NegociacaoView, Bind, DateConverter, Mensagem, ListaNegociacao, NegociacaoService, _carregarNegociacoesDoDatabase3, _inputData, _inputQuantidade, _inputValor, _listaNegociacoes, _mensagem, _service, _onInit, _carregarNegociacoesDoDatabase, _importarAutomaticamente, _limpaFormulario, NegociacaoController;
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function (t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function (t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function (e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function (t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function (e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
  function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
  function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
  function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
  function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
  function _onInit2() {
    var $ = document.querySelector.bind(document);
    _classPrivateFieldSet(this, _inputData, $('#data'));
    _classPrivateFieldSet(this, _inputQuantidade, $('#quantidade'));
    _classPrivateFieldSet(this, _inputValor, $('#valor'));
    _classPrivateFieldSet(this, _mensagem, new Bind(new Mensagem(), new MensagemView($('#mensagem')), 'texto'));
    _classPrivateFieldSet(this, _listaNegociacoes, new Bind(new ListaNegociacao(), new NegociacaoView($('#negociacao')), 'adiciona', 'esvazia', 'ordenarPor'));
    _classPrivateMethodGet(this, _carregarNegociacoesDoDatabase, _carregarNegociacoesDoDatabase2).call(this);
    _classPrivateMethodGet(this, _importarAutomaticamente, _importarAutomaticamente2).call(this);
  }
  function _carregarNegociacoesDoDatabase2() {
    return (_carregarNegociacoesDoDatabase3 = _carregarNegociacoesDoDatabase3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _classPrivateFieldGet3;
      var negociacoes;
      return _regeneratorRuntime().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _classPrivateFieldGet(this, _service).listaTodos();
          case 2:
            negociacoes = _context5.sent;
            (_classPrivateFieldGet3 = _classPrivateFieldGet(this, _listaNegociacoes)).adiciona.apply(_classPrivateFieldGet3, _toConsumableArray(negociacoes));
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee4, this);
    }))).apply(this, arguments);
  }
  function _importarAutomaticamente2() {
    var _this2 = this;
    setInterval(function () {
      _this2.importa();
    }, 3000);
  }
  function _limpaFormulario2() {
    _classPrivateFieldGet(this, _inputData).value = '';
    _classPrivateFieldGet(this, _inputQuantidade).value = 1;
    _classPrivateFieldGet(this, _inputValor).value = 0;
  }
  return {
    setters: [function (_viewsMensagemViewJs) {
      MensagemView = _viewsMensagemViewJs.MensagemView;
    }, function (_viewsNegociacaoViewJs) {
      NegociacaoView = _viewsNegociacaoViewJs.NegociacaoView;
    }, function (_helpersBindJs) {
      Bind = _helpersBindJs.Bind;
    }, function (_helpersDateConverterJs) {
      DateConverter = _helpersDateConverterJs.DateConverter;
    }, function (_modelsMensagemJs) {
      Mensagem = _modelsMensagemJs.Mensagem;
    }, function (_modelsListaNegociacaoJs) {
      ListaNegociacao = _modelsListaNegociacaoJs.ListaNegociacao;
    }, function (_servicesNegociacaoServiceJs) {
      NegociacaoService = _servicesNegociacaoServiceJs.NegociacaoService;
    }],
    execute: function () {
      _inputData = /*#__PURE__*/new WeakMap();
      _inputQuantidade = /*#__PURE__*/new WeakMap();
      _inputValor = /*#__PURE__*/new WeakMap();
      _listaNegociacoes = /*#__PURE__*/new WeakMap();
      _mensagem = /*#__PURE__*/new WeakMap();
      _service = /*#__PURE__*/new WeakMap();
      _onInit = /*#__PURE__*/new WeakSet();
      _carregarNegociacoesDoDatabase = /*#__PURE__*/new WeakSet();
      _importarAutomaticamente = /*#__PURE__*/new WeakSet();
      _limpaFormulario = /*#__PURE__*/new WeakSet();
      NegociacaoController = /*#__PURE__*/function (_adiciona, _apaga, _importa) {
        function NegociacaoController() {
          var _this = this;
          _classCallCheck(this, NegociacaoController);
          _classPrivateMethodInitSpec(this, _limpaFormulario);
          _classPrivateMethodInitSpec(this, _importarAutomaticamente);
          _classPrivateMethodInitSpec(this, _carregarNegociacoesDoDatabase);
          _classPrivateMethodInitSpec(this, _onInit);
          _classPrivateFieldInitSpec(this, _inputData, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _inputQuantidade, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _inputValor, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _listaNegociacoes, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _mensagem, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _service, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldSet(this, _service, new NegociacaoService());
          window.addEventListener('load', function () {
            _classPrivateMethodGet(_this, _onInit, _onInit2).call(_this);
          });
        }
        _createClass(NegociacaoController, [{
          key: "data",
          get: function get() {
            return DateConverter.textoParaData(_classPrivateFieldGet(this, _inputData).value);
          }
        }, {
          key: "quantidade",
          get: function get() {
            return _classPrivateFieldGet(this, _inputQuantidade).value;
          }
        }, {
          key: "valor",
          get: function get() {
            return _classPrivateFieldGet(this, _inputValor).value;
          }
        }, {
          key: "adiciona",
          value: function adiciona(_x) {
            return (_adiciona = _adiciona || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(evento) {
              var negociacao;
              return _regeneratorRuntime().wrap(function _callee$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    evento.preventDefault();
                    _context2.next = 3;
                    return _classPrivateFieldGet(this, _service).cadastra(this);
                  case 3:
                    negociacao = _context2.sent;
                    _classPrivateFieldGet(this, _listaNegociacoes).adiciona(negociacao);
                    _classPrivateMethodGet(this, _limpaFormulario, _limpaFormulario2).call(this);
                    _classPrivateFieldGet(this, _inputData).focus();
                    _classPrivateFieldGet(this, _mensagem).texto = 'Negociação adicionada com sucesso';
                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }, _callee, this);
            }))).apply(this, arguments);
          }
        }, {
          key: "apaga",
          value: function apaga() {
            return (_apaga = _apaga || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return _classPrivateFieldGet(this, _service).apagarTodos();
                  case 3:
                    _classPrivateFieldGet(this, _listaNegociacoes).esvazia();
                    _classPrivateFieldGet(this, _mensagem).texto = 'Negociações apagadas com sucesso';
                    _context3.next = 11;
                    break;
                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    console.error(_context3.t0);
                    _classPrivateFieldGet(this, _mensagem).texto = 'Não foi possível apagar negociações';
                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }, _callee2, this, [[0, 7]]);
            }))).apply(this, arguments);
          }
        }, {
          key: "ordenarPor",
          value: function ordenarPor(evento, item) {
            evento.stopPropagation();
            evento.preventDefault();
            _classPrivateFieldGet(this, _listaNegociacoes).ordenarPor(item);
          }
        }, {
          key: "importa",
          value: function importa() {
            return (_importa = _importa || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _classPrivateFieldGet2, negociacoesExistentes, negociacoes;
              return _regeneratorRuntime().wrap(function _callee3$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    negociacoesExistentes = _classPrivateFieldGet(this, _listaNegociacoes).negociacoes;
                    _context4.next = 4;
                    return _classPrivateFieldGet(this, _service).importa(negociacoesExistentes);
                  case 4:
                    negociacoes = _context4.sent;
                    (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _listaNegociacoes)).adiciona.apply(_classPrivateFieldGet2, _toConsumableArray(negociacoes));
                    _classPrivateFieldGet(this, _mensagem).texto = 'Negociações importadas com sucesso';
                    _context4.next = 13;
                    break;
                  case 9:
                    _context4.prev = 9;
                    _context4.t0 = _context4["catch"](0);
                    console.log(_context4.t0);
                    _classPrivateFieldGet(this, _mensagem).texto = 'Não foi possível obter as negociações';
                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }, _callee3, this, [[0, 9]]);
            }))).apply(this, arguments);
          }
        }]);
        return NegociacaoController;
      }();
      _export("default", new NegociacaoController());
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map