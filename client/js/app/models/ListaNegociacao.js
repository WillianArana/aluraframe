"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _negociacoes, _volumeTotal, _direcoes, _obterDirecao, ListaNegociacao;
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
  function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
  function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
  function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
  function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
  function _obterDirecao2(item) {
    var direcao = _classPrivateFieldGet(this, _direcoes).get(item);
    _classPrivateFieldGet(this, _direcoes).set(item, direcao * -1);
    return direcao;
  }
  return {
    setters: [],
    execute: function () {
      _negociacoes = /*#__PURE__*/new WeakMap();
      _volumeTotal = /*#__PURE__*/new WeakMap();
      _direcoes = /*#__PURE__*/new WeakMap();
      _obterDirecao = /*#__PURE__*/new WeakSet();
      _export("ListaNegociacao", ListaNegociacao = /*#__PURE__*/function () {
        function ListaNegociacao() {
          _classCallCheck(this, ListaNegociacao);
          _classPrivateMethodInitSpec(this, _obterDirecao);
          _classPrivateFieldInitSpec(this, _negociacoes, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _volumeTotal, {
            writable: true,
            value: 0.0
          });
          _classPrivateFieldInitSpec(this, _direcoes, {
            writable: true,
            value: new Map([['data', 1], ['quantidade', 1], ['valor', 1], ['volume', 1]])
          });
          _classPrivateFieldSet(this, _negociacoes, []);
        }
        _createClass(ListaNegociacao, [{
          key: "negociacoes",
          get: function get() {
            return _toConsumableArray(_classPrivateFieldGet(this, _negociacoes));
          }
        }, {
          key: "volumeTotal",
          get: function get() {
            return _classPrivateFieldGet(this, _volumeTotal);
          }
        }, {
          key: "adiciona",
          value: function adiciona() {
            var _classPrivateFieldGet2;
            for (var _len = arguments.length, negociacao = new Array(_len), _key = 0; _key < _len; _key++) {
              negociacao[_key] = arguments[_key];
            }
            (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _negociacoes)).push.apply(_classPrivateFieldGet2, negociacao);
            _classPrivateFieldSet(this, _volumeTotal, _classPrivateFieldGet(this, _volumeTotal) + negociacao.reduce(function (p, c) {
              return p + c.volume;
            }, 0));
          }
        }, {
          key: "esvazia",
          value: function esvazia() {
            _classPrivateFieldSet(this, _negociacoes, []);
            _classPrivateFieldSet(this, _volumeTotal, 0);
          }
        }, {
          key: "ordenarPor",
          value: function ordenarPor(item) {
            var direcao = _classPrivateMethodGet(this, _obterDirecao, _obterDirecao2).call(this, item);
            _classPrivateFieldSet(this, _negociacoes, _classPrivateFieldGet(this, _negociacoes).sort(function (a, b) {
              return direcao * (a[item] < b[item] ? -1 : Number(a[item] > b[item]));
            }));
          }
        }]);
        return ListaNegociacao;
      }());
    }
  };
});
//# sourceMappingURL=ListaNegociacao.js.map